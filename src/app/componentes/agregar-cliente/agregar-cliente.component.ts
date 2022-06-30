import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html'
})
export class AgregarClienteComponent implements OnInit {

  formularioCliente: FormGroup ;
  esEditable: boolean = false;
  id: string = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private afs: AngularFirestore,
    private fb: FormBuilder, 
  ) { 
    this.formularioCliente = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      nro_documento: ['', Validators.required],
      celular: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    if(this.id != undefined)
    {
      this.esEditable = true;
      
      this.afs.doc<any>('clientes' +'/' + this.id ).valueChanges().subscribe((cliente)=>{
        this.formularioCliente.setValue({
          nombre : cliente.nombre ,
          apellido : cliente.apellido ,
          nro_documento : cliente.nro_documento ,
          celular : cliente.celular 
        })
      });
    }
  }

  agregar(){
    console.log(this.formularioCliente.value)
    this.afs.collection('clientes').add(this.formularioCliente.value).then((termino)=>{
      Swal.fire(
        '',
        'Se agregó correctamente',
        'success'
      )
      this.formularioCliente.reset()
    }).then(( _ ) => {
      this.router.navigate(['clientes']);
    })
  }

  editar(){
    this.afs.doc('clientes/' + this.id).update(this.formularioCliente.value).then(()=>{
      Swal.fire(
        '',
        'Se editó correctamente',
        'success'
      )
      this.formularioCliente.reset()
    }).catch(()=>{
      Swal.fire({
        title: 'Error al editar',
        text: 'Ocurrió un error',
        icon: 'error'
      })
    }).then(( _ ) => {
      this.router.navigate(['clientes']);
    })
  }

}
