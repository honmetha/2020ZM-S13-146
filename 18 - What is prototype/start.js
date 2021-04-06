(() => {
  // เริ่มเขียนโค้ด

  // 1. Class vs Prototype
  // class Person {}

  // const varayut = new Person();
  // console.log(varayut);

  // 2. What's prototype?
  // const name = "varayut";
  // console.log(name);

  // const arr = [];
  // console.log(arr.__proto__);

  // 3. Prototype chain
  // const name = "varayut";
  // console.log(name.__proto__);
  // console.log(name.toLocaleString());

  // 4. Extend a prototype
  const name = "varayut";
  function sayHello(val) {
    console.log(`Hello ${val}`);
  }
  String.prototype.sayHello = sayHello;
  console.log(name.__proto__);
  name.sayHello("world");
})();
