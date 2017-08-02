"use strict";

var Conversation = function Conversation(_ref) {
	var content = _ref.content;
	var open = _ref.open;
	var edit = _ref.edit;
	return React.createElement(
		"div",
		{ onClick: edit },
		React.createElement(
			"div",
			null,
			content.title
		)
	);
};