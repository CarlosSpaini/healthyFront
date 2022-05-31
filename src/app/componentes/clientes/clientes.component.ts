import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/entities/cliente';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  itemsCollection: AngularFirestoreCollection<Cliente>;
  clientes: Observable<Cliente[]>;

  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection<Cliente>('clientes');
    setTimeout(()=>{
      this.clientes = this.itemsCollection.valueChanges();
    }, 3000)
    
  }

  ngOnInit(): void {

  }

  eliminarCliente(cliente: Cliente, index: number){

  }

}
