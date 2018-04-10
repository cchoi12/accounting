// We want to create a library where we can load multiple lbiraries.
(() => {
  var libraryStorage = {};

  function librarySystem(libraryName, callback) {
    if (arguments.length > 1) {
      libraryStorage[libraryName] = callback();
    } else {
      return libraryStorage[libraryName];
    }
  }
  window.librarySystem = librarySystem;
})();

(function() {
  // sandwich.js: A simple library
  // Demo usage: sandwichLibrary.breads.wheat => 'The Healthy Option'

  var breads = {
    wheat: 'Healthy Option',
    white: 'Unhealthy Option'
  };

  var fillings = {
    turkey: 'For the boring sandwiches',
    cheese: 'For the healthy folks'
  };

  var sandwichLibrary = {
    breads: breads,
    filling: fillings,
    notSandwich: arg => {
      console.log(`${arg} is not a sandwich nor is it food`);
    }
  };

  return sandwichLibrary;
})();

// Using the librarySystem with our sandwich Library.
librarySystem('sandwichLibrary', function() {
  // sandwich.js: A simple library
  // Demo usage: sandwichLibrary.breads.wheat => 'The Healthy Option'

  var breads = {
    wheat: 'Healthy Option',
    white: 'Unhealthy Option'
  };

  var fillings = {
    turkey: 'For the boring sandwiches',
    cheese: 'For the healthy folks'
  };

  var sandwichLibrary = {
    breads: breads,
    filling: fillings,
    notSandwich: arg => {
      console.log(`${arg} is not a sandwich nor is it food`);
    }
  };

  return sandwichLibrary;
});
