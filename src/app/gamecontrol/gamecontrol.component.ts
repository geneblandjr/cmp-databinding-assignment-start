import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
    @Output() gmaeStarted = new EventEmitter<{myCurrentCount: number}>();
    myCurrentCount = 0;
    gameCounter = 0;
    constructor() { }

    ngOnInit() {
    }
    onStartgame() {
       this.gameCounter = setInterval(this.counter, 1000);
    }
    counter() {
        this.myCurrentCount = this.myCurrentCount+1;
    }
    onStopGame() {
        clearInterval(this.gameCounter);
    }
}
