import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/entities/cliente';
import { Router } from '@angular/router';
import Swal, { SweetAlertResult } from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  itemsCollection: AngularFirestoreCollection<Cliente>;
  clientes: Observable<Cliente[]>;

  constructor(private afs: AngularFirestore, private router: Router) { 
    this.itemsCollection = afs.collection<Cliente>('clientes');
    this.clientes = this.itemsCollection.valueChanges({ idField: 'id' });
  }

  ngOnInit(): void {

  }

  eliminarCliente(id: String){
    this.afs.doc('clientes/' + id).delete().then(()=>{
      Swal.fire(
        '',
        'Se eliiminó correctamente',
        'success'
      )
      
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

  agregarCliente(){
    
  }

}
