import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {WeightPipe} from "./shared/weight.pipe";
import {ProductService} from "./product-list/product.service";


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent,
    WeightPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
