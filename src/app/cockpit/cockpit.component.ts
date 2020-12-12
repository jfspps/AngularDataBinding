import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  // required to enable other components to execute their methods when a cockpit method/event has occurred
  // the EventEmitter effectively casts the property as an event
  // the @Output decorator passess data from child to parent (cockpit to app; compare to @Input which passes from parent to child)
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
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
