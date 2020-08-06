import { Component, OnInit } from '@angular/core';
import { sanitizeIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.sass']
})
export class TransitionComponent implements OnInit {

  public flag:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowAside(){
    this.flag = !this.flag;

    let aside:any = document.querySelector('.sider');
    aside.style.transform = this.flag ? 'translate(0,0)':'translate(100%,0)';
    // if(this.flag){
    //   aside.style.transform = 'translate(0,0)';
      
    //   console.log(this.flag);
    // }else{      
    //   aside.style.transform = 'translate(100%,0)';
    // }
  }

}
