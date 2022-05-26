import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './child-module/store/components/card/card.component';
import { HomeComponent } from './child-module/store/components/home/home.component';

const routes: Routes = [
 
  {path :'',
  component:CardComponent,
// children :[
//   {path :':id',component:HomeComponent}

// ]
},
{path :'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
