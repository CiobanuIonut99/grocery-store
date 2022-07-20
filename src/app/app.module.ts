import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {WeightPipe} from "./shared/weight.pipe";
import {ProductService} from "./product-list/product.service";
import {SaveProductComponent} from "./save-product/save-product.component";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatHeaderRowDef, MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent,
    SaveProductComponent,
    WeightPipe,
    ProductDetailsComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products-edit/:id', component: EditProductComponent},
      {path: 'products/:id', component: ProductDetailsComponent},
      {path: 'save-product', component: SaveProductComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ]),
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
