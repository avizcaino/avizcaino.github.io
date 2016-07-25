import {autoinject, customAttribute, bindable} from 'aurelia-framework';
import {ICommand} from "commands";
import {Disposable} from "aurelia-binding";
@autoinject
@customAttribute('cmd')
export class CommandExtension {
  @bindable parameter:any = null
  @bindable command:ICommand = null
  @bindable eventName:string = 'click'
  @bindable deferred:boolean = false;
  @bindable deferralInterval:number = 25;
  @bindable deferredToParameterChanged:boolean = false;
  @bindable cancelBubble: boolean = true;
  private _isAttached:boolean = false;
  private _executeCommandHandler:any;
  private _parameterChangedDeferralPending:boolean = false;
  private _invalidateCanExecuteSubscription:Disposable;

  constructor(private _element:Element) {
    this._executeCommandHandler = this.executeCommand.bind(this);
  }

  public attached() {

    this._element.addEventListener(this.eventName, this._executeCommandHandler);
    this.updateElementDisabled();
    this._isAttached = true;
  }

  public detached() {

    if (this.command != null) {
      this._element.removeEventListener(this.eventName, this._executeCommandHandler);
    }
    if (this._invalidateCanExecuteSubscription)
      this._invalidateCanExecuteSubscription.dispose();
  }

  public commandChanged(newValue:ICommand) {
    if (this._isAttached) {
      this.updateElementDisabled();

    }
    if (this._invalidateCanExecuteSubscription)
      this._invalidateCanExecuteSubscription.dispose();
    this._invalidateCanExecuteSubscription = this.command ? this.command.subscribeToCanExecuteChanged(() => this.updateElementDisabled()) : null;


  }

  public parameterChanged(newValue:any) {
    if (this._isAttached) {
      this.updateElementDisabled();
      if (this._parameterChangedDeferralPending) {
        this._parameterChangedDeferralPending = false;
        this.executeCommandInner();
      }
    }

  }

  private updateElementDisabled() {
    if (this.deferred) {
      this.defer(() => this.updateElementDisabledInner());
    } else {
      this.updateElementDisabledInner();
    }
  }

  private updateElementDisabledInner() {

    var canExecuteCommand = this.command != null && this.command.canExecute(this.parameter);
    this._element.classList.remove("disabled");

    if (!canExecuteCommand)
      this._element.classList.add("disabled");

    this._element['disabled'] = !canExecuteCommand;
    
  }

  private executeCommand(evt:any) {
    this.cancelEventPropagation(evt);
    if (this.deferred)
      this.defer(() => this.executeCommandInner());
    if (this.deferredToParameterChanged)
      this._parameterChangedDeferralPending = true;
    else if (!this.deferredToParameterChanged)
      this.executeCommandInner();

  }

  private cancelEventPropagation(evt: any){
    if(this.cancelBubble && evt){
      if(evt.stopPropagation)
        evt.stopPropagation();
      evt.cancelBubble = true;
    }
  }

  private defer(callback:any) {
    var handle = setTimeout(() => {
      clearTimeout(handle);
      callback();
    }, this.deferralInterval);
    //this._taskQueue.queueTask(callback);
  }

  private executeCommandInner() {

    if (this.command != null && this.command.canExecute(this.parameter))
      this.command.execute(this.parameter);
  }
}
