

## Examples

```jsx
var obj1 = {
  b: [
    {
      c: 'text1'
    }
  ]
};
var obj2 = {
  a: 'text2'
};
var obj2bis = {
  a: 'text2bis'
};
var obj3 = {
  b: [
    {},
    {
      c: 'text3'
    }
  ]
};
var obj4 = {
  d: {
    e: 'text4'
  }
};
var obj5 = {
  d: {
    f: 'text5'
  }
};
var obj6 = {
  d: {
    g: 'text6'
  }
};
var obj6bis = {
  d: {
    g: 'text6Bis'
  }
};
var obj7 = {
  d: {
    h: [
      { i: 'text7' }
    ]
  }
};
var obj8 = {
  d: {
    h: [
      { l: 'text8' },
      { i: 'text8b' }
    ]

  }
};

var obj9 = {
  d: {
    h: [
      {
        k: [0, 1, 2, 3, 4]
      },
      {
        k: [5, 6, 7, 9, 10],
        z: false
      },
      {
        m: [
          { n: 'text9' },
          { n: 'text9b' }
        ]
      }
    ]
  }
};

var x = mergeObjects({}, obj1);
x = mergeObjects(x, obj2);
x = mergeObjects(x, obj2bis);
x = mergeObjects(x, obj3);
x = mergeObjects(x, obj4);
x = mergeObjects(x, obj5);
x = mergeObjects(x, obj6);
x = mergeObjects(x, obj6bis);
x = mergeObjects(x, obj7);
x = mergeObjects(x, obj8);
x = mergeObjects(x, obj9);
console.log(x);



```