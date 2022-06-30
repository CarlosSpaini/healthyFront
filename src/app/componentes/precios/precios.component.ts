import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { Router } from '@angular/router';
import { Precio } from 'src/app/entities/precio';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {

  formularioPrecio: FormGroup;

  itemsCollection: AngularFirestoreCollection<Precio>;
  precios: Observable<Precio[]>;


  esEditar: boolean = false;
  id: string = '';

  constructor(
    private fb: FormBuilder, 
    private afs: AngularFirestore,
    ) { 
      this.formularioPrecio = this.fb.group({
        nombre: ['', Validators.required],
        costo: ['', Validators.required],
        duracion: ['', Validators.required],
        tipoDuracion: [ '', Validators.required]
      })

      this.itemsCollection = this.afs.collection<Precio>('precios');
      this.precios = this.itemsCollection.valueChanges({ idField: 'id' });
    }

  ngOnInit() {

    

    
    
  }


  mostrarPrecios()
  {
    /*this.db.collection<Precio>('precios').get().subscribe((resultado)=>{
      this.precios.length =0;
      resultado.docs.forEach((dato)=>{
        let precio = dato.data() as Precio;
        precio.id = dato.id;
        precio.ref = dato.ref;
        this.precios.push(precio)
      });

      
    })*/

    this.itemsCollection = this.afs.collection<Precio>('precios');
      this.precios = this.itemsCollection.valueChanges({ idField: 'id' });
  }


  agregar(){
    this.afs.collection<Precio>('precios').add(this.formularioPrecio.value).then(()=>{
      Swal.fire(
        '',
        'Se agregó correctamente',
        'success'
      )
      this.formularioPrecio.reset();
      this.mostrarPrecios();
    }).catch(()=>{
      Swal.fire({
        title: '',
        text: 'Ocurrió un error',
        icon: 'error'
      })
    })
  }



  editarPrecio(precio: Precio)
  {
    this.esEditar = true;
    this.formularioPrecio.setValue({
      nombre: precio.nombre,
      costo: precio.costo,
      duracion: precio.duracion,
      tipoDuracion: precio.tipoDuracion
    })
    this.id = precio.id;
  }


  editar(){
    this.afs.doc('precios/' + this.id).update(this.formularioPrecio.value).then(()=>{
      Swal.fire(
        '',
        'Se editó correctamente',
        'success'
      )
      this.formularioPrecio.reset();
      this.esEditar = false;
      this.mostrarPrecios();
    }).catch(()=>{
      Swal.fire({
        title: 'Error al editar',
        text: 'Ocurrió un error',
        icon: 'error'
      })
    })
  }
}