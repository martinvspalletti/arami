import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Gastos {
  id: number;
  detalle: string;
  monto: number;
}

@Component({
  selector: "app-gastos",
  templateUrl: "./gastos.component.html",
  styleUrls: ["./gastos.component.css"],
})
export class GastosComponent {
  datos: any;
  gastosForm: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.gastosForm = this.fb.group({
      detalle: ["", Validators.required],
      monto: ["", Validators.required],
    });
  }

  gastos: Gastos[] = [
    {
      id: 0,
      detalle: "",
      monto: 0,
    },
    {
      id: 0,
      detalle: "",
      monto: 0,
    },
    {
      id: 0,
      detalle: "",
      monto: 0,
    },
    {
      id: 0,
      detalle: "",
      monto: 0,
    },
  ];

  ob(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  odatos() {
    this.ob().subscribe((data) => (this.datos = data));
  }
  agregarGasto() {}
}
