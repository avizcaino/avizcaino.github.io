/**
 * Created by alexvizcaino on 11/7/16.
 */
import {FrameworkConfiguration} from "aurelia-framework";
export function configure(fc: FrameworkConfiguration){
  fc.globalResources([
    './ui/elements/title-bar.html',
    './ui/elements/nav-bar',
    './ui/elements/post-summary',
    './ui/elements/post-object',
    './ui/elements/post-editor',
    './ui/command/command-ext',
    './ui/converters/common'
  ]);
}
