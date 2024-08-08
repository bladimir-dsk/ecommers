import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile) private readonly profilerepository: Repository<Profile>
  ){}
  create(createProfileDto: CreateProfileDto) {
    const profile = this.profilerepository.create(createProfileDto)
    return this.profilerepository.save(profile)
  }

  findAll() {
    return this.profilerepository.find()
  }

  findOne(id: number) {
    return this.profilerepository.findOneBy({id})
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
      const profile = await this.profilerepository.findOne({where: {id: id}})
     return this.profilerepository.update(id, {...updateProfileDto })

  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
