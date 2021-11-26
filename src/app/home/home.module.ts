import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    MainComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
  exports:[
   MainComponent, 
  ],
})
export class HomeModule { }
