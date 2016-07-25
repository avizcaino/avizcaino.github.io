import {ICommand} from "commands";
import {Disposable} from "aurelia-binding";
export class DelegateCommandBase implements ICommand{

  private _subscriptions: Array<() => void> = [];
  public execute(argument?){}
  public canExecute(argument?){}
  public invalidateCanExecute(){
    for (let subscription of this._subscriptions)
      subscription();
  }

  public subscribeToCanExecuteChanged(callback: () => void): Disposable{
    this._subscriptions.push(callback);
    return {
      dispose: () => {
        //this.unsubscribe(callback);
      }
    };
  }

  private unsubscribe(callback: () => void){
    let index = this._subscriptions.indexOf(callback);
    if(index > -1)
      this._subscriptions.splice(index, 1);
  }
}

export class DelegateCommandVoid extends DelegateCommandBase{
  protected _execute: () => void;
  protected _canExecute: () => boolean;
  constructor(execute: () => void, canExecute?: () => boolean){
    super();
    this._execute = execute;
    this._canExecute = canExecute;
  }



  public execute(){
    if(this.canExecute())
      this._execute();
  }
  public canExecute(){
    return this._canExecute == null ? true : this._canExecute();
  }

}

export class DelegateCommand<T> extends DelegateCommandBase{
  protected _execute: (T) => void;
  protected _canExecute: (T) => boolean;
  constructor(execute: (T) => void, canExecute?:(T) => boolean ){
    super();
    this._execute = execute;
    this._canExecute = canExecute;
  }
  public execute(arg: T){
    if(this.canExecute(arg))
      this._execute(arg);
  }
  public canExecute(arg: T){
    return this._canExecute == null ? true : this._canExecute(arg);
  }

}
