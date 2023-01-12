function vowelCount(str) {
  str = str.toLowerCase();
  const vowelMap = new Map();
  const vowels = "aeiou";
  for (const s of str) {
    if (vowels.includes(s)) {
      if (vowelMap.get(s)) {
        vowelMap.set(s, vowelMap.get(s) + 1);
      } else {
        vowelMap.set(s, 1);
      }
    }
  }
  return vowelMap;
}

console.log(vowelCount("This is a vowel count function"));
