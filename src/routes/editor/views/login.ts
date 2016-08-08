/**
 * Created by alexvizcaino on 18/7/16.
 */
import {DelegateCommand} from "../../../core/ui/command/command";
import {autoinject} from "aurelia-dependency-injection";
import {ObserverLocator} from "aurelia-binding";
import {LoginService} from "../../../core/services/login-service";
import {Router} from "aurelia-router";

@autoinject
export class Login{
  public username: string;
  public password: string;
  public loginError: string;

  public accessCommand: DelegateCommand<any>;

  constructor(private _ol: ObserverLocator, private _loginService: LoginService, private _router: Router){
    this.accessCommand = new DelegateCommand<any>(this.access.bind(this), this.canExecuteAccess.bind(this));
    this._ol.getObserver(this, 'username').subscribe(this.inputChange.bind(this));
    this._ol.getObserver(this, 'password').subscribe(this.inputChange.bind(this));
  }

  inputChange(newInputValue: string) {
    this.accessCommand.invalidateCanExecute();
  }

  access(){
    this._loginService.validateCredentials({username: this.username, password: this.password}).then(validLogin => {
      if(validLogin)
        this._router.navigate('admin');
      else
        this.loginError = 'message--login-error';
    })
  }

  canExecuteAccess(){
    return this.username != null && this.password != null && this.username != '' && this.password != '';
  }
}
