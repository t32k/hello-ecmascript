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

- https://github.com/cht8687/You-Dont-Need-Lodash-Underscore
- https://github.com/stevemao/You-Dont-Know-About-Lodash-Underscore
- http://youmightnotneedjquery.com/
- https://github.com/lodash/lodash/wiki/Changelog#compatibility-warnings
- http://postd.cc/es6-cheatsheet/
