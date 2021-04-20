import { Component, OnInit } from '@angular/core';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

     this.getUsuarios().then( usuarios => console.log(usuarios))
        .catch( error => console.log(error));


    // const promesa = new Promise( ( resolve, reject ) => {

    //   if(!true){
    //     resolve('Hola mundo!');
    //   }

    //     reject('Algo salio mal!');

    // });

    // promesa
    // .then( ( resp ) => {
    //   console.log(resp);
    // })
    // .catch( error => console.log('Error en mi promesa', error))
    // console.log('Fin del init');
  }

  getUsuarios(){

    return new Promise( (resolve, reject) => {

      if( resolve ){
        fetch('https://reqres.in/api/users?page=2')
        .then( resp => resp.json())
        .then( body => resolve(body.data));
        return
      }
       reject([]);
    });


  }

}
