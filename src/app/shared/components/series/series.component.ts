import { Component, Input, OnInit } from '@angular/core';
import { iobj } from '../../models/model';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  @Input() dataSend : Array<iobj> = []


  constructor() { }

  ngOnInit(): void {
  }

}
