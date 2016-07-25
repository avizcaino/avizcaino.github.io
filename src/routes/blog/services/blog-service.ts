/**
 * Created by alexvizcaino on 18/7/16.
 */
import {IBlogService} from "blog-service";
import {IPost} from "core-module";
import {HttpClient} from "aurelia-fetch-client";
import {autoinject} from "aurelia-dependency-injection";

@autoinject
export class BlogService implements IBlogService{
  constructor(private _http: HttpClient){}

  getPosts(): Promise<IPost[]>{
    return this._http.fetch('../../../../data/posts.json').then(response => {
      return response.text();
    }).then(data => {
      return JSON.parse(data);
    });
  }

  getLatestPosts(nPosts: number): Promise<IPost[]>{
    return this._http.fetch('../../../../data/posts.json').then(response => {
      return response.text();
    }).then(data => {
      let posts = JSON.parse(data);
      return posts.slice(0, nPosts);
    });
  }

  getPost(id: string): Promise<IPost>{
    return this._http.fetch('../../../../data/posts.json').then(response => {
      return response.text();
    }).then(data => {
      let posts = JSON.parse(data);
      return posts.find((post: IPost) => {
        return post.id == id;
      });
    });
  }
}
