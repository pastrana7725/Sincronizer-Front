import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CargarScriptService } from './services/cargar-script.service';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { HomeModule } from './home/home.module';

export function MSALInstanceFactory():IPublicClientApplication{
  return new PublicClientApplication({
    auth:{
    clientId:'ff5e07b8-6d94-4117-b938-67d11782958a',
    redirectUri:'http://localhost:4200'
    }
});
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    MsalModule,
    HomeModule
  ],
  providers: [{
    provide: MSAL_INSTANCE,
    useFactory: MSALInstanceFactory
  },
  MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
