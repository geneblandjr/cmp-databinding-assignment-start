import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
    @Output() gameStarted = new EventEmitter<{myCurrentCount: number}>();
    myCurrentCount = 0;
    gameCounter: any = null;
    constructor() { }

    ngOnInit() {
    }
    onStartGame() {
       this.gameCounter = setInterval(this.counter, 1000);
    }
    counter() {
        console.log(this.myCurrentCount);
        this.myCurrentCount =  1;
        console.log(this.myCurrentCount);
    }
    onStopGame() {
        clearInterval(this.gameCounter);
        console.log(this.myCurrentCount);
    }
}
