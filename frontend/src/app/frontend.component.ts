import { Component } from '@angular/core';
import { VersionInfoComponent } from './+version-info';
import { Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'frontend-app',
  templateUrl: 'frontend.component.html',
  styleUrls: ['frontend.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/version-info', component: VersionInfoComponent}
])
export class FrontendAppComponent {
  title = 'seed works successfully';

  constructor(private _router: Router){ }
}
