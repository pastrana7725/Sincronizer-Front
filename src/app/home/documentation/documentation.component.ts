import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/API.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  constructor(private _apiService:ApiService) { }

  sincronizar(){
    this._apiService.sincronizar();
  }
  ngOnInit(): void {
  }

}
