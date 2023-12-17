export class Gastos {
  constructor(init?: Partial<Gastos>) {
    Object.assign(this, init);
  }
  id: number = 0;
  detalle?: string;
  importe?: number;
}
