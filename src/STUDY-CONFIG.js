// start game slide
var startGame = [
  {
    type: 'action',
    id: 'startGame',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/start.jpeg',
          coordinates: [
            { value: 'started', shape: "rect", coordinates: "0, 0, 1200, 900" },
          ],
        },
      }
    ]
  },
]

// stimuli for dictator game: GIRLS ONLY
var dg_intro_G = [
  {
    name: "dg_intro"
  },
  {
    type: 'action',
    id: 'dggive',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/dggive.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "160, 591, 434, 867" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dggive_feedback',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/dggivefeedback.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgkeep',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/dgkeep.mp4',
          coordinates: [
            { value: 'keep', shape: "rect", coordinates: "834, 602, 1082, 875" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgkeep_feedback',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/dgkeepfeedback.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgw2bintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/dgw2bintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgbelong',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/dgbelong.mp4',
          coordinates: [
            { value: 'wrong', shape: "rect", coordinates: "173,591,462,882" },
            { value: 'correct', shape: "rect", coordinates: "810,594,1064,873" },
          ],
        }
      }
    ]
  },
  {
    type: 'conditional',
    id: 'dgbelongcond',
    items: {
      'correct': [{
        type: 'action',
        id: 'dgbelongcorrect',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/girl/dgbelongcorrect.mp4',
            }
          }
        ]
      }],
      'wrong': [{
        type: 'action',
        id: 'dgbelongwrong',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/girl/dgbelongwrong.mp4',
            }
          }
        ]
      }],
    }
  },
  {
    type: 'action',
    id: 'dg1reminder',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/dg1reminder.mp4',
        }
      }
    ]
  },
]

// stimuli for dictator game: BOYS ONLY

var dg_intro_B = [
  {
    name: "dg_intro"
  },
  {
    type: 'action',
    id: 'dggive',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/dggive.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "160, 591, 434, 867" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dggive_feedback',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/dggivefeedback.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgkeep',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/dgkeep.mp4',
          coordinates: [
            { value: 'keep', shape: "rect", coordinates: "834, 602, 1082, 875" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgkeep_feedback',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/dgkeepfeedback.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgw2bintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/dgw2bintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgbelong',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/dgbelong.mp4',
          coordinates: [
            { value: 'wrong', shape: "rect", coordinates: "173,591,462,882" },
            { value: 'correct', shape: "rect", coordinates: "810,594,1064,873" },
          ],
        }
      }
    ]
  },
  {
    type: 'conditional',
    id: 'dgbelongcond',
    items: {
      'correct': [{
        type: 'action',
        id: 'dgbelongcorrect',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/boy/dgbelongcorrect.mp4',
            }
          }
        ]
      }],
      'wrong': [{
        type: 'action',
        id: 'dgbelongwrong',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/boy/dgbelongwrong.mp4',
            }
          }
        ]
      }],
    }
  },
  {
    type: 'action',
    id: 'dg1reminder',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/dg1reminder.mp4',
        }
      }
    ]
  },
]

// white dg stim GIRLS ONLY //

var dg_white_G = [
  {
    name: "dg_white"
  },
  {
    type: 'action',
    id: 'dgwhiteintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/dgwhiteintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgwhite1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/dgwhite1.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'keep', shape: "rect", coordinates: "831,594,1085,873" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgwhite2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/dgwhite2.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'keep', shape: "rect", coordinates: "831,594,1085,873" },],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgwhite3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/dgwhite3.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'keep', shape: "rect", coordinates: "831,594,1085,873" },],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgwhite4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/dgwhite4.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'keep', shape: "rect", coordinates: "831,594,1085,873" },],
          delayResponse: "0",
        }
      }
    ]
  },
]

// white dg stim BOYS ONLY //

var dg_white_B = [
  {
    name: "dg_white"
  },
  {
    type: 'action',
    id: 'dgwhiteintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/dgwhiteintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgwhite1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/dgwhite1.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'keep', shape: "rect", coordinates: "831,594,1085,873" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgwhite2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/dgwhite2.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'keep', shape: "rect", coordinates: "831,594,1085,873" },],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgwhite3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/dgwhite3.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'keep', shape: "rect", coordinates: "831,594,1085,873" },],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgwhite4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/dgwhite4.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'keep', shape: "rect", coordinates: "831,594,1085,873" },],
          delayResponse: "0",
        }
      }
    ]
  },
]

