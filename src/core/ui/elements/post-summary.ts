/**
 * Created by alexvizcaino on 20/7/16.
 */
import {bindable} from "aurelia-templating";
import {DelegateCommand} from "../command/command";
import {IPost} from "core-module";
import {IUserInfo} from "core-module";
import {autoinject} from "aurelia-dependency-injection";
import {EventAggregator} from "aurelia-event-aggregator";
import {Events} from "../../events";

@autoinject
export class PostSummary{
  @bindable post;

  public readPostCommand: DelegateCommand<IPost>;
  public openProfileCommand: DelegateCommand<IUserInfo>;

  constructor(private _ea: EventAggregator){
    this.readPostCommand = new DelegateCommand<IPost>(this.readPost.bind(this));
    this.openProfileCommand = new DelegateCommand<IUserInfo>(this.openProfile.bind(this));
  }

  readPost(post: IPost){
    this._ea.publish(Events.navigateToPost, post);
  }

  openProfile(user: IUserInfo){}
}
