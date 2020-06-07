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
    "policyContent":"You’ll be provided with a lockable [officeStorage] which should be used to store papers and valuable hardware, such as phones, memory sticks and sensitive documents.",
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
        "editable":true,
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
        "editable":true,
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
    "routineEntry":"[officeSecurityName] ([officeSecurityPhone]/[officeSecurityEmail]) is the person to go to with any issues related to office security.",
    "appendixContent":"",
    "answers":[
      {
        "type":"text",
        "answerText":"Name",
        "placeholder": "e.g. Kendrick Floyd",
        "storeAs":"[officeSecurityName]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Is [officeSecurityName] still responsible for this policy?",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"text",
        "answerText":"Position",
        "placeholder": "e.g. Head of Office Security",
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
        "placeholder": "e.g. he/him",
        "storeAs":"[officeSecurityPronouns]",
        "excludes":[],
        "policyEntry":"Their pronouns are [officeSecurityPronouns]",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Does [officeSecurityName] still use [officeSecurityPronouns] pronouns?",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"text",
        "answerText":"Email",
        "placeholder": ["e.g. example@organisation.com"],
        "storeAs":"[officeSecurityEmail]",
        "excludes":[],
        "policyEntry":"You can email [officeSecurityName] at [officeSecurityEmail].",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Is [officeSecurityEmail] the most-up-to-date email for [contactName]",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"text",
        "answerText":"Phone",
        "placeholder": "e.g. +1 (234) 567-890",
        "storeAs":"[officeSecurityPhone]",
        "excludes":[],
        "policyEntry":"Their phone number is [officeSecurityPhone].",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Is [officeSecurityPhone] the most-up-to-date email for [contactName]",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
    ],
    "tips":[
      {"relevance":""},
      {"meaning":"Whoever is responsible for office security should be present in the office on a regular basis. Depending on your context, they may need to liaise with the alarm system company, rotate office entry codes or manage the staff access fobs. If your office is in a shared or coworking space then the person responsible may be someone outside of your organisation."},
      {"implementation":"For very small organisations it may make sense for this security officer to be the same responsible person named earlier in this process, while larger organisations may require a dedicated person or team. In either case it’s important that everybody knows who to contact if there is an emergency in-office."},
      {"more": ["responsible person office security", "security officer responsibilities"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q40",
    "q":"Which aspects of office security are staff responsible for?",
    "required":true,
    "policyContent":"",
    "routineEntry":"",
    "appendixContent":"Between reviews, keep a note of any security incidents related to the office environment as these experiences teach those involved, the organisation as a whole and can be used to improve the security policy.",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Disabling/enabling the alarm system",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"You will receive training in how to enable and disable the security alarm system. This information, including any access codes, should not be shared with others unless authorised to do so by [officeSecurityName]. If you are the last person to leave the office, it is your responsibility to enable the alarm system and lock up. Likewise, if you are the first to arrive at the office, then you should disable the alarm and report any problems immediately to [officeSecurityName] on [officeSecurityPhone].",
        "routineEntry":"If you’re the last to leave the office: enable the alarm and lock up. If you’re the first to arrive: disable the alarm and report any issues immediately.",
        "appendixEntry":[
          {
            "reviewList":"Have staff had any issues with enabling or disabling the alarm that can be resolved with a refresher training?",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Their own access token (e.g. key)",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"An access token, such as a key, fob or code, will be provided to you so that you can enter the office during working hours. It is of the upmost importance that you guard this token like a password and avoid sharing it with any other person, whether intentionally or by accident, or leaving it unattended. If you lose the token, it is your responsibility to notify [officeSecurityName] immediately so that the appropriate remedial actions can be taken.",
        "routineEntry":"It is very important that you protect your access token (e.g. key, fob, entry code). Do not share it or leave it unattended.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "When staff leave the organisation, be sure to obtain and deactivate their access token so you remain aware of who has access to the office at any given time.",
            "linksList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Shutting down their computer before leaving",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"Please turn off your computer when leaving the office to prevent intruders gaining easy access to its file system.",
        "routineEntry":"Turn your computer off at the end of your workday to enable disk encryption to take place and provide an extra obstacle to intruders.",
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
        "editable":true,
        "answerText":"Other",
        "storeAs":"[officeSecOther]",
        "excludes":[],
        "policyEntry":"[officeSecOther]",
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
      {"meaning":"To enable work to continue outside of office working hours, it is useful for staff to be able to securely exit the office when they leave late and enter when they arrive early. Access tokens such as keys, fobs and codes could grant unauthorised entry if they were to be shared outside of the organisation, for example through social engineering tactics such as ‘tailgating’. It’s important to know who has access to the office and have a process in place for changing codes, deactivating fobs, and similar tasks. Turning devices off at night ensures that an intruder would be forced to enter the correct password in order to decrypt (if disk encryption is enabled) and access the file system."},
      {"implementation":"Social engineering can be a threat both online and offline, and physical penetration testing are frequently employed to use such tactics to gain access in order to test the strength of the organisation’s security plan and see how far a potential intruder could get into a building. The outcomes of these tests can be a valuable metric with which to raise awareness among staff of the importance of keeping the office secure."},
      {"more": ["social engineering tactics tailgating", "physical penetration testing", "office key security policy"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q41",
    "q":"How do you expect staff to secure their home office space?",
    "required":true,
    "policyContent":"",
    "routineEntry":"Be secure when working remotely; ",
    "appendixContent":"Between reviews, keep a note of any security incidents related to working remotely as these experiences teach those involved, the organisation as a whole and can be used to improve the security policy.",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Prevent others using their devices",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"The devices you use for work should not be shared with others outside of [orgName], as it can put the confidential information they hold at risk of deletion or damage.",
        "routineEntry":"don’t allow others to use your work devices",
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
        "answerText":"Switch off devices when not in use",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"Please switch off devices when they are not in use, as this will make it harder for intruders to access the file system, especially if the device uses disk encryption and/or requires a password to log in.",
        "routineEntry":"switch work devices off when not in use",
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
        "answerText":"Lock up documents and devices at night",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"When the work day is over, documents and devices should be locked away to deter thieves.",
        "routineEntry":"lock away documents and devices at night",
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
        "answerText":"Restrict workspace access",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"Staff working remotely should know who is able to enter their office. Please avoid allowing access to strangers unless precautions are taken to lock confidential papers away and turn off computers before the visit.",
        "routineEntry":"prevent others from accessing your workspace unsupervised",
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
        "editable":true,
        "answerText":"Other",
        "storeAs":"[remoteSecOther]",
        "excludes":[],
        "policyEntry":"[remoteSecOther]",
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
      {"relevance":"If anyone in your organisation works remotely, from home or anywhere outside of the organisation’s office, then the security of their work in that environment should be examined."},
      {"meaning":"Members of staff may find themselves being asked by family or friends if their work device could be borrowed temporarily, for example to look something up. The rules about this can be restrictive or more flexible, depending on whether the devices have work profiles or are owned, and the importance of the data stored on it. Staff members should be aware of everyone who has access to their home office, but that’s not always possible. Measures such as locking the door, putting devices and documents away at night, or switching off devices when not in use, are all additional obstacles for an intruder."},
      {"implementation":"It may not be possible for some staff to work securely from home office, so consider how everyone can be supported, for example by offering paid membership to a local coworking space."},
      {"more": ["how to secure a home office", "security of coworking spaces", "risks of public wifi"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q42",
    "q":"Bearing the previous questions in mind, what steps should staff members take if their work device has been lost or stolen?",
    "required":false,
    "policyContent":".... a device you use for work is lost or stolen: as with most security incidents, it can be intimidating to report a device loss but the impact can be minimised the sooner it’s reported. Here are the steps you should take immediately upon discovering a work device is lost or stolen: [inc5tactics]",
    "routineEntry":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"textarea",
        "answerText":"",
        "placeholder":"Here are a few examples: \n\n- report to their phone company, \n- reset account passwords \n- contact IT for a replacement device",
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
      {"meaning":"When a device that provides access to your organisation’s data is lost or stolen, the owner needs to be able to quickly and confidently report the loss. By acting fast, account credentials can be changed and the device can be found or wiped sooner than a third party can gain access to the device’s contents."},
      {"implementation":"The potential impact of a device loss can make it an intimidating thing to report, so it’s important that staff know they’re supported."},
      {"more": ["lost stolen device security"]}
    ]
  }
]
