export function areWordsPresent(
  sourceSentence: string,
  targetSentence: string,
) {
  const lowercasedTarget = targetSentence.toLowerCase();
  const lowercasedSource = sourceSentence.toLowerCase();

  const wordsToCheck = lowercasedSource.split(/\s+/);

  return wordsToCheck.some(word => lowercasedTarget.includes(word));
}
