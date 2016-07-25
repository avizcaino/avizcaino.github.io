/**
 * Created by alexvizcaino on 18/7/16.
 */
import {ICredentials} from "core-module";
import {autoinject} from "aurelia-dependency-injection";
import {HttpClient} from "aurelia-fetch-client";

@autoinject
export class LoginService{
  constructor(private _http: HttpClient){}

  validateCredentials(credentials: ICredentials): Promise<boolean>{
    return this._http.fetch('../../../data/credentials.json').then(response => {
      return response.text();
    }).then((data) => {
      let validCredentials: boolean = false;
      let parsedData: ICredentials[] = JSON.parse(data);
      for(let i = 0; i < parsedData.length; i++){
        if(parsedData[i].username == credentials.username && parsedData[i].password == credentials.password){
          validCredentials = true;
          break;
        }
      }
      return validCredentials;
    });
  }
}
