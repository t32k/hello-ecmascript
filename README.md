
特に記述がない場合、IE9以上で動作する。


- LodashからJavaScript
- CoffeeScriptからJavaScript
- JavaScriptからJavaScript2015


# LodashからJavaScript


## _.each

与えられた関数を、配列の各要素に対して一度ずつ実行する。

```javascript
	// Lodashは`false`を返すことでイテレーションを抜けることができる
  _.each([1, 2, 3], function(value, index) {
    console.log(value);
    return false;
  });
  // output: 1

  // Native
  [1, 2, 3].forEach((value, index) => {
  	console.log(value);
    return false;
  });
  // output: 1 2 3
```


## _.map

与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成する。

```javascript
  var array1 = [1, 2, 3];

  // Lodash
  var array2 = _.map(array1, function(value, index) {
    return value * 2;
  });
  console.log(array2); // output: [2, 4, 6]

  // Native
  var array2 = array1.map((value, index) => value * 2);
  console.log(array2); // output: [2, 4, 6]
```


## _.every

与えられた関数によって実行されるテストに配列のすべての要素が合格するかどうかをテストする。


```javascript
  var array = [10, 20, 30];
  function isBigEnough(element, index, array) {
    return element >= 10;
  }

  // Lodash
  var result = _.every(array, isBigEnough);
  console.log(result); // output: true


  // Native
  var result = array.every(isBigEnough);
  console.log(result); // output: true
 ```


## _.some

与えられた関数によって実行されるテストに合格する要素が配列の中にあるかどうかをテストする。


```javascript
  var array = [10, 9, 8];
  function isBigEnough(element, index, array) {
    return element >= 10;
  }

  // Lodash
  var result = _.some(array, isBigEnough);
  console.log(result); // output: true


  // Native
  var result = array.some(isBigEnough);
  console.log(result); // output: true
 ```


## _.reduce

隣り合う2つの配列要素に対して**左から右へ**同時に関数を適用し、単一の値にする。

```javascript
  var array = [0, 1, 2, 3, 4];

  // Lodash
  var result = _.reduce(array, function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
  });
  console.log(result); // output: 10

  // Native
  var result = array.reduce((previousValue, currentValue, currentIndex, array) => previousValue + currentValue);
  console.log(result); // output: 10
```


## _.reduceRight

隣り合う2つの配列要素に対して**右からから左へ**同時に関数を適用し、単一の値にします。

```javascript
  var array = [0, 1, 2, 3, 4];

  // Lodash
  var result = _.reduceRight(array, function (previousValue, currentValue, currentIndex, array) {
    return previousValue - currentValue;
  });
  console.log(result);　// output: -2

  // Native
  var result = array.reduceRight((previousValue, currentValue, currentIndex, array) =>
    return previousValue - currentValue;
  );
  console.log(result);　// output: -2
```


## _.filter

引数として与えられたテスト関数を各配列要素に対して実行し、それに合格したすべての配列要素からなる新しい配列を生成する。

```javascript
  var array = [12, 5, 8, 130, 44];
  function isBigEnough(value) {
    return value >= 10;
  } 

  // Lodash
  var filtered = _.filter(array, isBigEnough);
  console.log(filtered);　// output: [12, 130, 44]

  // Native
  var filtered = array.filter(isBigEnough);
  console.log(filtered);　// output: [12, 130, 44]
```


## _.find

配列内の要素が指定されたテスト関数を満たす場合、配列内の値を返します。そうでない場合は`undefined`を返す。

:construction: IE, Operaサポートしていない

```javascript
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];

  // Lodash
  _.find(users, function(element) { return element.age < 40; }); // output: object for 'barney'

  // Native
  users.find((element) => element.age < 40); // output: object for 'barney'
```


















## アロー関数と静的this

```javascript
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

- [DrkSephy/es6-cheatsheet](https://github.com/DrkSephy/es6-cheatsheet#replacing-iifes-with-blocks)
- [stevemao/You-Dont-Know-About-Lodash-Underscore](https://github.com/stevemao/You-Dont-Know-About-Lodash-Underscore)

- https://github.com/cht8687/You-Dont-Need-Lodash-Underscore
- https://github.com/stevemao/You-Dont-Know-About-Lodash-Underscore
- https://github.com/lodash/lodash/wiki/Changelog#compatibility-warnings
- http://youmightnotneedjquery.com/