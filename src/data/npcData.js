/*
THIS IS RAW NPC DATA, instances of NPCs are generated with data from here so that each game can update the isComplete boolean.
OPTIONS are picked from random good and bad arrays? so that option[0] adds points and option[1] does nothing and option[2] deducts points

there can be npcs where there is no request?
*/

export const npcData = [
  {
    name: 'Amalia',
    points: 25,
    request: 'Hey {player}! I\'ve been hearing great things about this new tea shop called \'418 Teapots\'. Do you want to go check it out with me?',
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
    request: 'Hey man, I\'m staaaaarving. I could really use a donut right now.',
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
    request: 'I would like to request a potential job promotion. What do you think?',
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
  }
]
