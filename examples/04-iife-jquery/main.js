var Module = (function(Q) {
  var _private = "safe now";
  var foo = function() {
    Q("#app").html("<h1>Hello foo</h1>");
  };
  var bar = function() {
    Q("#app").html(`<h1>${_private}</h1>`);
  };
  return {
    foo: foo,
    bar: bar
  };
})($);

Module.foo();
// Module.bar();
