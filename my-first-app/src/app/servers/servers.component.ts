import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  // template: `
  //             <app-server></app-server>
  //             <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Created !';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Testaserver', 'Testserver 2'];
  
  constructor() { 
    setTimeout(() => {
      return this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = ' Server Was Created! Name is' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    
  }
}
