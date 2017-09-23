import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
    myCurrentCount = 1;
    @Output() gameStarted = new EventEmitter<{myCurrentCount: number}>();

    gameCounter;
    constructor() { }

    ngOnInit() {
    }

    myCounter() {
        console.log("In myCounter, before:" + this.myCurrentCount);
        this.myCurrentCount++;
 //       this.myCurrentCount = myCurrentCount;
        console.log("In myCounter, after:" + this.myCurrentCount);
    }

    onStartGame() {
        console.log(this.myCurrentCount);
        this.gameCounter = setInterval(() => {this.myCounter();}, 1000);
    }

    onStopGame() {
        clearInterval(this.gameCounter);
        console.log("At onStopGame point: "+this.myCurrentCount);
    }
}
