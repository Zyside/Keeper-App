import { Component, Input } from '@angular/core';

// import { TablesComponent } from "./tables-components.ts";

@Component({
  selector: 'tables-component',
  templateUrl: 'tables.components.html'
})
export class TablesComponent {

  @Input('data') data: TablesComponent;

  constructor() {}

}
