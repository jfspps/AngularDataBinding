import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';

  // Instead of using String properties (newServerName and newServerContent) use @ViewChild decorator
  // newServerContent is now of type ElementRef (a reference to an element, not the element itself)
  // add { static: true } as a second parameter to the decorator if this property is handled in ngOnInit()
  @ViewChild('serverNameInput') newServerNameChild: ElementRef;
  @ViewChild('serverInputContent') newServerContentChild: ElementRef;

  // required to enable other components to execute their methods when a cockpit method/event has occurred
  // the EventEmitter effectively casts the property as an event
  // the @Output decorator passess data from child to parent (cockpit to app; compare to @Input which passes from parent to child)
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // here, blueprintCreated is given an external alias, bpCreated
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName, serverContent) {
    // this time we pass the local reference, serverNameInput and its assoc. properties
    // newServerName is actually the entire (in this case) input element properties
    console.log("Received input: " + serverName);
    console.log("Received name: " + serverName.value);
    console.log("Received content: " + serverContent.value)

    // when onAddServer() is run/clicked, the serverCreated property is initialised with the supplied property values
    // serverCreated is then sent (emitted) to the parent, app, as an event serverCreated
    // this event, like (click) triggers app's onServerAdded($event) and ultimately updates app's array serverElements
    // (the array contents are then listed in app HTML)
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: serverContent.value
    })
  }

  // note how the alias to onAddBlueprint() differentiates the emitter from the local method
  onAddBlueprint(serverName, serverContent) {
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: serverContent.value
    })
  }
}
