import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {

  constructor(@InjectRepository(Message) private readonly messageRepository: Repository<Message>)
  {}
  create(createMessageDto: CreateMessageDto) {
    const message = this.messageRepository.create(createMessageDto)
    return this.messageRepository.save(message)
  }

  findAll() {
    return this.messageRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
