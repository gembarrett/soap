var section5 = [
  {
    "isQuestion": false,
    "id":"q35",
    "title": "Scenario five",
    "paragraph":["Staff arrive at the office one morning to find that there’s been a break in and several laptops have been stolen from their desks. Although all were set up with password protection, some were running on out-of-date software with unpatched security holes, which the thieves then exploited to bypass the log in screen and gain access to the file systems.", "While cyber attacks pose a big threat, organisations should also consider how they can protect against offline incidents. A break-in at the office can deal a devastating blow to an organisation as the theft of confidential documents and data-rich computers can lead to the exposure of personal information, loss of equipment and destruction of locally-stored files.", "Security needs can differ for home offices and coworking spaces but the overall goal of restricting access is the same, and most measures can be altered to suit the specific environment. Although some environmental security measures will be required by insurance anyway, there are additional habits staff can practice to help keep the office secure. In addition to physical security, this section will also cover WiFi and visitor protocols."]
  },
  {
    "isQuestion": true,
    "id":"q36",
    "q":"Does your organisation have a 'clean desk' policy?",
    "required":true,
    "policyContent":"",
    "routineEntry":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"Our ‘clean desk’ policy requires staff to keep their workspaces clean and free of any sensitive documents and devices overnight or while not in use. By keeping such items tidied away, you are preventing visitors and other unauthorised persons from viewing confidential information.",
        "routineEntry":"Done for the day? Don’t forget to clear any devices or sensitive documents from your desk.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "It can be hard to keep a clean desk during working hours, so encourage staff to have meetings in designated spots, rather than at their desks.",
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
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "",
            "linksList": ""
          }
        ]
      }
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
    "q":"Are staff provided with lockable storage?",
    "required":true,
    "policyContent":"If you work regularly from the [orgName] office, you’ll be provided with a lockable [officeStorage] which should be used to store papers and valuable hardware, such as phones, memory sticks and sensitive documents.",
    "routineEntry":"Before leaving the office, remember to check that your [officeStorage] is locked (and remove/scramble the key).",
    "appendixContent":"The locks that are built into standard office furniture can be quite easy to force, which may be an acceptable risk when a visual deterrent is all that’s required, but it is worth considering options that can have a padlock or other additional security measures added to them.",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"cabinet",
        "storeAs":"[officeStorage]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
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
        "routineEntry":"",
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
        "routineEntry":"",
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
      {"relevance":"If staff have their own desk in the office, and especially if there is a “clean desk” policy in place."},
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
    "policyContent":"[orgName] staff are responsible for any visitors they bring into the office and are expected to be present for their guest’s arrival, or have prepared another person to receive them. No visitors should be given unsupervised access, and all staff should be vigilant against \"tail-gating\" or using another staff member's access code, card or key to gain entry to the office.",
    "appendixContent":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"pre-visit announcement",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"Before your guest arrives, you should ensure that in-office staff are aware of their impending visit so they can prepare accordingly.",
        "routineEntry":"Let people know if you’re bringing a visitor to the office",
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
        "policyEntry":"Visitors are expected to sign in when they enter the premises and sign out when they leave.",
        "routineEntry":"Has your guest signed in and out?",
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
        "policyEntry":"While on site, guests should use the visitor WiFi to access the internet. Credentials can be obtained from [contactName]. When using the [orgName] wireless network, visitors are not to perform any illegal or malicious actions against any internal or external network.",
        "routineEntry":"Visitors must connect to the guest WiFi network; you can get the details of this from [contactName]",
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
        "storeAs":"[otherVisitorRule]",
        "excludes":[],
        "policyEntry":"Please also note the following rule: [otherVisitorRule]",
        "routineEntry":"",
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
      {"more": ["visitor security policy", "office security tailgating"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q39",
    "q":"Who is responsible for securing the office premises?",
    "required":true,
    "policyContent":"Any questions about [orgName] office security issues should be directed to [officeSecurityName], [officeSecurityPosition].",
    "routineEntry":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"text",
        "answerText":"Name",
        "placeholder": "",
        "storeAs":"[officeSecurityName]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
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
        "routineEntry":"",
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
        "routineEntry":"",
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
        "routineEntry":"",
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
        "routineEntry":"",
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
    "routineEntry":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"textarea",
        "answerText":"",
        "placeholder":"Here are a few examples: \n\n- report to the police, \n- reset account passwords \n- contact IT for a replacement device",
        "storeAs":"[inc5tactics]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
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
