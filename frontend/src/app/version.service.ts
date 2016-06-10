import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {VersionInfo} from "./model/generated";
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class VersionService {

  private versionUrl = "service/version";

  constructor (private http: Http) {}

  getVersion(): Observable<VersionInfo> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .get(this.versionUrl, {headers: headers})
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response): VersionInfo {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body;
  }

  private handleError (error: any) {
    let errMsg = error.message || 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
