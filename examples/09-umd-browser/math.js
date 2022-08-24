(function(global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.math = mod.exports;
  }
})(this, function(exports) {
  "use strict";

  function add(a, b) {
    return a + b;
  }
  // expose log to other modules
  exports.add = add;
});
