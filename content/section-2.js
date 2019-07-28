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
  }
]
