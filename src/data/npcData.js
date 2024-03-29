/*
THIS IS RAW NPC DATA, instances of NPCs are generated with data from here so that each game can update the isComplete boolean.
OPTIONS are picked from random good and bad arrays? so that option[0] adds points and option[1] does nothing and option[2] deducts points

there can be npcs where there is no request?
*/

export const npcData = [
  {
    name: 'Amalia',
    points: 25,
    request: 'Hey! I\'ve been hearing great things about this new tea shop called \'418 Teapots\'. Do you want to go check it out with me?',
    options: [
      'Let\'s go! I love tea!',
      'Can I take a rain check?',
      'Uh...with you? No thanks.'
    ],
    replies: [
      'Yay! I\'ve been trying to get someone to go with me, but everyone is too busy...',
      'Aw, okay. Give me a ring if you\'re free!',
      'Oh...sorry I asked...'
    ]
  },
  {
    name: 'Timm',
    points: 50,
    request: 'Heeeeey...I\'m staaaaarving. I could really use a donut right now.',
    options: [
      'Well it\'s your lucky day! I just picked up these Krispy Kreme ones FRESH.',
      'Sorry, I don\'t have any.',
      'Uh that\'s offensive to me as a Pillsbury dough boy.'
    ],
    replies: [
      'THANKS! I appreciate it!',
      'That\'s cool, thanks anyway.',
      '*pokes your stomach*'
    ]
  },
  {
    name: 'Luna',
    points: 10,
    request: '...meow?',
    options: [
      'Throw the mouse.',
      'Back away slowly',
      'Ignore'
    ],
    replies: [
      '*runs to fetch the mouse*',
      '*chomps the feets*',
      '*chomps the feets*'
    ]
  },
  {
    name: 'Guy',
    points: 25,
    request: 'Please help me find my precious Mango!',
    options: [
      'Here he is, I found him at a fruit stand!',
      'I haven\'t found any mangos yet.',
      'Be warned, mangos are my favorite fruit, I might eat it if I find one!'
    ],
    replies: [
      'Thank you! I\'ve been worried sick!',
      'Oh...ok...',
      '*face of abject horror*'
    ]
  },
  {
    name: 'Shanjana',
    points: 25,
    request: 'Want to see who can fit the most gummy bears in their mouth?',
    options: [
      'No thanks, I hate gummy bears.',
      '7',
      'Game on!!'
    ],
    replies: [
      'Suit yourself, more for me!',
      'My, my! That\'s a lot of gummy bears!',
      'Be ready to lose!'
    ]
  },
  {
    name: 'Tom',
    points: 25,
    request: 'I\'m thinking about asking my boss for a promotion. What do you think?',
    options: [
      'Stay and get promoted!',
      'Maybe think it over a bit more.',
      'Quit, because no promotion.'
    ],
    replies: [
      'I got the promotion and arrays!',
      'I\'ll discuss with the managers and get back to you.',
      'I quit, because I didn’t get arrays.'
    ]
  },
  {
    name: 'Dave',
    points: 25,
    request: 'Hey! How about a game of pickup basketball?',
    options: [
      'I\'m so down!',
      'Sorry, I can\'t right now, but count me in next time!',
      'Basketball? Who plays basketball?'
    ],
    replies: [
      'Let\'s play some basketball!',
      'Will do!',
      '...b-basketball is my lifeblood.'
    ]
  },
  {
    name: 'Delgado',
    points: 25,
    request: 'I\'m playing over at the \'Algo-Rhythm\' tonight, do you want to come check it out?',
    options: [
      'Absolutely! What time?',
      'Sorry, I can\'t tonight.',
      'The \'Algo-Rhythm\' is an awful venue.'
    ],
    replies: [
      'Here\'s the flyer! Can\'t wait to see you there!',
      'That\'s cool, I\'ll catch you next time!',
      'Oh...sorry I asked.'
    ]
  },
  {
    name: 'Mike',
    points: 50,
    request: 'Oh no! My cat peed in her carrier! Could you pick up a can of AJAX for me?',
    options: [
      'On my way!',
      'I\'m a little busy, sorry',
      'NO. AJAX is bad for the environment.'
    ],
    replies: [
      'Thanks! You\'re a lifesaver!',
      'No worries, I\'ll make do with what I\'ve got.',
      'Okay...thanks for your help.'
    ]
  },
  {
    name: 'Elaine',
    points: 25,
    request: 'Would you like to pet my cat?',
    options: [
      'Absolutely! I love cats!',
      'Sorry, I don\'t have time right now.',
      'No way! I\'m allergic.'
    ],
    replies: [
      'Thanks for your help!',
      'It\'s okay, next time!',
      'Oh, okay. Heard of antihistamines?'
    ]
  },
  {
    name: 'Kyle',
    points: 151,
    request: 'Hey you! I challenge you to a Pokemon battle! Think you can handle it?',
    options: [
      'You\'re on!',
      'I\'m good, but thanks for asking!',
      'Grow up, Pokemon is for kids.'
    ],
    replies: [
      'Awesome! A battle for the ages!',
      'Too bad! Maybe next time.',
      'Jerk...'
    ]
  },
  {
    name: 'Juan',
    points: 25,
    request: 'Yo! Can I have some money?',
    options: [
      'Yep. Here\'s a penny.',
      'Sorry, I don\'t have anything to give.',
      'Hell no'
    ],
    replies: [
      'Anything is plenty. Thanks',
      'Thanks anyway',
      'WHAT!?'
    ]
  },
  {
    name: 'Angel',
    points: 25,
    request: 'Hey! Want to watch the Austin FC match this weekend?',
    options: [
      'Heck yeah!',
      'Sorry, I can\'t this weekend, but count me in next time!',
      'Austin FC? They suuuuuck!'
    ],
    replies: [
      'Noice! It\'s BYOB, but I\'ll order pizza.',
      'No worries.',
      'It\'s been a rough start, but they\'re still plenty of games left.'
    ]
  }
]

/*
{
  name: 'name',
  points: 25,
  request: 'request',
  options: [
    'option',
    'option',
    'option'
  ],
  replies: [
    'reply',
    'reply',
    'reply'
  ]
}
*/
