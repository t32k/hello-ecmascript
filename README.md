# Learn ES2015

## Arrows and Lexical This

```js
// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

// Lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};
```

## Links

- [cht8687/You-Dont-Need-Lodash-Underscore: Lists of Javascript methods which you can use natively](https://github.com/cht8687/You-Dont-Need-Lodash-Underscore)
