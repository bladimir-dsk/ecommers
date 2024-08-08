import { Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Register } from './entities/register.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterService {
  constructor(@InjectRepository(Register) private readonly repoRegister: Repository<Register>){}
  async create(createRegisterDto: CreateRegisterDto) {
    const create = this.repoRegister.create(createRegisterDto)
    return this.repoRegister.save(create)
  }

  findAll() {
    return this.repoRegister.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} register`;
  }

  update(id: number, updateRegisterDto: UpdateRegisterDto) {
    return `This action updates a #${id} register`;
  }

  remove(id: number) {
    return `This action removes a #${id} register`;
  }
}
