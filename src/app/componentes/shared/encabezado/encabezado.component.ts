import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html'
})
export class EncabezadoComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.afAuth.signOut()
    .then(
      ()=>{
        this.router.navigate(['login']);
      }
    );
    
  }

}
