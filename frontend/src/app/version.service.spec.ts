import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { HTTP_PROVIDERS } from '@angular/http';

import { VersionService } from './version.service';

describe('Version Service', () => {
  beforeEachProviders(() => [
    VersionService,
    HTTP_PROVIDERS
  ]);

  it('should ...',
      inject([VersionService], (service: VersionService) => {
    expect(service).toBeTruthy();
  }));
});
