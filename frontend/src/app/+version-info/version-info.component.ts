import { Component, OnInit } from '@angular/core';
import {VersionService} from "../version.service";
import {VersionInfo} from "../model/generated";

@Component({
  moduleId: module.id,
  selector: 'app-version-info',
  templateUrl: 'version-info.component.html',
  styleUrls: ['version-info.component.css'],
  providers: [VersionService]
})
export class VersionInfoComponent implements OnInit {

  private versionInfo:VersionInfo;
  
  constructor(private _versionService:VersionService) {}

  ngOnInit() {
    this._versionService.getVersion().subscribe(
      versionInfo => this.versionInfo = versionInfo 
    );
  }

}
