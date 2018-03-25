'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _reactNative = require('react-native');

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Universal Components', module).add('Button', function () {
    return _react2.default.createElement(
        _reactNative.View,
        { style: styles.container },
        _react2.default.createElement(
            _reactNative.Text,
            { style: styles.title },
            'Button'
        ),
        _react2.default.createElement(
            _reactNative.View,
            { style: styles.example },
            _react2.default.createElement(
                _reactNative.Text,
                { style: styles.exampleTitle },
                'Example'
            ),
            _react2.default.createElement(
                _reactNative.View,
                { style: styles.exampleWrapper },
                _react2.default.createElement(_2.default, {
                    text: 'Press Me!',
                    onPress: function onPress() {
                        return alert('Button Pressed!');
                    }
                })
            )
        )
    );
});
var styles = _reactNative.StyleSheet.create({
    container: {
        padding: 32
    },
    example: {
        borderColor: '#dddddd',
        borderWidth: 1,
        display: 'inline-flex',
        flex: 0,
        padding: 16
    },
    exampleTitle: {
        fontFamily: 'sans-serif',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12
    },
    exampleWrapper: {
        width: 300
    },
    title: {
        fontFamily: 'sans-serif',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24
    }
});