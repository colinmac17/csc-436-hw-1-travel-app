import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor(){}

  totalCost: number;
  numberOfTravelers: number;

  ngOnInit(): void {
    this.totalCost = 0;
    this.numberOfTravelers = 0;
  }

  calculateCost(e: Event): void{
    console.log(this.numberOfTravelers);
    e.preventDefault();
    this.totalCost = this.numberOfTravelers * 150;
  }
}
