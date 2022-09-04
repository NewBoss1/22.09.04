const calculatol = {
  add: function add(a, b) {
    console.log(a + b);
  },
  min: function min(a, b) {
    console.log(a - b);
  },
  div: function div(a, b) {
    console.log(a / b);
  },
  powerof: function powerof(a, b) {
    console.log(a ** b);
  }
};

calculatol.add(5, 3);
calculatol.min(5, 3);
calculatol.div(5, 2);
calculatol.powerof(5, 3);
