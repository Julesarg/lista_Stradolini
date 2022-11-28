import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public listaAlumnos = ['Jose','Ana','Juan','Pedro','Victoria','Julieta','Adrian'];
  public listaFiltrada = [''];

  constructor() { }

  ngOnInit(): void {
  }

  //ok
  startWithA = () =>{
    this.listaFiltrada = this.listaAlumnos.filter(element => element.startsWith("A",0,))
  }
  startWithJ = () =>{
    this.listaFiltrada = this.listaAlumnos.filter(element => element.startsWith("J",0,))
  }
  resetFilter = () =>{
    this.listaFiltrada = ['']
  }
  //ok
}
