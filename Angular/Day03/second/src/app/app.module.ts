import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent } from './components/content/content.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: '', component: LoginComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentComponent,
    ProductsComponent,
    ProductDetailsComponent,
  ],
  imports: [RouterModule.forRoot(routes), BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
