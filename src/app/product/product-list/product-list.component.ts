import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  //*ngIf=true o false
  imageWidth:number=150;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string=''

  muestImg():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:IProductos[]=[
    {
      "productoID": 1,
      "Modelo": "Sentra",
      "Descripcion": "4 puertas",
      "Precio": 20000,
      "Year": "febrero 2 2023",
      "Marca": "NISSAN",
      "Color": "Azul",
      "ImagenURL":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_0c7166c16ff74073b65851f7f0b360ed.jpg"
    },
    {
      "productoID": 2,
      "Modelo": "A4",
      "Descripcion": "4 puertas",
      "Precio": 30000,
      "Year": "marzo 20 2022",
      "Marca": "AUDI",
      "Color": "Blanco",
      "ImagenURL":"https://http2.mlstatic.com/D_NQ_NP_925534-MLM78669111815_082024-O.webp"
    },
    {
      "productoID": 3,
      "Modelo": "Rio",
      "Descripcion": "4 puertas",
      "Precio": 15000,
      "Year": "septiembre 27 2020",
      "Marca": "KIA",
      "Color": "Rojo",
      "ImagenURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAMbkiDOsworsSeCIGUe-qamMAr6XLWbezww&s"
    }
  ]
}
