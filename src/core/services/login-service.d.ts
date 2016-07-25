/**
 * Created by alexvizcaino on 18/7/16.
 */
declare module 'login-service'{
  import {ICredentials} from "core-module";
  export interface ILoginService{
    validateCredentials(credentials: ICredentials): Promise<boolean>;
  }
}
