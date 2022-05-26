import { Component, OnInit } from '@angular/core';
import { StorServicService } from '../../stor-servic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    allCards :any[]=[]
  constructor(private cardSevics: StorServicService) {
    this.allCards=this.cardSevics.getAllProducts()
   }

  ngOnInit(): void {
  }

}
