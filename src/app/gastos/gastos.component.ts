import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GastosService } from "../servicios/gastos.service";
import { Gastos } from "./gastos";

@Component({
  selector: "app-gastos",
  templateUrl: "./gastos.component.html",
  styleUrls: ["./gastos.component.css"],
})
export class GastosComponent {
  datos!: any;
  gastosForm: FormGroup;
  private fb = inject(FormBuilder);
  private gs = inject(GastosService);
  constructor() {
    this.gastosForm = this.fb.group({
      detalle: ["", Validators.required],
      monto: ["", Validators.required],
    });
  }

  gastos: Gastos[] = [
    {
      detalle: "",
      monto: 0,
    },
    {
      detalle: "",
      monto: 0,
    },
  ];

  odatos() {
    this.gs.ob().subscribe((data) => (this.datos = data));
  }
  agregarGasto() {}
}
