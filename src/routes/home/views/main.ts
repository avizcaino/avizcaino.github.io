import {autoinject} from "aurelia-dependency-injection";
import {BlogService} from "../../blog/services/blog-service";
import {IPost} from "core-module";

@autoinject
export class Home {
  public latestPosts: IPost[];
  constructor(private _blogService: BlogService){}

  activate(){
    return this._blogService.getLatestPosts(3).then((posts: IPost[]) => {
      this.latestPosts = posts;
    });
  }
}
