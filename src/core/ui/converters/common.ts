/**
 * Created by alexvizcaino on 18/7/16.
 */
export class LimitToValueConverter {
  toView(array, count) {
    return array.slice(0, count);
  }
}

export class FromToValueConverter{
  toView(array, first, last){
    return array.slice(first, last);
  }
}

import * as moment from 'moment';
export class ToMomentValueConverter{
  toView(date: string){
    return moment(date).fromNow();
  }
}

export class TextSplitValueConverter{
  toView(text: string, nWords: number){
    let words = text.split(' ');
    let split = words.slice(0, nWords);
    let summary: string = '';
    for(let word in split){
      summary = summary + ' ' + split[word];
    }

    summary = summary + '...';
    return summary;
  }
}