// black dg stim GIRLS ONLY

var dg_black_G = [
  {
    name: "dg_black"
  },
  {
    type: 'action',
    id: 'dgblackintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/dgblackintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgblack1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/dgblack1.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'keep', shape: "rect", coordinates: "831,594,1085,873" },],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgblack2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/dgblack2.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'keep', shape: "rect", coordinates: "831,594,1085,873" },],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgblack3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/dgblack3.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'keep', shape: "rect", coordinates: "831,594,1085,873" },],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgblack4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/dgblack4.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'keep', shape: "rect", coordinates: "831,594,1085,873" },],
          delayResponse: "0",
        }
      }
    ]
  },
]

// black dg stim BOYS ONLY

var dg_black_B = [
  {
    name: "dg_black"
  },
  {
    type: 'action',
    id: 'dgblackintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/dgblackintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgblack1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/dgblack1.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'keep', shape: "rect", coordinates: "831,594,1085,873" },],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgblack2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/dgblack2.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'keep', shape: "rect", coordinates: "831,594,1085,873" },],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgblack3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/dgblack3.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'keep', shape: "rect", coordinates: "831,594,1085,873" },],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dgblack4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/dgblack4.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'keep', shape: "rect", coordinates: "831,594,1085,873" },],
          delayResponse: "0",
        }
      }
    ]
  },
]

// SAME across all conditions (Pulling from girl folder)
var dg_transition = [
  {
    name: "dg_transition"
  },
  {
    type: 'action',
    id: 'animal2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/animal2.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'dg2reminder',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/dg2reminder.mp4',
        }
      }
    ]
  },
]

// SAME ACROSS ALL CONDITIONS (PULLING FROM GIRL FOLDER)
var dg_greatjob = [
  {
    name: "dg_greatjob"
  },
  {
    type: 'action',
    id: 'greatjob1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/greatjob1.mp4',
        }
      }
    ]
  },
]

// stimuli for reciprocity game

//Re intro GIRLS ONLY
var re_intro_G = [
  {
    name: "re_intro"
  },
  {
    type: 'action',
    id: 'regive',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/regive.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "834,602,1083,875" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'regive_feedback',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/regivefeedback.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rekeep',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/rekeep.mp4',
          coordinates: [
            {
              value: 'keep', shape: "rect", coordinates: "160,591,434,867"
            },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rekeep_feedback',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/rekeepfeedback.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rew2bintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/rew2bintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rebelong',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/rebelong.mp4',
          coordinates: [
            { value: 'wrong', shape: "rect", coordinates: "834,602,1083,875" },
            { value: 'correct', shape: "rect", coordinates: "160,591,434,867" },
          ],
        }
      }
    ]
  },
  {
    type: 'conditional',
    id: 'rebelongcond',
    items: {
      'correct': [{
        type: 'action',
        id: 'rebelongcorrect',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/girl/rebelongcorrect.mp4',
            }
          }
        ]
      }],
      'wrong': [{
        type: 'action',
        id: 'rebelongwrong',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/girl/rebelongwrong.mp4',
            }
          }
        ]
      }],
    }
  },
  {
    type: 'action',
    id: 're1reminder',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/re1reminder.mp4',
        }
      }
    ]
  },
]

//Re intro BOYS ONLY
var re_intro_B = [
  {
    name: "re_intro"
  },
  {
    type: 'action',
    id: 'regive',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/regive.mp4',
          coordinates: [
            { value: 'give', shape: "rect", coordinates: "834,602,1083,875" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'regive_feedback',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/regivefeedback.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rekeep',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/rekeep.mp4',
          coordinates: [
            {
              value: 'keep', shape: "rect", coordinates: "160,591,434,867"
            },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rekeep_feedback',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/rekeepfeedback.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rew2bintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/rew2bintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rebelong',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/rebelong.mp4',
          coordinates: [
            { value: 'wrong', shape: "rect", coordinates: "834,602,1083,875" },
            { value: 'correct', shape: "rect", coordinates: "160,591,434,867" },
          ],
        }
      }
    ]
  },
  {
    type: 'conditional',
    id: 'rebelongcond',
    items: {
      'correct': [{
        type: 'action',
        id: 'rebelongcorrect',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/boy/rebelongcorrect.mp4',
            }
          }
        ]
      }],
      'wrong': [{
        type: 'action',
        id: 'rebelongwrong',
        stimuli: [
          {
            type: 'movie',
            parameters: {
              filename: '../../../assets/movie/boy/rebelongwrong.mp4',
            }
          }
        ]
      }],
    }
  },
  {
    type: 'action',
    id: 're1reminder',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/re1reminder.mp4',
        }
      }
    ]
  },
]

