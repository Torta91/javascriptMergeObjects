
var mergeObjects = function (obj1, obj2) {
    var result = {};
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
      var myArray1 = obj1;
      var myArray2 = obj2;
      if (obj2.length < obj1.length) {
        myArray1 = obj2;
        myArray2 = obj1;
      }
      result = [];
      const length = myArray1.length
      var idx = 0;
      for (idx = 0; idx < length; idx++) {
        result.push(mergeObjects(myArray1[idx], myArray2[idx]))
      }
      for (idx = length; idx < myArray2.length; idx++) {
        result.push(myArray2[idx])
      }
    } else if (typeof (obj1) === 'object' && typeof (obj2) === 'object') {
      for (var prop in obj1) {
        if (obj2.hasOwnProperty(prop)) {
          result[prop] = mergeObjects(obj1[prop], obj2[prop])
        } else {
          result[prop] = obj1[prop];
        }
      }
      for (var prop2 in obj2) {
        if (!obj1.hasOwnProperty(prop2)) {
          result[prop2] = obj2[prop2]
        }
      }
    } else {
      if (typeof (obj1) === 'object') {
        result = Object.assign(result, obj1);
      } else {
        result = obj1;
      }
      if (typeof (obj2) === 'object') {
        result = Object.assign(result, obj2);
      } else {
        result = obj2;
      }
    }
    return result; 
};
