import { Component, OnInit, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GastosService } from "../servicios/gastos.service";
import { Gastos } from "./gastos";

@Component({
  selector: "app-gastos",
  templateUrl: "./gastos.component.html",
  styleUrls: ["./gastos.component.css"],
})
export class GastosComponent implements OnInit {
  datos!: any;
  gastosForm: FormGroup;
  private fb = inject(FormBuilder);
  private gs = inject(GastosService);
  constructor() {
    this.gastosForm = this.fb.group({
      detalle: ["", Validators.required],
      importe: ["", Validators.required],
    });
  }
  ngOnInit() {
    this.gs.getAll().subscribe((data) => (this.datos = data));
  }

  gastos: Gastos[] = [];

  agregarGasto() {
    const gt = new Gastos(this.gastosForm.value);
    this.gs
      .registrarGasto(gt)
      .subscribe(() => console.log("guardado con exito"));
  }
  o() {}
}
