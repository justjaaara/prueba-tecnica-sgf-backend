import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';

@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post()
  async create(@Body() createAnimalDto: CreateAnimalDto) {
    return this.animalsService.create(createAnimalDto);
  }

  @Get()
  async findAll() {
    return this.animalsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const animal = await this.animalsService.findOne(id);
    if (!animal) {
      throw new NotFoundException(`Animal con ID ${id} no se encontró`);
    }
    return animal;
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const animal = await this.animalsService.findOne(id);
    if (!animal) {
      throw new NotFoundException(
        `Animal con ID ${id} no se encontró para eliminar`,
      );
    }
    return this.animalsService.remove(id);
  }
}
