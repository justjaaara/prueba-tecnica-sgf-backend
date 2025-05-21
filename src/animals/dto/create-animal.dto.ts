import { IsString, IsUrl, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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
  tipo: string;

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
