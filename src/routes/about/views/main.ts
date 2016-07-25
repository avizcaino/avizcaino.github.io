/**
 * Created by alexvizcaino on 18/7/16.
 */
import {autoinject} from "aurelia-dependency-injection";
import {DataService} from "../../../core/services/data-service";
import {IUserInfo} from "core-module";

@autoinject
export class About{
  public userInfo: IUserInfo;
  constructor(private _dataService: DataService){}

  activate(){
    return this._dataService.getUserData().then(response => {
      this.userInfo = response;
    });
  }
}
