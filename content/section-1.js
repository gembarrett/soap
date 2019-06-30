var section1 = [
  {
    "isQuestion": false,
    "id":"q9",
    "title": "Incident 1",
    "paragraph":["In this first scenario, we'll look at security threats which occur through organisational communications channels. A very common example of this that you've no doubt already experienced, is that of the suspicious email. Staff may already be aware of some 'red flags' from their personal experience of spam emails, but scammers are becoming more sophsticated all the time and attacks can be especially persuasive in instances where they have been directly targeting civil society organisations.", "An example of this is fake Google notifications sent with a request to 'review' some account detail by logging in using the provided link - at which point the login details are stolen by the attackers. Other risks can come from unexpected attachments containing malware or urgent requests for sensitive information from attackers impersonating one of the recipients trusted contacts.","Although we're talking about email here, this section will also look at other methods as really any communications channel can be vulnerable and should be considered when building your security policy."]
  },
  {
    "isQuestion": true,
    "q":"Do all members of staff need a PGP key for their work email?",
    "required":true,
    "id":"q10",
    "policyContent":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"radio",
        "answerText":"Some staff need a key",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":""
      },
      {
        "type":"radio",
        "answerText":"None of our staff use PGP",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":""
      }
    ],
    "tips":[
      {"relevance":"If you think there’s a chance that your organisation’s emails could be intercepted, or someone could impersonate a member of your staff via email."},
      {"meaning":"PGP (Pretty Good Privacy) is a reliable way to encrypt the contents of your emails and verify that it was you who sent them. Putting your public key on the keyserver helps ensure people can contact you securely, or you can include the public key in your email signature."},
      {"implementation":"The process to set up PGP can be intimidating, so it’s best to read up on it before starting. An introduction to it during an all-staff meeting will help with getting buy-in, and additional 1-1 training should be given to staff with little to no experience of encrypting email. Implementation will depend on the email clients your staff use, but Enigmail with Thunderbird is a popular option. Note: PGP uses encryption and therefore may be illegal in the countries in which your staff live and work."},
      {"more": ["how to set up PGP", "using PGP with Enigmail"]}
    ]
  }
];
