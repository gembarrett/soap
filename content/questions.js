var questions = [
  {
    "q":"Which of the following statements applies to your organisation?",
    "required":"true", // hide the Skip button if true
    "id":"q0",
    "answers":[
      {
        "type":"radio",
        "answerText":"Our staff regularly travel as part of their job.",
        "excludes":"",
        "includes":"",
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"We govern the security of the devices our staff use.",
        "excludes":"",
        "includes":"",
        "appendixEntry":""
      },
      {
        "type":"textbox",
        "answerText":"We are a remote organisation; we have at least one member of staff who works remotely.",
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
    "policy-section":"", // hide Preview button if empty
  },
  {
    "q":"What is the name of your organisation?",
    "required":"true", // hide the Skip button if true
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
    "required":"false", // hide the Skip button if true
    "id":"q2",
    "answers":[
      {
        "type":"textbox",
        "answerText":"Name",
        "excludes":"",
        "includes":"",
        "appendixEntry":""
      },
      {
        "type":"textbox",
        "answerText":"Email",
        "excludes":"",
        "includes":"",
        "appendixEntry":""
      },
      {
        "type":"textbox",
        "answerText":"Phone",
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
    "q":"Choose the 3 technologies most important to your organisation:",
    "required":"true", // hide the Skip button if true
    "id":"q3",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Desktop computers and laptops",
        "excludes":"",
        "includes":"",
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Mobile phones, satellite phones and 'landline' phones",
        "excludes":"",
        "includes":"",
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Email, chat services, social media",
        "excludes":"",
        "includes":"",
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Office software, financial software",
        "excludes":"",
        "includes":"",
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Wireless networks, Virtual Private Networks(VPNs)",
        "excludes":"",
        "includes":"",
        "appendixEntry":""
      },
      {
        "type":"checkbox",
        "answerText":"Content Management System (CMS), organisation websites, hosting providers",
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
  }
]
