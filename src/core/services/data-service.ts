/**
 * Created by alexvizcaino on 18/7/16.
 */
import {IDataService} from "data-service";
import {IUserInfo} from "core-module";
import {HttpClient} from "aurelia-fetch-client";
import {autoinject} from "aurelia-dependency-injection";

@autoinject
export class DataService implements IDataService{
  constructor(private _http: HttpClient){}

  getUserData():Promise<IUserInfo>{
    return this._http.fetch('../../../data/user-info.json').then(response => {
      return response.text();
    }).then(data => {
      return JSON.parse(data);
    });
  }
}
