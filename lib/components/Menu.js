"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* global: window */
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
var cloneItem_1 = require("./cloneItem");
var Portal_1 = require("./Portal");
var actions_1 = require("../utils/actions");
var styles_1 = require("../utils/styles");
var eventManager_1 = require("../utils/eventManager");
var KEY = {
    ENTER: 13,
    ESC: 27,
    ARROW_UP: 38,
    ARROW_DOWN: 40,
    ARROW_LEFT: 37,
    ARROW_RIGHT: 39
};
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            x: 0,
            y: 0,
            visible: false,
            nativeEvent: {},
            propsFromTrigger: {},
            onShown: null,
            onHidden: null
        };
        _this.unsub = [];
        _this.bindWindowEvent = function () {
            window.addEventListener('resize', _this.hide);
            window.addEventListener('contextmenu', _this.hide);
            window.addEventListener('mousedown', _this.hide);
            window.addEventListener('click', _this.hide);
            window.addEventListener('scroll', _this.hide);
            window.addEventListener('keydown', _this.handleKeyboard);
        };
        _this.unBindWindowEvent = function () {
            window.removeEventListener('resize', _this.hide);
            window.removeEventListener('contextmenu', _this.hide);
            window.removeEventListener('mousedown', _this.hide);
            window.removeEventListener('click', _this.hide);
            window.removeEventListener('scroll', _this.hide);
            window.removeEventListener('keydown', _this.handleKeyboard);
        };
        _this.onMouseEnter = function () { return window.removeEventListener('mousedown', _this.hide); };
        _this.onMouseLeave = function () { return window.addEventListener('mousedown', _this.hide); };
        _this.hide = function (event) {
            // Safari trigger a click event when you ctrl + trackpad
            // Firefox:  trigger a click event when right click occur
            var e = event;
            if (typeof e !== 'undefined' &&
                (e.button === 2 || e.ctrlKey === true) &&
                e.type !== 'contextmenu') {
                return;
            }
            _this.unBindWindowEvent();
            _this.setState({ visible: false });
        };
        _this.handleKeyboard = function (e) {
            if (e.keyCode === KEY.ENTER || e.keyCode === KEY.ESC) {
                _this.unBindWindowEvent();
                _this.setState({ visible: false });
            }
        };
        _this.setRef = function (ref) {
            _this.menuRef = ref;
        };
        _this.show = function (e, props) {
            e.stopPropagation();
            eventManager_1.eventManager.emit(actions_1.HIDE_ALL);
            var _a = _this.getMousePosition(e), x = _a.x, y = _a.y;
            _this.setState({
                visible: true,
                x: x,
                y: y,
                nativeEvent: e,
                propsFromTrigger: props
            }, _this.setMenuPosition);
        };
        return _this;
    }
    Menu.prototype.componentDidMount = function () {
        this.unsub.push(eventManager_1.eventManager.on(actions_1.DISPLAY_MENU(this.props.id), this.show));
        this.unsub.push(eventManager_1.eventManager.on(actions_1.HIDE_ALL, this.hide));
    };
    Menu.prototype.componentWillUnmount = function () {
        this.unsub.forEach(function (cb) { return cb(); });
        this.unBindWindowEvent();
    };
    Menu.prototype.componentDidUpdate = function (_, prevState) {
        if (this.state.visible !== prevState.visible) {
            if (this.state.visible && this.props.onShown) {
                this.props.onShown();
            }
            else if (!this.state.visible && this.props.onHidden) {
                this.props.onHidden();
            }
        }
    };
    Menu.prototype.setMenuPosition = function () {
        var windowWidth = window.innerWidth, windowHeight = window.innerHeight;
        var _a = this.menuRef, menuWidth = _a.offsetWidth, menuHeight = _a.offsetHeight;
        var _b = this.state, x = _b.x, y = _b.y;
        if (x + menuWidth > windowWidth) {
            x -= x + menuWidth - windowWidth;
        }
        if (y + menuHeight > windowHeight) {
            y -= y + menuHeight - windowHeight;
        }
        this.setState({
            x: x,
            y: y
        }, this.bindWindowEvent);
    };
    Menu.prototype.getMousePosition = function (e) {
        var pos = {
            x: e.clientX,
            y: e.clientY
        };
        if (e.type === 'touchend' &&
            (!pos.x || !pos.y) &&
            (e.changedTouches && e.changedTouches.length > 0)) {
            pos.x = e.changedTouches[0].clientX;
            pos.y = e.changedTouches[0].clientY;
        }
        if (!pos.x || pos.x < 0) {
            pos.x = 0;
        }
        if (!pos.y || pos.y < 0) {
            pos.y = 0;
        }
        return pos;
    };
    Menu.prototype.render = function () {
        var _a;
        var _b = this.props, theme = _b.theme, animation = _b.animation, style = _b.style, className = _b.className, children = _b.children;
        var _c = this.state, visible = _c.visible, nativeEvent = _c.nativeEvent, propsFromTrigger = _c.propsFromTrigger, x = _c.x, y = _c.y;
        var cssClasses = classnames_1.default(styles_1.styles.menu, className, (_a = {},
            _a[styles_1.styles.theme + theme] = theme,
            _a[styles_1.styles.animationWillEnter + animation] = animation,
            _a));
        var menuStyle = __assign({}, style, { left: x, top: y + 1, opacity: 1 });
        return (react_1.default.createElement(Portal_1.Portal, null, visible && (react_1.default.createElement("div", { className: cssClasses, style: menuStyle, ref: this.setRef, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave },
            react_1.default.createElement("div", null, cloneItem_1.cloneItem(children, {
                nativeEvent: nativeEvent,
                propsFromTrigger: propsFromTrigger
            }))))));
    };
    Menu.propTypes = {
        id: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]).isRequired,
        children: prop_types_1.default.node.isRequired,
        theme: prop_types_1.default.string,
        animation: prop_types_1.default.string,
        className: prop_types_1.default.string,
        style: prop_types_1.default.object
    };
    return Menu;
}(react_1.Component));
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map