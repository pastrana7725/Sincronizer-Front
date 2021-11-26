import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home.module';
import { MainComponent } from './main/main.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'home',
    component:MainComponent,
    children:[
      {
        path:'documentation',
        component:DocumentationComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
