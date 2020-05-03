import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';
import { data } from '../core/models/data.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  loading : boolean = true;
  item : data ;

  constructor
    (private activatedRoute: ActivatedRoute,
    private detailService: DetailsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        this.getDetail(params.get('id'));
      }
    )
  }

  // Get item information using its ID
  getDetail(id) {
    this.detailService.getDetail(id).subscribe(
      (resp:data) => {
        this.item = resp;
        this.loading = false;
      },
      err => {
        alert(err);
      }
    )
  }

}
