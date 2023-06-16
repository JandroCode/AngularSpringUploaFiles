import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  constructor(private mediaService:MediaService){}

  upload(event:any){
    const file = event.target.files[0]

    if(file){
      const formData = new FormData()
      formData.append('file', file)

      this.mediaService.uploadFile(formData).subscribe(
        res => {
          console.log("Respuesta" + res)
        }
      )


    }


  }





}
