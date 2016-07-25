/**
 * Created by alexvizcaino on 20/7/16.
 */
import {BlogService} from "../services/blog-service";
import {autoinject} from "aurelia-dependency-injection";
import {IPost} from "core-module";
import {Router} from "aurelia-router";

@autoinject
export class Post{
  public post: IPost;
  constructor(private _blogService: BlogService, private _router: Router){}

  activate(params){
    return this._blogService.getPost(params.id).then((post: IPost) => {
      this.post = post;
    });
  }
}
