import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  productos:any[]=[
    {
      "productoID": 1,
      "Modelo": "Sentra",
      "Descripción": "4 puertas",
      "Precio": 20000,
      "Yaer": 2023,
      "Marca": "NISSAN",
      "Color": "Azul",
      "ImagenURL":""
    },
    {
      "productoID": 2,
      "Modelo": "A4",
      "Descripción": "4 puertas",
      "Precio": 30000,
      "Yaer": 2022,
      "Marca": "AUDI",
      "Color": "Blanco",
      "ImagenURL":""
    },
    {
      "productoID": 3,
      "Modelo": "Rio",
      "Descripción": "4 puertas",
      "Precio": 15000,
      "Yaer": 2020,
      "Marca": "KIA",
      "Color": "Rojo",
      "ImagenURL":""
    }
  ]
}
