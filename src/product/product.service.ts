import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { diffieHellman } from 'crypto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly produc: Repository<Product>,
  ) {}

  //** crear un nuevo producto
  async saveImage(file: Express.Multer.File, createProductDto: CreateProductDto): Promise<Product> {
    const newImage = this.produc.create({
      ...createProductDto,
      filename: file.originalname,
      path: file.path,
      mimetype: file.mimetype,
    });
    return this.produc.save(newImage);
  }

  // ? filtrar productos por id
  async findImage(id: number): Promise<Product> {
    const image = await this.produc.findOne({ where: { id } });
    if (!image) {
      throw new NotFoundException(`Image with ID ${id} not found`);
    }
    return image;
  }
  // ? filtrar todos los productos que existen
  findAll() {
    return this.produc.find();
  }
  // todo: actualizar el producto
  async updateImage(
    id: number,
    file: Express.Multer.File,
    name?: string,
  ): Promise<Product> {
    const image = await this.findImage(id);

    if (file) {
      image.filename = file.originalname;
      image.path = file.path;
      image.mimetype = file.mimetype;
    }

    if (name) {
      image.name = name;
    }

    return this.produc.save(image);
  }
  // ! eliminar el producto
  async deleteImage(id: number) {
    const image = await this.findImage(id);
    await this.produc.remove(image);
  }
}
