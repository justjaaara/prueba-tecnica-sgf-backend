import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAnimalDto } from './dto/create-animal.dto';

@Injectable()
export class AnimalsService {
  constructor(private prisma: PrismaService) {}

  // Método para crear un animal nuevo
  async create(createAnimalDto: CreateAnimalDto) {
    return this.prisma.animal.create({
      data: createAnimalDto,
    });
  }

  // Método para obtener todos los animales
  async findAll() {
    return this.prisma.animal.findMany();
  }

  // Método para obtener un animal por su id
  async findOne(id: number) {
    return this.prisma.animal.findUnique({
      where: { id },
    });
  }

  // Método para eliminar un animal por id
  async remove(id: number) {
    return this.prisma.animal.delete({
      where: { id },
    });
  }
}
