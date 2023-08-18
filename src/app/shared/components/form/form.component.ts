import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { igenreCtg, iobj } from '../../models/model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  @Output() getData : EventEmitter<iobj[]> = new EventEmitter<iobj[]>()

  dataArray : Array<iobj> = []

  constructor() { }

  ngOnInit(): void {
  }

  onClick(titleVal : HTMLInputElement,
          imgUrlVal : HTMLInputElement,
          releaseDateVal : HTMLInputElement,
          ratingVal : HTMLInputElement,
          selectedGenre : HTMLSelectElement ,
          genrectg : igenreCtg
) : void{

  this.getData.emit(this.dataArray)


      let obj : iobj = {
      title : titleVal.value,
      imgUrl : imgUrlVal.value,
      releaseDate : releaseDateVal.value,
      ratings : ratingVal.value,
      selectedGenre : selectedGenre.value,
      genre : genrectg
    }

    this.dataArray.push(obj)

    console.log(this.dataArray);

    titleVal.value = '';
    imgUrlVal.value = '';
    releaseDateVal.value = '';
    ratingVal.value = '';
    selectedGenre.value = '';
    selectedGenre.selectedIndex = 0
  }


}
