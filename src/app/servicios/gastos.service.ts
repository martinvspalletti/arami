import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GastosService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
