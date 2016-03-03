
# 基本方針

- できるかぎり、VanillaなJavaScriptを記述するよう心がける。
- 特に記述がない場合、IE9以上で動作する。
- :construction:の場合、Babel導入後に使用可能


# TOC

- [Lodash to JavaScript](https://github.com/t32k/goodbye-coffee#lodashtojavascript)
- CoffeeScript to JavaScript
- JavaScript to JavaScript2015


# Lodash to JavaScript


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

配列内の要素が指定されたテスト関数を満たす場合、配列内の**値**を返し、そうでない場合は`undefined`を返す。

:construction:  IE, Opera未サポート


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


## _.findIndex

配列内の要素が指定されたテスト関数を満たす場合、配列内の**インデックス**を返し、そうでない場合は`-1`を返す。

:construction:  IE, Opera未サポート

```javascript
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];

  // Lodash
  var index =  _.findIndex(users, function(element) { return element.age >= 40; });
  console.log(index); // output: 1

  // Native
  var index =  users.findIndex((element) =>  element.age >= 40);
  console.log(index); // output: 1
```


## _.indexOf

引数に与えられた内容と同じ内容を持つ配列要素の内、**最初**のものの添字を返します。存在しない場合は`-1`を返す。

```javascript
  var array = [2, 9, 9];

  // Lodash
  var result = _.indexOf(array, 2);    
  console.log(result);  // output: 0

  // Native
  var result = array.indexOf(2);    
  console.log(result);  // output: 0
```


## _.lastIndexOf

配列中で与えられた要素が見つけられた**最後**の添字を返し、もし存在しなければ`-1`を返す。

```javascript
  var array = [2, 9, 9, 4, 3, 6];

  // Lodash
  var result = _.lastIndexOf(array, 9);    
  console.log(result);  // output: 2

  // Native
  var result = array.lastIndexOf(9);    
  console.log(result); // output: 2
```


## _.includes

特定の要素が配列に含まれているかどうかを`true`または`false`で返す。

:construction:  IE未サポート

```javascript
  var array = [1, 2, 3];

  // Lodash - also called with _.contains
  _.includes(array, 1); // → true

  // Native
  array.includes(1); // → true
```


## _.keys

`object`で直接発見された列挙可能なプロパティに対応する文字列を要素とする配列を返す。

```javascript
  // Lodash 
  var result = _.keys({one: 1, two: 2, three: 3});
  console.log(result);　// output: ["one", "two", "three"]

  // Native
  var result2 = Object.keys({one: 1, two: 2, three: 3});
  console.log(result2); // output: ["one", "two", "three"]
```


## _.size

コレクションの値の数を返す。

```javascript
  // Lodash
  var result = _.size({one: 1, two: 2, three: 3});
  console.log(result); // output: 3

  // Native
  var result2 = Object.keys({one: 1, two: 2, three: 3}).length;
  console.log(result2); // output: 3
```


## _.isNaN

`NaN`（非数）かどうかを判定する。

```javascript
  // Lodash
  console.log(_.isNaN(NaN)); // output: true

  // Native
  console.log(isNaN(NaN)); // output: true
```


## _.reverse

配列の要素を反転する。最初の要素は最後に、最後の要素は最初になる。

```javascript
  var array = [1, 2, 3];

  // Lodash
  console.log(_.reverse(array)); // output: [3, 2, 1]

  // Native
  console.log(array.reverse()); // output: [3, 2, 1]
```


## _.join

配列のすべての要素を繋いで文字列にする。

```javascript
  // Lodash
  var result = _.join(['one', 'two', 'three'], '--');
  console.log(result); // output: 'one--two--three'

  // Native
  var result = ['one', 'two', 'three'].join('--');
  console.log(result) // output: 'one--two--three'
```


## _.toUpper

呼び出す文字列の値を**大文字**に変換して返す。

```javascript
  // Lodash
  var result = _.toUpper('foobar');
  console.log(result); // output: 'FOOBAR'

  // Native
  var result = 'foobar'.toUpperCase();
  console.log(result); // output: 'FOOBAR'
```


## _.toLower

呼び出す文字列の値を**小文字**に変換して返す。


```javascript
  // Lodash
  var result = _.toLower('FOOBAR');
  console.log(result); // output: 'foobar'

  // Native
  var result = 'FOOBAR'.toLowerCase();
  console.log(result); // output: 'foobar'
```


## _.trim

文字列の両端の空白を削除する。


```javascript
  // Lodash
  var result = _.trim(' abc ');
  console.log(result); // output: 'abc'

  // Native
  var result = ' abc '.trim();
  console.log(result); // output: 'abc'
```

## _.pluck

`map`の最も一般的なユースケースであろうバージョン。プロパティの値を抽出する。

```javascript
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];

  // Lodash
  var array =  _.pluck(users, 'age');
  console.log(array); // output: [36, 40, 1]

  // Native
  var array =  users.map(value => value.age);
  console.log(array); // output: [36, 40, 1]
```


## _.isNumber

引数に指定された値が整数かどうかを判定するメソッド。Lodashは数値かどうかを判定。

:construction:  IE, Opera, Safari未サポート

```javascript
  // Lodash
  _.isNumber(3); // → true

  // Native
  Number.isInteger(3); // → true
```

## _.isArray

引数が配列であればtrueを、そうでなければfalseを返します。

```javascript
  // Lodash
  _.isArray([1, 2, 3]); // → true

  // Native
  Array.isArray([1, 2, 3]); // → true
```

## _.sum

`array`の値の合計値を計算する。

```javascript
  // Lodash
  _.sum([4, 2, 8, 6]);　// → 20

  // Native
  [4, 2, 8, 6].reduce((pv, cv) => pv + cv);　// → 20
```


## _.min, _.max

引数として与えた複数の数の中で最小または最大の数を返す。

```javascript
  var array = [4, 2, 8, 6];

  // Lodash
  _.min(array); // → 2
  _.max(array); // → 8

  // Native
  Math.min.apply(null, array); // → 2
  Math.max.apply(null, array); // → 8
```


## _.first(_.head), _.last

`array`の最初もしくは最後の値を取得する。

```javascript
  var array = [[1, 2, 3];

  // Lodash
  _.first(array); // → 1
  _.last(array); // → 3

  // Native
  array[0]; // → 1
  array[array.length - 1]; // → 3
```


## _.remove

引数で与えた関数の条件にマッチするものを`array`からすべて削除する。`_.remove`は破壊的メソッド。

```javascript
  var array = [1, 2, 3, 4];

  // Lodash
  var evens = _.remove(array, function(n) {
    return n % 2 == 0;
  });
  console.log(array); // → [1, 3]
  console.log(evens); // → [2, 4]

  // Native
  var evens = array.filter(n => n % 2 == 0);
  console.log(array); // → [1, 2, 3, 4]
  console.log(evens); // → [2, 4]

```




# Resources

- [DrkSephy/es6-cheatsheet](https://github.com/DrkSephy/es6-cheatsheet)
- [cht8687/You-Dont-Need-Lodash-Underscore](https://github.com/cht8687/You-Dont-Need-Lodash-Underscore)
- [You Might Not Need Underscore | Reindex](https://www.reindex.io/blog/you-might-not-need-underscore/)
- [Changelog · lodash/lodash Wiki](https://github.com/lodash/lodash/wiki/Changelog#compatibility-warnings)