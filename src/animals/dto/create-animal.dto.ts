import { IsString, IsUrl, IsIn } from 'class-validator';

export class AnimalCremalDto {
  @IsString()
  nombre: string;

  @IsString()
  @IsIn(['ave', 'mamifero', 'anfibio', 'reptil', 'pez'])
  tipo: string;

  @IsString()
  descripcion: string;

  @IsUrl()
  wikipediaUrl: string;

  @IsUrl()
  imagenUrl: string;
}
