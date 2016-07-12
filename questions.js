'use strict';
var selectElementsStartingWithA = function(array) {
    var result = [];
    for (var i=0; i < array.length; i++)  {  
        if (array[i].charAt(0) == "a") {
            result.push(array[i]);
        };
    };
    return result
};

var selectElementsStartingWithVowel = function(array) {
    var vowel = ["a", "i", "e", "o", "u", "y"];
    var result = [];
    for (var i=0; i < array.length; i++) {
        var test = array[i].charAt(0);
        for (var vowelI=0; vowelI < vowel.length; vowelI++) {
            if (vowel[vowelI] == test){
                result.push(array[i]);
            }
        }
    };
    return result;
}

var removeNullElements = function(array) {
    var result = [];
    for (var i=0; i < array.length; i++) {
        if (array[i] != null)
        result.push(array[i]);
    }
    return result;
}

var removeNullAndFalseElements = function(array) {
   var result = [];
    for (var i=0; i < array.length; i++) {
        if (array[i] != null && typeof array[i] != "boolean")
        result.push(array[i]);
    }
    return result;
}

var reverseWordsInArray = function(array) {
    var result = [];
    for (var i=0; i < array.length; i++) {
        var normal = array[i].split("");
        var inverse = [];
        for (var inverseIncr = normal.length - 1 ; inverseIncr > -1; inverseIncr--) {
            inverse.push(normal[inverseIncr]);
        };
        var show = inverse.join("");;
        result.push(show);
    }
    return result;
}

var everyPossiblePair = function(array) {
    var result = [];
    var pair = [array[array.length-1]];
    for (var i=0; i < array.length; i++) {
        pair.push(array[i]);
        pair.sort();
        result.push(pair);
        pair = [array[i]];
    }
    result.sort();
    return result;
}

var allElementsExceptFirstThree = function(array) {
    var result = array.slice(3)
    return result;
}

var addElementToBeginning = function(array, element) {
    array.unshift(1);
    var result = array;
    return result;
}

var sortByLastLetter = function(array) {
    var result = [];
    for ( var i=0; i < array.length; i++) {
        var test = array[i].charAt(array[i].length-1);
        
    }
    
    return result;
}

var getFirstHalf = function(string) {
    return 'Write your method here';
}

var makeNegative = function(number) {
    return 'Write your method here';
}

var numberOfPalindromes = function(array) {
    return 'Write your method here';
}

var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
