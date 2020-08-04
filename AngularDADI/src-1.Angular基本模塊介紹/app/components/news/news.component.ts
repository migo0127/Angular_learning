import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {
  title:string = '發票中獎！';
  constructor() { }

  ngOnInit(): void {
  }

}
