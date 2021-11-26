import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MicrosoftService } from '../../services/microsoft-script.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent{
  
  constructor(private _microsoftService:MicrosoftService, private _router:Router) {
  }
  
  isLoggedIn():boolean{
    return this._microsoftService.isLoggedIn();
  }
  login(){
    this._microsoftService.login();
  }

  redirectTo(uri:string){
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this._router.navigate([uri]));
 }
}
