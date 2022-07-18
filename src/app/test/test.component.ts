import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>
              Sandeep is learning<br/>
              he is trying to complete asap
          </div>`,
  styles:[`
    div{
  color:red;
}
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
