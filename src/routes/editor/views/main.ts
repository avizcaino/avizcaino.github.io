/**
 * Created by alexvizcaino on 18/7/16.
 */
import {Router} from "aurelia-router";
import {RouterConfiguration} from "aurelia-router";

export class Editor{
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: ['', 'login'],  name: 'login',        moduleId: './login',        nav: false, title: 'Login' },
      { route: 'admin',        name: 'admin',        moduleId: './admin',        nav: false, title: 'Admin' }
    ]);

    this.router = router;
  }
}
