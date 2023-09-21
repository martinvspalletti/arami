import { Component } from "@angular/core";

export interface Pacientes {
  id: number;
  nombre: string;
  apellido: string;
  dni: number;
  telefono: number;
}
@Component({
  selector: "app-lista-pacientes",
  templateUrl: "./lista-pacientes.component.html",
  styleUrls: ["./lista-pacientes.component.css"],
})
export class ListaPacientesComponent {
  listaPacientes: Pacientes[] = [
    {
      id: 1,
      nombre: "pepito",
      apellido: "del barrio",
      dni: 3333,
      telefono: 55555,
    },
    {
      id: 2,
      nombre: "juan",
      apellido: "pepe",
      dni: 434343,
      telefono: 787878,
    },
    {
      id: 1,
      nombre: "pepito",
      apellido: "del barrio",
      dni: 3333,
      telefono: 55555,
    },
    {
      id: 2,
      nombre: "juan",
      apellido: "pepe",
      dni: 434343,
      telefono: 787878,
    },
    {
      id: 2,
      nombre: "juan",
      apellido: "pepe",
      dni: 434343,
      telefono: 787878,
    },
    {
      id: 2,
      nombre: "juan",
      apellido: "pepe",
      dni: 434343,
      telefono: 787878,
    },
    {
      id: 2,
      nombre: "juan",
      apellido: "pepe",
      dni: 434343,
      telefono: 787878,
    },
    {
      id: 2,
      nombre: "juan",
      apellido: "pepe",
      dni: 434343,
      telefono: 787878,
    },
    {
      id: 2,
      nombre: "juan",
      apellido: "pepe",
      dni: 434343,
      telefono: 787878,
    },
    {
      id: 2,
      nombre: "juan",
      apellido: "pepe",
      dni: 434343,
      telefono: 787878,
    },
  ];
}
