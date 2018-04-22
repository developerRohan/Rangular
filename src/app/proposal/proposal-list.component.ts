import { Component,OnInit } from '@angular/core';
import { Proposal } from './proposal'
import { Observable } from 'rxjs/RX';
import { ProposalService } from './proposal.service'

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css'],
  providers: [
    ProposalService
  ]
}) 

export class ProposalListComponent{

  proposals: Proposal[];
  errorMessage:string;
  
  constructor(
    private proposalService: ProposalService
  ){}

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getProposals())
  }

  getProposals() {
    this.proposalService.getProposals()
                        .subscribe(
                          prposals => this.proposals = prposals,
                          error => this.errorMessage = <any>error
                        )

  }
}