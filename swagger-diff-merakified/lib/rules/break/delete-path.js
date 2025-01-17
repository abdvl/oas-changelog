"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deletePath;
function deletePath(_ref) {
  var kind = _ref.kind;
  var path = _ref.path;
  var lhs = _ref.lhs;
  var rhs = _ref.rhs;

  var match = kind === "D" && path.length === 2 && path[0] === "paths";
  if (match) {
    var pathId = path[1];
    return {
      message: `\`${pathId}\` - Deleted`,
      messageHtml: `Deleted`,
      method: path[2],
      path: pathId
    };
  }
  return false;
}
module.exports = exports["default"];
