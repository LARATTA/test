import { Component } from '@angular/core';

@Component({
  selector: 'videojuegos',
  templateUrl: './videojuegos.component.html'
})

export class VideojuegosComponent {
  public nombre:string;
  public top_juego:string;
  public old_top_juego:string;
  public show_old_juego:boolean;
  public year:number;
  public videojuegos:Array<string>;

  constructor(){
  		this.nombre 		= 'stored games';
  		this.top_juego 		= 'Heroes of the Storm';
  		this.old_top_juego 	= 'Xevious 3D';
  		this.show_old_juego = true;
  		this.year 			= 2018;
  		this.videojuegos 	= [
		  	'Pro Evolution Soccer',
		  	'Black Tiger',
		  	'League of Legends',
		  	'NFS Porsche'
		];
  }

}
