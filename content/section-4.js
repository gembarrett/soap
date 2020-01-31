var section4 = [
  {
    "isQuestion": false,
    "id":"q28",
    "title": "Scenario four",
    "paragraph":["Travelling to conferences and other work-related events may involve crossing a border or two, which can be a headache for security-conscious folks as the security process requires your devices to be out of your sight, at least for a few minutes. If you're detained for extra screening that can turn into an extended period of time, during which your devices may be accessed without your knowledge - you could then be stuck with a potentially compromised device while far from home.", "Going to the border with your devices encrypted (if possible), locked and holding little to no sensitive data is the safest approach. In addition, having a travel plan and a 'buddy' to check in with can make it easier to deal with an emergency and trigger an escalation back at the office", "It's important to remind staff to know their rights when crossing borders, especially as laptop stickers, authentication keys and an unusually empty device are all elements that can make them look suspicious. Staff should also remember to stay calm and polite during border interactions as as lying, rudeness and physical interference with an agent's search will not help the situation."]
  },
  {
    "isQuestion": true,
    "id":"q29",
    "q":"Should staff use separate travel devices?",
    "required":true,
    "policyContent":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes and we provide them",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"We provide staff with devices for use while travelling in order to lessen the impact should they become compromised.",
        "appendixEntry":[
          {
            "reviewList":"Are the travel devices up-to-date with the latest security features? If not, they should be updated or upgraded.",
            "tipList": "When providing a travel phone to staff, consider the SIM card management: will it be provided for use around the world, or should they purchase locally?"
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"Staff must provide these if they require them",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"Staff are encouraged to use separate, 'clean' devices when they travel in order to lessen the impact of any authorised access. For guidance on which types of device would be suitable, speak to [contactName] ([contactPos]).",
        "appendixEntry":[
          {
            "reviewList":"Roughly how many staff are using separate travel devices vs those who use their 'cleaned' everyday devices?",
            "tipList": "It’s expensive to purchase a second device so consider sharing or reimbursing the cost of these for staff who need it."
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"Staff should prepare and use their everyday devices",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"Before travelling on work-related business, staff should prepare ('clean') their everyday devices in such a way as to reduce the impact of any unauthorised access while abroad. [contactName] ([contactPos]) can provide more information on how to do this.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "Consider providing a training session for staff to ensure everyone is clear on how to prepare their regular devices for travel."
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"Decided on a case-by-case basis",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"The issue of travel devices vs everyday devices is decided on a case-by-case basis and is dependent on your threat model. Speak to [contactName] ([contactPos]) for more information.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      }

    ],
    "tips":[
      {"relevance":"Relevant to organisations with staff who carry sensitive information on their devices when they travel."},
      {"meaning":"Travel devices are typically phones, laptops and other portable devices which are ‘clean’ (i.e. with minimal to no sensitive information on them) and used solely during travel to minimise the impact of unwanted access by border agents or other authorities. Our everyday devices contain a large amount of information and it can be time-consuming to clear them of all but the most innocuous data. Carrying a near-empty device can look suspicious and so some people choose to create a false profile filled with family photos and other “memories” from stock imagery sites. If the risk isn’t high enough to warrant the use of travel devices, then staff should be made aware of how they can secure their regular devices while travelling."},
      {"implementation":""},
      {"more": ["clean devices when travelling"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q30",
    "q":"How should staff prepare for travel?",
    "required":true,
    "policyContent":"Before travelling, there are steps which should be taken to prepare devices containing sensitive information: [travelSteps] For help with any of these security measures, please contact [contactName] ([contactPos])",
    "appendixContent":"EFF wrote a Border Search Pocket Guide, which may be useful: https://www.eff.org/document/eff-border-search-pocket-guide",
    "answers":[
      // NOTE: this only really works if 1Password is selected in q15, so hide until answer-specific exclusions are implemented
      // {
      //   "type":"checkbox",
      //   "answerText":"Enable password manager's 'travel mode'",
      //   "storeAs":"[travelSteps]",
      //   "excludes":[],
      //   "policyEntry":"Enable 'travel mode' on your password manager. This will ",
      //   "appendixEntry":[
      //     {
      //       "reviewList":"",
      //       "tipList": ""
      //     }
      //   ]
      // },
      {
        "type":"checkbox",
        "answerText":"Enable phone SOS mode",
        "storeAs":"[travelSteps]",
        "excludes":[],
        "policyEntry":"Enable any SOS features or modes on your phone, and learn how to use them so you are prepared to do so in an emergency. SOS mode provides a shortcut to calling the emergency services or texting emergency contacts, usually triggered by pressing a button several times.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "If there are a large amount of staff who wear smart watches at [orgName] then it may be valuable to look into what Emergency SOS calling features they may have access to through the watch."
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Remove unnecessary data",
        "storeAs":"[travelSteps]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Encrypt all devices",
        "storeAs":"[travelSteps]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Disable biometric authentication",
        "storeAs":"[travelSteps]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Remove/log out of incriminating apps",
        "storeAs":"[travelSteps]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Switch off all devices",
        "storeAs":"[travelSteps]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "editable":true,
        "answerText":"Other security measure",
        "storeAs":"[travelSteps]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
    ],
    "tips":[
      {"relevance":""},
      {"meaning":"Be aware that unusual precautions may make border agents suspicious."},
      {"implementation":""},
      {"more": ["enable phone SOS mode", ]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q31",
    "q":"Should staff use a specific tool to protect their internet connection?",
    "required":false,
    "policyContent":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Mullvad",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Psiphon",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"NordVPN",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Tunnelbear",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"No preference",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "editable":true,
        "answerText":"Other",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      }
    ],
    "tips":[
      {"relevance":""},
      {"meaning":""},
      {"implementation":""},
      {"more": []}
    ]
  },
  {
    "isQuestion": true,
    "id":"q32",
    "q":"Does your organisation provide a paid subscription to any VPNs or circumvention tools?",
    "required":false,
    "policyContent":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"No",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"radio",
        "editable":true,
        "answerText":"Other",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      }
    ],
    "tips":[
      {"relevance":""},
      {"meaning":""},
      {"implementation":""},
      {"more": [""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q33",
    "q":"How should staff connect to the internet while they’re in public spaces?",
    "required":false,
    "policyContent":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"VPN & WiFi",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"mobile data",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "editable":true,
        "answerText":"Other",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      }
    ],
    "tips":[
      {"relevance":""},
      {"meaning":""},
      {"implementation":""},
      {"more": [""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q34",
    "q":"Who should staff contact in a travel emergency?",
    "required":false,
    "policyContent":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"text",
        "answerText":"[contactName], [contactPos]",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "editable":true,
        "answerText":"Other",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      }
    ],
    "tips":[
      {"relevance":""},
      {"meaning":""},
      {"implementation":""},
      {"more": [""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q35",
    "q":"Bearing the previous questions in mind, what steps should be in your staff members’ travel security plans?",
    "required":true,
    "policyContent":"",
    "appendixContent": "",
    "answers":[
      {
        "type":"textarea",
        "answerText":"",
        "placeholder":"Here's some examples: \n\n- determine a “travel buddy” to check in with at regular periods \n- agree on code phrases or emojis to indicate safety or trigger an escalation \n- ensure you have emergency contact information in an accessible place",
        "storeAs":"[inc3Tactics]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      }
    ],
    "tips":[
      {"relevance":""},
      {"meaning":""},
      {"implementation":""},
      {"more": ["things to consider when crossing the border"]}
    ]
  }
]
