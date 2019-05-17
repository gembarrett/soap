var questions = [
  {
    "q":"What is the name of your organisation?",
    "required":true, // hide the Skip button if true
    "id":"q0",
    "answers":[
      {
        "type":"textbox", // because of this the answer text may need to be imported differently
        "answerText":"Enter the organisation name",
        "excludes":"",
        "includes":"",
        "policyEntry":"This is the security policy for ",
        "appendixEntry":""
      }
    ],
    "tips":[ // hide the ? info button if these are all empty
      {"relevance":""},
      {"meaning":"Whatever you enter here will be used throughout the policy wherever an organisation name is appropriate for the text. If you don't feel comfortable sharing your organisation's name at this stage you can instead use a placeholder, such as 'Example Org', which you can then find and replace in the policy at the end of the process."},
      {"implementation":""},
      {"more":""}
    ]
  },
  {
    "q":"Who is responsible for this policy?",
    "required":false, // hide the Skip button if true
    "id":"q1",
    "answers":[
      {
        "type":"textbox",
        "answerText":"Name",
        "excludes":[],
        "includes":[],
        "policyEntry":"The following person is responsible for this policy: ",
        "appendixEntry":""
      },
      {
        "type":"textbox",
        "answerText":"Job title",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"textbox",
        "answerText":"Email",
        "excludes":[],
        "includes":[],
        "policyEntry":"They can be contacted on the following email address:",
        "appendixEntry":""
      },
      {
        "type":"textbox",
        "answerText":"Phone",
        "excludes":[],
        "includes":[],
        "policyEntry":"They can be contacted by telephone at:",
        "appendixEntry":""
      }
    ],
    "tips":[ // hide the ? info button if these are all empty
      {"relevance":"If your organisation has a member of staff that is willing and able to answer questions about this policy. Ideally this would be the person writing the policy (i.e. you) or a member of the security team."},
      {"meaning":"Having a point of contact for staff with queries about this policy provides support that is important for the implementation across your organisation."},
      {"implementation":"This person should be approachable and known in the organisation to make it easier for staff to ask them questions. Support should also be provided to the responsible person to ensure they aren't overwhelmed with queries or struggle to answer them."},
      {"more":""}
    ]
  },
  {
    "q":"Who will this policy apply to?",
    "required":true, // hide the Skip button if true
    "id":"q2",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Contractors",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Full or part-time staff",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Volunteers",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Remote staff",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"textbox",
        "answerText":"Other",
        "excludes": [],
        "includes": [],
        "policyEntry":"",
        "appendixEntry":""
      }
    ],
    "tips":[ // hide the ? info button if these are all empty
      {"relevance":""},
      {"meaning":"It should be clear exactly who is responsible for adhering to the policy and liable for violations. Use this moment to decide whether to create a separate policy for staff with different access levels, for instance volunteers or contractors."},
      {"implementation":""},
      {"more":""}
    ]
  },
  {
    "q":"Which operating systems are used in your organisation?",
    "required":true, // hide the Skip button if true
    "id":"q3",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Windows",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Mac",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Linux",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Android",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"iOS",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Blackberry",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"textbox",
        "answerText":"Other",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      }
    ],
    "tips":[ // hide the ? info button if these are all empty
      {"relevance":""},
      {"meaning":"Different systems have different security measures available. Selecting which operating systems apply to your organisation will exclude irrelevant questions from this process."},
      {"implementation":""},
      {"more":""}
    ]
  },
  {
    "q":"Do all your staff work in the same physical office",
    "required":false, // hide the Skip button if true
    "id":"q4",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"radio",
        "answerText":"No",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"textbox",
        "answerText":"Only under specific circumstances:",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      }
    ],
    "tips":[ // hide the ? info button if these are all empty
      {"relevance":"Testing content"},
      {"meaning":""},
      {"implementation":""},
      {"more":""}
    ]
  },
  {
    "q":"Question about device security",
    "required":false, // hide the Skip button if true
    "id":"q5",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"radio",
        "answerText":"No",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"textbox",
        "answerText":"Other:",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      }
    ],
    "tips":[ // hide the ? info button if these are all empty
      {"relevance":""},
      {"meaning":""},
      {"implementation":""},
      {"more":""}
    ]
  },
  {
    "q":"Are you concerned about the security of your remote staff working location(s)?",
    "required":false, // hide the Skip button if true
    "id":"q6",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"radio",
        "answerText":"No",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"textbox",
        "answerText":"Only under specific circumstances:",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      }
    ],
    "tips":[ // hide the ? info button if these are all empty
      {"relevance":""},
      {"meaning":""},
      {"implementation":""},
      {"more":""}
    ]
  }
]
