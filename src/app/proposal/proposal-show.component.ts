import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Proposal } from './proposal';


@Component({
  moduleId: module.id,
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html'
})

export class ProposalShowComponent implements OnInit {
  id:number;
  route_id:any;

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit():void{
    this.route_id = this.route.params.subscribe(
      params =>{
        this.id = +params['id'];
      }
    )
  }
}