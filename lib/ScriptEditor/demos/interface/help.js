/**
* @author larrow 2017.9
* App
*/
/**
* App
* 这就是一个公司，里面有很多mananger
*
*/
App = {};
/**
* 设置勾边效果
* @param {*} params
*/
App.setOutlineParams = function(params) {}
/**
* @author liuwei 2017.10
* App
*/
/**
* 物体选择模式
*/
/**
* 摄像机类型
*/
/**
* @author wujunhua 2018.02.10
* 第三方库扩展
*/
/**
* Returns a random number between min (inclusive) and max (exclusive)
*/
App.Math.randomArbitrary = function  = function(min, max) {}
/**
* Returns a random integer between min (inclusive) and x (inclusive)
* Using Math.round() will give you a non-uniform distribution!
*/
App.Math.randomInt = function  = function(min, max) {}
external = {};
/**
* @author liuwei 2017.11
* Key
*/
/**
* @author larrow 2017.10.5
* 模型库
*/
ModelLib = {};
/**
* @author liuwei 2017.11
* Key
*/
/**
* @author liuwei 2017.11
* Key
*/
/**
* @author larrow 2017.10.3
* 	尝试下视图的想法，代码需要很多的演化
* 	目前的问题：
- 父亲隐藏孩子不能显示；
- 暂时不能做过度效果；
- 可能需要叠加View；
- 后面还应该支持颜色控制、闪烁、摄影机等；
- 可能还需要延时，比如view.setDelay();
- 还需要view回调结束；
应该用选择器，选择条件可以是回调
*/
ModelLib.function View = function() {}
/**
* @author larrow 2017.10.1
* BuilderParser
*/
BuilderLoader = {};
/**
* @author pzx 2018.2.28
* BuilderParser
*/
BuilderLoader_1_0 = {};
/**
* @author larrow 2017.10.1
* BuilderParser
*/
HUAWEIBuilderLoader = {};
/**
* @author pzx 2018.2.13
* Json2MeshBuilderParser
*/
Json2MeshBuilderLoader = {};
Json2MeshLoader = {};
/**
* @author larrow 2017.10.1
* BuilderParser
*/
SplitBuilderLoader = {};
/**
* @author pzx 2017.12.27
* 把父亲节点的信息都合并到一个mesh对象里
*/
CombineBundleMesh = {};
/**
* @author larrow 2017.10.1
* BuilderParser
*/
SplitBuilderLoader_1_0 = {};
/**
* @author pzx 2017.12.27
* 模型库
*/
CombineBundleObject = {};
/**
* @author pzx 2017.12.27
* 模型库
*/
CombineManager = {};
CombineMeshProcessor = {};
Transformation = {};
/**
* @author larrow 2017.10.6
* 界面，直接采用dom元素做界面，主要职责是要更新位置，
* 根本就没有新THREE的Object产生，完全是同步；
*/
BaseUI = {};
/**
* @author larrow 2017.10.7
* 摄影机
*/
CameraController = {};
/**
* 设置观看的目标点
* @param {*} pos
*/
CameraController.setLookAt = function(pos) {}
/**
* 摄像机操作响应
* 检测如果滚轮导致orbit中心和看点越来越近，则把看点往前推
* 这个很重要，否则摄影机推进到一定距离就无法推进了
* @param {*} e
*/
CameraController.onChange = function(e) {}
/**
* 世界坐标转换成屏幕坐标
* @param {*} pos 世界坐标
*/
CameraController.worldToScreen = function(pos) {}
/**
* 设置摄相机类型
* @param {CameraType} value
*/
CameraController.setType = function(value, time) {}
/**
* 摄像机自适应
* @param {*} param
*/
CameraController.fit = function(param) {}
/**
* @author larrow 2017.10.5
* 物体样式
*/
BaseStyle = {};
/**
* @author deen 2018.03.01
*
*/
/**
* 进度信息
*/
ProgressRange = {};
/**
* 视口外圈信息管理，比如显示Logo, 加载进度条...
*/
MainUI = {};
/**
* @author larrow 2018.2.20
* Marker 标记
* 由THREE中Sprite来构成的3D场景内的贴图界面，基于用户的canvas或image产生;
* 因为是3d内的不需要根据摄影机变化而更新
* 参考：https://www.mapbox.com/mapbox-gl-js/api/#map
*/
/**
* Marker 功能
* 拾取marker 特效 隐藏/显示 跟随物体被删除也一起删除 跟踪物体 删除
* 图片的Marker 文字的Marker（TextMarker？）
*/
Marker = {};
/**
* @author larrow 2017.12.2
* Picker
* 主要为支持gpu picker，同时兼容支持threejs的raycast
*
*/
Picker = {};
/**
* 是否能使用GPU拾取器
*/
Picker.canUseGPUPicker = function() {}
/**
* 从Scene Object查找到Base Object
* @param {*} obj
*/
Picker.getBaseObject = function(obj) {}
/**
* @author larrow 2017.10.3
* 选择器
* 可参考：http://api.jquery.com/category/traversing/
*/
Selector = {};
/**
* 从当前查询结果中添加部分对象
* 可以 .add(sel).add('car01').ad([obj1, obj2]).add(obj);
* @param {*}
*/
Selector.add = function(param) {}
/**
* 从当前查询结果中排除部分对象
* 可以 .not(sel).not('car01').not([obj1, obj2]).not(obj);
* @param {*}
*/
Selector.not = function(param) {}
/**
* @author larrow 2017.9
* BaseObject
*/
/**
* 基础物体类型
*/
BaseObject = {};
/**
* 显示勾边
*/
BaseObject.set showOutline = function(value) {}
/**
* 选中物体
*/
BaseObject.set selected = function(value) {}
/**
* 是否可以被拖拽
*/
BaseObject.set draggable = function(value) {}
/**
* 拖动中
*/
BaseObject.set dragging = function(value) {}
/**
* 拖动结束
*/
BaseObject.set dragEnd = function(value) {}
/**
* 是否能被拾取
*/
BaseObject.set pickable = function(value) {}
/**
* SubObject(测试)
* 没有写到scene.json里，并不在初始化场景时候初始化，也不被ObjectManager管理；
* 而是在一个BaseObject身上根据node.name的特定标识的，和BaseObject具有类似功能对象；
* 和所属的BaseObject一起销毁；
*/
SubObject = {};
/**
* @author larrow 2017.11.20
* Door
*/
/**
* Door
*/
Door = {};
/**
* @author larrow 2017.10.1
* Building
*/
Building = {};
/**
* @author larrow 2017.10.3
* Outdoors
*/
Outdoors = {};
/**
* @author larrow 2017.10.2
* FloorPlan
*/
FloorPlan = {};
/**
* @author larrow 2017.10.2
* Thing
*/
/**
* Thing
*/
ThingPart = {};
/**
* Thing
*/
Thing = {};
/**
* @author pzx 2018.3.2
* Room
*/
/**
* Room
*/
Room = {};
/**
* @author deen 2018.02.02
* 物体勾边效果状态
*/
/**
* 物体勾边效果状态接口
*/
ObjectOutlineState = {};
/**
* 构造入口
* @param {App} app
*/
ObjectOutlineState.constructor = function(app) {}
/**
* 增加勾边物体
* @param {*} params
*/
ObjectOutlineState.onAddOutlineObject = function(ev) {}
/**
* 删除勾边物体
*/
ObjectOutlineState.onRemoveOutlineObject = function(ev) {}
/**
* @author larrow 2017.9
* Box
*/
ThingGeometry = {};
/**
* @author deen 2018.02.01
* 物体挑选接口
*/
/**
* 物体挑选接口
*/
PickObjectState = {};
/**
* 构造入口
* @param {App} app
*/
PickObjectState.constructor = function(app) {}
/**
* @author deen 2018.02.02
* 抗锯齿后处理效果
*/
/**
* 抗锯齿后处理效果状态接口
*/
SMAAShaderPassState = {};
/**
* 构造入口
* @param {App} app
*/
SMAAShaderPassState.constructor = function(app) {}
/**
* @author deen 2018.02.02
* 抗锯齿后处理效果
*/
/**
* 抗锯齿后处理效果状态接口
*/
FXAAShaderPassState = {};
/**
* 构造入口
* @param {App} app
*/
FXAAShaderPassState.constructor = function(app) {}
/**
* @author larrow 2018.2.20
* 命令管理器、命令模式
* 可能用于视点、记录
*/
/**
* CommandGroup
*/
CommandGroup = {};
/**
* CommandManager
* cmd = commandManager.create({
*     type: 'ExpandObjects',
*	   objects: app.buildings[0].floors
* });
* 命令完成的回调、时间间隔执行
*/
CommandManager = {};
/**
* @author larrow 2017.11.3
* UIManager
*/
GUIManager = {};
/**
* @author larrow 2017.10.4
* 回调方法对应多个物体
*/
EventCallObjects = {};
/**
* @author larrow  2017.10.4
* 	事件管理
* 	每个事件可以绑定多个方法，每个方法可以为多个物体执行（物体作为参数传过去）；
*	添加事件
*	events.on('click', handler); // 事件方法
* 	events.on('click', handler, objs); // 针对obj的事件方法
*
*	删除事件可以：
*	events.off(); // 删除所有事件
*	events.off('click'); // 删除所有click事件
*	events.off('click', handler); // 删除click事件上的所有handler方法
*	events.off('click', handler, objs); // 删除和click事件相关的对象的所有handler方法 / 支持选择器
*
*	还需要支持：按事件名称移除事件（handle起名字）
*
*	注意handler需要是不变的全局方法（函数内部定义的方法可能被第二次执行时候重新定义）
*
*  2017.11.30拾取部分修改为GPUPicker
*/
EventManager = {};
/**
* 设置物体的矩阵信息
*/
EventManager.function CmdSetObjectTranslation = function(param) {}
/**
* @author deen 2018.02.01
* 多个物体挑选接口
*/
/**
* 多个物体挑选接口
*/
PickMultiObjectsState = {};
/**
* 构造入口
* @param {App} app
*/
PickMultiObjectsState.constructor = function(app) {}
/**
* @author larrow 2017.10.11
* ObjectManager
*/
ObjectManager = {};
/**
* @author deen 2018.02.27
* 资源管理器
*/
/**
* 资源管理器
* @class ResourceManager
*/
ResourceManager = {};
/**
* @function 彻底删除场景节点
* @param {Object3D} rootNode 场景节点
*/
ResourceManager.unload = function(rootNode) {}
/**
* @author deen 2018.02.27
* 场景管理器
*/
/**
* 场景管理器
* @class SceneManager
*/
SceneManager = {};
/**
* @function 删除场景
*/
SceneManager.unloadScene = function(sceneURL) {}
/**
* 设置天空盒
* @param {*} param
*/
SceneManager.setSkyBox = function(param) {}
/**
* @author deen 2018.01.30
* 状态机管理器
*/
/**
* 状态机组, 状态之间可以共存或者互斥
*/
StateGroup = {};
/**
* 查询事件
* @param {*} ev 事件信息
*/
StateGroup.get = function(ev) {}
/**
* 分发事件
* @param {*} ev 事件信息
*/
StateGroup.dispatchEvent = function(ev) {}
/**
* 进入状态机
*/
StateGroup.enter = function(name, params) {}
/**
* 离开状态机
*/
StateGroup.leave = function(name) {}
/**
* 添加状态机
* @param {*} state
*/
StateGroup.add = function(name, state) {}
/**
* 是否拥有此状态
* @param {*} name
*/
StateGroup.has = function(name) {}
/**
* 删除所有状态机集合
*/
StateGroup.clear = function() {}
/**
* 状态机管理器
*/
StateManager = {};
/**
* 初始化
*/
StateManager.init = function() {}
/**
* 向状态机查询
* @param {*} event
*/
StateManager.get = function(event) {}
/**
* 分发事件给状态机
* @param {*} event
*/
StateManager.dispatchEvent = function(event) {}
/**
* 注册状态机
* @param {*} states 状态机集合,使用 [{name: 名字, state: 状态}, ... ] 数组传递
* @returns {StateGroup} 状态机组
*/
StateManager.register = function(states) {}
/**
* 注册状态机
* @param {*} states 状态机集合,使用 [{name: 名字, state: 状态}, ... ] 数组传递
* @returns {StateGroup} 状态机组
*/
StateManager.add = function(name, states) {}
/**
* 移除状态机
* @param {string} name 状态机名字
*/
StateManager.remove = function(name) {}
/**
* 查找状态机
* @param {string} name 状态机名字
* @returns {StateGroup}
*/
StateManager.find = function(name) {}
/**
* 查询是否存在指定状态机
* @param {string} name 状态机名字
* @returns {boolean}
*/
StateManager.has = function(name) {}
/**
* 使用状态机
* @param {string} name 状态机名字
* @param {string} param 状态机参数
* @returns {boolean}
*/
StateManager.change = function(name, params) {}
/**
* 更新当前状态机
*/
StateManager.update = function() {}
/**
* @author pzx 2018.2.5
* 版本管理器，主要根据index。json来获取对应的builderparser
*/
VersionManager = {};
/**
* @author larrow 2017.12.25
* WebViewManager
*/
WebViewManager = {};
DefaultResource = {};
/**
* @author pzx 2018.2.18
* Ceiling
*/
Ceiling{ = {};
/**
* @author pzx 2018.2.18
* Floor
*/
Floor = {};
/**
* @author pzx 2018.2.14
* FloorPlan
*/
ParserFloorPlan = {};
/**
* @author pzx 2018.2.12
* WallCorner
*/
MeshInfo = {};
/**
* @author pzx 2018.2.18
* Roof
*/
Roof{ = {};
/**
* @author pzx 2018.2.18
* Room
*/
Room = {};
/**
* @author pzx 2018.2.12
* Wall
*/
Wall = {};
/**
* @author pzx 2018.2.12
* WallCorner
*/
WallCorner = {};
