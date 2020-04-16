var section5 = [
  {
    "isQuestion": false,
    "id":"q35",
    "title": "Scenario five",
    "paragraph":["There's a break in at the office and laptops were stolen from desks.", "Risk of unauthorised access to sensitive information.", "Loss of locally-stored data and cost of device replacement."]
  },
  {
    "isQuestion": true,
    "id":"q36",
    "q":"Does your organisation have a 'clean desk' policy?",
    "required":true,
    "policyContent":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"[orgName] has a 'clean desk' policy. This means that you're expected to ensure that sensitive items such as data storage devices and confidential paperwork are not left visible or easily accessible on your desk while you're away from it, for instance overnight or while a visitor is in the office.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
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
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"Other",
        "storeAs":"[altCDPol]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
    ],
    "tips":[
      {"relevance":""},
      {"meaning":"Having sensitive information visible on unattended desks can result in staff or visitors having unauthorised access to it. Therefore, a ‘clean desk’ policy requires staff to keep only the essential items on their desk when they are away from it."},
      {"implementation":"When implementing a 'clean desk' policy, keep in mind the storage options that staff have available. For example, if their desks have a built-in drawer then consider whether it's spacious enough to hold a laptop or other devices."},
      {"more": ["clean desk policy"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q37",
    "q":"Are staff given their own lockable storage in the office?",
    "required":true,
    "policyContent":"If you work regularly from the [orgName] office, you’ll be provided with a lockable [officeStorage] which should be used to store items such as phones, memory sticks and sensitive documents. Please remember to keep the storage secure when you’re out of the office by removing the key from the lock or scrambling the combination lock code.",
    "appendixContent":"The locks that are built into standard office furniture can be simple to force open, which may be an acceptable risk when a visual deterrent is all that’s required, but it is worth considering options that can have a padlock or other additional security measures added to them.",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"cupboard",
        "storeAs":"[officeStorage]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"drawer",
        "storeAs":"[officeStorage]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"other",
        "storeAs":"[officeStorage]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
    ],
    "tips":[
      {"relevance":"If staff have their own desk in the organisation office, and especially if there is a “clean desk” policy in place."},
      {"meaning":"Physical storage can be used to store sensitive printed documents, in accordance with a “clean desk” policy. A lockable cupboard or drawer can hold organisation-owned laptops, thumb drives, or other devices, helping to ensure that they aren’t easily accessed during a break in."},
      {"implementation":"Remind staff of the security risks of leaving the key in the lock overnight."},
      {"more": ["secure office storage"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q38",
    "q":"What are your visitor protocols?",
    "required":true,
    "policyContent":"[orgName] staff are responsible for any visitors they bring into the office.",
    "appendixContent":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"pre-visit announcement",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"Before your guest arrives, you should ensure that in-office staff are aware of their impending visit so they can prepare their work spaces accordingly.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"sign-in book",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"Visitors are asked to sign in when they arrive at the office and sign out when they leave.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"guest WiFi",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"While on site, guests may use the visitor WiFi to access the internet.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"other",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
    ],
    "tips":[
      {"relevance":"If your office receives visitors, it is worth putting thought into how this impacts your organisation’s security."},
      {"meaning":"Visitor protocols can include many things, depending on the frequency of visits and common purposes. For instance, if there are visitors regularly on site for meetings then a guest WiFi access point can make it easier to restrict their movement around the network. Making staff aware of visitors in advance can give them time to secure their workspace, and avoids any surprise at seeing an unfamiliar face in the office."},
      {"implementation":"When setting up a guest WiFi, remember to implement the same security standards as your company WiFi; for instance, by using complex passwords changed on a regular basis. Organisations that have visitors on an infrequent basis may find it more practical to actively notify their staff each time than those with more frequent visitors, for whom a shared calendar could be easier to manage."},
      {"more": ["visitor security policy"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q39",
    "q":"HWho is responsible for securing the office premises?",
    "required":true,
    "policyContent":"Any questions about [orgName] office security issues should be directed to [officeSecurityName], [officeSecurityPosition].",
    "appendixContent":"",
    "answers":[
      {
        "type":"text",
        "answerText":"Name",
        "placeholder": "",
        "storeAs":"[officeSecurityName]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"text",
        "answerText":"Position",
        "placeholder": "",
        "storeAs":"[officeSecurityPosition]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"text",
        "answerText":"Pronouns",
        "placeholder": "",
        "storeAs":"[officeSecurityPronouns]",
        "excludes":[],
        "policyEntry":"Their pronouns are [officeSecurityPronouns]",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"text",
        "answerText":"Email",
        "storeAs":"[officeSecurityEmail]",
        "excludes":[],
        "policyEntry":"You can email [officeSecurityName] at [officeSecurityEmail].",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"text",
        "answerText":"Phone",
        "storeAs":"[officeSecurityPhone]",
        "excludes":[],
        "policyEntry":"Their phone number is [officeSecurityPhone].",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
    ],
    "tips":[
      {"relevance":""},
      {"meaning":"Whoever is responsible for office security should be present in the office on a regular basis so that they can be informed of any changes which coould impact the security of the office. Depending on your context, they may need to liaise with the alarm system company, rotate office entry codes or manage the staff access fobs."},
      {"implementation":""},
      {"more": [""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q40",
    "q":"Bearing the previous questions in mind, what steps should staff members take if their work device has been lost or stolen?",
    "required":false,
    "policyContent":"... a device you use for work is lost or stolen: it's important to act fast to mitigate the security issues that come from such a situation. Here are the steps you should take to minimise the impact of the loss: [inc5tactics]",
    "appendixContent":"",
    "answers":[
      {
        "type":"textarea",
        "answerText":"",
        "placeholder":"Here are a few examples: \n\n- report to the police, \n- reset account passwords \n- contact IT for a replacement device",
        "storeAs":"[inc5tactics]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
    ],
    "tips":[
      {"relevance":""},
      {"meaning":"A stolen or lost device can result in data loss, unauthorised account or file access, and a delayed response to the incident can worsen the impact on yoour organisation."},
      {"implementation":""},
      {"more": [""]}
    ]
  }
]
