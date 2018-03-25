'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeToJson = require('enzyme-to-json');

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Button />', function () {
    it('<Button text="Test" />', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { text: 'Test', onPress: function onPress() {} }));
        expect((0, _enzymeToJson.mountToJson)(wrapper)).toMatchSnapshot();
    });

    it('onPress()', function () {
        var spy = jest.fn();
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_2.default, { text: 'Test', onPress: spy }));
        wrapper.find('TouchableOpacity').first().props().onPress();

        expect(spy).toBeCalled();
    });
});