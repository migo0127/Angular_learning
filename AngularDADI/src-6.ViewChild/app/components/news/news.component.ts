import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {


  /*
  ● Angular獲取DOM操作方式：
    一、透過原生JS獲取DOM方式之一：
      1-1.標籤中未有Angular指令時，可直接於ngOnInit()獲取
      1-2.標籤中含有Angular指令時，需透過ngAfterViewInit()獲取。

      ※ ngOnInit() vs ngAfterViewInit()：
        - ngOnInit()：指加載完Angular指令與組件，並非DOM加載完。
        - ngAfterViewInit()：指視圖(整個DOM)加載完。

    二、Angular獲取DOM節點的方式之二：
      - ViewChild可以獲取DOM節點。
      - ViewChild也可使父組件使用子組件的方法。

      1.html中給DOM起一個名字。
        <div #myBox></div>

      2.在當前模塊中引入ViewChlid。
        import {} from '@angular/core';

      3.寫在類裡面並聲明變量及類型。
        @ViewChild('myBox') myBox:any;

      4.ngAfterViewInit()生命週期函數中獲取DOM
        ngAfterViewInit(){
          this.myBox.nativeElement.xxx(屬性名) = "屬性值";
        }
  */ 
  @ViewChild('myBox') myBox:any;

  // 獲取子組件header實例
  @ViewChild('header') header:any;

  public string:string = '';

  constructor() { }

  ngOnInit(): void {    
  }

  ngAfterViewInit() : void {
    console.log(this.myBox.nativeElement);
    // <div _ngcontent-uyq-c42="">myBox，透過ViewChild獲取DOM節點</div>

    console.log(this.myBox.nativeElement.innerHTML);
    // myBox，透過ViewChild獲取DOM節點
    
    console.log("clientHeight",this.myBox.nativeElement.clientHeight);
    // 19

    console.log("offsetHeight",this.myBox.nativeElement.offsetHeight);
    // 19
    
  }

  // 執行子組件裡的方法run()
    getChildRun(){
      this.header.run();
      console.log(this.header);
      console.log(this.header.str);
      this.string = this.header.str;      
    }
}
