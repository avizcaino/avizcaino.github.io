define(["require", "exports", 'moment'], function (require, exports, moment) {
    "use strict";
    var LimitToValueConverter = (function () {
        function LimitToValueConverter() {
        }
        LimitToValueConverter.prototype.toView = function (array, count) {
            return array.slice(0, count);
        };
        return LimitToValueConverter;
    }());
    exports.LimitToValueConverter = LimitToValueConverter;
    var FromToValueConverter = (function () {
        function FromToValueConverter() {
        }
        FromToValueConverter.prototype.toView = function (array, first, last) {
            return array.slice(first, last);
        };
        return FromToValueConverter;
    }());
    exports.FromToValueConverter = FromToValueConverter;
    var ToMomentValueConverter = (function () {
        function ToMomentValueConverter() {
        }
        ToMomentValueConverter.prototype.toView = function (date) {
            return moment(date).fromNow();
        };
        return ToMomentValueConverter;
    }());
    exports.ToMomentValueConverter = ToMomentValueConverter;
    var TextSplitValueConverter = (function () {
        function TextSplitValueConverter() {
        }
        TextSplitValueConverter.prototype.toView = function (text, nWords) {
            var words = text.split(' ');
            var split = words.slice(0, nWords);
            var summary = '';
            for (var word in split) {
                summary = summary + ' ' + split[word];
            }
            summary = summary + '...';
            return summary;
        };
        return TextSplitValueConverter;
    }());
    exports.TextSplitValueConverter = TextSplitValueConverter;
});

//# sourceMappingURL=common.js.map
