import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // grants access to an object with the following properties (ultimately mimics a server-element)
  // @Input decorator needed to enable access to 'element' property from outside ServerElementComponent
  // @Input passes data from parent to child (app to server-element)
  @Input() element: {type: string, name: string, content: string};

  // it is also possible to set an alias to element for other components to refer to, using
  // @Input('propertyName') element: {type: string, name: string, content: string};
  // 'element' works in this class and 'propertyName' works outside of this class/component

  constructor() { }

  ngOnInit(): void {
  }
}