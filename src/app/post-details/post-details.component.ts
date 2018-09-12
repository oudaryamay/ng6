import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

	post$: object;

  constructor( private route: ActivatedRoute, private data: DataService ) { 
  this.route.params.subscribe(params => this.post$ = params.id);
  }

  ngOnInit() {
  	this.data.getPost(this.post$).subscribe(
      data => this.post$ = data 
    );
  }

}
