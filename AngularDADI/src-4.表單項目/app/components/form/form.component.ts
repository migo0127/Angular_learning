import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  public peopleInfo:any = {
    username :'',
    sex :'1',
    citylist : ['台北','台中','金門'],
    city : '',
    hobby : [
      {
        title :'籃球',
        checked:false
      },
      {
        title :'程式',
        checked:false
      },
      {
        title :'數學',
        checked:false
      }
    ],
    textarea : ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  getDate(){
    console.log(this.peopleInfo);    
  }

}
