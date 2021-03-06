import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ListProductsComponent } from "./list-products/list-products.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

const routes: Routes = [
  { path: "add-product", component: AddProductComponent },
  { path: "edit-product", component: EditProductComponent },
  { path: "product/:id", component: ProductDetailsComponent },
  { path: "", component: ListProductsComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
