import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Login } from "../login/login";

const url = "http://localhost:4444/auth";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(nombre: string, password: string): Observable<string> {
    const user = new Login(nombre, password);
    return this.http.post<string>(url, user);
  }
}
