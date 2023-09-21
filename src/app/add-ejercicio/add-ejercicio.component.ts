import { Component, inject } from "@angular/core";
import { Ejercicios } from "./addEjercicios";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AddejercicioService } from "../servicios/addejercicio.service";

@Component({
  selector: "app-add-ejercicio",
  templateUrl: "./add-ejercicio.component.html",
  styleUrls: ["./add-ejercicio.component.css"],
})
export class AddEjercicioComponent {
  crearEjercicio: FormGroup;
  private fb = inject(FormBuilder);
  private aes = inject(AddejercicioService);
  constructor() {
    this.crearEjercicio = this.fb.group({
      nombreEjercicio: ["", Validators.required],
    });
  }

  ejer: Ejercicios = new Ejercicios();
  //revisar - editar campos uno a uno ????
  addEjercicio() {
    (this.ejer.id_ = this.aes.ejercicios.length + 1),
      (this.ejer.nombre_ = this.crearEjercicio.get("nombreEjercicio")?.value);
    this.aes.ejercicios.push(this.ejer);
    this.ejer = new Ejercicios();
  }

  //revisar - toma el elemento seleccionado pero no lo devuelve en el campo
  editar(ejercicio: Ejercicios) {
    this.ejer = ejercicio;
    console.log((this.ejer = ejercicio));
    this.ejer = new Ejercicios();
  }

  //revisar - borra todos los elementos
  del() {
    this.aes.ejercicios = this.aes.ejercicios.filter(
      (x) => x.id_ != this.ejer.id_
    );

    this.ejer = new Ejercicios();
  }
  get ejercicios() {
    return this.aes.ejercicios;
  }
}
