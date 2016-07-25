/**
 * Created by alexvizcaino on 20/7/16.
 */
import {bindable} from "aurelia-templating";
import {autoinject} from "aurelia-dependency-injection";

@autoinject
export class PostObject{
  @bindable post;
}
