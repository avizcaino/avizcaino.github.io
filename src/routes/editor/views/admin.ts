/**
 * Created by alexvizcaino on 18/7/16.
 */
import {Router} from "aurelia-router";
import {RouterConfiguration} from "aurelia-router";

export class Admin{
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: 'new-post',    name: 'new-post',        moduleId: './new-post',        nav: false, title: 'New Post' },
      { route: ['','posts'],  name: 'posts',           moduleId: './post-list',       nav: false, title: 'Posts' }
    ]);

    this.router = router;
  }

  navigateTo(route: string){
    this.router.navigate(route);
  }
}
