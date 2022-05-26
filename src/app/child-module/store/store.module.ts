import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from '../../app-routing.module';




@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    LayoutComponent
  ],
  exports:[
    HomeComponent,
    CardComponent,
    LayoutComponent,

  ],

  imports: [
    CommonModule,
    AppRoutingModule
  
  ]
})
export class StoreModule { }
