import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterPayment implements OnInit {

  id: string;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    bank: new FormControl('', Validators.required),
    pixKey: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    paymentDate: new FormControl('', Validators.required),
    description: new FormControl('')
  })

  onSubmit(){
    console.log(this.form.value)
    this.form.reset()
  }

  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.params['id']
   }

  ngOnInit() {
  }

}
