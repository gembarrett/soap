var questions = [
  {
    "q":"Which of the following statements applies to your organisation?",
    "required":true, // hide the Skip button if true
    "id":"q0",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Our staff regularly travel as part of their job.",
        "excludes":[],
        "includes":["q4"],
        "policyEntry":"When travelling, be particularly aware of your surroundings.",
        "appendixEntry":"When you ask your staff to travel, ensure that they are prepared for the risks and trained to mitigate them."
      },
      {
        "type":"checkbox",
        "answerText":"We govern the security of the devices our staff use.",
        "excludes":[],
        "includes":["q5"],
        "policyEntry":"Work-provided devices should be secured against unauthorised access at all times.",
        "appendixEntry":"Device security is an important thing"
      },
      {
        "type":"checkbox",
        "answerText":"We are a remote organisation; we have 1 or more members of staff who work remotely.",
        "excludes":[],
        "includes":["q6"],
        "policyEntry":"Remote staff require careful assessment of risk due to their work environment.",
        "appendixEntry":"Remote staff have a different work environment to office staff and therefore should be risk assessed differently"
      },
      {
        "type":"checkbox",
        "answerText":"We have a member of staff that is responsible for this policy",
        "excludes": [],
        "includes": ["q1"],
        "policyEntry":"The person responsible for this policy can be approached with clarifying queries, training requests and for troubleshooting.",
        "appendixEntry":"This person should be senior and familiar enough to be able to answer questions about the security without being intimidating."
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
    "q":"What is the name of your organisation?",
    "required":true, // hide the Skip button if true
    "id":"q1",
    "answers":[
      {
        "type":"textbox", // because of this the answer text may need to be imported differently
        "answerText":"Enter the organisation name",
        "excludes":"",
        "includes":"",
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
    "q":"Who is responsible for this policy?",
    "required":false, // hide the Skip button if true
    "id":"q2",
    "answers":[
      {
        "type":"textbox",
        "answerText":"Name",
        "excludes":[],
        "includes":[],
        "policyEntry":"This following person is responsible for this policy:",
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
      {"relevance":""},
      {"meaning":""},
      {"implementation":""},
      {"more":""}
    ]
  },
  {
    "q":"Choose up to 3 technologies that are most important to your organisation:",
    "required":true, // hide the Skip button if true
    "id":"q3",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Desktop computers and laptops",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Mobile phones, satellite phones and 'landline' phones",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Email, chat services, social media",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Office software, financial software",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Wireless networks, Virtual Private Networks(VPNs)",
        "excludes":[],
        "includes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Content Management System (CMS), organisation websites, hosting providers",
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
    "q":"When your staff travel, do they carry work devices and/or data physically with them?",
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
      {"relevance":""},
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
