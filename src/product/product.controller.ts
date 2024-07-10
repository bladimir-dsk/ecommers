import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Response } from 'express';
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() createProductDto: CreateProductDto,
  ) {
  
    const savedImage = await this.productService.saveImage(file, createProductDto);
    return savedImage;
  }
  @Patch('update/:id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async updateFile(
    @Param('id') id: number,
    @UploadedFile() file: Express.Multer.File,
    @Body('name') name: string,
    @Body('price') price: number,
  ) {
    const updatedImage = await this.productService.updateImage(id, file, name);
    return updatedImage;
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }
  @Get(':id')
  async getImage(@Param('id') id: number, @Res() res: Response) {
    const image = await this.productService.findImage(id);
    res.sendFile(image.path, { root: './' });
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productService.deleteImage(+id);
  }
}
