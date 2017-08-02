'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _conversation = require('./conversation');

var _conversation2 = _interopRequireDefault(_conversation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Conversations = function Conversations(_ref) {
	var conversations = _ref.conversations;
	var openConversation = _ref.openConversation;
	var editConversation = _ref.editConversation;
	return React.createElement(
		'div',
		null,
		conversations.map(function (c) {
			return React.createElement(_conversation2.default, { key: c.id, open: function open() {
					return openConversation(c.id);
				}, edit: function edit() {
					return editConversation(c.id);
				}, content: c });
		})
	);
};

exports.default = connect(function (state) {
	return {
		conversations: state.conversations
	};
}, function (dispatch) {
	return {
		openConversation: function openConversation(id) {
			dispatch(actionOpenConversation(id));
		},
		editConversation: function editConversation(id) {
			dispatch(actionEditConversation(id));
		}
	};
})(_conversation2.default);