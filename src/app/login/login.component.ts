import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../servicios/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private lg: LoginService) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      nombre: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  login() {
    this.lg
      .login(
        this.loginForm.controls["nombre"].value,
        this.loginForm.controls["password"].value
      )
      .subscribe();
  }
}
