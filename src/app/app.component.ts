import { Component, OnInit } from '@angular/core';
import { LocalStorageServiceService } from './local-storage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public value = 0;
  public ticketcost: number = 35;
  public fine: number = 1500;
  public moneyLeftToSave: number = 0;
  public freeRidesLeft: number = 0;
  constructor(private localStorageService: LocalStorageServiceService){

  }

  ngOnInit(){
    this.getCount();
    this.reCalculate();
  }

  public getCount() {
    this.value = this.localStorageService.getCounter();
  }
  public increase(){
    this.value += 1;
    this.localStorageService.increase();
    this.reCalculate();
  }
  public decrease(){
    if(this.value > 0){
      this.value -= 1;
      this.localStorageService.decrease();
      this.reCalculate();
    }
  }

  public reCalculate(){
    this.moneyLeftToSave = this.fine - (this.ticketcost * this.value)
    this.freeRidesLeft = Math.ceil(this.fine / this.ticketcost) - this.value;
  }

}