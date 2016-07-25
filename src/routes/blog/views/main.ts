/**
 * Created by alexvizcaino on 18/7/16.
 */
import {Router, RouterConfiguration} from "aurelia-router";
import {autoinject} from "aurelia-dependency-injection";
import {EventAggregator} from "aurelia-event-aggregator";
import {Events} from "../../../core/events";
import {IPost} from "core-module";

@autoinject
export class Main{
  router: Router;

  constructor(private _ea: EventAggregator){
    this._ea.subscribe(Events.navigateToPost, this.navigateTo.bind(this));
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: ['', 'blog'],  name: 'blog',        moduleId: './blog',        nav: false, title: '' },
      { route: 'post/:id',    name: 'post',        moduleId: './post',        nav: false, title: '' }
    ]);

    this.router = router;
  }

  navigateTo(post: IPost){
    this.router.navigateToRoute('post', {id: post.id});
  }
}
