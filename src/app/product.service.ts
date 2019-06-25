import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductModel } from "./ProductModel";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  baseurl: string = "http://localhost:3000/";

  getAllProducts(): Observable<any> {
    return this.http.get<ProductModel[]>(this.baseurl + "products");
  }

  getProductById(id: string) {
    return this.http.get<ProductModel>(this.baseurl + "products" + "/" + id);
  }

  addProduct(product: ProductModel) {
    return this.http.post(this.baseurl + "products", product);
  }

  deleteProduct(id: string) {
    return this.http.delete(this.baseurl + "products" + "/" + id);
  }

  updateProduct(product: ProductModel) {
    return this.http.put(
      this.baseurl + "products" + "/" + localStorage.getItem("productId"),
      product
    );
  }
}
