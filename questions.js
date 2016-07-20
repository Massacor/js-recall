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
    for (var i=0; i < array.length-1; i++)//le -1 est important car il permet de gérer le cas de figure du dernier de la liste
    {
        for (var incrPair = i+1; incrPair < array.length; incrPair++) //le i+1 permet de gérer le fait que ce soit des paires
        {
             if (array.indexOf(array[incrPair]) > i) {
                 var pair = [array[i], array[incrPair]];// le fait de lui imposer une nouvelle valeur à chaque tour régle le problème de réinitialisation.
                 pair.sort();
                 result.push(pair)
             }
        }
    };
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
    // La surppression sur un tableau en train d'être balayer est une très mauvaise idée, il vaut mieux push sur un tableau parralléle et afficher celui là.
    for (var i = 0; i < letters.length; i++) {
        if (letters[i] != "," && test != letters[i]) {
            result.push(letters[i])
        }
        test=letters[i]
    }
    return result;
}

var swapKeysAndValues = function(object) {
    
    var tabKeys = Object.keys(object);
    var tabValues = [];
    var tabMain = [];
    var result = {};
    for (var i=0; i < tabKeys.length; i++) {
        tabValues.push(object[tabKeys[i]]);
    }
    for (var i=0; i < tabKeys.length; i++) {
        tabMain.push(tabValues[i]);
        tabMain.push(tabKeys[i]);
    }
    for (var i=0; i < tabMain.length; i++) {
        if (i%2 ==0) {
           result[tabMain[i]] = tabMain[i+1]; 
        }  
    }
    return result;
}

var sumKeysAndValues = function(object) {
    var tabKeys = Object.keys(object);
    var tabValues = [];
    var tabMain = [];
    var result = 0;
    for (var i=0; i < tabKeys.length; i++) {
        tabValues.push(object[tabKeys[i]]);
    }
    for (var i=0; i < tabKeys.length; i++) {
        tabMain.push(tabKeys[i]);
        tabMain.push(tabValues[i]);
    }
    for (var i=0; i < tabMain.length; i++) {
        result += Number(tabMain[i]);
    }
    return result;
}

var removeCapitals = function(string) {
    var result=[];
    var tabMain = string.split("");
    for (var i=0; i < tabMain.length; i++) {
        if (tabMain[i].charCodeAt(0) >= 90 || tabMain[i].charCodeAt(0) <= 65 || tabMain[i].charCodeAt(0) == 32) {
            result.push(tabMain[i]);
        }
    }
    result = result.join("")
    return result;
}

var roundUp = function(number) {
    var result = Math.ceil(number)
    return result;
}

var formatDateNicely = function(date) {
    var month = date.getMonth(date)+1;
    if (month <10 ) {
        month = "0" + month;
    }
    var day = date.getDate(date);
    if (day <10 ) {
        day = "0" + day;
    }
    var result = day + "/"+ month + "/" + date.getFullYear(date);
    return result;
}

var getDomainName = function(string) {
    var result = string.slice(string.indexOf("@")+1).split(".")
    result.pop()
    result=result.join(".");
    return result;
}

var titleize = function(string) {
    var tabCapitalize = [];
    var result = [];
    var previousWord = "";
    tabCapitalize = string.split(" ");
    for (var i = 0; i < tabCapitalize.length; i++) {
        if (tabCapitalize[i] == tabCapitalize[0] || previousWord.charAt(previousWord.length-1) == "."  ){
            result.push(tabCapitalize[i].charAt(0).toUpperCase())
        } else if (tabCapitalize[i].length > 3) {
            result.push(tabCapitalize[i].charAt(0).toUpperCase())
        } else {
            result.push(tabCapitalize[i].charAt(0).toLowerCase())
        }
        
        previousWord = tabCapitalize[i];
        tabCapitalize[i] = tabCapitalize[i].slice(1)
        result[i] += tabCapitalize[i]
    }
    result = result.join(" ");
    return result;
}

var checkForSpecialCharacters = function(string) {
    var result = string.toLowerCase();
    result= result.split("");
    var count = 0;
    for (var i =0; i < result.length; i++) {
        if(result[i].charCodeAt(0) < 97 || result[i].charCodeAt(0) > 122) {
           if (result[i].charCodeAt(0) < 48 || result[i].charCodeAt(0) > 57) {
                count += 1;
           } else {
                count = count + 0;
           };
        };
    };
    return (count > 0);
}

var squareRoot = function(number) {
    number = Math.sqrt(number);
    
    return number;
}

var factorial = function(number) {
    var result = number;
    for (var i=1; i < number; i++) {
        result *=  i;
    }
    return result;
}

var findAnagrams = function(string) {
    var result = [];
    var separated= string.split("").sort();
    var anagram = [];
    for (var incrNv1=0; incrNv1 < separated.length; incrNv1++) {
        anagram.push(separated[incrNv1])
        
        for (var incrNv2 = 0; incrNv2 < separated.length; incrNv2++) {
            if (separated[incrNv1] != separated[incrNv2]) {
                anagram.push(separated[incrNv2]);
                
                for (var incrNv3 = 0; incrNv3 < separated.length; incrNv3++) {
                    if (separated[incrNv1] != separated[incrNv3] && separated[incrNv2] != separated[incrNv3]) {
                    anagram.push(separated[incrNv3]);
                    var ready = anagram.join("");
                    result.push(ready);
                    anagram.pop();
                    }
                }
            }
        }
        anagram=[];
    }
    result.sort();
    return result;
}

var convertToCelsius = function(number) {
    number = Math.ceil((number-32)/1.8);
    return number;
}

var letterPosition = function(array) {
    var result=[];
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (var i=0; i < array.length; i++) {
        array[i] = array[i].toLowerCase();
        for (var incrAlphabet=0; incrAlphabet < alphabet.length; incrAlphabet++) {
            if (array[i] == alphabet[incrAlphabet]) {
                result.push(
                    alphabet.indexOf(alphabet[incrAlphabet])+1
                );
            }
        }
    }
    return result;
}
