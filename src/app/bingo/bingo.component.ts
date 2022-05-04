import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.scss']
})
export class BingoComponent implements OnInit {

  public i : number | undefined;
  public rendonArray: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.array();
  }

  array() {
    for (var i = 0 ; i < 5 ; i++) {
      this.rendonArray[i] = [];
      for ( var j = 0 ; j < 5 ; j++ ) {
        this.rendonArray[i][j] = this.getRandomInt();
      }
    }
    console.log(this.rendonArray);
  }

  getRandomInt() {
    return Math.floor(Math.random() * 101);
  }

}
