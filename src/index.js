"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function () { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}));
exports.__esModule = true;
exports.NavBar = exports.Footer = void 0;
var NavBar_1 = require("./components/NavBar");
var Footer_1 = require("./components/Footer");
__createBinding(exports, NavBar_1, "default", "NavBar");
__createBinding(exports, Footer_1, "default", "Footer");

Object.defineProperty(exports, "NavBar", { enumerable: true, get: function () { return NavBar_1.NavBar; } });
Object.defineProperty(exports, "Footer", { enumerable: true, get: function () { return Footer_1.Footer; } });
