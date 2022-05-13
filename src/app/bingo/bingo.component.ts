import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.scss']
})
export class BingoComponent implements OnInit {
  rendomNumber!: any;
  bingoInterval: any;
  public rendomArray: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.generateBingoArray();
  }

  generateBingoArray() {
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
    this.bingoInterval = setInterval(() => {
      const invalidNum: any = []
      this.rendomArray.forEach(array => {
        if (array.find((arr: any) => !arr.isSelected)) {
          invalidNum.push(1)
        }
      })
      if (invalidNum.length) {
        this.rendomNumber = this.getRandomNumber();
        this.rendomArray.map(((randomElement, indexI) => {
          if (randomElement.find((res: { number: any; }) => res.number === this.rendomNumber)) {
            randomElement.map((element: any) => {
              if (element.number === this.rendomNumber) {
                element.isSelected = true;
              }
            })
          }
        }))
      } else {
        console.log('BINGO');
        clearInterval(this.bingoInterval)
        this.generateBingoArray();
        this.rendomNumber = null
      }
    }, 500);
  }

  refresh() {
    this.generateBingoArray();
    if (this.bingoInterval) {
      clearInterval(this.bingoInterval);
    }
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 99);
  };

}