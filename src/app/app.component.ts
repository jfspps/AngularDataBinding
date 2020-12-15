import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // populate the array for demo purposes
  serverElements = [{type: 'server', name: 'TestServer', content: 'Testing....'}];

  // these are triggered when a server or blueprint are created by app-cockpit
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeHeader(){
    if (this.serverElements.length > 0){
      this.serverElements[0].name = "Header changed";
      console.log("onChangeFirstServerName() called")
    } else {
      console.log("No servers remaining");
    }
  }

  onDeleteServer(){
    if (this.serverElements.length > 0){
      this.serverElements.splice(0, 1);
    } else {
      console.log("No servers remaining");
    }
  }
}
