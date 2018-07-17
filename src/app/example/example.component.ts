import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})

export class ExampleComponent implements OnInit {

  public minNum: number;
  public maxNum: number;


  constructor() {

    this.minNum = 15;
    this.maxNum = 31;

   }

  ngOnInit() {
  }

}
