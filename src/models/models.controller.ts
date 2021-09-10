import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  HttpStatus,
  HttpCode,
  Put,
  Delete,
} from '@nestjs/common';
import { ModelsService } from './models.service';
import {
  accout,
  transection,
  parameterTransectionHistory,
  type,
} from './models.entity';
@Controller('models')
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) {}

  @Post() // POST /albums
  @HttpCode(HttpStatus.CREATED)
  async createAlbum(@Body() newaccout: accout): Promise<accout> {
    const Accout = new accout();
    Accout.name = newaccout.name;
    Accout.total = newaccout.total == null ? 0 : newaccout.total;
    return await this.modelsService.createOrUpdate(Accout);
  }

  @Get() // GET /albums
  async findAlbums(): Promise<accout[]> {
    return await this.modelsService.findAll();
  }

  @Get(':id') // GET /albums/123
  async findAlbum(@Param('id') id: number): Promise<accout> {
    return await this.modelsService.findOne(id);
  }

  @Put(':id') // PUT /albums/123
  async updateAlbum(
    @Param('id') id: number,
    @Body() createaccout: accout,
  ): Promise<accout> {
    const Accout = await this.modelsService.findOne(id);
    Accout.name = createaccout.name;
    Accout.total = createaccout.total;
    return await this.modelsService.createOrUpdate(Accout);
  }

  @Delete(':id') // DELETE /albums/123
  async deleteAlbum(@Param('id') id: number): Promise<any> {
    await this.modelsService.delete(id);
    return { success: true };
  }

  @Post('/transection') // POST /albums
  @HttpCode(HttpStatus.CREATED)
  async createtransection(
    @Body() newtransection: transection,
  ): Promise<transection> {
    const Transection = new transection();
    Transection.type = newtransection.type;
    Transection.accoutId = newtransection.accoutId;
    Transection.dateBy = newtransection.dateBy;
    Transection.price = newtransection.price == null ? 0 : newtransection.price;
    Transection.accoutIdFrom = newtransection.accoutIdFrom;

    return await this.modelsService.createOrUpdatetransection(Transection);
  }

  @Get('/transection') // GET /albums
  async findtransectionAll(): Promise<transection[]> {
    return await this.modelsService.findAlltransection();
  }

  @Get('/transection/:id') // GET /albums/123
  async findtransection(@Param('id') id: number): Promise<transection> {
    return await this.modelsService.findOnetransection(id);
  }
  @Get('/transectionby/:id') // GET /albums/123
  async findAllbytransection(@Param('id') id: number): Promise<transection[]> {
    return await this.modelsService.findAllbytransection(id);
  }
  @Put('/transection/:id') // PUT /albums/123
  async updatetransection(
    @Param('id') id: number,
    @Body() createtransection: transection,
  ): Promise<transection> {
    const Transection = await this.modelsService.findOnetransection(id);
    console.log(createtransection);

    Transection.type = 0;
    Transection.accoutId = createtransection.accoutId;
    Transection.dateBy = createtransection.dateBy;
    Transection.price =
      createtransection.price == null ? 0 : createtransection.price;
    Transection.accoutIdFrom = createtransection.accoutIdFrom;
    return await this.modelsService.createOrUpdatetransection(Transection);
  }

  @Delete('/transection/:id') // DELETE /albums/123
  async deletetransection(@Param('id') id: number): Promise<any> {
    await this.modelsService.deletetransection(id);
    return { success: true };
  }

  @Post('/transectionHistory') // GET /albums
  async transectionHistory(
    @Body() body: parameterTransectionHistory,
  ): Promise<transection[]> {
    return await this.modelsService.findAlltransectionHistory(body);
  }
}
