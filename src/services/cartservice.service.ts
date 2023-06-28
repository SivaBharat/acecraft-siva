import { Injectable } from '@angular/core';
import { cartDesc } from 'src/models/schools-list';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  url:string='';
  cartUrl='http://localhost:3000/cart'

  constructor(private http:HttpClient) {
    this.url=this.cartUrl+'/';  
   }

  //  added from the product component
   addToCart(product:cartDesc){
    this.http.post<cartDesc[]>(this.cartUrl,product).subscribe((data)=>{
      console.log("added to the cart"+data);
    })
   }


  //  retrieving the cart data
   getFromCart(){
    return this.http.get<cartDesc[]>(this.cartUrl);
   }

   //remove from cart
   removeFromCart(item:any){
    return this.http.delete(this.url+item.id)
   }
}
