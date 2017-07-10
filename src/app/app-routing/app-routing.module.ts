import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {AlertModule} from "ngx-bootstrap";

import {AlertComponent} from "../alert/alert.component";
import {ButtonComponent} from "../button/button.component";
import {ModalComponent} from "../modal/modal.component";
import {PopoverComponent} from "../popover/popover.component";

const routes:Routes = [
  {path: 'alert', component: AlertComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'modal', component: ModalComponent},
  {path: 'popover', component: PopoverComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot()
  ],
  exports: [RouterModule],
  declarations: [AlertComponent, ButtonComponent, ModalComponent, PopoverComponent]
})
export class AppRoutingModule {
}
