import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { VersionService } from './version.service';

describe('Version Service', () => {
  beforeEachProviders(() => [VersionService]);

  it('should ...',
      inject([VersionService], (service: VersionService) => {
    expect(service).toBeTruthy();
  }));
});
