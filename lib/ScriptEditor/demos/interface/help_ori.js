/**
 * A namespace for utility libraries.
 * @namespace util
 */
util = {}

/**
 * util.setTimeout
 * @param {function} callback function
 * @param {number} delay time
 * @returns {number} timer id
 */
util.setTimeout = function (callback, delayTime) {
	var id = 0;
    return id;
}

/**
 * util.setInterval
 * @param {function} callback function
 * @param {number} after time
 * @returns {number} timer id
 */
util.setInterval = function (callback, tickTime) {
	var id = 0;
    return id;
}

/**
 * util.clearTimeout
 * @param {function} timer id
 */
util.clearTimeout = function(timeoutID) {
    _timerCallbackManager_.remove(timeoutID);
}

/**
 * util.clearInterval
 * @param {function} timer id
 */
util.clearInterval = function(intervalID) {
    _timerCallbackManager_.remove(intervalID);
}

/**
 * util.clearAllTimers
 */
util.clearAllTimers = function() {
    _timerCallbackManager_.clear();
}

/**
 * util.setRenderCallback
 * render callback is singleton
 * @param {function} callback
 */
util.setRenderCallback = function (callback) {
}

/**
 * util.randomInt
 * @param {number} a
 * @param {number} b
 * @returns {number} random result
 */
util.randomInt = function(a, b) {
}

/**
 * util.randomFloat
 * @param {number} a
 * @param {number} b
 * @returns {number} random result
 */
util.randomFloat = function(a, b) {
}

/**
 * util.randomColor
 * @returns {number} random result
 */
util.randomColor = function() {
};

/**
 * util.randomVector3
 * @param {number} randius
 * @returns {number} random result
 */
util.randomVector3 = function(randius) {
}

/**
 * ScriptObject
 */
ScriptObject = {
    //prop one
    one: "one",
    //prop two
    propTwo: "propTwo"
}

/**
 * util.addObjectScript
 * @param {BaseObject} obj
 * @param {ScriptObject} script
 * @param {string} name
 * @returns {number} ScriptObject
 */
util.addObjectScript = function(obj, script, name) {
	var script = new ScriptObject();
    return script;
}

/**
 * util.removeObjectScript
 * @param {BaseObject} obj
 * @param {string} name
 * @returns {number} ScriptObject
 */
util.removeObjectScript = function(obj, name) {
}

/**
 * util.removeAllObjectsScript
 * @param {BaseObject} obj
 * @param {string} name
 */
util.removeAllObjectsScript = function(obj, name) {
}

/**
 * util.reloadScene
 */
util.reloadScene = function(){
}

/**
 * util.clearScriptObjects
 */
util.clearScriptObjects = function(){
}

/**
 * util.removeAllObjectsScript
 * @param {string} eventType: click, dbclick, mouseup...
 * @param {string} name
 */
util.addEventListener = function(eventType, callback) {
}

/**
 * util.download
 * @param {table} {}
 */
util.download = function(param) {
}

/**
 * util.downloadTexture
 * @param {table} {}
 */
util.downloadTexture = function(param) {
}

/**
 * util.downloadTextures
 * @param {table} {}
 */
util.downloadTextures = function(param) {
}

/**
 * A namespace for console libraries.
 * @namespace console
 */
console = {}

/**
 * console.log
 * @param {obj} {}
 */
console.log = function(obj) {
}

/**
 * console.show
 * @param {bool} {}
 */
console.show = function(b) {
}

/**
 * console.clear
 */
console.clear = function() {
}

/**
 * console.catchError
 */
console.catchError = function(b) {
}

/**
 * BaseObject
 */
BaseObject = {
    //prop one
    one: "one",
    //prop two
    propTwo: "propTwo"
}

/**
 * setPosition
 * @param {Vector3} target pos / x, y, z
 */
BaseObject.setPosition = function(pos) {
}

/**
 * yaw
 * @param {number} y axis degree
 */
BaseObject.yaw = function(f) {
}

/**
 * pitch
 * @param {number} x axis degree
 */
BaseObject.pitch = function(f) {
}

/**
 * roll
 * @param {number} z axis degree
 */
BaseObject.roll = function(f) {
}

/**
 * add gravity
 * @param {number} mass
 */
BaseObject.addGravity = function(mass) {
}

/**
 * moveTo
 * @param {Vector3} target pos
 * @param {number} [c] time
 * @param {function} [callback=null]
 */
BaseObject.moveTo = function(pos, time, callback) {
}

/**
 * play animation
 * @param {string} anim name
 */
BaseObject.playAnim = function(animName) {
}

/**
 * stop animation
 */
BaseObject.stopAnim = function() {
}

/**
 * animation speed
 * @param {number} speed
 */
BaseObject.setAnimSpeed = function(speed) {
}

/**
 * set color
 * @param {Color} color: rgb or Color.red
 */
BaseObject.setColor = function(color) {
}

/**
 * set transparent
 * @param {number} 0 is empty, 1 is soild
 */
BaseObject.setTransparent = function(trans) {
}

/**
 * setColorFlash
 * @param {bool} enable flash or not
 * @param {Color} [c] color: rgb or Color.red
 * @param {number} [c] time
 * @param {number} [c] start value
 * @param {number} [c] end value
 */
BaseObject.setColorFlash = function(enable, color, time, start, end) {
}

/**
 * clone object
 */
BaseObject.clone = function() {
	var obj = new BaseObject();
    return obj;
}

/**
 * destroy object
 */
BaseObject.destroy = function() {
}

/**
 * A namespace for object libraries.
 * @namespace object
 */
object = {};

/**
 * create object
 * @param {string} bundle id
 * @param {BaseObject} [c] parent object
 * @param {function} [c] callback after bundle download
 * @param {Vector3} [c] init pos
 * @param {Quad} [c] init rot
 * @param {Vector3} [c] init scale
 * @returns {BaseObject} object
 */
object.create = function(bundleId, parentObj, callback, pos, rot, scale) {
	var obj = new BaseObject();
    return obj;
};

/**
 * destroy all obj born in script
 */
object.destroyAll = function() {
}


/**
 * find object by user defined id
 * @param {string} id
 * @returns {BaseObject} the product of the passed parameters
 */
object.find = function(uid) {
	var obj = new BaseObject();
    return obj;
}

/**
 * get object by user defined id
 * @param {string} id
 * @returns {BaseObject} the product of the passed parameters
 */
object.get = function(uid) {
	var obj = new BaseObject();
    return obj;
}

object.createCurveLine = function(vertices, bundleOrColorOrMat, parentObj, width, textiling, texOffSet) {
}

object.createArrowLine = function(vertices,param) {
}

/**
 * A namespace for gui libraries.
 * @namespace gui
 */
gui = {};

/**
 * load a gui bundle
 * @param {string} url
 * @param {function} callback
 */
gui.load = function(url, callback) {
}

/**
 * gui.createBox
 * @param {string} text
 * @param {Rect} rect
 * @param {function} [callback=null]
 */
gui.createBox = function (text, rect, callback) {
}

/**
 * gui.createBox
 * @param {string} text
 * @param {Rect} rect
 */
gui.createLabel = function (text, rect) {
}

/**
 * gui.createButton
 * @param {string} text
 * @param {Rect} rect
 * @param {function} [callback=null]
 */
gui.createButton = function (text, rect, callback) {
}

/**
 * gui.createToggle
 * @param {boolean} checked
 * @param {string} text
 * @param {Rect} rect
 * @param {function} [callback=null]
 */
gui.createToggle = function (checked, text, rect, callback) {
}