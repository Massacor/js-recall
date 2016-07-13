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
    return array;
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
    for (var i=0; i < array.length; i++) {
        result.push(array[i].split("").reverse().join(""))
    };
    result.sort();
    array = result; //On retourne le résultat dans le tableau et on repart.
    result = [];
    for (var i=0; i < array.length; i++) {
        result.push(array[i].split("").reverse().join(""))
    }
    return result;
}

var getFirstHalf = function(string) {
    var result = "";
    var half = Math.ceil(string.length/2);
    var result = string.slice(0,half);
    return result;
}

var makeNegative = function(number) {
    if (number > 0) {
        number = number*-1;
    }
    
    return number;
}

var numberOfPalindromes = function(array) {
    var result=0;
    var test="";
    for (var i=0; i < array.length; i++) {
        test = array[i].split("").reverse().join("");
        if (test == array[i]) {
            result +=1;
        }
    }
    
    return result;
}

var shortestWord = function(array) {
    var result=array[0];
    for (var i=0; i < array.length; i++) {
        if (result.length > array[i].length)
            result = array [i];
    }
    return result;
}

var longestWord = function(array) {
    var result=array[0];
    for (var i=0; i < array.length; i++) {
        if (result.length < array[i].length)
            result = array [i];
    }
    return result;
}

var sumNumbers = function(array) {
    var result=0;
    for (var i=0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

var repeatElements = function(array) {
    var longueur = array.length;
    var result = [];
    var result = array;
    for (var i=0; i < longueur; i++) {
        result.push(array[i]);
    };
    return result;
}

var stringToNumber = function(string) {
    var result = Number(string);
    return result;
}

var calculateAverage = function(array) {
    var result =0;
    for (var i =0; i < array.length; i++) {
        result += array[i];
    }
    result /= array.length;
    return result;
}

var getElementsUntilGreaterThanFive = function(array) {
    var result = [];
    for (var i=0; i < array.length; i++) {
        if (array[i]<=5) {
            result.push(array[i]);
        } else {
            return result;
        }
    };
}

var convertArrayToObject = function(array) {
    var result = {};
    for (var i = 0; i < array.length; i++) {
        if (i%2 == 0) {
            result[array[i]] = array[i+1];
        }
    }
    return result;
}

var getAllLetters = function(array) {
    var result = [];
    
    var letters = array.toString().split("").sort();
    var test="";
    // la surppression sur un tableau en train d'être balayer est une très mauvaise idée, il vaut mieux push sur un tableau parralléle et afficher celui là.
    for (var i = 0; i < letters.length; i++) {
        if (letters[i] != "," && test != letters[i]) {
            result.push(letters[i])
        }
        test=letters[i]
    }
    return result;
}

var swapKeysAndValues = function(object) {
    result = {};
    
    
    return result;
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
