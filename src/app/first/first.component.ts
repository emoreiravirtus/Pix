import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.params['id']
   }

  ngOnInit() {
  }

}
