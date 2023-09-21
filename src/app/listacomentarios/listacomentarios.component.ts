import { Component } from "@angular/core";
import { Comentarios } from "../comentarios/comentarios";

@Component({
  selector: "app-listacomentarios",
  templateUrl: "./listacomentarios.component.html",
  styleUrls: ["./listacomentarios.component.css"],
})
export class ListacomentariosComponent {
  comentarios: Comentarios[] = [
    {
      id: 0,
      nombre: "",
      detalle: "",
    },
    {
      id: 0,
      nombre: "",
      detalle: "",
    },
  ];
}
