/**
 * @constructor
 */
var DisplayObjectContainer = function ()
{
    InteractiveObject.call(this);

    // property init
    this._mouseChildren = true;
    this._numChildren   = 0;
    this._tabChildren   = true;
    this._textSnapshot  = new TextSnapshot();

    // origin param
    this._children      = [];
    this._ratio         = 0;

};

/**
 * extends
 * @type {InteractiveObject}
 */
DisplayObjectContainer.prototype = Object.create(InteractiveObject.prototype);
DisplayObjectContainer.prototype.constructor = DisplayObjectContainer;

/**
 * properties
 */
Object.defineProperties(DisplayObjectContainer.prototype, {
    mouseChildren: {
        get: function () {
            return this._mouseChildren;
        },
        set: function (mouseChildren) {
            if (typeof mouseChildren === "boolean") {
                this._mouseChildren = mouseChildren;
            }
        }
    },
    numChildren: {
        get: function () {
            return this._numChildren;
        },
        set: function () {}
    },
    tabChildren: {
        get: function () {
            return this._tabChildren;
        },
        set: function (tabChildren) {
            if (typeof tabChildren === "boolean") {
                this._tabChildren = tabChildren;
            }
        }
    },
    textSnapshot: {
        get: function () {
            return this._textSnapshot;
        },
        set: function () {}
    },
    ratio: {
        get: function () {
            return this._ratio;
        },
        set: function (ratio) {
            if (typeof ratio === "number") {
                this._ratio = ratio;
            }
        }
    }
});

/**
 * @param   {DisplayObject} child
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype.addChild = function (child)
{
    child = this.$addChild(child);

    this._numChildren = (this._numChildren + 1)|0;

    return child;
};

/**
 * @param   {DisplayObject} child
 * @param   {number}        index
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype.addChildAt = function (child, index)
{
    if (index > this.numChildren) {
        throw new Error("index is out of range.");
    }

    child = this.$addChild(child, index);

    this._numChildren = (this._numChildren + 1)|0;

    return child;
};

/**
 * @param   {DisplayObject}     child
 * @param   {number}            index
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype.$addChild = function (child, index)
{
    if (!(child instanceof DisplayObject)) {
        throw new Error("this child is not DisplayObject.");
    }

    // init
    index = index || this.numChildren;

    // set stage
    var stage = this.stage;
    if (!stage) {
        var player = this.$window.swf2js.getCurrentPlayer();
        stage = player.stage;
    }

    stage.setInstance(child);

    var placeObject = new PlaceObject();

    // set param
    child.parent  = this;
    // child._$index = index;

    // set child data
    var children = this._children;
    if (index in children) {
        this.$addChild(this.stage.getInstance(children[index]), index + 1);
    }
    this._children[index] = child.id;

    // event
    child.dispatchEvent(Event.ADDED, this.stage);
    this.dispatchEvent(Event.ADDED,  this.stage);

    return child;
};

/**
 * @param {Point} point
 * @returns {boolean}
 */
DisplayObjectContainer.prototype.areInaccessibleObjectsUnderPoint = function (point)
{
    // TODO
    return true;
};

/**
 * @param {DisplayObject} child
 * @returns {boolean}
 */
DisplayObjectContainer.prototype.contains = function (child)
{
    if (!(child instanceof DisplayObject)) {
        throw new Error("this child is not DisplayObject.");
    }

    var idx = 0;
    while (this.numChildren > idx) {
        if (idx in this._children) {
            var id = this._children[idx];
            if (id === child.id) {
                return true;
            }
        }
        idx = (idx + 1)|0;
    }

    return false;
};

/**
 * @param {number} index
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype.getChildAt = function (index)
{
    if (index > this.numChildren) {
        throw new Error("index is out of range.");
    }

    if (!(index in this._children)) {
        throw new Error("child not found.");
    }

    return this.stage.getInstance(this._children[index]);
};

/**
 *
 * @param   {string} name
 * @returns {{DisplayObject}|null}
 */
DisplayObjectContainer.prototype.getChildByName = function (name)
{
    // to string
    name = name + "";

    var stage = this.stage;
    var idx   = 0;
    while (this.numChildren > idx) {
        if (idx in this._children) {
            var instance = stage.getInstance(this._children[idx]);
            if (instance && instance.name === name) {
                return instance;
            }
        }
        idx = (idx + 1)|0;
    }

    return null;
};

/**
 * @param {DisplayObject} child
 * @returns {number}
 */
DisplayObjectContainer.prototype.getChildIndex = function (child)
{
    if (!(child instanceof DisplayObject)) {
        throw new Error("this child is not DisplayObject.");
    }

    if (!(child.index in this._children) || child.id !== this._children[child.index]) {
        throw new Error("child not found.");
    }

    return child.index;
};

/**
 * @param {Point} point
 * @returns {Array}
 */
DisplayObjectContainer.prototype.getObjectsUnderPoint = function (point)
{
    // todo
    return [];
};

/**
 * @param    {DisplayObject} child
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype.removeChild = function (child)
{
    if (!(child instanceof DisplayObject)) {
        throw new Error("this child is not DisplayObject.");
    }

    if (!(child.index in this._children) || child.id !== this._children[child.index]) {
        throw new Error("child not found.");
    }

    return this._$remove(child);
};

/**
 * @param   {number} index
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype.removeChildAt = function (index)
{
    if (!(index in this._children)) {
        throw new Error("child not found.");
    }

    // reset
    var child = this.stage.getInstance(this._children[index]);

    return this._$remove(child);
};

/**
 * @param   {DisplayObject} child
 * @returns {DisplayObject}
 */
DisplayObjectContainer.prototype._$remove = function (child)
{
    // remove
    this._children.splice(child.index, 1);
    this._numChildren = (this._numChildren - 1)|0;

    var idx = 0;
    while (this.numChildren > idx) {

        var instance     = this.stage.getInstance(this._children[idx]);
        instance._$index = idx;

        idx = (idx + 1)|0;
    }

    // reset
    child._stageId     = null;
    child._$parentId   = null;
    child._$index      = null;
    child._$parentType = 0;

    return child;
};

/**
 * @param   {number} beginIndex
 * @param   {number} endIndex
 * @returns void
 */
DisplayObjectContainer.prototype.removeChildren = function (beginIndex, endIndex)
{
    if (0 > beginIndex || 0 > endIndex) {
        throw new Error("specify 0 or more.");
    }

    endIndex = (endIndex !== undefined) ? endIndex|0 : 0x7fffffff;
    if (endIndex > this.numChildren) {
        throw new Error("the number is over.");
    }

    var index = beginIndex;
    endIndex  = (endIndex + 1)|0;
    while (endIndex > index) {

        var child = this.stage.getInstance(this._children[beginIndex]);
        this._$remove(child);

        index = (index + 1)|0;
    }

};

