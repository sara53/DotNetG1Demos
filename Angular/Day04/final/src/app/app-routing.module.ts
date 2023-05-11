import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './componets/content/content.component';
import { LoginComponent } from './componets/login/login.component';
import { ProductsComponent } from './componets/products/products.component';
import { ProductDetailsComponent } from './componets/product-details/product-details.component';
import { ProductFormComponent } from './componets/product-form/product-form.component';
import { NotfoundComponent } from './componets/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'products/:id/edit', component: ProductFormComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
