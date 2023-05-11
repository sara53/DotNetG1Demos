import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { ProductsComponent } from './componets/products/products.component';
import { ProductDetailsComponent } from './componets/product-details/product-details.component';
import { ProductFormComponent } from './componets/product-form/product-form.component';
import { NotfoundComponent } from './componets/notfound/notfound.component';
import { ContentComponent } from './componets/content/content.component';
import { NavbarComponent } from './componets/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    NotfoundComponent,
    ContentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
