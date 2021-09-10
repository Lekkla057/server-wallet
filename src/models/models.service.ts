import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';
import {
  accout,
  transection,
  parameterTransectionHistory,
  type,
} from './models.entity';

@Injectable()
export class ModelsService {
  constructor(
    @InjectRepository(accout)
    private readonly accoutRepository: Repository<accout>,
    @InjectRepository(transection)
    private readonly transectionRepository: Repository<transection>,
  ) {}

  async createOrUpdate(accout: accout): Promise<accout> {
    return await this.accoutRepository.save(accout);
  }

  async findOne(id: number): Promise<accout> {
    return await this.accoutRepository.findOne({ id: id });
  }

  async findAll(): Promise<accout[]> {
    return await this.accoutRepository.find();
  }

  async delete(id: number): Promise<any> {
    return await this.accoutRepository.delete({ id: id });
  }

  async createOrUpdatetransection(
    Transection: transection,
  ): Promise<transection> {
    return await this.transectionRepository.save(Transection);
  }
  async createOrUpdatet(accout: transection): Promise<transection> {
    return await this.transectionRepository.save(accout);
  }
  async findOnetransection(id: number): Promise<transection> {
    return await this.transectionRepository.findOne({ id: id });
  }

  async findAlltransection(): Promise<transection[]> {
    return await this.transectionRepository.find();
  }
  async findAllbytransection(id: number): Promise<transection[]> {
    const data = await this.transectionRepository
      .createQueryBuilder('transection')
      .select('*')
      .where('accoutId=' + id)
      .getMany();

    return data;
  }
  async deletetransection(id: number): Promise<any> {
    return await this.transectionRepository.delete({ id: id });
  }
  async findAlltransectionHistory(
    parameterTransectionHistory: parameterTransectionHistory,
  ): Promise<transection[]> {
    const data = await this.transectionRepository
      .createQueryBuilder('transection')
      .select('*');
    if (parameterTransectionHistory.isAdd) {
      data.where('type= Add');
    } else {
      data.where('type != Add');
    }
    console.log(await data.getRawMany());

    return await this.transectionRepository.find();
  }
}
