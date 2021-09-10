import { Module } from '@nestjs/common';
import { ModelsController } from './models.controller';
import { ModelsService } from './models.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { accout, transection } from './models.entity';
@Module({
  imports: [TypeOrmModule.forFeature([accout, transection])],
  controllers: [ModelsController],
  providers: [ModelsService],
})
export class ModelsModule {}
