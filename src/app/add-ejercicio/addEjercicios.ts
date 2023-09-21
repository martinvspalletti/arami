export class Ejercicios {
  constructor(private id?: number, private nombreEjercicio?: string) {}
  get _id() {
    return this.id;
  }
  set id_(id: number) {
    this.id = id;
  }
  get _nombre() {
    return this.nombreEjercicio;
  }

  set nombre_(nombre: string) {
    this.nombreEjercicio = nombre;
  }
}
