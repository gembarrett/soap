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
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"We govern the security of the devices our staff use.",
        "excludes":[],
        "includes":["q5"],
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"We are a remote organisation; we have at least one member of staff who works remotely.",
        "excludes":[],
        "includes":["q6"],
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"We have a member of staff that is responsible for this policy",
        "excludes": [],
        "includes": ["q1"],
        "appendixEntry":""
      }
    ],
    "tips":[ // hide the ? info button if these are all empty
      {"relevance":""},
      {"meaning":""},
      {"implementation":""},
      {"more":""}
    ],
    "policy-section":"", // hide Preview button if empty
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
        "appendixEntry":""
      }
    ],
    "tips":[ // hide the ? info button if these are all empty
      {"relevance":""},
      {"meaning":""},
      {"implementation":""},
      {"more":""}
    ],
    "policySection":"", // hide Preview button if empty
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
        "appendixEntry":""
      },
      {
        "type":"textbox",
        "answerText":"Email",
        "excludes":[],
        "includes":[],
        "appendixEntry":""
      },
      {
        "type":"textbox",
        "answerText":"Phone",
        "excludes":[],
        "includes":[],
        "appendixEntry":""
      }
    ],
    "tips":[ // hide the ? info button if these are all empty
      {"relevance":""},
      {"meaning":""},
      {"implementation":""},
      {"more":""}
    ],
    "policySection":"", // hide Preview button if empty
  },
  {
    "q":"Choose the 3 technologies most important to your organisation:",
    "required":true, // hide the Skip button if true
    "id":"q3",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Desktop computers and laptops",
        "excludes":[],
        "includes":[],
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Mobile phones, satellite phones and 'landline' phones",
        "excludes":[],
        "includes":[],
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Email, chat services, social media",
        "excludes":[],
        "includes":[],
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Office software, financial software",
        "excludes":[],
        "includes":[],
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Wireless networks, Virtual Private Networks(VPNs)",
        "excludes":[],
        "includes":[],
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Content Management System (CMS), organisation websites, hosting providers",
        "excludes":[],
        "includes":[],
        "appendixEntry":""
      }
    ],
    "tips":[ // hide the ? info button if these are all empty
      {"relevance":""},
      {"meaning":""},
      {"implementation":""},
      {"more":""}
    ],
    "policySection":"", // hide Preview button if empty
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
        "appendixEntry":""
      },
      {
        "type":"radio",
        "answerText":"No",
        "excludes":[],
        "includes":[],
        "appendixEntry":""
      },
      {
        "type":"textbox",
        "answerText":"Only under specific circumstances:",
        "excludes":[],
        "includes":[],
        "appendixEntry":""
      }
    ],
    "tips":[ // hide the ? info button if these are all empty
      {"relevance":""},
      {"meaning":""},
      {"implementation":""},
      {"more":""}
    ],
    "policySection":"", // hide Preview button if empty
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
        "appendixEntry":""
      },
      {
        "type":"radio",
        "answerText":"No",
        "excludes":[],
        "includes":[],
        "appendixEntry":""
      },
      {
        "type":"textbox",
        "answerText":"Other:",
        "excludes":[],
        "includes":[],
        "appendixEntry":""
      }
    ],
    "tips":[ // hide the ? info button if these are all empty
      {"relevance":""},
      {"meaning":""},
      {"implementation":""},
      {"more":""}
    ],
    "policySection":"", // hide Preview button if empty
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
        "appendixEntry":""
      },
      {
        "type":"radio",
        "answerText":"No",
        "excludes":[],
        "includes":[],
        "appendixEntry":""
      },
      {
        "type":"textbox",
        "answerText":"Only under specific circumstances:",
        "excludes":[],
        "includes":[],
        "appendixEntry":""
      }
    ],
    "tips":[ // hide the ? info button if these are all empty
      {"relevance":""},
      {"meaning":""},
      {"implementation":""},
      {"more":""}
    ],
    "policySection":"", // hide Preview button if empty
  }
]
