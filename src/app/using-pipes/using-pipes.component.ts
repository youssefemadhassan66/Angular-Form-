import { Component } from '@angular/core';

@Component({
  selector: 'app-using-pipes',
  templateUrl: './using-pipes.component.html',
  styleUrl: './using-pipes.component.css'
})
export class UsingPipesComponent {

  title = "Hello from angular";
  name = "ali el saayed ";
  username = "AHMED ALI CLAY ";
  myDATE = new Date
  grade = 140/150;
  price = 22.21545;


  mydata = new Promise((res)=>{
    setTimeout(() => {
      res("data from promise");
      }, 2000);

  })
}
