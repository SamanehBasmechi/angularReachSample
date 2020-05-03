import { Component, OnInit } from '@angular/core';
import { InformationListService } from './information-list.service';
import { data } from '../core/models/data.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-list',
  templateUrl: './information-list.component.html',
  styleUrls: ['./information-list.component.scss']
})
export class InformationListComponent implements OnInit {

  data: data[];
  loading: boolean = true;
  
  constructor(private api: InformationListService,
    private router:Router) { }

  // This method is called when calling this component
  ngOnInit() {
  this.getData();
  }

  // Get data to show the user
  getData(){
    this.api.getData().subscribe(
      (resp: data[]) => {
        this.data = resp;
        this.loading = false;
      },
      err => {
        alert(err);
      }
    )
  }

  // When the user clicks on an item, the method is redirected to the new page and sees the full information.
  showDetails(id:number){
    this.router.navigate(['./details' , id]);
  }
}
