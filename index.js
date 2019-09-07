const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection);
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      let newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection);
      let transformedCollection = [];
      for (let i = 0; i < newCollection.length; i++) {
        transformedCollection.push(callback(newCollection[i]));
      }
      return transformedCollection;
    },

    reduce: function(collection, callback, acc) {
      let total = acc ? acc : collection[0];
      let i = acc ? 0 : 1;
      for (i; i < collection.length; i++) {
        total = callback(total, collection[i], collection);
      }
      return total;
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      let result = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
      return result;
    },

    size: function(collection) {
      return (Array.isArray(collection) ? collection.length : Object.keys(collection).length);
    },

    first: function(array, n) {
      return (n ? array.slice(0,n) : array[0]);
    },

    last: function(array, n) {
      return (n ? array.slice(-n) : array[array.length-1])
      
    },

    compact: function(array) {
      let truthy = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]) truthy.push(array[i])
      }
      return truthy;
    },

    sortBy: function(array, callback) {
      let sorted = [...array];
      return sorted.sort( (a,b) => {
        return callback(a) - callback(b)
      });
    },

    flatten: function(array, shallow) {
      if (shallow) {
        return [].concat(...array)
      }
      else {
        while (array.find(e => Array.isArray(e))) {
          array = [].concat(...array)
        }
        return array;
      }
    },

    uniq: function(array, isSorted, callback) {
      let uniqArray = [];
      if (callback) {
        let transformedArray = [];
        for (let e of array) {
          if (!transformedArray.includes(callback(e))) {
            transformedArray.push(callback(e));
            uniqArray.push(e);
          }
        }
      }
      else {
        for (let e of array) {
          if (!uniqArray.includes(e)) {
            uniqArray.push(e);
          }
        }
      }
      return uniqArray;
    },

    keys: function(object) {
      let keys = [];
      for (let key in object) {
        keys.push(key);
      }
      return keys;
    },

    values: function(object) {
      let values = [];
      for (let key in object) {
        values.push(object[key]);
      }
      return values;
    },

    functions: function(object) {
      let objectFns = [];
      for (let key in object) {
        if (typeof object[key] === "function") {
          objectFns.push(key);
        }
      }
      return objectFns;
    }

  }
})()

fi.libraryMethod()
