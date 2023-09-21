export class Comentarios {
  id: number;
  nombre: string;
  detalle: string;

  constructor(id: number = 0, nombre: string = "", detalle: string) {
    this.id = id;
    this.nombre = nombre;
    this.detalle = detalle;
  }
}
