import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.scss']
})
export class BingoComponent implements OnInit {

  public i: number | undefined;
  rendomNumber!: any;
  data!: any;
  public rendomArray: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.array();
  }

  array() {
    for (var i = 0; i < 5; i++) {
      this.rendomArray[i] = [];
      for (var j = 0; j < 5; j++) {
        this.rendomArray[i][j] = {
          number: this.getRandomNumber(),
          isSelected: false
        };
      }
    }
  }

  start() {
    const interVal = setInterval(() => {
      const invalidNum: any = []
      this.rendomArray.forEach(array => {
        if (array.find((arr: any) => !arr.isSelected)) {
          invalidNum.push(1)
        }
      })
      if (invalidNum.length) {
        this.rendomNumber = this.getRandomNumber();
        this.rendomArray.map(((res, indexI) => {
          if (res.find((res: { number: any; }) => res.number === this.rendomNumber)) {
            let index = res.findIndex((res: { number: any; }) => res.number === this.rendomNumber);
            res[index].isSelected = true;
          }
        }))
      } else {
        console.log('BINGO');
        clearInterval(interVal)
        this.array();
      }
    }, 1000);
  }

  refresh() {
    this.array();
    if (this.data) {
      clearInterval(this.data);
    }
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 99);
  };

}