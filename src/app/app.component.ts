import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CV-Groupe6';
  urllink: string= "assets/images/dad.jpg";


  selectFiles(event:any){
    console.log(event.target.files);
    if (event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload=(event:any)=>{
        console.log(event);
        
        this.urllink=event.target.result
      }
    }
  }
}
