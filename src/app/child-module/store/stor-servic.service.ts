import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorServicService {

  constructor() { }
  getAllProducts(){
    return [
      {
        id  : 1 ,
        imaUrl : './../../../../../assets/category-banner1.jpg',
        price :'50$',
        size :'large',
      },
      {
        id :2,
        imaUrl : './../../../../../assets/category-banner2.jpg',
        price :'54$',
        size :'small',
      },
      {
        id :3,
        imaUrl : './../../../../../assets/category-banner4.jpg',
        price :'50$',
        size :'large',
      },
      {
        id:4,
        imaUrl : './../../../../../assets/cms-banner-1.jpg',
        price :'50$',
        size :'large',
      },
    ]
  }
 

}
