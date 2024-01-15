import Hangman from '../assets/images/hangman.jpg';

export const dictionary = [
  {
    word: 'Purge',
    meaning: 'To rid of whatever is impure or undesirable; cleanse; purify',
    synonyms: 'remove, cleanse',
    usage:
      'The water was purged and then tested for purity, so it should be safe to drink',
    partsOfSpeech: 'verb',
  },
  {
    word: 'Imminent',
    meaning: 'About to happen',
    synonyms: 'approaching ,impending',
    usage: 'They were in imminent danger of being swept away',
    partsOfSpeech: 'adjective',
  },
  {
    word: 'Fluster',
    meaning: 'make (someone) agitated or confused',
    synonyms: 'unsettle, unnerve',
    usage: 'There is nothing you can do or say to fluster Bernie',
    partsOfSpeech: 'verb',
  },
  {
    word: 'Rigid',
    meaning: 'unable to bend or be forced out of shape; not flexible',
    synonyms: 'stiff, hard',
    usage: 'A seat of rigid orange plastic',
    partsOfSpeech: 'adjective',
  },
  {
    word: 'Rehabilitate',
    meaning:
      'Restore (someone) to health or normal life by training and therapy after imprisonment, addiction or illness',
    synonyms: 'reintegrate, readapt',
    usage: 'She is helping to rehabilitate the criminals',
    partsOfSpeech: 'verb',
  },
  {
    word: 'Persistent',
    meaning:
      ' continuing to do something or to try to do something even though it is difficult or other people want you to stop',
    synonyms: 'persevering, dogmatic',
    usage: 'She has a persistent cough',
    partsOfSpeech: 'adjective',
  },
  {
    word: 'Insistent',
    meaning: 'Insisting on or demanding something',
    synonyms: 'persistent, determined',
    usage: "She didn't want to go, but her brother was insistent",
    partsOfSpeech: 'adjective',
  },
  {
    word: 'Seize',
    meaning: 'Take hold of suddenly and forcibly',
    synonyms: 'grab, snatch',
    usage: 'She jumped up and seized his arm',
    partsOfSpeech: 'verb',
  },
  {
    word: 'Leisure',
    meaning: 'Time when one is not working or occupied; free time',
    synonyms: 'free time, spare time',
    usage: 'Take the book and read it at you leisure',
    partsOfSpeech: 'noun',
  },
  {
    word: 'Indispensable',
    meaning: 'absolutely necessary',
    synonyms: 'essential, crucial',
    usage: 'None of our players are indispensable',
    partsOfSpeech: 'adjective',
  },
  {
    word: 'Inimitable',
    meaning: 'so good or unusual as to be impossible to copy',
    synonyms: 'unique, distinctive',
    usage: 'He entertained using his own inimitable style',
    partsOfSpeech: 'adjective',
  },
  {
    word: 'Vicarious',
    meaning:
      'experienced in the imagination through the feelings or actions of another person',
    synonyms: 'indirect, derivative',
    usage: 'The catalogue brings vicarious pleasure in luxury living',
    partsOfSpeech: 'adjective',
  },
  {
    word: 'Rationalize',
    meaning:
      'attempt to explain or justify (behavior or an attitude) with logical reasons even if these are not appropriate',
    synonyms: 'justify, account for',
    usage: 'She could not rationalize her urge to return to the cottage.',
    partsOfSpeech: 'verb',
  },
  {
    word: 'Obsequious',
    meaning: 'Obedient or attentive to an excessive or servile degree',
    synonyms: 'servile, fawning',
    usage: 'They were served by obsequious waiters',
    partsOfSpeech: 'adjective',
  },
  {
    word: 'Maudlin',
    meaning: 'Self pityingly or tearfully sentimental',
    synonyms: 'sentimental, emotional',
    usage: 'He gets maudlin when he is tired',
    partsOfSpeech: 'adjective',
  },
  {
    word: 'Ascetic',
    meaning:
      'Characterized by severe self discipline and abstention from all form of indulgence typically for religious reasons',
    synonyms: 'self-denying, abstinent',
    usage: 'An ascetic life of prayer, fasting and manual labour',
    partsOfSpeech: 'adjective',
  },
  {
    word: 'Pander',
    meaning:
      'Gratify or indulge (an immortal or distasteful desire or taste or a person with such desire or taste)',
    synonyms: 'satisfy, indulge',
    usage: "Newspapers are pandering to people's baser instincts",
    partsOfSpeech: 'verb',
  },
  {
    word: 'Sublimate',
    meaning:
      'Divert or modify into culturally higher or socially more acceptable activity.',
    synonyms: 'essential, crucial',
    usage: 'Channel, Control',
    partsOfSpeech: 'verb',
  },
  {
    word: 'Wanton',
    meaning: '(Of a cruel or violent action) deliberate and unprovoked.',
    synonyms: 'deliberate, wilful',
    usage: 'The wanton destruction of the forests must be stopped',
    partsOfSpeech: 'adjective',
  },
  {
    word: 'Effete',
    meaning: 'Affected and overly refined',
    synonyms: 'ineffectual, artificial',
    usage: 'Effete trendies from art college',
    partsOfSpeech: 'adjective',
  },
  {
    word: 'Expiate',
    meaning: 'Make amends or reparation for(guilt or wrongdoing)',
    synonyms: 'atone for, make up for',
    usage: 'Their sins must be expiated by sacrifice',
    partsOfSpeech: 'verb',
  },
  {
    word: 'Importune',
    meaning: 'Harass someone persistently for or to do something',
    synonyms: 'beg, entreat',
    usage: 'Reporters importuned him with pointed questions.',
    partsOfSpeech: 'verb',
  },
  {
    word: 'Scintillate',
    meaning: 'Emit flashes of light',
    synonyms: 'sparkle, shine',
    usage: 'The sleek boat seemed to scintillate with a dark blue light',
    partsOfSpeech: 'verb',
  },
  {
    word: 'Mulct',
    meaning: 'Extract money from (someone) by fine or taxation',
    synonyms: 'penalty, fine',
    usage: 'They have turned mulcting taxpayers into an art form',
    partsOfSpeech: 'verb',
  },
  {
    word: 'Impute',
    meaning:
      'represent (something, especially something undesirable) as being done or possessed by someone',
    synonyms: 'ascribe, attribute',
    usage: 'The crimes imputed to Richard',
    partsOfSpeech: 'verb',
  },
  {
    word: 'Ostracize',
    meaning: 'Exclude from a society or group',
    synonyms: 'exclude, shun',
    usage: 'She was declared a witch and was ostracized by the villagers',
    partsOfSpeech: 'verb',
  },
  {
    word: 'Deprecate',
    meaning: 'Express disapproval of',
    synonyms: 'deplore, be against',
    usage: 'What i deprecate is persistent indulgence',
    partsOfSpeech: 'verb',
  },
  {
    word: 'Procrastinate',
    meaning: 'The action of delaying or postponing something',
    synonyms: 'dithering, delaying tactics',
    usage: 'Your first tip is to avoid procrastination',
    partsOfSpeech: 'verb',
  },
  {
    word: 'Rusticate',
    meaning:
      '1) To make something rustic in style (= make it simple or old-fashioned in a way typical of the countryside):\n 2) To ask a student to leave a school or university, usually Oxford or Cambridge, for a particular period of time as a punishment: ',
    synonyms: 'dismiss, evict',
    usage: 'The chapel was built of rusticated sandstone.',
    partsOfSpeech: 'verb',
  },
  {
    word: 'Vegetate',
    meaning:
      'live or spend a period of time in a dull, inactive, unchallenging way.',
    synonyms: 'do nothing, idle',
    usage:
      "If she left him alone, he'd sit in front of the television and vegetate",
    partsOfSpeech: 'verb',
  },
  {
    word: 'Altruist',
    meaning:
      'A person who cares about others and helps them despite not gaining anything by doing this',
    synonyms: 'donor, contributor',
    usage: 'Altruists have a strong desire to help other people',
    partsOfSpeech: 'noun',
  },
  {
    word: 'Atheist',
    meaning:
      'A person who does not believe in the existence of a god or any gods',
    synonyms: 'non believer, agnostic',
    usage: 'He had strong atheistic convictions',
    partsOfSpeech: 'noun',
  },
  {
    word: 'Agnostic',
    meaning:
      'A person who believes that nothing is known for the existence of god',
    synonyms: 'Atheist, Sceptic',
    usage:
      'Although he was raised a Catholic, he was an agnostic for most of his adult life.',
    partsOfSpeech: 'noun',
  },
  {
    word: 'Fatalist',
    meaning:
      'someone who believes that people cannot change the way events will happen and that events, especially bad ones, cannot be avoided',
    synonyms: 'defeatist, pessimist',
    usage: "'I'm not a fatalist,' she said, 'I'm a realist",
    partsOfSpeech: 'noun',
  },
  {
    word: 'Egoist',
    meaning: 'a self-centred or selfish person (opposed to altruist)',
    synonym: 'egotist, narcissist',
    usage:
      'They disliked this egoistic conception of man and they suspected that egoistic motives might not be sufficient to underpin morality',
    partsOfSpeech: 'noun',
  },
  {
    word: 'Stoic',
    meaning:
      'a person who can endure pain or hardship without showing their feelings or complaining',
    synonyms: 'patient, uncomplaining',
    usage:
      'He and his pals are stoic in the face of any criticism of their team',
    partsOfSpeech: 'noun',
  },
  {
    word: 'Chauvinist',
    meaning:
      'a person displaying excessive or prejudiced support for their own cause or group, in particular, a man prejudiced against woman',
    synonyms: 'sexist, male chauvinist',
    usage: 'She now reports to a new boss, who is a chauvinist',
    partsOfSpeech: 'noun',
  },
  {
    word: 'Jingoist',
    meaning: 'Someone who believes that their own country is always best',
    synonyms: 'fanaticism, nationalism etc',
    usage:
      'He was a confirmed jingoist and would frequently speak about the dangers of Britain forming closer ties with the rest Europe',
    partsOfSpeech: 'noun',
  },
  {
    word: 'Liberal',
    meaning:
      "willing to respect or accept behavior or opinions different from one's own; Open to new Ideas",
    synonyms: 'tolerant, unprejudiced',
    usage: 'My idea of a conservative is someone who thinks taxes are too high',
    partsOfSpeech: 'adjective',
  },
  {
    word: 'Epicurean',
    meaning:
      'A person who developed to sensual enjoyment, especially that derived from fine food and drink',
    synonyms: '',
    usage: 'I have to admit to a certain amount of epicurean bigotry here',
    partsOfSpeech: 'noun',
  },
  {
    word: 'Monogamy',
    meaning:
      'The practise of marrying or stale of being married to one person at a time',
    synonyms: 'celibacy, purity',
    usage: 'Judaism has journeyed from Polygamy to strict Monogamy',
    partsOfSpeech: 'noun',
  },
  {
    word: 'Bigamy',
    meaning:
      'The offense of marrying someone while already married to another person',
    synonyms: 'polygamy, polygamous',
    usage:
      'But marrying itself is largely a creature of legal rules precluding divorce ang prohibiting Bigamy',
    partsOfSpeech: 'noun',
  },
  {
    word: 'Misogamy',
    meaning: 'dislike or aversion to marriage',
    synonym: 'hatred of marriage',
    usage:
      'Certain birds, after years of Misogamy, took to nesting in the new quiet of the zoo',
    partsOfSpeech: 'noun',
  },
  {
    word: 'Monotheism',
    meaning: 'Belief in the existence of one god',
    synonyms: 'pagasm, theology ',
    usage:
      'Does you masonry promotes Monotheism or does it promotes Multitheism  ',
    partsOfSpeech: 'noun',
  },
  {
    word: 'Bicuspid',
    meaning: 'having two cusps or points',
    synonyms: 'Canine, denticle',
    usage:
      'A bicuspid aortic valve has only two flaps instead of three which can lead to stenosis in adulthood',
    partsOfSpeech: 'adjective',
  },
  {
    word: 'Polyglot',
    meaning: 'Knowing or using several languages',
    synonyms: 'linguist, wordsmith',
    usage: 'A language translation quiz for polyglot readers',
    partsOfSpeech: 'adjective',
  },
  {
    word: 'Misanthropy',
    meaning: 'a dislike of human kind',
    synonyms: 'cynicism, hatred of mankind',
    usage: 'The streak of Misanthropy in his nature',
    partsOfSpeech: 'noun',
  },
  {
    word: 'Polygamy',
    meaning:
      'The practice or custom of having more than one wife or husband at the same time',
    synonyms: 'bigamy, polygyny',
    usage: 'The practice of Polygamy was banned',
    partsOfSpeech: 'noun',
  },
];

export const gameCardData = [
  {
    imageUrl: Hangman,
    title: 'Hangman',
    description:
      'Probably one of the most popular word games for kids is the popular Hang Man. Player 1 thinks of a word and Player 2 has to guess it before they get “hung.”' +
      '\n' +
      'Player 1 writes spaces for letters are written on the page so they know how many letters there are in the word. Player 2 proceeds to choose a letter they think may be in the word.' +
      '\n' +
      'If it is correct Player 1 writes the letter down where it goes. If it is incorrect Player 1 draws part of the “hangman”. If the drawing is complete by the time Player 2 guesses, then Player 1 wins.',
  },
];
