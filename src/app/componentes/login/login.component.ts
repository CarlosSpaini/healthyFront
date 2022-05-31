import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  
  datosCorrectos: boolean = true;
  textoError: string = ''
  
  formularioLogin = this.creadorFormulario.group({
    email: ['', Validators.compose([
      Validators.required, Validators.email
    ])],
    password: ['', Validators.required]
  });
  
  constructor(
    private creadorFormulario: FormBuilder,
    private afAuth: AngularFireAuth,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {
    //this.createForm()
  }

  ngOnInit() {
    
  }

  createForm(){
    this.formularioLogin = this.creadorFormulario.group({
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['', Validators.required]
    });
  }

  ingresar()
  {
    if(this.formularioLogin.valid)
    {
      this.datosCorrectos = true;
      //this.spinner.show();

      Swal.fire({
        allowOutsideClick : false,
        icon:'info',
        text:'Por favor espere'
      })
      Swal.showLoading()

      this.afAuth.signInWithEmailAndPassword(this.formularioLogin.value.email, this.formularioLogin.value.password)
      .then((usuario)=>{
        /*this.submitted = false;
        this.spinner.hide();*/
        Swal.close()
        this.router.navigate(['main']);
      }).catch((error)=>{
        Swal.fire({
          title: 'Error al autenticar',
          text: error.message,
          icon: 'error'
        })
        /* this.datosCorrectos = false;
        this.textoError = error.message;
        this.spinner.hide(); */
      })
    }
    else
    {
      Swal.fire({
        title: 'Error al autenticar',
        text: 'Por favor revisa que los datos esten correctos',
        icon: 'error'
      })
      /*this.datosCorrectos = false;
      this.textoError = 'Por favor revisa que los datos esten correctos'*/
     }
    
  }

}
