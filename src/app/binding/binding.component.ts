import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
titre ="Aprendre le data binding dans angular 10";
status=true;
nom = "Habib Razeg";
changerTitre(){
this.titre="nouveaux titre"
}
}
