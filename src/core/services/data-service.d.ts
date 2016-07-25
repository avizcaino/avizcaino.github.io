/**
 * Created by alexvizcaino on 18/7/16.
 */
declare module 'data-service'{
  import {IUserInfo} from "core-module";
  export interface IDataService{
    getUserData(): Promise<IUserInfo>;
  }
}
