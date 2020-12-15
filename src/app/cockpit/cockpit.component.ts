import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  // use ViewChild decorator; newServerContent is now of type ElementRef (a reference to an element, not the element itself)
  @ViewChild('serverInputContent', {static: true}) newServerContentChild: ElementRef;

  // required to enable other components to execute their methods when a cockpit method/event has occurred
  // the EventEmitter effectively casts the property as an event
  // the @Output decorator passess data from child to parent (cockpit to app; compare to @Input which passes from parent to child)
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  
  constructor() {
   }

  ngOnInit(): void {
    // use a ViewChild to access template data from TS, in this case, without methods or events
    // general advice is not to change template values with ViewChild, just access them
    console.log("ViewChild: " + this.newServerContentChild);
    console.log("ViewChild value: " + this.newServerContentChild.nativeElement.value);
  }

  onAddServer(newServerName) {
    // this time we pass the local reference, serverNameInput and its assoc. properties
    // newServerName is actually the entire (in this case) input element properties
    console.log("Received input: " + newServerName);
    console.log("Received input value: " + newServerName.value);

    // when onAddServer() is run/clicked, the serverCreated property is initialised with the supplied property values
    // serverCreated is then sent (emitted) to the parent, app, as an event serverCreated
    // this event, like (click) triggers app's onServerAdded($event) and ultimately updates app's array serverElements
    // (the array contents are then listed in app HTML)
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }

  // note how the alias to onAddBlueprint() differentiates the emitter from the local method
  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }
}
