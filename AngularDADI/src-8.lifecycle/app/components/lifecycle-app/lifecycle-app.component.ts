import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-app',
  templateUrl: './lifecycle-app.component.html',
  styleUrls: ['./lifecycle-app.component.sass']
})
export class LifecycleAppComponent implements OnInit {

  public title:string = '我是lifecycleApp(父)的title';
  public flag = true;

  // constructor() { }

  // ngOnInit(): void {
  // }

  constructor() {

    console.log('00.constructor：構造函數執行了---除了使用簡單的值對部份變量進行初始化之外，其它什麼都不應該做！');

   }

   ngOnChanges(): void{

     console.log('01.ngOnChanges：ngOnChanges執行了---當被綁定的輸入屬性值發生變化時調用(父子組件傳值時會觸發！！)');

   }

  ngOnInit(): void {

    console.log('02.ngOnInit：ngOnInit執行了---請求數據一般放在這個裡面');

  }

  ngDoCheck(): void {

    console.log('03.ngDoCheck：ngDoCheck執行了---檢側並在發生 Angular 無法或不願意自己檢測的變化時做出反應');

  }

  ngAfterContentInit(): void {

    console.log('04.ngAfterContentInit：ngAfterContentInit執行了---當把內容投影進組件後調用');

  }

  ngAfterContentChecked(): void {

    console.log('05.ngAfterContentChecked：ngAfterContentChecked執行了---每次完成被投影的組件內容變更檢測後調用');

  }

  ngAfterViewInit(): void {

    console.log('06.ngAfterViewInitng：AfterViewInit執行了---初始化完組件視圖及其子視圖後調用(DOM操作放在這個裡面！！');

  }

  ngAfterViewChecked(): void {

    console.log('07.ngAfterViewChecked：ngAfterViewChecked執行了---每次做完組組件視圖和子視圖的變更檢測後調用');

  }

  ngOnDestroy(): void {

    console.log('08.ngOnDestroy：ngOnDestroy執行了！！');

  }


  changeFlag(){
    this.flag = !this.flag;
  }

}
