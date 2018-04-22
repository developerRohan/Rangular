import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
  moduleId: module.id,
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html',
  providers: [ProposalService]
})

export class ProposalShowComponent implements OnInit {
  // id:number;
  // route_id:any;

  proposal: Proposal[];

  constructor(
    private http: Http,
    private proposalService: ProposalService,
    private route: ActivatedRoute
  )  {}

  // ngOnInit():void{
  //   this.route_id = this.route.params.subscribe(
  //     params =>{
  //       this.id = +params['id'];
  //     }
  //   )
  // }

  ngOnInit(): void {
    let proposalRequest = this.route.params
         .flatMap((params: Params) =>
           this.proposalService.getProposal(+params['id']));
    proposalRequest.subscribe(response => this.proposal = response.json());
  }
}