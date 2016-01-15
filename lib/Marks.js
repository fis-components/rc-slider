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

var Marks = function Marks(_ref) {
  var className = _ref.className;
  var marks = _ref.marks;
  var included = _ref.included;
  var upperBound = _ref.upperBound;
  var lowerBound = _ref.lowerBound;
  var max = _ref.max;
  var min = _ref.min;

  var marksKeys = Object.keys(marks);
  var marksCount = marksKeys.length;
  var unit = 100 / (marksCount - 1);
  var markWidth = unit * 0.9;

  var range = max - min;
  var elements = marksKeys.map(parseFloat).map(function (point) {
    var _classNames;

    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, className + '-text', true), _defineProperty(_classNames, className + '-text-active', isActived), _classNames));

    var style = { width: markWidth + '%' };
    style.left = (point - min) / range * 100 - markWidth / 2 + '%';

    return _react2['default'].createElement(
      'span',
      { className: markClassName, style: style, key: point },
      marks[point]
    );
  });

  return _react2['default'].createElement(
    'div',
    { className: className },
    elements
  );
};

exports['default'] = Marks;
module.exports = exports['default'];