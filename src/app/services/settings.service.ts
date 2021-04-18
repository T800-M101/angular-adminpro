import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

//Obtener el elemento del DOM que cambia el tema
    private linkTheme = document.querySelector('#theme');

  constructor() {
    // Se lee el locaStorage. Si viene vacio se le asigna valor por default
        const url = localStorage.getItem('theme') || "./assets/css/colors/default-dark.css";
    // Se pasa el valor obtenido del localStorage meduante el metodo setAttribute
        this.linkTheme?.setAttribute('href', url);
  }

  changeTheme(theme:string){
    //Se obtiene la ruta donde se cambia el tema y se le pasa el valor que viene del metodo
    const url = `./assets/css/colors/${theme}.css`;
    //Se asigna la ruta al href mediante setAttribute
    this.linkTheme?.setAttribute('href', url);
    //Se guarda en localStorage el temaseleccionado
    localStorage.setItem('theme',url);
    //Checking  theme
    this.checkCurrentTheme();

  }

  checkCurrentTheme():void {

  // Se crea propiedad NodeList<Element> para guardar los elementos del DOM para cambiar el check
  const themeLinks:NodeListOf<Element> = document.querySelectorAll('.selector');;

    themeLinks.forEach( element => {
   // Se remueve la clase 'working' que hace el check
        element.classList.remove('working');
   // Se obtiene el tema del boton presionado
        const btnTheme = element.getAttribute('data-theme');
   // Se forma el url u href del boton presionado
        const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
   // Se obtiene el url u href del tema actual
        const currentTheme = this.linkTheme?.getAttribute('href');
   // Se comparan los url u href
        if(btnThemeUrl === currentTheme){
          element.classList.add('working');
        }

    });

 }



   }


