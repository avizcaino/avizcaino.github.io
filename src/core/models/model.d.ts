/**
 * Created by alexvizcaino on 18/7/16.
 */
declare module "core-module"{
  export interface IUserInfo{
    id: string;
    name: string;
    phone: string;
    mail: string;
    pic: string;
  }

  export interface ICredentials{
    username: string;
    password: string;
  }

  export interface IPost{
    id: string;
    title: string;
    image: string;
    editor: IUserInfo;
    date: string;
    content: string;
    subject: string;
  }
}

