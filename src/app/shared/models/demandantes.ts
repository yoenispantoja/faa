export class Demandante {
  id: number;
  nombre_completo: string;
  solapin: string;
  cargo: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;

  constructor(id: number, nombre_completo: string, solapin: string, cargo: string) {
    this.id = id;
    this.nombre_completo = nombre_completo;
    this.solapin = solapin;
    this.cargo = cargo;
  }
}
