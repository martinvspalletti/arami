import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Gastos } from "../gastos/gastos";

@Injectable({
  providedIn: "root",
})
export class GastosService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>("http://localhost:4444/gastos");
  }

  registrarGasto(gasto: Gastos): Observable<Gastos> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json",
      }),
    };
    return this.http.post<Gastos>(
      "https://jsonplaceholder.typicode.com/users",
      gasto,
      httpOptions
    );
  }
}
