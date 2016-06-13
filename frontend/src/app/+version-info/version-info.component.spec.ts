import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { VersionInfoComponent } from './version-info.component';
import { HTTP_PROVIDERS } from '@angular/http';
import {VersionService} from "../version.service";


describe('Component: VersionInfo', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    VersionInfoComponent,
    HTTP_PROVIDERS,
    VersionService
  ]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([VersionInfoComponent],
      (component: VersionInfoComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(VersionInfoComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(VersionInfoComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-version-info></app-version-info>
  `,
  directives: [VersionInfoComponent]
})
class VersionInfoComponentTestController {
}

