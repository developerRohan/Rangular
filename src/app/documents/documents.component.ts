import { Component } from '@angular/core';
import { Document } from './document'

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
}) 

export class DocumentsComponent{

  documents: Document[];

  constructor(){
    this.documents = [
      {
        title:"first title",
        description:"first description",
        file_url:"http://google.com",
        updated_at:"11/02/18",
        image_url:"https://www.breadandbuttermarketing.com.au/wp-content/uploads/2016/04/Freelancer.jpg"
      },
      {
        title:"second title",
        description:"second description",
        file_url:"http://google.com",
        updated_at:"11/02/18",
        image_url:"https://www.breadandbuttermarketing.com.au/wp-content/uploads/2016/04/Freelancer.jpg"
      },
      {
        title:"third title",
        description:"third description",
        file_url:"http://google.com",
        updated_at:"11/02/18",
        image_url:"https://www.breadandbuttermarketing.com.au/wp-content/uploads/2016/04/Freelancer.jpg"
      }
    ];
  }
}