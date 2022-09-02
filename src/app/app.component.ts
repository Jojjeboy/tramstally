import { Component, OnInit } from '@angular/core';
import { LocalStorageServiceService } from './local-storage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public value = 0;
  constructor(private localStorageService: LocalStorageServiceService){

  }

  ngOnInit(){
    this.getCount();
  }

  public getCount() {
    this.value = this.localStorageService.getCounter();
  }
  public increase(){
    this.value += 1;
    this.localStorageService.increase();
  }
  public decrease(){
    if(this.value > 0){
      this.value -= 1;
      this.localStorageService.decrease();
    }
  }

}