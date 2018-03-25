'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getButtonPadding = function getButtonPadding(size) {
    switch (size) {
        case 'small':
            return 10;
        case 'medium':
            return 14;
        case 'large':
            return 18;
        default:
            return 14;
    }
};
var getButtonFontSize = function getButtonFontSize(size) {
    switch (size) {
        case 'small':
            return 10;
        case 'medium':
            return 16;
        case 'large':
            return 20;
        default:
            return 16;
    }
};

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Button);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var _this$props = _this.props,
                _this$props$backgroun = _this$props.backgroundColor,
                backgroundColor = _this$props$backgroun === undefined ? 'black' : _this$props$backgroun,
                _this$props$fontColor = _this$props.fontColor,
                fontColor = _this$props$fontColor === undefined ? 'white' : _this$props$fontColor,
                onPress = _this$props.onPress,
                _this$props$size = _this$props.size,
                size = _this$props$size === undefined ? 'medium' : _this$props$size,
                style = _this$props.style,
                text = _this$props.text;

            var computedStyles = styles(backgroundColor, fontColor, size);
            return _react2.default.createElement(
                _reactNative.TouchableOpacity,
                { onPress: onPress },
                _react2.default.createElement(
                    _reactNative.View,
                    { style: [computedStyles.container, style] },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: computedStyles.text },
                        text.toUpperCase()
                    )
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Button;
}(_react.Component);

Button.propTypes = {
    backgroundColor: _propTypes2.default.string,
    fontColor: _propTypes2.default.string,
    onPress: _propTypes2.default.func.isRequired,
    size: _propTypes2.default.string,
    style: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object, _propTypes2.default.string]),
    text: _propTypes2.default.string.isRequired
};
exports.default = Button;

var styles = function styles(backgroundColor, fontColor, size) {
    return _reactNative.StyleSheet.create({
        container: {
            backgroundColor: backgroundColor,
            borderRadius: 3,
            padding: getButtonPadding(size)
        },
        text: {
            backgroundColor: 'transparent',
            color: fontColor,
            fontFamily: _reactNative.Platform.OS === 'web' ? 'sans-serif' : undefined,
            fontSize: getButtonFontSize(size),
            fontWeight: 'bold',
            textAlign: 'center'
        }
    });
};