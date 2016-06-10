import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { FrontendAppComponent, environment } from './app/';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { provide} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

if (environment.production) {
  enableProdMode();
}

bootstrap(FrontendAppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  // Use the HashLocationStrategy instead of the default PathLocationStrategy which does HTML5
  // pushstate. With HashLocationStrategy the root doc is always requested from the server. If
  // we wrote a Servlet that served index.html regardless of the sub path requested we could
  // switch back.
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
