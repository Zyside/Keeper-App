import { Component, Input } from '@angular/core';

// import { TablesComponent } from "./tables.ts";

@Component({
  selector: 'tables-component',
  templateUrl: 'tables.html'
})
export class TablesComponent {
arrs:Object[]=[{
  nubmer:1
},
  {
    nubmer:2
  },
  {
    nubmer:3
  }];
  @Input('data') data: TablesComponent;

  constructor() {}

}
