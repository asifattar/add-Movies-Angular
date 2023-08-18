import { Component, Input, OnInit } from '@angular/core';
import { iobj } from '../../models/model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {


  // @Input() MoviesArray : Array<iobj> = []
  @Input() dataSend : Array<iobj> = []


  
  
  constructor() { }
  
  ngOnInit(): void {

    
  }

}
