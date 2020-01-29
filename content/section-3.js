var section3 = [
  {
    "isQuestion": false,
    "id":"q20",
    "title": "Scenario three",
    "paragraph":["Unwanted intrusion into our devices is a concern for many, especially as they can be lost or stolen and expose sensitive information to unauthorised persons. Sometimes the authorities aren't happy about the work we do, and so our devices are at risk of being confiscated during police raids"]
  },
  {
    "isQuestion": true,
    "id":"q21",
    "q":"Which methods should be employed to secure devices that are used for work purposes?",
    "required":false,
    "policyContent":"In order to protect devices from unauthorised physical infiltration, all devices which are used for [orgName] purposes should have an automatic screen lock enabled, and the unlock method should, where possible, use ",
    "appendixContent":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Password, code or phrase",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"strong passcodes, passwords or passphrases",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "Be aware that touchscreen devices are susceptible to holding fingerprint marks which can be used to guess recently-used key sequences"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Fingerprint authentication",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"fingerprint authentication such as Touch ID",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Facial recognition authentication",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"facial recognition authentication such as Face Unlock",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Staff preference",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"an authentication method that uses a combination of letters and/or numbers, or biometric data - according to your preference and the device's capabilities.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      }
    ],
    "tips":[
      {"relevance":"If your organisation provides devices to staff or installs work profiles on their personal devices"},
      {"meaning":"Preventing access from physical infiltration is usually done through passcodes (phones) and passwords (computers) as it provides an additional barrier against anyone trying to get into the device. Recent developments in facial and fingerprint recognition have led to biometric authentication becoming an alternative, although there are security flaws which should be considered."},
      {"implementation":"The unlock method is irrelevant if devices are almost never locked; enabling the automatic screen lock helps to ensure that others can’t walk right through the open doors of an unlocked device."},
      {"more": ["security of face unlock id", "creating strong passwords", "security of biometric authentication"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q22",
    "q":"Are staff responsible for backing up their own work-related data?",
    "required":false,
    "policyContent":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"Staff are responsible for backing up their own work-related data using whatever service and process they see fit. Please speak to [contactName, contactPos] if you need guidance on this",
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
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"[orgName] is responsible for managing back-ups.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"radio",
        "editable":"true",
        "answerText":"Sometimes (edit)",
        "storeAs":"[]",
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
      {"meaning":"If staff are responsible for their own backups, they should still be encouraged to use some form of backup system to protect sensitive data. When the organisation is responsible for managing backups it ensures a level of security and maintenance. There may be some circumstances under which the organisation shares the responsibility with staff members – for example during travel abroad when internet connections to cloud storage may not be reliable or secure."},
      {"implementation":"When deciding what to back up, consider the potential harm done if the data were to be made public, deleted, manipulated, or accessed by malicious actors. Backups usually include things like emails, contact details, interview notes and funding contracts."},
      {"more": []}
    ]
  },
  {
    "isQuestion": true,
    "id":"q23",
    "q":"Does your organisation store backups in physical or cloud storage?",
    "required":false,
    "policyContent":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Physical storage",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "There are physical storage devices available which offer additional security measures, such as keypads – but be sure to store them in a protective case to prevent accidental damage that could corrupt or wipe the data."
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Cloud storage",
        "storeAs":"[]",
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
      {"meaning":"Physical storage includes devices like memory sticks and external hard drives. Preferable when the internet connection is insecure or unreliable, but physically vulnerable to confiscation or damage. Cloud storage includes services like Dropbox, iCloud and Sync. Preferable when a secure, reliable internet connection is available, but digitally vulnerable to data breaches and loss. When choosing a cloud storage solution, look for zero- or no-knowledge security and/or one which stores your data in a country with progressive privacy laws. Using a zero-knowledge service can make your backup data inaccessible to the service provider’s employees and, by extension, protects you from intrusion via government access requests."},
      {"implementation":""},
      {"more": []}
    ]
  },
  {
    "isQuestion": true,
    "id":"q24",
    "q":"How often are backups performed?",
    "required":false,
    "policyContent":"To ensure we’re able to recover data during a data loss or compromise incident, we perform backups ",
    "appendixContent":"How long has it been since the backups were tested? Plan to test your backups on a regular basis! In an ideal world you might never have to restore from backup, but the last thing you want to find during an emergency is that your backups are corrupted or incomplete.",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Hourly",
        "storeAs":"[]",
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
        "type":"checkbox",
        "answerText":"Daily",
        "storeAs":"[]",
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
        "type":"checkbox",
        "answerText":"Weekly",
        "storeAs":"[]",
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
        "type":"checkbox",
        "answerText":"Biweekly",
        "storeAs":"[]",
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
        "type":"checkbox",
        "editable":"true",
        "answerText":"Other",
        "storeAs":"[]",
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
      {"meaning":"Whether automatic or manual, it’s important to back up every device’s data on a regular basis to avoid potential loss due to device confiscation or damage. The frequency of your backups should be dictated by how often your data is created or updated, with hourly or end-of-day being the ideal for organisations that rely heavily on digital documents."},
      {"implementation":" If all staff are on the same operating system then using the built-in software to perform automatic backups can make the implementation process easier. There are great cross-platform alternatives available too, and whichever option you choose it’s advisable to go for a zero-knowledge service wherever possible."},
      {"more": ["how often should I back up my data", "automatic backups on [osArray]"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q25",
    "q":"How does your organisation secure its backups?",
    "required":false,
    "policyContent":"Any devices used for work purposes will be backed up as the loss, exposure or manipulation of [orgName] data puts us, and those we work with, at risk. Backups are managed in the following ways: ",
    "appendixContent":"Have you had any data loss or similar incidents since the last review? Did it trigger any change in your backup management? An approach to backups is the 3-2-1 rule: at least 3 backup copies of your data on at least 2 different kinds of medium, with at least 1 of these stored offsite.",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Backups are encrypted",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"Backups are encrypted to help protect against unauthorised access.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Backups are tested regularly",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"Sometimes backup data becomes corrupted, so to minimise the impact of this we test the backups regularly to detect any issues.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Multi-factor authentication",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"Multi-factor authentication is required in order to access the backups.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Delayed file deletion",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"There is a delay in file deletion to minimise accidental destruction.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Biweekly",
        "storeAs":"[]",
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
        "type":"checkbox",
        "editable":"true"
        "answerText":"Other",
        "storeAs":"[]",
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
      {"meaning":"Backups aren’t much use if they’ve been damaged or corrupted, so encrypting the files, requiring extra verification for access and preventing instant file deletion are all useful ways of protecting your backed up data. While it’s common to back up files, it’s not common enough to test them regularly to ensure they restore correctly and aren’t corrupted. Checking the integrity of the files can help to avoid a nasty shock when they have to be relied upon in the event of a data loss."},
      {"implementation":""},
      {"more": ["backing up data", "data backup types", "zero-knowledge cloud storage", "cloud backup vs traditional backup", "automatic backups vs manual"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q26",
    "q":"Can staff store passwords in their browser?",
    "required":false,
    "policyContent":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"radio",
        "answerText":"Yes",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"Staff who are aware of the risks may store their passwords in their browser for more convenient access, however they are expected to frequently clear out old logins",
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
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"Staff are advised to refrain from storing passwords in their browser due to the security risks. If you need guidance on choosing an alternative password storage system, [contactName, contactPos] will be able to advise you on this.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "It’s annoying to keep dismissing the “save your password?” prompt but you can advise users to turn this off in the browser settings"
          }
        ]
      },
      {
        "type":"checkbox",
        "editable":"true"
        "answerText":"Under some circumstances",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"Ordinarily, we would prefer staff to avoid storing passwords in their browser, however it is permitted under these circumstances: [exemptions]",
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
      {"meaning":"Storing long, complex passwords in a convenient place like the browser makes them easier to integrate into a workflow if there’s no password manager in use. However, the lists of password that are stored in the browser are not as well protected as they would be in a password manager which has been secured by a separate password, usually just requiring the user’s main account password. If the device on which that browser is installed gets stolen, confiscated or otherwise accessed without authorisation (physically or remotely), then the browser’s keychain becomes a treasure trove of account logins for anyone in control of that device."},
      {"implementation":"If in-browser password storage is appropriate for your organisation’s threat model, consider planning for frequent “clearing out” of old stored passwords in order to lessen the impact of any unauthorised access."},
      {"more": ["storing passwords in browser", "delete stored browser passwords", "browser password risks"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q27",
    "q":"Does your organisation use any tools for device security management?",
    "required":false,
    "policyContent":"",
    "appendixContent":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Flock",
        "storeAs":"[]",
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
        "type":"checkbox",
        "answerText":"Stethoscope",
        "storeAs":"[]",
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
        "type":"checkbox",
        "answerText":"Apple MDM",
        "storeAs":"[]",
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
        "type":"checkbox",
        "answerText":"Google Endpoint Management",
        "storeAs":"[]",
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
        "type":"checkbox",
        "editable":"true"
        "answerText":"Other",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"Ordinarily, we would prefer staff to avoid storing passwords in their browser, however it is permitted under these circumstances: [exemptions]",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      }
    ],
    "tips":[
      {"relevance":"For organisations where there are more than a handful of devices being used for work purposes."},
      {"meaning":"A security policy is of little use unless everyone it applies to is adhering to the rules it lays out, but it’s time-consuming to dig into the settings of every device in your organisation. Tools like Flock and Stethoscope can help with this; enabling you to perform a security “health check” on devices. Managing the security of multiple devices can also be made easier with Mobile Device Management (MDM) services, as it can enable the remote install of VPNs and other security apps, as well as remote wipe in the case of device confiscation."},
      {"implementation":""},
      {"more": [""]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q28",
    "q":"Bearing the previous questions in mind, what steps should staff take when their devices are confiscated?",
    "required":true,
    "policyContent":"... your device is confiscated: you are advised to follow these steps: [inc3Tactics]",
    "appendixContent": "",
    "answers":[
      {
        "type":"textarea",
        "answerText":"",
        "placeholder":"Here's a few examples: \n\n- write down exactly what happened, including any officer numbers, times, etc. \n- warn your coworkers and anyone who could now be at risk \n- contact the org’s lawyer",
        "storeAs":"[inc3Tactics]",
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
      {"meaning":""},
      {"implementation":""},
      {"more": [""]}
    ]
  }
]
