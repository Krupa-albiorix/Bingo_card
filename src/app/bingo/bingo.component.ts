import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.scss']
})
export class BingoComponent implements OnInit {

  public i : number | undefined;
  rendomNumber!: any;
  public rendomArray: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.array();
  }

  array() {
    for (var i = 0 ; i < 5 ; i++) {
      this.rendomArray[i] = [];
      for ( var j = 0 ; j < 5 ; j++ ) {
        this.rendomArray[i][j] = this.getRandomNumber();
      }
    }
    console.log(this.rendomArray);
  }

  start() {
    this.rendomNumber = setInterval(() => {
        this.array();
      }, 300);
    console.log(this.rendomNumber);

    this.rendomArray.filter((res,indexI)=> {
      if(res.includes(this.rendomNumber)) 
      {
        console.log(res);
        console.log(indexI)
        console.log(res.indexOf(this.rendomNumber));  
        console.log(this.rendomArray[indexI][res.indexOf(this.rendomNumber)]);
      }
    })
  }

  refresh() {
    this.array();
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 99);
  };

}