import { Component, OnInit } from '@angular/core';
import { HomePage } from "../home/home.page";
import { NavController, NavParams} from '@ionic/angular';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  
  constructor(public navCtrl: NavController) {}

  ngOnInit() {
  }

  conversas = [
    { 
      id: '1',
      date: '2016-02-01',
      nomeUser: 'Marquinhos',
      mensagemEnviada: 'Que tal programar Serverless?'
    },
    {      
      id: '2',
      date: '2016-01-01',
      nomeUser: 'Jão',
      mensagemEnviada: 'Aprenda o básico de Ionic'
    },
    {
      id: '3',
      date: '2016-03-01',
      nomeUser: 'Igão',
      mensagemEnviada: 'Importante para desenvolver com Ionic'
    }
  ]

  rooms = [{
    id: '1',
    nome: 'curiosidade'
  },{
    id:'2',
    nome: 'esporte',
  },{
    id: '3',
    nome: 'cinema'
  }]

  readonly routes:Routes = [
    { path: 'home', component: HomePage },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
  ];

  onClickBack(){    
    this.navCtrl.navigateBack('/home');
  }

}
