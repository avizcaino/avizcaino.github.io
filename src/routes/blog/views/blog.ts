/**
 * Created by alexvizcaino on 20/7/16.
 */
import {IPost} from "core-module";
import {BlogService} from "../services/blog-service";
import {autoinject} from "aurelia-dependency-injection";

@autoinject
export class Blog{
  public posts: IPost[];

  constructor(private _blogService: BlogService){}

  activate(){
    return this._blogService.getPosts().then((posts: IPost[]) => {
      this.posts = posts;
    });
  }
}
