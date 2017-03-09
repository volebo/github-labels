'use strict'

// https://robinpowered.com/blog/best-practice-system-for-organizing-and-tagging-github-issues/

module.exports = [
	{ "color": "3E4B9E", "name": "EPIC" },

	// Priority
	// DONE: I can not write this symbols in GH-search query
	// so I prefer not to use this
	// { "color": "333333", "name": "★★★" },
	// { "color": "333333", "name": "★★☆" },
	// { "color": "333333", "name": "★☆☆" },

	// Platform
	{ "color": "BFD4F2", "name": "pl:node" },
	{ "color": "BFD4F2", "name": "pl:ember" },
	{ "color": "BFD4F2", "name": "pl:travis" },

	// Problems
	{ "color": "ee0701", "name": "bug" },
	{ "color": "ee0701", "name": "bug:security" },

	// Mindless
	{ "color": "42f49b", "name": "chore" },
	{ "color": "42f49b", "name": "legal" },

	// User Experience
	{ "color": "FFC274", "name": "ux:copy" },
	{ "color": "FFC274", "name": "ux:design" },
	{ "color": "FFC274", "name": "ux:common" },

	// Environment
	{ "color": "ee0701", "name": "env:prod" },
	{ "color": "FAD8C7", "name": "env:test" },
	{ "color": "FAD8C7", "name": "env:staging" },

	// Feedback
	{ "color": "CC317C", "name": "fb:discuss" },
	{ "color": "CC317C", "name": "fb:rfc" },
	{ "color": "CC317C", "name": "fb:question" },

	// Improvements
	{ "color": "5EBEFF", "name": "enhancement" },
	{ "color": "5EBEFF", "name": "optimizaiton" },
	{ "color": "5EBEFF", "name": "l10n" },
	{ "color": "5EBEFF", "name": "need-doc" },

	// Additions
	{ "color": "0e8a16", "name": "feature" },

	// status (Pending)
	{ "color": "FBCA04", "name": "status:WIP" },
	{ "color": "FBCA04", "name": "status:PR" },
	{ "color": "FBCA04", "name": "status:watch" },

	// Inactive
	{ "color": "EEEEEE", "name": "inv" },
	{ "color": "EEEEEE", "name": "wfx" },
	{ "color": "EEEEEE", "name": "dup" },
	{ "color": "EEEEEE", "name": "hold" },
]
