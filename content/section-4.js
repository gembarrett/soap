var section4 = [
  {
    "isQuestion": false,
    "id":"q28",
    "title": "Scenario four",
    "paragraph":["Travelling to conferences and other work-related events may involve crossing a border or two, which can be a headache for security-conscious folks as the security process requires your devices to be out of your sight, at least for a few minutes. If you're detained for extra screening that can turn into an extended period of time, during which your devices may be accessed without your knowledge - you could then be stuck with a potentially compromised device while far from home.", "Going to the border with your devices encrypted (if possible), locked and holding little to no sensitive data is the safest approach. In addition, having a travel plan and a 'buddy' to check in with can make it easier to deal with an emergency and trigger an escalation back at the office", "It's important to remind staff to know their rights when crossing borders, especially as laptop stickers, authentication keys and an unusually empty device are all elements that can make them look suspicious. Staff should also remember to stay calm and polite during border interactions as lying, rudeness and physical interference with an agent's search will not help the situation."]
  },
  {
    "isQuestion": true,
    "id":"q29",
    "q":"Should staff use separate travel devices?",
    "required":true,
    "policyEntry":"",
    "appendixEntry":"",
    "routineEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes and we provide them",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"We provide staff with devices for use while travelling in order to lessen the impact should they become compromised.",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Are the travel devices up-to-date with the latest security features? If not, they should be updated or upgraded.",
            "tipList": "When providing a travel phone to staff, consider the SIM card management: will it be provided for use around the world, or should they purchase locally?",
            "linksList": ""
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"Staff must provide these if they require them",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"Staff are encouraged to use separate, 'clean' devices when they travel to lessen the impact of any authorised access. For guidance on which types of device would be suitable, speak to [security-contact-name].",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Roughly how many staff are using separate travel devices vs those who use their 'cleaned' everyday devices?",
            "tipList": "It’s expensive to purchase a second device so consider sharing or reimbursing the cost of these for staff who need it.",
            "linksList": ""
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"Staff should prepare and use their everyday devices",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"Before travelling on work-related business, staff should prepare ('clean') their everyday devices in such a way as to reduce the impact of any unauthorised access while abroad. [security-contact-name] can provide more information on how to do this.",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "Consider providing a training session for staff to ensure everyone is clear on how to prepare their regular devices for travel.",
            "linksList": ""
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"Decided on a case-by-case basis",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"The issue of travel devices vs everyday devices is decided on a case-by-case basis and is dependent on your threat model. Speak to [security-contact-name] for more information.",
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
      {"relevance":"Relevant to organizations with staff who carry sensitive information on their devices when they travel."},
      {"meaning":"Travel devices are typically phones, laptops and other portable devices which are ‘clean’ (i.e. with minimal to no sensitive information on them) and used solely during travel to minimise the impact of unwanted access by border agents or other authorities. Our everyday devices contain a large amount of information and it can be time-consuming to clear them of all but the most innocuous data. Carrying a near-empty device can look suspicious and so some people choose to create a false profile filled with family photos and other “memories” from stock imagery sites. If the risk isn’t high enough to warrant the use of travel devices, then staff should be made aware of how they can secure their regular devices while travelling."},
      {"implementation":""},
      {"more": ["clean devices when travelling"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q30",
    "q":"How should staff prepare their devices for travel?",
    "required":false,
    "policyEntry":"Before travelling, there are steps which should be taken to prepare devices containing sensitive information. For help with any of the following security measures, please contact [security-contact-name].",
    "appendixEntry":"EFF wrote a Border Search Pocket Guide, which may be useful: https://www.eff.org/document/eff-border-search-pocket-guide",
    "routineEntry":"",
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
        "storeAs":"",
        "excludes":[],
        "policyEntry":"- Enable any SOS features or modes on your phone, and learn how to use them so you are prepared to do so in an emergency. SOS mode provides a shortcut to calling the emergency services or texting emergency contacts, usually triggered by pressing a button several times.",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "If there's a large amount of staff who wear smart watches at [organisation-name] then it could be suggested to them to look into what Emergency SOS calling features they may have access to through the watch.",
            "linksList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Remove unnecessary data",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"- Deleting unnecessary data from your devices before travelling reduces how much is exposed should the device be accessed without your knowledge. Assess each data group by how essential it is to your trip and whether it can be safely accessed via non-local storage while abroad.",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "Remember to check that your devices are backed up before removing data as part of your travel preparations.",
            "linksList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Encrypt all devices",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"- Full disk encryption is available on most operating systems, and we require staff to ensure it is set up and working prior to travel. For help on how to do this, please contact [security-contact-name].",
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
        "answerText":"Remove/log out of incriminating services",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"- If your device is searched, you'll want to limit the amount of suspicious or incriminating information that is available. Affected apps and websites will depend on the travel destination, for example some countries will take issue with gay dating apps while others will be more concerned by the presence of a Tor browser.",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "Don't forget to wipe browser history in addition to logging out and removing services from your devices.",
            "linksList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Disable biometric authentication",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"- By disabling fingerprint or facial authentication, your device will fallback to requiring a password, code or phrase to gain entry - something which is harder to force as it usually requires a judge to support the search of your device.",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "Switching off devices will also disable biometric authentication - but only for the first successful attempt to gain access.",
            "linksList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Switch off all devices",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"- If you forget to disable biometric authentication then switching the device off altogether can force the device to fall back to authentication via password, code or phrase the next time it is turned on. This makes it harder for others to force entry to the device.",
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
        "answerText":"other security measure",
        "storeAs":"[travelSteps]",
        "excludes":[],
        "policyEntry":"- [travelSteps]",
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
      {"relevance":"Organizations with staff who travel outside of their home country for work purposes."},
      {"meaning":"Be aware that unusual precautions may make border agents suspicious. Some of these measures will need to be implemented on a case-by-case basis to avoid standing out. Being visibly security-conscious can draw the attention of border guards."},
      {"implementation":"Creating a travel checklist for staff out of the relevant content in your security policy can help with implementation."},
      {"more": ["enable phone SOS mode", "device security while travelling", "how to disable biometric authentication"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q31",
    "q":"Should staff use a specific tool or tools to protect their internet connection?",
    "required":true,
    "policyEntry":"Protecting your internet activity from invasive monitoring can involve a range of solutions. [organisation-name] advises staff to use [vpnChoice] on devices that are connected to the internet. [security-contact-name] can help with set up.",
    "appendixEntry":"Depending on the country in which you're operating it may be advisable to recommend using VPNs and similar tools even when staff are not travelling.",
    "routineEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Mullvad",
        "storeAs":"[vpnChoice]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Is Mullvad still the right tool to recommend to staff?",
            "tipList": "",
            "linksList": "Mullvad website: https://mullvad.net"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Psiphon",
        "storeAs":"[vpnChoice]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Is Psiphon still the right tool to recommend to staff?",
            "tipList": "Ensure staff download Psiphon directly from their website (see Useful Links below) to avoid fakes containing malicious code.",
            "linksList": "Psiphon website: https://psiphon.ca"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"NordVPN",
        "storeAs":"[vpnChoice]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Is NordVPN still the right tool to recommend to staff?",
            "tipList": "",
            "linksList": "NordVPN website: https://nordvpn.com"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Tor",
        "storeAs":"[vpnChoice]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "As one of the most famous circumvention tools, Tor can stand out as a red flag in some countries and you will come across sites that block Tor users altogether, so choose a backup solution for when your circumvention needs to be a little more low-profile or you're sure that there are other Tor users around that will make your usage blend in. Ensure staff download Tor directly from their website (see Useful Links below) to avoid fakes containing malicious code.",
            "linksList": "Tor Project website: https://www.torproject.org"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Tunnelbear",
        "storeAs":"[vpnChoice]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Is TunnelBear still the right tool to recommend to staff?",
            "tipList": "",
            "linksList": "TunnelBear website: https://www.tunnelbear.com"
          }
        ]
      },
      {
        "type":"checkbox",
        "editable":true,
        "answerText":"other",
        "storeAs":"[vpnChoice]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Is [vpnChoice] still the best option for protecting the internet activity of staff members?",
            "tipList": "",
            "linksList": ""
          }
        ]
      }
    ],
    "tips":[
      {"relevance":"These tools are most beneficial to staff working or travelling in a country that have invasive powers to monitor online activity."},
      {"meaning":"VPNs and similar tools can mask a user's location and encrypt their connection, ensuring that anyone watching can only see that a VPN is in use."},
      {"implementation":"It can sometimes be possible for governments to distinguish which tool is masking the connection so consider carefully which options are least likely to stand out from the crowd. Determining the most popular VPNs (e.g. which ones are used to find porn) in a region will help with blending in."},
      {"more": ["privacy-conscious VPNs", "how do vpns work"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q32",
    "q":"How are the recommended VPNs and circumvention tools paid for?",
    "required":false,
    "policyEntry":"",
    "appendixEntry":"",
    "routineEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Free plan",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Is the free [vpnChoice] plan still sufficient or is there a better option now available?",
            "tipList": "Using the free plan may result in some compromises on speed or be ad-supported so consider whether the benefits offset these.",
            "linksList": ""
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"Company subscription",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"[organisation-name] provides a paid subscription to [vpnChoice].",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Is the paid subscription to [vpnChoice] still a good solution or is there a better option now available?",
            "tipList": "",
            "linksList": ""
          }
        ]
      }
    ],
    "tips":[
      {"relevance":""},
      {"meaning":"Circumvention tools are usually run by small organizations who rely on funding and donations in order to keep providing a free or low-cost service, while larger VPNs tend to offer additional features and support in exchange for a more expensive subscription plan."},
      {"implementation":"Asking staff to pay for their own VPN subscription can make it tough for those on a lower income to sufficiently protect their internet connection, putting them at risk and impacting their work. Instead, consider covering part of the cost or migrating to a service with a free plan."},
      {"more": ["free vs paid vpns"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q33",
    "q":"Who should staff contact in a travel emergency?",
    "required":false,
    "policyEntry":"",
    "appendixEntry":"",
    "routineEntry":"",
    "answers":[
      {
        "type":"text",
        "answerText":"Name",
        "placeholder":"e.g. Shohreh Yazdani",
        "storeAs":"[travelHelpName]",
        "excludes":[],
        "policyEntry":"If you are in need of assistance while travelling, please contact either your pre-arranged travel buddy or [travelHelpName].",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Is [travelHelpName] still the most appropriate person to contact for travel assistance?",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"text",
        "answerText":"Pronouns",
        "placeholder": "e.g. she/her",
        "storeAs":"[travelHelpProns]",
        "excludes":[],
        "policyEntry":"Their pronouns are [travelHelpProns].",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Does [travelHelpName] still use [travelHelpProns] pronouns?",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"text",
        "answerText":"Email",
        "placeholder": "e.g. example@organization.com",
        "storeAs":"[travelHelpEmail]",
        "excludes":[],
        "policyEntry":"Email: [travelHelpEmail]",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Is [travelHelpName]'s email address up-to-date?",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"text",
        "answerText":"Phone",
        "placeholder": "e.g. +1 (234) 567-890",
        "storeAs":"[travelHelpPhone]",
        "excludes":[],
        "policyEntry":"Phone: [travelHelpPhone]",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Is [travelHelpName]'s phone number correct?",
            "tipList": "",
            "linksList": ""
          }
        ]
      }
    ],
    "tips":[
      {"relevance":""},
      {"meaning":"When staff are travelling abroad it can be useful for them to have a central point of contact should they need assistance. This person should be able to direct them to the appropriate resource or person, or put into action an emergency escalation plan if needs be."},
      {"implementation":"It may be useful for staff to have a trip-specific 'travel buddy' they can go to for more routine support, such as daily check ins. This means that the person defined here remains the 'emergency' contact and their workload isn't impacted by minor travel support tasks."},
      {"more": ["help for staff while travelling"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q34",
    "q":"What steps should be in your staff members’ travel security plans?",
    "required":false,
    "policyEntry":"... you are travelling abroad for work purposes: It's important to avoid assuming the same level of safety abroad as you are used to at home. While it's recommended that you research your destination's security situation, here are some baseline security measures you can use to form a travel plan in order to help with protecting you, your devices and, by extension, [organisation-name]'s staff and work: [inc4Tactics]",
    "appendixEntry": "",
    "routineEntry":"",
    "answers":[
      {
        "type":"textarea",
        "answerText":"",
        "placeholder":"Here's some examples: \n\n- determine a “travel buddy” to check in with at regular periods \n- agree on code phrases or emojis to indicate safety or trigger an escalation \n- ensure you have emergency contact information in an accessible place",
        "storeAs":"[inc4Tactics]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Is your travel plan template up-to-date?",
            "tipList": "Check ins with a travel buddy can be as simple as using an agreed-upon set of emoji icons as a code to indicate wellness, vulnerability and emergency.",
            "linksList": ""
          }
        ]
      }
    ],
    "tips":[
      {"relevance":""},
      {"meaning":"Staff should not make assumptions about the level of privacy they can expect in their destination region. Having a plan to help them prepare for invasive searches, device loss and other issues means that they're not stuck abroad with no support."},
      {"implementation":"Staff who are travelling alone, or who may be particularly vulnerable to attack while abroad, should have their travel security preparation prioritised"},
      {"more": ["things to consider when crossing the border"]}
    ]
  }
]
