// 這個文件是 Angular 根模塊，告訴Angular如何組裝應用


// BrowserModule，瀏覽器解析的模塊
import { BrowserModule } from '@angular/platform-browser';
// Angular核心模塊
import { NgModule } from '@angular/core';

// 引入表單相關模塊，才可以使用雙向數據綁定
import { FormsModule } from '@angular/forms';

// 根組件與其他組件
import { AppComponent } from './app.component';


// @NgModule裝飾器：接受一個元數據物件，告訴 Angular 如果編譯和啟動應用
@NgModule({
  declarations: [  // 配置當前項目運行的組件
    AppComponent,
  ],
  imports: [ // 配置當前模塊運行依賴的模塊
    BrowserModule,
    FormsModule
  ],
  providers: [], // 配置項目所需要的服務
  bootstrap: [AppComponent]
  /* 指定應用的主視圖(稱為根組件)，通過引導Angular來啟動應用，這理一般寫的是根組件。*/
})
export class AppModule { }