// RE white stim for GIRLS ONLY
var re_white_G = [
  {
    name: "re_white"
  },
  {
    type: 'action',
    id: 'rewhiteintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/rewhiteintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rewhite1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/rewhite1.mp4',
          coordinates: [
            { value: 'keep', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'give', shape: "rect", coordinates: "831,594,1085,873" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rewhite2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/rewhite2.mp4',
          coordinates: [
            { value: 'keep', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'give', shape: "rect", coordinates: "831,594,1085,873" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rewhite3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/rewhite3.mp4',
          coordinates: [
            { value: 'keep', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'give', shape: "rect", coordinates: "831,594,1085,873" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rewhite4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/rewhite4.mp4',
          coordinates: [
            { value: 'keep', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'give', shape: "rect", coordinates: "831,594,1085,873" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
]

// RE white stim for BOYS ONLY
var re_white_B = [
  {
    name: "re_white"
  },
  {
    type: 'action',
    id: 'rewhiteintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/rewhiteintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rewhite1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/rewhite1.mp4',
          coordinates: [
            { value: 'keep', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'give', shape: "rect", coordinates: "831,594,1085,873" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rewhite2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/rewhite2.mp4',
          coordinates: [
            { value: 'keep', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'give', shape: "rect", coordinates: "831,594,1085,873" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rewhite3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/rewhite3.mp4',
          coordinates: [
            { value: 'keep', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'give', shape: "rect", coordinates: "831,594,1085,873" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'rewhite4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/rewhite4.mp4',
          coordinates: [
            { value: 'keep', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'give', shape: "rect", coordinates: "831,594,1085,873" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
]

// RE black stimuli for GIRLS ONLY
var re_black_G = [
  {
    name: "re_black"
  },
  {
    type: 'action',
    id: 'reblackintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/reblackintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reblack1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/reblack1.mp4',
          coordinates: [
            { value: 'keep', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'give', shape: "rect", coordinates: "831,594,1085,873" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reblack2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/reblack2.mp4',
          coordinates: [
            { value: 'keep', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'give', shape: "rect", coordinates: "831,594,1085,873" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reblack3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/reblack3.mp4',
          coordinates: [
            { value: 'keep', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'give', shape: "rect", coordinates: "831,594,1085,873" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reblack4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/reblack4.mp4',
          coordinates: [
            { value: 'keep', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'give', shape: "rect", coordinates: "831,594,1085,873" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
]

// RE black stimuli for BOYS ONLY
var re_black_B = [
  {
    name: "re_black"
  },
  {
    type: 'action',
    id: 'reblackintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/reblackintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reblack1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/reblack1.mp4',
          coordinates: [
            { value: 'keep', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'give', shape: "rect", coordinates: "831,594,1085,873" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reblack2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/reblack2.mp4',
          coordinates: [
            { value: 'keep', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'give', shape: "rect", coordinates: "831,594,1085,873" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reblack3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/reblack3.mp4',
          coordinates: [
            { value: 'keep', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'give', shape: "rect", coordinates: "831,594,1085,873" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'reblack4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/reblack4.mp4',
          coordinates: [
            { value: 'keep', shape: "rect", coordinates: "58,601,332,878" },
            { value: 'give', shape: "rect", coordinates: "831,594,1085,873" },
          ],
          delayResponse: "0",
        }
      }
    ]
  },
]

// SAME ACROSS CONDITIONS (PULLING FROM GIRL FOLDER)
var re_transition = [
  {
    name: "re_transition"
  },
  {
    type: 'action',
    id: 'animal3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/animal3.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 're2reminder',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/re2reminder.mp4',
        }
      }
    ]
  },
]

// SAME ACROSS CONDITIONS (PULLING FROM GIRL FOLDER)
var re_greatjob = [
  {
    name: "re_greatjob"
  },
  {
    type: 'action',
    id: 'greatjob2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/greatjob2.mp4',
        }
      }
    ]
  },
]

// status task stimuli

//same across conditions (pulling from girl folder)
var status_intro = [
  {
    name: "status_intro"
  },
  {
    type: 'action',
    id: 'statusintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie//girl/statusintro.mp4',
        }
      }
    ]
  },
]

// Status 1 GIRLS ONLY
var status1_G = [
  {
    name: "status1"
  },
  {
    type: 'action',
    id: 'status1left',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/status1left.mp4',
          coordinates: [
            { value: 'black', shape: "rect", coordinates: "510,468,723,669" },
            { value: 'white', shape: "rect", coordinates: "510,669,723,860" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'status1right',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/status1right.mp4',
          coordinates: [
            { value: 'black', shape: "rect", coordinates: "510,468,723,669" },
            { value: 'white', shape: "rect", coordinates: "510,669,723,860" },
          ],
        }
      }
    ]
  },
]

// Status 1 BOYS ONLY
var status1_B = [
  {
    name: "status1"
  },
  {
    type: 'action',
    id: 'status1left',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/status1left.mp4',
          coordinates: [
            { value: 'black', shape: "rect", coordinates: "510,468,723,669" },
            { value: 'white', shape: "rect", coordinates: "510,669,723,860" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'status1right',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/status1right.mp4',
          coordinates: [
            { value: 'black', shape: "rect", coordinates: "510,468,723,669" },
            { value: 'white', shape: "rect", coordinates: "510,669,723,860" },
          ],
        }
      }
    ]
  },
]

//same across conditions, pulling from girl folder
var status_greatjob = [
  {
    name: "status_greatjob"
  },
  {
    type: 'action',
    id: 'greatjob3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/greatjob3.mp4',
        }
      }
    ]
  },
]

// attitudes task stimuli
//same across conditions, pulling from girl folder
var attitudes_intro = [
  {
    name: "attitudes_intro"
  },
  {
    type: 'action',
    id: 'attitudesintro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/attitudesintro.mp4',
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'attitudestraining',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/attitudestraining.mp4',
        }
      }
    ]
  }
]

//attitudes GIRLS ONLY
var attitudes_G = [
  {
    name: "attitudes"
  },
  {
    type: 'control',
    shuffle: true,
  },
  {
    type: 'action',
    id: 'ftwhite1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/ftwhite1.mp4',
          coordinates: [
            { value: '1', shape: "rect", coordinates: "84,658,279,854" },
            { value: '2', shape: "rect", coordinates: "355,660,552,856" },
            { value: '3', shape: "rect", coordinates: "640,660,833,848" },
            { value: '4', shape: "rect", coordinates: "910,660,1115,859" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'ftwhite2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/ftwhite2.mp4',
          coordinates: [
            { value: '1', shape: "rect", coordinates: "84,658,279,854" },
            { value: '2', shape: "rect", coordinates: "355,660,552,856" },
            { value: '3', shape: "rect", coordinates: "640,660,833,848" },
            { value: '4', shape: "rect", coordinates: "910,660,1115,859" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'ftblack1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/ftblack1.mp4',
          coordinates: [
            { value: '1', shape: "rect", coordinates: "84,658,279,854" },
            { value: '2', shape: "rect", coordinates: "355,660,552,856" },
            { value: '3', shape: "rect", coordinates: "640,660,833,848" },
            { value: '4', shape: "rect", coordinates: "910,660,1115,859" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'ftblack2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/ftblack2.mp4',
          coordinates: [
            { value: '1', shape: "rect", coordinates: "84,658,279,854" },
            { value: '2', shape: "rect", coordinates: "355,660,552,856" },
            { value: '3', shape: "rect", coordinates: "640,660,833,848" },
            { value: '4', shape: "rect", coordinates: "910,660,1115,859" },
          ],
        }
      }
    ]
  },
]

//attitudes BOYS ONLY
var attitudes_B = [
  {
    name: "attitudes"
  },
  {
    type: 'control',
    shuffle: true,
  },
  {
    type: 'action',
    id: 'ftwhite1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/ftwhite1.mp4',
          coordinates: [
            { value: '1', shape: "rect", coordinates: "84,658,279,854" },
            { value: '2', shape: "rect", coordinates: "355,660,552,856" },
            { value: '3', shape: "rect", coordinates: "640,660,833,848" },
            { value: '4', shape: "rect", coordinates: "910,660,1115,859" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'ftwhite2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/ftwhite2.mp4',
          coordinates: [
            { value: '1', shape: "rect", coordinates: "84,658,279,854" },
            { value: '2', shape: "rect", coordinates: "355,660,552,856" },
            { value: '3', shape: "rect", coordinates: "640,660,833,848" },
            { value: '4', shape: "rect", coordinates: "910,660,1115,859" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'ftblack1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/ftblack1.mp4',
          coordinates: [
            { value: '1', shape: "rect", coordinates: "84,658,279,854" },
            { value: '2', shape: "rect", coordinates: "355,660,552,856" },
            { value: '3', shape: "rect", coordinates: "640,660,833,848" },
            { value: '4', shape: "rect", coordinates: "910,660,1115,859" },
          ],
        }
      }
    ]
  },
  {
    type: 'action',
    id: 'ftblack2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/boy/ftblack2.mp4',
          coordinates: [
            { value: '1', shape: "rect", coordinates: "84,658,279,854" },
            { value: '2', shape: "rect", coordinates: "355,660,552,856" },
            { value: '3', shape: "rect", coordinates: "640,660,833,848" },
            { value: '4', shape: "rect", coordinates: "910,660,1115,859" },
          ],
        }
      }
    ]
  },
]


// end video
// SAME across condition, pulling from girl folder
var done = [
  {
    name: "done"
  },
  {
    type: 'action',
    id: 'done',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/girl/done.mp4',
        }
      }
    ]
  },
]

// form placeholder
var startForm = {
  type: 'action',
  id: 'startForm',
  stimuli: [
    {
      type: 'form',
      parameters: {
        start: true,
      }
    }
  ]
}

// conditions: G_whiteFirst, B_whiteFirst, G_blackFirst, B_blackFirst
var G_whiteFirst = [
  startForm,
  startGame,
  dg_intro_G,
  dg_white_G,
  dg_transition,
  dg_black_G,
  dg_greatjob,
  re_intro_G,
  re_white_G,
  re_transition,
  re_black_G,
  re_greatjob,
  status_intro,
  status1_G,
  status_greatjob,
  attitudes_intro,
  attitudes_G,
  done
];

var B_whiteFirst = [
  startForm,
  startGame,
  dg_intro_B,
  dg_white_B,
  dg_transition,
  dg_black_B,
  dg_greatjob,
  re_intro_B,
  re_white_B,
  re_transition,
  re_black_B,
  re_greatjob,
  status_intro,
  status1_B,
  status_greatjob,
  attitudes_intro,
  attitudes_B,
  done
];

var G_blackFirst = [
  startForm,
  startGame,
  dg_intro_G,
  dg_black_G,
  dg_transition,
  dg_white_G,
  dg_greatjob,
  re_intro_G,
  re_black_G,
  re_transition,
  re_white_G,
  re_greatjob,
  status_intro,
  status1_G,
  status_greatjob,
  attitudes_intro,
  attitudes_G,
  done
];

var B_blackFirst = [
  startForm,
  startGame,
  dg_intro_B,
  dg_black_B,
  dg_transition,
  dg_white_B,
  dg_greatjob,
  re_intro_B,
  re_black_B,
  re_transition,
  re_white_B,
  re_greatjob,
  status_intro,
  status1_B,
  status_greatjob,
  attitudes_intro,
  attitudes_B,
  done
];

var assignCondition = [
  {
    type: 'action',
    id: 'assignCondition',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/picture/gender.jpg',
          coordinates: [
            { value: 'boy', shape: "rect", coordinates: "100, 200, 450, 867" },
            { value: 'girl', shape: "rect", coordinates: "750, 200, 1034, 867" },
          ],
        }
      }
    ]
  },
  {
    type: 'conditional',
    id: 'assignCondition',
    items: {
      'boy': [
        B_blackFirst,
        B_whiteFirst,
        {
          type: 'control',
          pickOne: true,
        }
      ],
      'girl': [
        G_whiteFirst,
        G_blackFirst,
        {
          type: 'control',
          pickOne: true,
        }
      ],
    }
  },
]

export const Project = {
  conditions: [
    assignCondition
  ],
  name: "ra2",
  ended: {
    type: 'action',
    id: 'done',
    stimuli: [
      {
        type: 'form',
        parameters: {
          end: true,
        }
      }
    ]
  }
}
