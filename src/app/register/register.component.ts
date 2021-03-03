import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterPayment implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.params['id']
   }

  ngOnInit() {
  }

}
