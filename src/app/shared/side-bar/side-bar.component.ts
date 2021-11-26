import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from '../../services/cargar-script.service';
import { MicrosoftService } from '../../services/microsoft-script.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private _cargaScripts:CargarScriptService, private _microsoftService:MicrosoftService) {
    _cargaScripts.carga(["sideBar"]);
  }

  logout(){
    this._microsoftService.logout();
  }

  ngOnInit(): void {
  }

}
