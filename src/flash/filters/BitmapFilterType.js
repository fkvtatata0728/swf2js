/**
 * @constructor
 */
var BitmapFilterType = function () {};

BitmapFilterType.FULL  = "full";
BitmapFilterType.INNER = "inner";
BitmapFilterType.OUTER = "outer";

/**
 * extends
 */
BitmapFilterType.prototype = Object.create(OriginalObject.prototype);
BitmapFilterType.prototype.constructor = BitmapFilterType;