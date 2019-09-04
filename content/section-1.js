var section1 = [
  {
    "isQuestion": false,
    "id":"q9",
    "title": "Incident 1",
    "paragraph":["In this first scenario, we'll look at security threats which occur through organisational communications channels. A very common example of this that you've no doubt already experienced, is that of the suspicious email. Staff may already be aware of some 'red flags' from their personal experience of spam emails, but scammers are becoming more sophsticated all the time and attacks can be especially persuasive in instances where they have been directly targeting civil society organisations.", "An example of this is fake Google notifications sent with a request to 'review' some account detail by logging in using the provided link - at which point the login details are stolen by the attackers. Other risks can come from unexpected attachments containing malware or urgent requests for sensitive information from attackers impersonating one of the recipients trusted contacts.","Although we're talking about email here, this section will also look at other methods as really any communications channel can be vulnerable and should be considered when building your security policy."]
  },
  {
    "isQuestion": true,
    "id":"q10",
    "q":"Do all members of staff need a PGP key for their work email?",
    "required":true,
    "policyContent":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs":"",
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
        "answerText":"Some staff need a key",
        "storeAs":"",
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
        "answerText":"None of our staff use PGP",
        "storeAs":"",
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
      {"relevance":"If you think there’s a chance that your organisation’s emails could be intercepted, or someone could impersonate a member of your staff via email."},
      {"meaning":"PGP (Pretty Good Privacy) is a reliable way to encrypt the contents of your emails and verify that it was you who sent them. Putting your public key on the keyserver helps ensure people can contact you securely, or you can include the public key in your email signature."},
      {"implementation":"The process to set up PGP can be intimidating, so it’s best to read up on it before starting. An introduction to it during an all-staff meeting will help with getting buy-in, and additional 1-1 training should be given to staff with little to no experience of encrypting email. Implementation will depend on the email clients your staff use, but Enigmail with Thunderbird is a popular option. Note: PGP uses encryption and therefore may be illegal in the countries in which your staff live and work."},
      {"more": ["how to set up PGP", "using PGP with Enigmail"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q11",
    "q":"Which Google products and services are used in your organisation?",
    "required":true,
    "policyContent":"We use the following Google products and services: [googleArray]",
    "appendixContent":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"G Suite",
        "storeAs":"[googleArray]",
        "excludes":[],
        "policyEntry":"G Suite",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Hangouts",
        "storeAs":"[googleArray]",
        "excludes":[],
        "policyEntry":"Hangouts",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Sheets",
        "storeAs":"[googleArray]",
        "excludes":[],
        "policyEntry":"Sheets",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Drive",
        "storeAs":"[googleArray]",
        "excludes":[],
        "policyEntry":"Drive",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Gmail",
        "storeAs":"[googleArray]",
        "excludes":[],
        "policyEntry":"Gmail",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Form",
        "storeAs":"[googleArray]",
        "excludes":[],
        "policyEntry":"Form",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Slides",
        "storeAs":"[googleArray]",
        "excludes":[],
        "policyEntry":"Slides",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"We don't use Google at all",
        "storeAs":"[noGoogle]",
        "excludes":[], // review this
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
      {"meaning":"Using G Suite enables organisations to easily consolidate and manage staff’s online working environment. However, Google’s popularity and the access that stolen logins can grant means that CSOs are frequently targeted with very convincing ‘spear phishing’ attacks, in the form of fake emails impersonating Google notifications. As this includes emails and documents, it is a level of access that some organisations find unacceptable. Your organisation should decide whether these are acceptable risks of involving Google in your day-to-day business."},
      {"implementation":""},
      {"more": ["google g suite tutorial", "google privacy check up", "google privacy policy"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q12",
    "q":"Which browser extensions should staff use?",
    "required":true,
    "policyContent":"In order to protect your online activities from common tracking and interference, we recommend all staff install the following privacy-enhancing extensions: [extArray]",
    "appendixContent":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Privacy Badger",
        "storeAs":"[textArray]",
        "excludes":[],
        "policyEntry":"Privacy Badger",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Privacy Possum",
        "storeAs":"[textArray]",
        "excludes":[],
        "policyEntry":"Privacy Possum",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"uBlock Origin",
        "storeAs":"[textArray]",
        "excludes":[],
        "policyEntry":"uBlock Origin",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"HTTPSEverywhere",
        "storeAs":"[textArray]",
        "excludes":[],
        "policyEntry":"HTTPSEverywhere",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"DuckDuckGo",
        "storeAs":"[textArray]",
        "excludes":[],
        "policyEntry":"DuckDuckGo",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Password Alert",
        "storeAs":"[textArray]",
        "excludes":[],
        "policyEntry":"Password Alert",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      }
    ],
    "tips":[
      {"relevance":"If your organisation’s staff use internet browsers that are capable of having extensions or plug-ins extend their functionality."},
      {"meaning":"Using an internet browser is such an everyday part of most people’s work that we often forget it is also a prime target for privacy invasions and attacks. Thankfully, browser extensions – add-ons that extend a browser’s features beyond the default – are available for defending against tracking by Google, Facebook and other advertising companies. They can also be used to detect fake Google login pages (used in spear phishing attacks) and encrypt communication with a website."},
      {"implementation":"Many of these extensions do their job silently in the background, only disturbing the user’s workflow on the occasions when doing their job causes disruption to the page’s functionality. Mobile browsing can also be protected through tracker-blocking apps and privacy-conscious browsers, and this can help with building a consistent defence for staff whenever they are using the internet for work purposes."},
      {"more": ["privacy browser extensions firefox/chrome/safari", "privacy browser add-ons internet explorer"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q13",
    "q":"For each of the following communication types, which tools should staff use when discussing sensitive work topics?",
    "required":true,
    "policyContent":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"text",
        "answerText":"1-1 messaging",
        "placeholder":"e.g. Signal, WhatsApp, Wire, Telegram, Encrypted email, Unencrypted email, SMS, Mattermost, Slack, Matrix",
        "storeAs":"[commsArray]",
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
        "type":"text",
        "answerText":"Group chat",
        "placeholder":"e.g. Signal, WhatsApp, Wire, Telegram, SMS, Phone Call, Mattermost, Slack, Matrix",
        "storeAs":"[commsArray]",
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
        "type":"text",
        "answerText":"Internal video/audio calls",
        "placeholder":"e.g. Jitsi, Zoom, Signal, WhatsApp, Wire, Telegram, Google Hangouts, Skype, Phone Call, Mattermost, Slack, Matrix",
        "storeAs":"[commsArray]",
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
        "type":"text",
        "answerText":"External video/audio calls",
        "placeholder":"e.g. Jitsi, Zoom, Signal, WhatsApp, Wire, Telegram, Google Hangouts, Skype, Phone Call, Mattermost, Slack, Matrix",
        "storeAs":"[commsArray]",
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
      {"relevance":"If your organisation would prefer staff to use particular tools in specific scenarios rather than leaving it to individual choice."},
      {"meaning":"Specifying particular tools for each common use case helps with consistent communications management and security. It can also help staff to spot suspicious communications that aren’t using the approved methods. For instance, a request for sensitive information to be sent via Telegram can be more easily flagged if Telegram is not an approved method for work communications. Each of the tools has its pros and cons, particularly when it comes to privacy and security, and it is up to your organisation to decide which is best for your working environments."},
      {"implementation":"Changing tools can be tricky as it’s hard to break a habit, but the previously-selected security champion and management can all set an example to rest of the organisation. For instance,they might only accept internal video call invites which use the approved platform and gently redirect staff to update their invite with the new, more appropriate method."},
      {"more": ["slack vs mattermost vs matrix", "secure messaging app comparison", "whatsapp vs signal vs telegram", "hangouts vs jitsi vs skype", "cell sms security interception"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q14",
    "q":"Bearing the previous questions in mind, what steps should staff take if they are faced with a suspicious email?",
    "required":true,
    "policyContent":"Phishing involves being duped into providing information to parties that you otherwise wouldn’t share, usually through fake account notifications or impersonating a known contact. Unfortunately this kind of attack in common and so it is important to understand the steps we recommend taking to both mitigate and recover from such an attack: [commsAttackTactics]",
    "appendixContent": "To check whether a link or attachment contains known malware, upload it to VirusTotal; a service owned by Google which reads the file and detects familiar malicious code. It won’t find every attack, only the known ones it’s seen before, but it’s a valuable tool nonetheless.",
    "answers":[
      {
        "type":"textarea", // check for this before making an input field
        "answerText":"",
        "placeholder":"e.g. - If the email gives you a login link: open a new browser window and sign into the site there without using the link. Emailed links can have subtle changes made to them which redirect users to malicious sites for collecting login details.- If the email asks you to click on a button: check where the button will take you to by hovering over it (on desktop) or using a long press (on mobile) to get a preview of the link at the bottom of the screen. Expand shortened links using a tool like Unshorten.it and watch out for spelling mistakes and other subtle errors in the link’s address, which can be indicative of a potentially harmful link.",
        "storeAs":"[commsAttackTactics]",
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
        "type":"textarea",
        "answerText":"",
        "placeholder":"e.g. - If the sender’s email looks correct: remember that email addresses can be spoofed and using a familiar email address enables a spear phishing attack to be more convincing. - If the email isn’t addressed to you, but to a multiple people: attackers often send messages to large groups in order to ‘catch out’ as many people as possible",
        "storeAs":"[commsAttackTactics]",
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
        "type":"textarea",
        "answerText":"",
        "placeholder":"e.g. - If the email has an unexpected attachment: don’t open the file unless you have contacted the sender through another channel to verify it. If you clicked on a link or opened an unexpected attachment, even from a trusted contact: disconnect from the internet and cease using the device – use a different device to change any passwords you used on that device. Report the attack to [contactName, contactPos, contactEmail, contactPhone] to arrange for your device to be examined.",
        "storeAs":"[commsAttackTactics]",
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
      {"meaning":"A common attack used against civil society organisations involves sending fake account (most often Google) notifications that ask the reader to sign in via a provided link in order to take some urgent action, such as “reactivating” the account. This kind of attack is known as phishing, and its aim is to convince the reader to enter their username and password into the sender’s fake login page, thus giving them access to the account. Spear phishing is also a threat in our work as, rather than impersonating big companies, it uses personal information about its target (e.g. the name of a trusted contact) to appear more convincing. Phishing emails of all types can be hard to spot, so it’s best to prepare staff for the main red flags as well as the inevitable day when one slips through the net."},
      {"implementation":"Changing tools can be tricky as it’s hard to break a habit, but the previously-selected security champion and management can all set an example to rest of the organisation. For instance,they might only accept internal video call invites which use the approved platform and gently redirect staff to update their invite with the new, more appropriate method."},
      {"more": ["how to avoid a phishing attack", "what is spear phishing", "report google phishing email"]}
    ]
  },
];
