/**
 * Created by alexvizcaino on 29/7/16.
 */
import {autoinject} from "aurelia-dependency-injection";
import {BlogService} from "../../blog/services/blog-service";
import {IPost} from "core-module";

@autoinject
export class PostList{
  public posts: IPost[];
  constructor(private _blogService: BlogService){}

  activate(){
    return this._blogService.getPosts()
      .then((posts) => {
        this.posts = posts;
      })
  }
}
