import { Component } from '@angular/core';
import { Document } from './document'

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
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
        image_url:"http://google.com"
      },
      {
        title:"second title",
        description:"second description",
        file_url:"http://google.com",
        updated_at:"11/02/18",
        image_url:"http://google.com"
      },
      {
        title:"third title",
        description:"third description",
        file_url:"http://google.com",
        updated_at:"11/02/18",
        image_url:"http://google.com"
      }
    ];
  }
}