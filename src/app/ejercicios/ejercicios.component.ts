import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
export interface PacienteEjercicio {
  id: number;
  apellido: string;
  dni: number;
  ejercicio: string;
  cantidad: number;
  repeticion: number;
}
@Component({
  selector: "app-ejercicios",
  templateUrl: "./ejercicios.component.html",
  styleUrls: ["./ejercicios.component.css"],
})
export class EjerciciosComponent {
  ejerciciosPacientesForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.ejerciciosPacientesForm = this.fb.group({
      apellido: ["", Validators.required],
      dni: ["", Validators.required],
      ejercicio: ["", Validators.required],
      cantidad: ["", Validators.required],
      repeticion: ["", Validators.required],
    });
  }
  pacienteEjercicios: PacienteEjercicio[] = [
    {
      id: 1,
      apellido: "pepito",
      dni: 3333,
      ejercicio: "sentadillas",
      cantidad: 10,
      repeticion: 3,
    },
    {
      id: 1,
      apellido: "pepito",
      dni: 3333,
      ejercicio: "sentadillas",
      cantidad: 10,
      repeticion: 3,
    },
    {
      id: 1,
      apellido: "pepito",
      dni: 3333,
      ejercicio: "sentadillas",
      cantidad: 10,
      repeticion: 3,
    },
    {
      id: 1,
      apellido: "pepito",
      dni: 3333,
      ejercicio: "sentadillas",
      cantidad: 10,
      repeticion: 3,
    },
  ];

  agregarEjercicioPaciente() {}
}
