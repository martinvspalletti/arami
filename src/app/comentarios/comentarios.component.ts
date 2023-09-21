import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PacientesService } from "../servicios/pacientes.service";
@Component({
  selector: "app-comentarios",
  templateUrl: "./comentarios.component.html",
  styleUrls: ["./comentarios.component.css"],
})
export class ComentariosComponent {
  comentariosForm: FormGroup;

  private fb = inject(FormBuilder);
  private ps = inject(PacientesService);

  constructor() {
    this.comentariosForm = this.fb.group({
      nombre: ["", Validators.required],
      detalle: ["", Validators.required],
    });
  }

  addComentario() {}
}
