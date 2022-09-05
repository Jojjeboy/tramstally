import { Component, OnInit } from '@angular/core';
import { LocalStorageServiceService } from './local-storage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public nrOfUnpaidRides = 0;
  public ticketcost: number = 35;
  public fine: number = -1500;
  public balance: number = 0;
  public nrOfUnpaidRidesLeft: number = 0;
  constructor(private localStorageService: LocalStorageServiceService){

  }

  ngOnInit(){
    this.getCount();
    this.reCalculate();
  }

  public getCount() {
    this.nrOfUnpaidRides = this.localStorageService.getCounter();
  }

  public increase(){
    this.nrOfUnpaidRides += 1;
    this.localStorageService.increase();
    this.reCalculate();
  }

  public decrease(){
    if(this.nrOfUnpaidRides > 0){
      this.nrOfUnpaidRides -= 1;
      this.localStorageService.decrease();
      this.reCalculate();
    }
  }

  public reCalculate(){
    this.balance = this.fine + (this.ticketcost * this.nrOfUnpaidRides)
    this.nrOfUnpaidRidesLeft = Math.floor(this.fine / this.ticketcost) + this.nrOfUnpaidRides;
  }

}