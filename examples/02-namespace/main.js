var MYAPP = {
  foo: function() {
    document.getElementById("app").innerHTML = "<h1>Hello foo</h1>";
  },
  bar: function() {
    document.getElementById("app").innerHTML = "<h1>Hello bar</h1>";
  }
};

MYAPP.foo();