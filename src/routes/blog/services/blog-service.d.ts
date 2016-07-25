/**
 * Created by alexvizcaino on 18/7/16.
 */
declare module "blog-service"{
  import {IPost} from "core-module";
  export interface IBlogService{
    getPosts(): Promise<IPost[]>;
    getLatestPosts(nPosts: number): Promise<IPost[]>;
    getPost(id: string): Promise<IPost>;
  }
}
