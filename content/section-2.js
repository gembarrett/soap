var section2 = [
  {
    "isQuestion": false,
    "id":"q15",
    "title": "Incident 2",
    "paragraph":["Now consider the situation if the same staff member clicks the link in that suspicious email and the attacker steals their work account login details. We rely on many online services in the course of our work, and as a result the accounts we inhabit get filled with sensitive information that can be accessed, deleted, manipulated and shared by an attacker.", "In this case, red flags of a hacked account can include unrecognised activity, strange login times and being 'locked out' of the account. Once inside, an attacker may steal login details for other accounts, leak sensitive information or impersonate the staff member to damage the organisation.", "In most cases, changing passwords and implementing two-factor authentication is enough to stop the attacker. But if the situation esclates, it can take time to persuade the platform to hand you back control of the account so acting quickly to protect accounts is key. Setting rules for where and how to share, store and discuss information can also help to reduce the impact of an intrusion by limiting what each account can provide access to."]
  },
  {
    "isQuestion": true,
    "id":"q16",
    "q":"Which multi-factor authentication method does your organisation prefer staff to use when securing work accounts?",
    "required":true,
    "policyContent":"Two-factor authentication is a good method of securing our accounts beyond passwords as it requires an additional one-time code to be provided. Two-factor authentication should be enabled on every account which supports it.",
    "appendixContent":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"None - staff preference",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"The options for getting this code include authentication apps, hardware keys, SMS or automated phone call and [orgName] asks staff to use their best judgment when choosing a method for securing each work-related account.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"Two-factor apps or hardware authentication keys",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"[orgName] requires staff to use two-factor apps or hardware authentication methods. Please do not use SMS or phone call authentication as they are insecure methods that can be intercepted.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"SMS or phone call",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"[orgName] requires staff to use SMS or phone call authentication methods. However, be aware of the risks of interception that come with using these methods.",
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
      {"meaning":"Multi-factor authentication adds an extra layer of security to accounts by requiring the account holder to enter an additional one-time code to verify their identity. Receiving this code via SMS or phone call risks interception but this method may be more feasible than the alternative authentication app in cases where staff do not use smartphones. Generating the code through an authentication app (e.g. Authy) or a hardware security key (e.g. Yubikey) has the advantage of not requiring a data or cell service. While authentication apps are free, widely available and well-supported by online platforms, U2F keys require purchasing and are supported on fewer services."},
      {"implementation":"Allowing staff to choose their own authentication method enables them to choose the most convenient option for their workflow, however it is more common to set a baseline level of account security by requiring all staff use authentication apps and hardware security keys where possible."},
      {"more": ["two factor auth list", "sms phone 2 factor authentication", "hardware security keys"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q17",
    "q":"Does your organisation prefer staff to use a specific authentication app?",
    "required":true,
    "policyContent":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Google Authenticator",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"To ensure consistency and help with training and troubleshooting, [orgName] uses Google Authenticator for two-factor authentication where platforms allow it. This app may be installed automatically as part of your mobile work device set up, otherwise you should install it from your platform’s app store, requesting assistance from [contactName, contactPos] when needed",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"Duo Mobile",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"To ensure consistency and help with training and troubleshooting, [orgName] uses Duo Mobile for two-factor authentication where platforms allow it. This app may be installed automatically as part of your mobile work device set up, otherwise you should install it from your platform’s app store, requesting assistance from [contactName, contactPos] when needed",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"Authy",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"To ensure consistency and help with training and troubleshooting, [orgName] uses Authy for two-factor authentication where platforms allow it. This app may be installed automatically as part of your mobile work device set up, otherwise you should install it from your platform’s app store, requesting assistance from [contactName, contactPos] when needed",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"No preference",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"While [orgName] requires the use of an authenticator app, we leave it to staff to make their own choice of which one to use. If you are unsure of which is best for your device and workflow, [contactName, contactPos] is available for advice.",
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
      {"meaning":"Most authentication apps work the same way, but it may be more convenient for troubleshooting if all staff use the same app. Some additional features might be more useful to your organisation than others, for example multi-device access."},
      {"implementation":"Using work profiles and similar device management processes can be helpful for installing the same app across the organisation. Whichever service is chosen, staff may need assistance with setting up and using the app for the first time."},
      {"more": ["authentication app comparison"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q18",
    "q":"Does your organisation provide a hardware security keys to staff?",
    "required":true,
    "policyContent":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"For hardware authentication, we will provide you with a security key. Should you require any help with using the key, contact [contactName, contactPos].",
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
        "storeAs":"",
        "excludes":[],
        "policyEntry":"Hardware authentication has a few options for keys and it is up to staff to select and purchase their preferred key if they wish to use one. If you are uncertain of the choices available and their suitability for your work, please contact [contactName, contactPos] to discuss.",
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
      {"meaning":"Hardware security keys are an alternative to using authentication apps. Rather than generating codes for a user to type in, they are simply plugged into the computer to authenticate with the browser directly. If your organisation is enrolled in the Google Protection Program then Google recommends using Titan keys in its set up process."},
      {"implementation":"Providing staff with hardware keys helps to ensure consistency across the organisation and makes troubleshooting easier. Alternatively, your organisation can empower staff to choose their own key which will help with buy-in. Either way, watch out for staff leaving the key plugged into their devices when not in use as this poses a risk of damage or loss."},
      {"more": ["hardware security key comparison"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q19",
    "q":"Should staff use a specific password manager for work accounts?",
    "required":true,
    "policyContent":"Passwords are hard to remember, so [orgName] prefers staff to use a password manager.",
    "appendixContent":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Staff preference",
        "storeAs":"[passwordPref]",
        "excludes":[],
        "policyEntry":"As there are several options available, it is up to you to choose which suits your workflow best. If you’re unsure of the best password manager for your situation, please contact [contactName, contactPos] to discuss.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"LastPass",
        "storeAs":"[passwordPref]",
        "excludes":[],
        "policyEntry":"In particular, we ask you to use [passwordPref] and if you require any help with set up or using this tool then you should discuss it with [contactName, contactPos].",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"1Password",
        "storeAs":"[passwordPref]",
        "excludes":[],
        "policyEntry":"In particular, we ask you to use [passwordPref] and if you require any help with set up or using this tool then you should discuss it with [contactName, contactPos].",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"KeePass",
        "storeAs":"[passwordPref]",
        "excludes":[],
        "policyEntry":"In particular, we ask you to use [passwordPref] and if you require any help with set up or using this tool then you should discuss it with [contactName, contactPos].",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"PasswordSafe",
        "storeAs":"[passwordPref]",
        "excludes":[],
        "policyEntry":"In particular, we ask you to use [passwordPref] and if you require any help with set up or using this tool then you should discuss it with [contactName, contactPos].",
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
      {"meaning":"Password managers can help staff to keep track of their passwords, with many providing features such as password generation, 2-factor authentication codes, browser extensions and mobile apps alongside the password storage facility. A risk to consider here is the security of these companies you are trusting with important passwords – what would happen if they were hacked? With services that store your passwords locally this may be less of a concern, however those which provide cross-device access to passwords can be more vulnerable to attack."},
      {"implementation":"Browser extensions and mobile apps being available for many password managers enables staff to always have their passwords to hand, making it easier to integrate with their workflow."},
      {"more": ["password manager comparison", "risks of password managers"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q20",
    "q":"Bearing the previous questions in mind, what steps should staff take when faced with a possibly hacked account?Bearing the previous questions in mind, what steps should staff take when faced with a possibly hacked account?",
    "required":true,
    "policyContent":"If you notice suspicious activity in any of your work-related accounts, follow these steps: [hackAttackTactics]",
    "appendixContent": "Sometimes data breaches are to blame for a hacked account, and so it can be worth checking if the email associated with the account was recently involved in such an incident by visiting Have I Been Pwned or a similar site",
    "answers":[
      {
        "type":"textarea", // check for this before making an input field
        "answerText":"",
        "placeholder":"e.g. - if the account is still accessible: change all passwords and review the recent activity, such as posts and log in times.",
        "storeAs":"[hackAttackTactics]",
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
        "placeholder":"e.g. - if it’s an email account: review the inbox rules and  mail forwarding addresses, removing any that look suspicious.",
        "storeAs":"[hackAttackTactics]",
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
        "placeholder":"e.g. - if it’s an inaccessible social media account: major social media platforms have dedicated areas in their Help sections which explain how they can help you regain control of a compromised account",
        "storeAs":"[hackAttackTactics]",
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
      {"meaning":"There are various ways an account can be accessed by unauthorised persons, but secure passwords and two-factor authentication can help mitigate this threat. Of course, once a person is in an account they can “lock” the door behind them, at which point it is usually advisable to appeal to the account provider for help to regain control."},
      {"implementation":""},
      {"more": ["help compromised account", "incident response hacked account"]}
    ]
  }
]
