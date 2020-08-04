// 這個文件是 Angular 根模塊，告訴Angular如果組裝應用


// BrowserModule，瀏覽器解析的模塊
import { BrowserModule } from '@angular/platform-browser';
// Angular核心模塊
import { NgModule } from '@angular/core';

// 根組件與其他組件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';

// @NgModule裝飾器：接受一個元數據物件，告訴 Angular 如果編譯和啟動應用
@NgModule({
  declarations: [  // 配置當前項目運行的組件
    AppComponent,
    NewsComponent
  ],
  imports: [ // 配置當前模塊運行依賴的模塊
    BrowserModule
  ],
  providers: [], // 配置項目所需要的服務
  bootstrap: [AppComponent] /* 指定應用的主視圖(稱為根組件)，通過引導Angular來啟動應用，這理一般寫
                               的是根組件。*/
})
export class AppModule { }
