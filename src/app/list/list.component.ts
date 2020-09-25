import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ecsj: string = 'Hello World!';
  constructor() { }
  onKeyUp(evento: KeyboardEvent){
    console.log(evento);
  }
  ngOnInit() {
  }

}
