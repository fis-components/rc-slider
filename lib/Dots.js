'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function calcPoints(marks, dots, step, min, max) {
  var points = Object.keys(marks).map(parseFloat);
  if (dots) {
    for (var i = min; i <= max; i = i + step) {
      if (points.indexOf(i) >= 0) continue;
      points.push(i);
    }
  }
  return points;
}

var Dots = function Dots(_ref) {
  var prefixCls = _ref.prefixCls;
  var marks = _ref.marks;
  var dots = _ref.dots;
  var step = _ref.step;
  var included = _ref.included;
  var lowerBound = _ref.lowerBound;
  var upperBound = _ref.upperBound;
  var max = _ref.max;
  var min = _ref.min;

  var range = max - min;
  var elements = calcPoints(marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = (point - min) / range * 100 + '%';
    var style = { left: offset };

    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var pointClassName = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-dot', true), _defineProperty(_classNames, prefixCls + '-dot-active', isActived), _classNames));

    return _react2['default'].createElement('span', { className: pointClassName, style: style, key: point });
  });

  return _react2['default'].createElement(
    'div',
    { className: prefixCls + '-step' },
    elements
  );
};

exports['default'] = Dots;
module.exports = exports['default'];