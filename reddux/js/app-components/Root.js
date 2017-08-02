'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _globalActions = require('./global-actions');

var _globalActions2 = _interopRequireDefault(_globalActions);

var _conversations = require('./conversations');

var _conversations2 = _interopRequireDefault(_conversations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Editor from './editor'

var Root = function Root() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_globalActions2.default, null),
		_react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(_conversations2.default, null)
		)
	);
};

exports.default = Root;