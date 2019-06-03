import { Component } from '@angular/core';
import { RoomPage } from "../room/room.page";
import { Routes } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  salas = [
    { nome: 'Curiosidade' },
    { nome: 'Esporte' },
    { nome: 'Cinema' },
  ];

  selectRoom:string;

  constructor(public navCtrl: NavController) {}

  readonly routes:Routes = [
    { path: 'room', component: RoomPage },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
  ];

  onClickGoRoom(){    
    this.navCtrl.navigateForward('/room');
  }


}


