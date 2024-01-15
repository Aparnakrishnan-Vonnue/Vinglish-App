export function areWordsPresent(
  sourceSentence: string,
  targetSentence: string,
) {
  const lowercasedTarget = targetSentence.toLowerCase();
  const lowercasedSource = sourceSentence.toLowerCase();

  const wordsToCheck = lowercasedSource.split(/\s+/);

  return wordsToCheck.some(word => lowercasedTarget.includes(word));
}

export const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
