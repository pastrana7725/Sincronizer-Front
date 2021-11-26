import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-common';
import { MicrosoftService } from '../../services/microsoft-script.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{

  title='Microsoft-login';
  constructor(private _microsoftService:MicrosoftService, private _router:Router) {
  }

  isLoggedIn():boolean{
      return this._microsoftService.isLoggedIn();
  }
  redirectTo(uri:string){
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this._router.navigate([uri]));
 }
}
