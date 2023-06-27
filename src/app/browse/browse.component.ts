import { Component,OnInit } from '@angular/core';
import { SchoolsListService } from 'src/services/schools-list.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  sortToggle:boolean=true;
  pList:any[]=[]
  totalProducts:number=0;
  constructor(private produlist:SchoolsListService){}

  ngOnInit(): void {

  //  this.produlist.countSubject.subscribe((response)=>{
  //    this.totalProducts=response;
  //    console.log(response)
  //  })

   this.produlist.getproductsList().subscribe((response)=>{
    this.totalProducts=response.length;
    console.log(response)
  })

    this.produlist.getproductsList().subscribe((response)=>{
      this.pList=response;
      // for (const x of this.pList) {
      //   this.totalProducts++;

      // }
      // console.log(this.totalProducts)
    } )
    
  }
}
