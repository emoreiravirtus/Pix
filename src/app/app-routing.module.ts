import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPayment } from './register/register.component';
import { Payments } from './payments/payments.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterPayment
  },
  {
    path: 'payments',
    component: Payments
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
