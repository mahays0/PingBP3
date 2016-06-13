import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FrontendAppComponent } from '../app/frontend.component';
import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';


beforeEachProviders(() => [
  FrontendAppComponent,
  ROUTER_FAKE_PROVIDERS
]);

describe('App: Frontend', () => {
  it('should create the app',
      inject([FrontendAppComponent], (app: FrontendAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'frontend works!\'',
      inject([FrontendAppComponent], (app: FrontendAppComponent) => {
    expect(app.title).toEqual('seed works successfully');
  }));
});
