import { Component, OnInit } from '@angular/core';
import { StorServicService } from '../../stor-servic.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  allCards :any[] =[];
  
  constructor(private cardSevics: StorServicService  ) {
    this.allCards = this.cardSevics.getAllProducts();
    
   }


  ngOnInit(): void {

    

  }

}
