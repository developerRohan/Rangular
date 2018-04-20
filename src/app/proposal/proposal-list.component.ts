import { Component } from '@angular/core';
import { Proposal } from './proposal';


@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})

export class ProposalListComponent{

  proposalOne: Proposal = new Proposal(15,'ABC company','http:google.com',"ruby on rails",150,120,15,"rohan34@gmail.com")
  proposalTwo: Proposal = new Proposal(16,'ABC company','http:google.com',"ruby on rails",150,120,15,"rohan23@gmail.com")
  proposalThree: Proposal = new Proposal(17,'ABC company','http:google.com',"ruby on rails",150,120,15,"rohan12@gmail.com")

  proposals: Proposal[] = [this.proposalOne,this.proposalTwo,this.proposalThree]
}