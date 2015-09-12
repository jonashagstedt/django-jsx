"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _templateLoader = require("./template-loader");

var renderer = {
    render: function render(templatePath, context) {
        var Component = _templateLoader.loader.load(templatePath);
        return _react2["default"].renderToString(Component(context));
    }
};

exports.renderer = renderer;