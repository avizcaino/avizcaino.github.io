/**
 * Created by alexvizcaino on 13/7/16.
 */
import {autoinject} from "aurelia-dependency-injection";
import {Router} from "aurelia-router";
import {bindable} from "aurelia-templating";
import {DelegateCommand} from "../command/command";

@autoinject
export class NavBar{
  @bindable router: Router;
  public navigateToCommand: DelegateCommand<string>;

  constructor(private _element: Element){
    this.navigateToCommand = new DelegateCommand<string>(this.navigateTo.bind(this));
  }

  navigateTo(route: string){
    this.router.navigate(route);
  }
}
