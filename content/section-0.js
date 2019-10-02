var section0 = [
  {
    "isQuestion": false,
    "id":"q0",
    "title": "Getting started!",
    "paragraph":["The three stages of SOAP’s policy-building process cover the key aspects of organizational security. At the start of each section you'll be asked to consider a hypothetical, but common, security incident. What follows next is a series of questions about relevant mitigation tactics, with each selected answer contributing to the appropriate content for your security policy. Each section ends with an opportunity for you to specify the steps you want staff to take if, and when, they find themselves involved in a given incident.", "If you don’t understand the relevance or meaning of a particular question along the way, simply hit the “Info” button to its right. This will reveal a panel with implementation tips, definitions, search terms, and other information to help clarify the question and its content. As you progress through the process, you can preview your policy at any time by hitting “Preview.” The progress bar at the top of each page shows how far you’ve come in the process. At any time you can skip questions or go back to prior questions. When you've completed all three sections, you will be shown your full policy, including the appendix. Download options are available so you can share the policy in the best way for your organization.", "This first section is all about understanding your organization's unique context. Your answers here will provide the information we need to start identifying the right questions to help shape your new, totally customized security policy. Ready? Let’s go!"]
  },
  {
    "isQuestion": true,
    "id":"q1",
    "q":"What is the name of your organisation?",
    "required":true,
    "policyContent":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"text",
        "answerText":"",
        "placeholder":"Example Organisation",
        "storeAs":"[orgName]",
        "excludes":[],
        "policyEntry":"This is the security policy of [orgName], which has been created in order to support staff in carrying out our sensitive work securely. It is important to understand and comply with the rules described as they aim to protect everyone involved in our work, including partner organisations and frontline activists.",
        "appendixEntry":""
      }
    ],
    "tips":[
      {"relevance":""},
      {"meaning":"Your organisation’s name will be used in the policy to make the ownership of it clear. If you would prefer not to give a name, you can instead use an alias name to find and replace later if you wish."},
      {"implementation":""},
      {"more":""}
    ]
  },
  {
    "isQuestion": true,
    "id":"q2",
    "q":"Who is responsible for this policy?",
    "required":true,
    "policyContent":"",
    "answers":[
      {
        "type":"text",
        "answerText":"Name",
        "placeholder":"e.g. Alice Smith",
        "storeAs":"[contactName]",
        "excludes":[],
        "policyEntry":"If you have questions about this policy, please contact [contactName]",
        "appendixEntry":[
          {
            "reviewList":"Is [contactName] succeeding in supporting staff implementation of the policy? Are they happy to continue as security champion?",
            "tipList": ""
          }
        ]
      },
      {
        "type":"text",
        "answerText":"Job title or department",
        "placeholder":"e.g. Security Officer",
        "storeAs":"[contactPos]",
        "excludes":[],
        "policyEntry":"([contactPos]).",
        "appendixEntry":[
          {
            "reviewList":"Is [contactName]'s job title still [contactPos]?",
            "tipList": ""
          }
        ]
      },
      {
        "type":"text",
        "answerText":"Email",
        "placeholder": "e.g. example@organisation.com",
        "storeAs":"[contactEmail]",
        "excludes":[],
        "policyEntry":"Email: [contactEmail]",
        "appendixEntry":[
          {
            "reviewList":"Is [contactName]'s email still [contactEmail]?",
            "tipList": ""
          }
        ]
      },
      {
        "type":"text",
        "answerText":"Phone",
        "placeholder": "e.g. +1 (234) 567-890",
        "storeAs":"[contactPhone]",
        "excludes":[],
        "policyEntry":"Phone: [contactPhone]",
        "appendixEntry":[
          {
            "reviewList":"Is [contactName]'s phone number still [contactPhone]?",
            "tipList": ""
          }
        ]
      }
    ],
    "tips":[
      {"relevance":""},
      {"meaning":"In order to ease the implementation process and support future maintenance, one or more members of staff will be needed as a point of contact for queries about the policy. Ideally this role will be taken on by you, as the creator of this policy, or another staff member with sufficient time and security knowledge."},
      {"implementation":"The person named here should ideally be approachable and a familiar face around the organisation, with a workload that can support the requirement to answer questions in a timely manner. However, people leave or become unsuitable for the role, and so there should also be a contingency plan in place so that all the security management doesn’t leave with the person."},
      {"more":["security champion role"]},
    ]
  },
  {
    "isQuestion": true,
    "id":"q3",
    "q":"Who will this policy apply to?",
    "required":false,
    "policyContent":"This security policy applies to [appliesTo]",
    "appendixContent":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"contractors",
        "storeAs":"[appliesTo]",
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
        "answerText":"full or part-time staff",
        "storeAs":"[appliesTo]",
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
        "answerText":"volunteers",
        "storeAs": "[appliesTo]",
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
      {"meaning":"It should be clear exactly who is responsible for adhering to the policy and liable for violations. Use this moment to decide whether to create a separate policy for staff with different access levels, for instance volunteers or contractors."},
      {"implementation":"No one wants to read a policy that doesn’t apply to them. Presenting staff with only the most relevant of rules for their working environment will help with implementation and buy-in."},
      {"more":""}
    ]
  },
  {
    "isQuestion": true,
    "id":"q4",
    "q":"Which operating systems are used in your organisation?",
    "required":false,
    "policyContent":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Windows",
        "storeAs": "",
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
        "answerText":"macOS",
        "storeAs": "",
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
        "answerText":"Linux (any flavour)",
        "storeAs": "",
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
        "answerText":"Chrome OS",
        "storeAs": "",
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
        "answerText":"Android",
        "storeAs": "",
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
        "answerText":"iOS",
        "storeAs": "",
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
        "answerText":"Blackberry",
        "storeAs": "",
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
        "answerText":"Windows Phone",
        "storeAs": "",
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
    "tips":[ // hide the ? info button if these are all empty
      {"relevance":""},
      {"meaning":"Security measures and settings vary in extent and location between operating systems. Specifying those that are relevant and in use at your organisation makes it simpler to provide appropriate instructions and questions in the process."},
      {"implementation":""},
      {"more":["comparing security of operating systems", "desktop/mobile os security features"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q5",
    "q":"How does your organisation manage staff work devices?",
    "required":true,
    "policyContent":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"We install work profiles on staff-owned devices (Bring Your Own Device policy)",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"With your consent, we will install a work profile on your personal devices in order for you to use them in the course of your work. This work profile will keep your work and personal use of the device separated.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"We install work and personal profiles on organisation-owned devices.",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"[orgName] staff are given some freedom to decide their work environment and equipment, and we acknowledge that there may be times when after hours access to work email and data is needed. We will provide you with devices and install both a work and personal profile for you to use.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"We provide work-only devices.",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"We will provide you with devices, such as a computer, to use solely for work purposes.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Staff use their own devices without separate profiles",
        "storeAs": "",
        "excludes":['q6'],
        "policyEntry":"You may use your own devices as work equipment, we do not require the use of a work profile but please strive to maintain a separation between your work and personal data.",
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
      {"meaning":"Providing devices to staff can be expensive but it makes it easier to achieve complete separation of personal and work activities. Work profiles can be installed on most ‘smart’ devices and computers as an alternative that maintains the convenience of remote control for wiping (the profile), installation and updates. Although the personal and work profiles are kept isolated from each other, reducing leakage of sensitive information between the two, it can blur the boundaries between work and personal lives and feel intrusive to staff. BYOD policies allow staff to use their own computers and phones, and paired with work profiles can provide convenience for staff member and organisation."},
      {"implementation":"Commonly the choice of work device vs work profile is given to individual staff members to decide the best option for their own situation. For the staff member, convenience and work-life balance are major factors in this decision. For the organisation, security and cost are top priority. Be aware though, that not all staff members will be in a position to provide a suitable device for use at work."},
      {"more":["comparing security of operating systems", "desktop/mobile os security features"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q6",
    "q":"Does your organisation provide staff with webcam covers or privacy screens for their devices?",
    "required":false,
    "policyContent":"Protecting the devices we use is crucial in preventing unauthorised access to sensitive [orgName] data. To mitigate this, [orgName] will provide you with [providePrivacy] to use on your devices.",
    "appendixContent":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"webcam cover",
        "storeAs": "[providePrivacy]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "A quick temporary alternative to webcam covers can be made from a post-it note or sticky-taped paper over the camera."
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"privacy screen",
        "storeAs": "[providePrivacy]",
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
      {"relevance":"If a device has been hacked, there is a risk that the hacker can access the camera (and/or microphone) remotely. If a malicious actor has “shoulder surfed” there is a risk they may have seen sensitive information onscreen."},
      {"meaning":"Webcam covers are easy to buy online and you can sometimes find branded ones being given away free at conferences. They’re a small, simple plastic device with a cover that slides back and forth to expose or hide the camera. When the camera is hidden, any remote camera view will see only darkness. Note that this only mitigates camera access, and not microphone access. Privacy screens are tinted in such a way that someone looking at the screen from the side, rather than directly in front, will see only a black screen."},
      {"implementation":"Covers are easy to stick over the camera and usually stick pretty well. It will take time for staff to keep the cover closed by default and only opening it when needed. Privacy screens are usually stuck over the device screen, however some laptop versions can be slid on/off easily when needed."},
      {"more":["webcam covers", "computer mobile privacy screens"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q7",
    "q":"Do all your staff work in the same physical office?",
    "required":true,
    "policyContent":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs": "",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ],
      },
      {
        "type":"radio",
        "answerText":"No - some or all of our staff work remotely.",
        "storeAs": "",
        "excludes":[], // exc. environmental Qs when added
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
      {"meaning":"For the majority of their time, remote staff work outside of a traditional office, such as from home or a cafe. The risks in different working environments vary and there are factors to be considered which apply to remote staff but not so much those who work in a regular office – and vice versa."},
      {"implementation":"Your organisation is remote if it has any members of staff working from outside [orgName]-controlled premises, and taking this remote-first perspective helps with supporting those staff as part of the team."},
      {"more":["managing remote staff"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q8",
    "q":"How regularly do you intend to review and update this policy?",
    "required":true,
    "policyContent":"This policy will be reviewed by [contactName] ([contactPos]) on a [reviewFreq] basis. Any suggestions or feedback on the policy’s contents should be directed to them.",
    "appendixContent":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"annually",
        "storeAs": "[reviewFreq]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "mark your calendar for review dates on [date+1yr, date+2yr, date+3yr]"
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"6-monthly",
        "storeAs": "[reviewFreq]",
        "excludes":[], // review this
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "mark your calendar for review dates on [date+6mths, date+12mths, date+18mths]"
          }
        ],
      },
      {
        "type":"radio",
        "answerText":"quarterly",
        "storeAs": "[reviewFreq]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "mark your calendar for review dates on [date+3mths, date+3mths, date+3mths]"
          }
        ],
      },
      {
        "type":"radio",
        "answerText":'"as threats arise"',
        "storeAs": "[reviewFreq]",
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
      {"meaning":"It is recommended to review at least once a year to improve and update to meet new threats. Check your policy’s appendix at the end to find a checklist that will help when it comes time to review the policy."},
      {"implementation":"Create calendar events for the next 2 policy reviews and invite stakeholders  involved in reviewing the policy (e.g. management, Human Resources, IT)."},
      {"more":["review security policy"]}
    ]
  }
]
