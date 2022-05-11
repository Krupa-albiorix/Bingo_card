import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.scss']
})
export class BingoComponent implements OnInit {

  public i : number | undefined;
  rendomNumber!: any;
  data! : any;
  public matched: any[] = [];
  public rendomArray: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.array();
  }

  array() {
    
    for (var i = 0 ; i < 5 ; i++) {
      this.rendomArray[i] = [];
      for ( var j = 0 ; j < 5 ; j++ ) {
        this.rendomArray[i][j] = {
          number: this.getRandomNumber(),
          isSelected: false
        };
      }
    }
    console.log(this.rendomArray);
  }

  start() {
    this.data = setInterval(() => {this.rendomNumber = this.getRandomNumber();
      this.rendomArray.map(((res,indexI)=> {
        if (res.find( (res: { number: any; }) => res.number === this.rendomNumber)) 
        {
          res[indexI].isSelected = true;
          console.log(res);
          console.log(indexI)
          console.log(res.indexOf(this.rendomNumber));  
          this.matched = [...this.matched, this.rendomNumber];
          console.log(this.matched);
        }
      }))
      }, 300);
      console.log(this.data);
  }

  refresh() {
    this.array();
    this.matched = [];
    if (this.data) {
      clearInterval(this.data);
    }
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 99);
  };

}