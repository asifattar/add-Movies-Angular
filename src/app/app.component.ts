import { Component } from '@angular/core';
import { iobj } from './shared/models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies-album-songs';




   dataBase : iobj [] = []
   MoviesArray : iobj [] = []
   WebseriesArray : iobj [] = []
   CartoonArray : iobj [] = []






  OndataRecive( data : iobj[] ){
    
    this.dataBase = data
    this.MoviesArray = data.filter( m => m.genre.toLowerCase().trim().includes('movie'));
    this.WebseriesArray = data.filter( m => m.genre.toLowerCase().trim().includes('web-series'));
    this.CartoonArray = data.filter( m => m.genre.toLowerCase().trim().includes('cartoon'));
    
    
    
    
    console.log(this.MoviesArray);
    console.log(this.WebseriesArray);
    console.log(this.CartoonArray);

  }







}
