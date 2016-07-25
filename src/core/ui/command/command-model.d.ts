
/**
 * Created by dpina on 13/4/2016.
 */
declare module 'commands'{
  import {Disposable} from "aurelia-binding";
  export interface ICommand{
    execute(argument?);
    canExecute(argument?);
    invalidateCanExecute();
    subscribeToCanExecuteChanged(callback: () => void): Disposable;
  }
}
