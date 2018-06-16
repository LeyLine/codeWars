// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var vowelsCount = 0;

  for (i = 0; i < str.length; i++) {
    if (str[i].includes("a")) {
      vowelsCount++;
    } else if (str[i].includes("e")) {
      vowelsCount++;
    } else if (str[i].includes("o")) {
      vowelsCount++;
    } else if (str[i].includes("i")) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

getCount("abracadabra");
