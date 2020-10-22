import { Injectable } from '@angular/core';
import { Product } from './Product';
import { Sanpham } from'./model/Sanpham';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  api = 'https://5f74b61d1cf3c900161cd6bd.mockapi.io';
  private baseUrl = 'http://localhost:8080/';
  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api}/trang`);
  }

  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/trang/${id}`)
  }

  getProductskhuyenmai(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api}/khuyenmai`);
  }

  getProductsbanchay(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api}/banchay`);
  }
  getProductsmoi(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api}/sanphammoi`);
  }

  getSanpham(){
    return this.http.get(this.baseUrl+"getSanpham");
  }

  getSanphamId(Product_id : number):Observable<any>{
    return this.http.get(this.baseUrl+"getSanpham/"+Product_id);
  }

}
