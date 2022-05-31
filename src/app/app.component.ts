import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'healthyFront';
  usuario: firebase.User | null = null;
  cargando: boolean = true;

  constructor(public afAuth: AngularFireAuth) {
    
    /*afAuth.user.subscribe((usuario) => {
      this.cargando = false;
      this.usuario = usuario;
    });*/
    
  }

}
