var section6 = [
  {
    "isQuestion": false,
    "id":"q43",
    "title": "Scenario six",
    "paragraph":["Your organization receives a stern letter from your internet service provider explaining that illegal downloading violates their terms of service and warning of consequences for continued violation. It soon emerges that the organization’s WiFi network is reachable in the cafe below the office, and an opponent to your work has been sitting in there using your network to torrent films.", "Intrusions involving the network can range in their spread and impact, and there are several ways you can limit both, whether at browser, device or network level. Browser-based intrusions can involve websites themselves, but they can also expose confidential browsing information to any attacker who gains control of the computer.", "This section will also cover preparedness for viruses, suspicious network activity, and other aspects of device and network level attacks."]
  },
  {
    "isQuestion": true,
    "id":"q44",
    "q":"How often are the office WiFi passwords changed?",
    "required":true,
    "policyEntry":"To ensure that the WiFi access is restricted to authorised staff, [orgName] rotates the password [pwdFreq] and the new credentials will be made available to you by [contactName].",
    "routineEntry":"",
    "appendixEntry":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"at every security review",
        "storeAs":"[pwdFreq]",
        "excludes":[],
        "policyEntry":"",
        "routineEntry":"",
        "appendixEntry":[
          {
            "reviewList":"Time to change the office WiFi passwords!",
            "tipList": "",
            "linksList": ""
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"every 6 months",
        "storeAs":"[pwdFreq]",
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
        "type":"radio",
        "answerText":"every month",
        "storeAs":"[pwdFreq]",
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
        "type":"radio",
        "answerText":"each week",
        "storeAs":"[pwdFreq]",
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
      {"relevance":"If your organization uses a password-protected wireless internet connection."},
      {"meaning":"It’s important to keep in mind that WiFi extends beyond the physical walls of the office, and so an attacker can gain access even if they’re outside or next door. Strong passwords changed regularly are key to ensuring that, even if the password is compromised somehow, its ability to grant access is time-limited."},
      {"implementation":"Consider how you can share the latest password easily and securely, for instance through an encrypted email or secure file share."},
      {"more": [""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q45",
    "q":"What measures do you take to protect your office network?",
    "required":true,
    "policyEntry":"When using the internal network, you can expect to find the following security measures in place. ",
    "routineEntry":"",
    "appendixEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Password protection",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"You will need a password in order to gain access, which can be obtained from [contactName].",
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
        "answerText":"Firewall",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"A firewall has been set up to prevent malicious connections. If you believe the firewall may be negatively impacting your internet activities, and therefore your work, please speak to [contactName].",
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
        "answerText":"Approved devices only",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"Only approved devices are to be on the [orgName] internal network. If you need to use an unapproved device you should request permission to connect from [contactName] so it can be added to the safe list.",
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
        "answerText":"Wired connections available",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"Wired connections are available and recommended. Let [contactName] know if you need a cable for connecting your device.",
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
        "answerText":"Traffic inspection",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"It is important to understand that any and all traffic can be inspected while on the [orgName] internal network.",
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
        "answerText":"Other",
        "storeAs":"[otherNetSec]",
        "excludes":[],
        "policyEntry":"Please also note the following rule: [otherNetSec]",
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
      {"relevance":"Your organization controls the security of the internet it uses, e.g. in an owned office, rather than a coworking space."},
      {"meaning":"There are several measures you can put in place to protect your office network from intruders and each one helps to build a trusted environment in which you are aware of who is on the network with you. A wired connection is recommended, and where a wireless network is in use it should be password-protected (secured with WPA2 or WPA3). A firewall guards your network by monitoring the traffic and allowing or denying connections based on your rules. Organizations may also ask staff to request permission before connecting their personal devices to the network as this can make it easier to spot suspicious activity when monitoring traffic."},
      {"implementation":""},
      {"more": ["how to configure a firewall", "security of wired vs wireless network", "difference between WPA2 and WPA3", "vulnerabilities in WPA2", "spotting suspicious network activity"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q46",
    "q":"How can staff protect themselves from browser-based intrusions?",
    "required":true,
    "policyEntry":"Your web browser can provide a window into your online activities, potentially exposing confidential data such as activist identities and [orgName] project details. To mitigate this, we recommend implementing the following security hygiene techniques in your browser:",
    "routineEntry":"",
    "appendixEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Clear cookies",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"- clear cookies",
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
        "answerText":"Clear history",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"- delete browser history (this can be set up on an automatic schedule)",
        "routineEntry":"When did you last clear your browsing history?",
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
        "answerText":"Enable \"Do Not Track\"",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"- enable Do Not Track to hide from trackers",
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
        "answerText":"Javascript off",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"- disable Javascript",
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
        "answerText":"Other",
        "storeAs":"[otherBrowserSec]",
        "excludes":[],
        "policyEntry":"- also, [otherBrowserSec]",
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
      {"meaning":"In the course of your employees’ work, their online searches, clicks and website visits can put together a picture of their activities that exposes sensitive or confidential information. Anyone accessing the computer can see the sites accessed and the logins used, so clearing browsing history regularly can reduce how much history is accessible. Cookies and scripting attacks have been used maliciously in the past as they are usually trusted elements of websites which are used to execute code or store data files on the client computer. Disabling cookies and Javascript in the browser can affect the user’s ability to use websites which rely on JS and cookies though, so the seriousness of the threat should be balanced against the inconvenience. Enabling Do Not Track in the browser helps to reduce the amount of information that advertisers and tracking companies can gather about your employees’ searches, but does rely on websites complying with the request."},
      {"implementation":"If your organization provides devices to staff, then these solutions can be implemented in the set up."},
      {"more": ["how to turn on Do Not Track", "risks of cookies and scripting attacks", "why how to clear browsing history", "why turn javascript off"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q47",
    "q":"How should devices be set up to protect against network-based attacks?",
    "required":true,
    "policyEntry":"",
    "routineEntry":"",
    "appendixEntry":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Anti-virus",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"Anti-virus software is required on your computer, in order to deal with any virus-related threats. However, this will not take care of all viruses, and so you should continue to be vigilant against suspicious downloads.",
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
        "answerText":"Automatic updates",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"Automatic updates simply ensures that your software is updated quietly in the background, so there is less chance of it being out-of-date and therefore vulnerable to exploits. On occasion, the latest software version may be unstable, in which case you will be informed to prevent the update.",
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
        "answerText":"Firewall",
        "storeAs":"",
        "excludes":[],
        "policyEntry":"A firewall will be set up on your device to manage the incoming and outgoing connections and prevent malicious data from being transferred. If you find that this interferes with your ability to carry out work activities then you should inform [contactname].",
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
        "answerText":"Other",
        "storeAs":"[otherDeviceNetworkSec]",
        "excludes":[],
        "policyEntry":"In addition, please note the following rule: [otherDeviceNetworkSec]",
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
      {"meaning":"There are many types of virus, many of which can be picked up by anti-virus software. Some viruses exploit out-of-date software with unpatched security holes, and so enabling automatic software updates can help to reduce these vulnerabilities. Using a firewall at the device level to manage incoming and outgoing connections can assist with flagging suspicious activity early."},
      {"implementation":"If your organization provides devices to staff, then these solutions can be implemented in the set up."},
      {"more": ["how to enable automatic updates", "how to configure firewall"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q48",
    "q":"What steps should staff members take if their device is taken over by ransomware?",
    "required":false,
    "policyEntry":"... you suspect your device is infected with ransomware: it’s important not to panic and pay the ransom as that gives no guarantee that your files will be released. Instead, you should follow these steps: [inc6tactics]",
    "appendixEntry": "",
    "routineEntry":"",
    "answers":[
      {
        "type":"textarea",
        "answerText":"",
        "placeholder":"- note down the exact message displayed on your screen, \n- contact the security officer, \n- locate your backups to prepare for a system restore",
        "storeAs":"[inc6tactics]",
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
      {"meaning":"Ransom malware, or ransomware, infects computers and mobile devices through spam, phishing and malicious advertising. Its goal is to lock the user out of their device while demanding a ransom for the decryption and/or release of their files. It’s a popular type of malware attack that is increasingly used against companies and organizations, due to the higher value of the data being held ransom. The first rule of dealing with ransomware is to never pay the ransom: it encourages the attacker and there’s no guarantee your files will be released. There are decryptors available for some ransomware and remediation software for removing the threat, but a full system restore may be the only solution for some infections."},
      {"implementation":""},
      {"more": ["what to do when infected with ransomware"]}
    ]
  }
]
