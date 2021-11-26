import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AccessTokenEntity, AuthenticationResult } from '@azure/msal-common';
@Injectable({
  providedIn: 'root'
})
export class MicrosoftService {

  constructor(private msalService:MsalService) { }

  title='Microsoft-login';
  token:String='';

  isLoggedIn():boolean{
      return this.msalService.instance.getActiveAccount() !=null;
  }

  login(){
    this.msalService.loginPopup().subscribe((response:AuthenticationResult)=>{
      this.msalService.instance.setActiveAccount(response.account)
      this.token=response.accessToken;
    });
  }

  getToken(){
    return this.token;
  }

  logout(){
    this.msalService.logoutRedirect();
  }
  
}