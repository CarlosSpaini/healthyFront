import { Component, OnInit } from '@angular/core';
//import { Inscripcion } from '../models/inscripcion';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Precio } from 'src/app/entities/precio';
import { Cliente } from 'src/app/entities/cliente';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html'
})
export class InscripcionComponent /*implements OnInit*/ {
 /* inscripcion: Inscripcion = new Inscripcion();
  clienteSeleccionado: Cliente;
  precioSeleccionado: Precio = null;
  idPrecio: string = 'null';
  precios: Precio[] = new Array< Precio>();
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection('precios').get().subscribe((resultado)=>{
      resultado.docs.forEach((item)=>{
        let precio = item.data() as Precio;
        precio.id = item.id;
        precio.ref = item.ref;
        this.precios.push(precio)
      })
    })
  }

  asignarCliente(cliente: Cliente)
  {
    this.inscripcion.cliente = cliente.ref;
    this.clienteSeleccionado = cliente;
  }

  eliminarCliente()
  {
    this.clienteSeleccionado = {id: '', apellido : '', nombre : '', celular: '', nro_documento : ''};
    this.inscripcion.cliente = undefined;
  }


  guardar()
  {
    if(this.inscripcion.validar().esValido)
    {
      let inscripcionAgregar = {
        fecha: this.inscripcion.fecha,
        fechaFinal: this.inscripcion.fechaFinal,
        cliente: this.inscripcion.cliente,
        precios: this.inscripcion.precios,
        subTotal: this.inscripcion.subTotal,
        isv: this.inscripcion.isv,
        total: this.inscripcion.total
      }
      this.db.collection('inscripciones').add(inscripcionAgregar).then((resultado)=>{
        this.inscripcion =  new Inscripcion();
        this.clienteSeleccionado = {id: '', apellido : '', nombre : '', celular: '', nro_documento : ''};
        this.precioSeleccionado = {costo : 0, duracion : 0, nombre: '', id: '', tipoDuracion: 0}
        this.idPrecio = 'null'
        this.mensajeCorrecto('Guardado', 'Se guardo correctamente')
      })
    }
    else{
      this.mensajeAdvertencia('Advertencia',this.inscripcion.validar().mensaje )
    }
   
  }

  selecionarPrecio(id: string)
  {
    if(id != "null")
    {
      this.precioSeleccionado = this.precios.find(x=> x.id == id);
      this.inscripcion.precios = this.precioSeleccionado.ref;

      this.inscripcion.subTotal = this.precioSeleccionado.costo;
      this.inscripcion.isv = this.inscripcion.subTotal * 0.15;
      this.inscripcion.total = this.inscripcion.subTotal  + this.inscripcion.isv;

      this.inscripcion.fecha = new Date();

      if(this.precioSeleccionado.tipoDuracion == 1)
      {
        let dias: number = this.precioSeleccionado.duracion;
        let fechaFinal = 
        new Date(this.inscripcion.fecha.getFullYear(),this.inscripcion.fecha.getMonth(), this.inscripcion.fecha.getDate() + dias)
        this.inscripcion.fechaFinal = fechaFinal;
    
      }
      if(this.precioSeleccionado.tipoDuracion == 2)
      {
        let dias: number = this.precioSeleccionado.duracion * 7;
        let fechaFinal = 
        new Date(this.inscripcion.fecha.getFullYear(),this.inscripcion.fecha.getMonth(), this.inscripcion.fecha.getDate() + dias)
        this.inscripcion.fechaFinal = fechaFinal;
      }
      if(this.precioSeleccionado.tipoDuracion == 3)
      {
        let dias: number = this.precioSeleccionado.duracion * 15;
        let fechaFinal = 
        new Date(this.inscripcion.fecha.getFullYear(),this.inscripcion.fecha.getMonth(), this.inscripcion.fecha.getDate() + dias)
        this.inscripcion.fechaFinal = fechaFinal;
      }
      if(this.precioSeleccionado.tipoDuracion == 4)
      {

        let anio: number = this.inscripcion.fecha.getFullYear();
        let meses = this.precioSeleccionado.duracion + this.inscripcion.fecha.getMonth();
        let dia: number = this.inscripcion.fecha.getDate()
        let fechaFinal = 
        new Date(anio, meses ,dia )
        this.inscripcion.fechaFinal = fechaFinal;
      }
      if(this.precioSeleccionado.tipoDuracion == 5)
      {
        let anio: number = this.inscripcion.fecha.getFullYear() + this.precioSeleccionado.duracion;
        let meses = this.inscripcion.fecha.getMonth();
        let dia: number = this.inscripcion.fecha.getDate()
        let fechaFinal = 
        new Date(anio, meses ,dia )
        this.inscripcion.fechaFinal = fechaFinal;
      }
    }
    else
    {
      this.precioSeleccionado = new Precio();
      this.inscripcion.fecha = null;
      this.inscripcion.fechaFinal = null;
      this.inscripcion.precios = null;
      this.inscripcion.subTotal = 0;
      this.inscripcion.isv = 0;
      this.inscripcion.total = 0;
    }
  }

  mensajeCorrecto(titulo: string, mensaje: string)
  {
    Swal.fire(
      titulo,
      mensaje,
      'success'
    )
  }

  mensajeAdvertencia(titulo: string, mensaje: string)
  {
    Swal.fire(
      titulo,
      mensaje,
      'warning'
    )
  }*/

}
