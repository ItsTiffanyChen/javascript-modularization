var Module = (function() {
  var _private = "safe now";
  var foo = function() {
    document.getElementById("app").innerHTML = "<h1>Hello foo</h1>";
  };
  var bar = function() {
    document.getElementById("app").innerHTML = `<h1>${_private}</h1>`;
  };
  return {
    foo: foo,
    bar: bar
  };
})();

Module.foo();
// Module.bar();
// console.log(Module._private); // undefined
