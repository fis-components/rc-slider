'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Track = function Track(_ref) {
  var className = _ref.className;
  var included = _ref.included;
  var offset = _ref.offset;
  var length = _ref.length;

  var style = {
    left: offset + '%',
    width: length + '%',
    visibility: included ? 'visible' : 'hidden'
  };
  return _react2['default'].createElement('div', { className: className, style: style });
};

exports['default'] = Track;
module.exports = exports['default'];