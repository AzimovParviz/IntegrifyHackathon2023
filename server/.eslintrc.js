module.exports = {
	"env": {
		"browser": false,
		"node": true
	},
	"extends": [
		"plugin:@typescript-eslint/recommended"
	],
	"overrides": [
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			//or windows!
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		
	}
};