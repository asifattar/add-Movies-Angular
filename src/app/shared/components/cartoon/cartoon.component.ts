import { Component, Input, OnInit } from '@angular/core';
import { iobj } from '../../models/model';

@Component({
  selector: 'app-cartoon',
  templateUrl: './cartoon.component.html',
  styleUrls: ['./cartoon.component.scss']
})
export class CartoonComponent implements OnInit {

  @Input() dataSend : iobj[] = []


  constructor() { }

  ngOnInit(): void {
  }

}
