import { IsString, IsUrl, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { AnimalType } from '../../../generated/prisma';

export class CreateAnimalDto {
  @ApiProperty({
    description: 'Nombre del animal',
    example: 'Perro',
  })
  @IsString()
  nombre: string;

  @ApiProperty({
    description: 'Tipo de animal',
    example: 'mamifero',
    enum: ['ave', 'mamifero', 'anfibio', 'reptil', 'pez'],
  })
  @IsString()
  @IsIn(['ave', 'mamifero', 'anfibio', 'reptil', 'pez'])
  tipo: AnimalType;

  @ApiProperty({
    description: 'Descripción del animal',
    example: 'El perro es un mamífero doméstico.',
  })
  @IsString()
  descripcion: string;

  @ApiProperty({
    description: 'URL de Wikipedia del animal',
    example: 'https://es.wikipedia.org/wiki/Perro',
  })
  @IsUrl()
  wikipediaUrl: string;

  @ApiProperty({
    description: 'URL de la imagen del animal',
    example: 'https://example.com/perro.jpg',
  })
  @IsUrl()
  imagenUrl: string;
}
