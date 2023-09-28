import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
export interface Turnos {
  id: number;
  ob: string;
  prof: string;
  dni: number;
  cel: number;
  fecha: number;
  nombre: string;
  apellido: string;
}
@Component({
  selector: "app-turnos",
  templateUrl: "./turnos.component.html",
  styleUrls: ["./turnos.component.css"],
})
export class TurnosComponent {
  private fb = inject(FormBuilder);
  turnosForm: FormGroup;

  constructor() {
    this.turnosForm = this.fb.group({
      ob: ["", Validators.required],
      prof: ["", Validators.required],
      dni: ["", Validators.required],
      cel: ["", Validators.required],
      fecha: ["", Validators.required],
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
    });
  }
  turnos: Turnos[] = [
    {
      id: 0,
      ob: "",
      prof: "",
      dni: 0,
      cel: 0,
      fecha: 0,
      nombre: "",
      apellido: "",
    },
    {
      id: 0,
      ob: "",
      prof: "",
      dni: 0,
      cel: 0,
      fecha: 0,
      nombre: "",
      apellido: "",
    },
    {
      id: 0,
      ob: "",
      prof: "",
      dni: 0,
      cel: 0,
      fecha: 0,
      nombre: "",
      apellido: "",
    },
    {
      id: 0,
      ob: "",
      prof: "",
      dni: 0,
      cel: 0,
      fecha: 0,
      nombre: "",
      apellido: "",
    },
  ];

  addTurno() {}
}
