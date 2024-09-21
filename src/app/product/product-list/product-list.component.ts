import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  //*ngIf=true o false

  productos:any[]=[
    {
      "productoID": 1,
      "Modelo": "Sentra",
      "Descripcion": "4 puertas",
      "Precio": 20000,
      "Year": 2023,
      "Marca": "NISSAN",
      "Color": "Azul",
      "ImagenURL":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_0c7166c16ff74073b65851f7f0b360ed.jpg"
    },
    {
      "productoID": 2,
      "Modelo": "A4",
      "Descripcion": "4 puertas",
      "Precio": 30000,
      "Year": 2022,
      "Marca": "AUDI",
      "Color": "Blanco",
      "ImagenURL":"https://http2.mlstatic.com/D_NQ_NP_925534-MLM78669111815_082024-O.webp"
    },
    {
      "productoID": 3,
      "Modelo": "Rio",
      "Descripcion": "4 puertas",
      "Precio": 15000,
      "Year": 2020,
      "Marca": "KIA",
      "Color": "Rojo",
      "ImagenURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAMbkiDOsworsSeCIGUe-qamMAr6XLWbezww&s"
    }
  ]
}
