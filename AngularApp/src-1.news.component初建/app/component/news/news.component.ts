import { Component,OnInit } from '@angular/core';

@Component({
  selector:'app-news',
  templateUrl:'./news.component.html',
  styleUrls:['./news.component.css']
})

export class NewsComponent implements OnInit{
  msg = '這是新聞組件';
  constructor(){

  }

  ngOnInit(){
    
  }

}