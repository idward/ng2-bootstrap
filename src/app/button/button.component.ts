import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  checkModel:Object = {left: false, middle: true, right: false};

  constructor() {
  }

  ngOnInit() {
  }

}
