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
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
@ApiTags('animals')
@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo animal' })
  @ApiResponse({ status: 201, description: 'Animal creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos.' })
  async create(@Body() createAnimalDto: CreateAnimalDto) {
    return this.animalsService.create(createAnimalDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los animales' })
  @ApiResponse({ status: 200, description: 'Lista de animales.' })
  async findAll() {
    return this.animalsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un animal por ID' })
  @ApiParam({ name: 'id', description: 'ID del animal' })
  @ApiResponse({ status: 200, description: 'Animal encontrado.' })
  @ApiResponse({ status: 404, description: 'Animal no encontrado.' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const animal = await this.animalsService.findOne(id);
    if (!animal) {
      throw new NotFoundException(`Animal con ID ${id} no se encontró`);
    }
    return animal;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un animal por ID' })
  @ApiParam({ name: 'id', description: 'ID del animal' })
  @ApiResponse({ status: 200, description: 'Animal eliminado.' })
  @ApiResponse({ status: 404, description: 'Animal no encontrado.' })
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
