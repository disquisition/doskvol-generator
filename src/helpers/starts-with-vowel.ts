export function startsWithVowel(word: string) {
  const vowels = 'aeiouAEIOU';

  return vowels.indexOf(word[0]) !== -1;
}
