function removeKeysStartingWithVowel(obj) {
    for (let key in obj) {
      if (/^[aeiouAEIOU]/.test(key)) {
        delete obj[key];
      }
    }
    return obj;
  }
  
  // Example usage:
  const myObject = {
    apple: 1,
    banana: 2,
    orange: 3,
    kiwi: 4,
    avocado: 5
  };
  
  console.log("Before:", myObject);
  removeKeysStartingWithVowel(myObject);
  console.log("After:", myObject);
  