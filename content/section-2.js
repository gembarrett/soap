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
  }
]
