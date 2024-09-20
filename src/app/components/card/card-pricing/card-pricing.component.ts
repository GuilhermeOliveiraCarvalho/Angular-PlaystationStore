import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent implements OnInit{

  @Input()
  gameType:string = "PS5"
  @Input()
  gamePrice:string = "R$ 140,00"



  constructor(){}
ngOnInit(): void {
  
}
}
