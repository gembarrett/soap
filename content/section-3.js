var section3 = [
  {
    "isQuestion": false,
    "id":"q20",
    "title": "Scenario three",
    "paragraph":["A staff member was arrested while attending a protest and their phone was confiscated by the police. While the phone is out of your colleague's sight, data from the phone, SIM and SD card could all be copied and searched. This means that contacts on the SIM card, photos on the SD card and any logged in apps on the phone may have been accessed and could be potentially used to justify warrants for escalated surveillance in the future.", "Replacing the SIM, phone and SD card, rotating credentials and watching for suspicious activity can be time-consuming remedies to the situation, and so defining how to secure devices is an important and useful tool against such incidents.", "A lost or compromised device can be remotely wiped with a device management tool, and backup maintenance can ensure it's easy to get back up and running with a new or reset device. This section will also cover the prevention of unauthorised device and backup access."]
  },
  {
    "isQuestion": true,
    "id":"q21",
    "q":"Can staff use biometric authentication to restrict device access?",
    "required":true,
    "policyContent":"In order to protect devices from unauthorised physical infiltration, all devices which are used for [orgName] purposes should have an automatic screen lock enabled and may be unlocked by [deviceAuth].",
    "appendixContent":"Be aware that touchscreen devices are susceptible to holding fingerprint marks which can be used to guess recently-used key sequences.",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Fingerprint authentication",
        "storeAs":"[deviceAuth]",
        "excludes":[],
        "policyEntry":"fingerprint authentication (such as Touch ID)",
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
        "storeAs":"[deviceAuth]",
        "excludes":[],
        "policyEntry":"facial recognition authentication (such as Face Unlock)",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "Be aware that this method is vulnerable to unauthorised access as most systems won't flag a sleeping face, an unwilling face, or a twin."
          }
        ]
      }
    ],
    "tips":[
      {"relevance":"If your organisation provides devices to staff or installs work profiles on their personal devices"},
      {"meaning":"Recent developments in facial and fingerprint recognition have led to biometric authentication becoming a convenient alternative to passwords, although there are security flaws which should be considered. It's important to also set up a password, code or phrase as an extra barrier that can't be as easily circumvented."},
      {"implementation":"The unlock method is irrelevant if devices are almost never locked; enabling the automatic screen lock helps to ensure that others can’t walk right through the open doors of an unlocked device."},
      {"more": ["security of face unlock id", "creating strong passwords", "security of biometric authentication"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q22",
    "q":"Does your organisation store backups in physical or cloud storage?",
    "required":false,
    "policyContent":"[orgName] is responsible for managing data backups.",
    "appendixContent":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Physical storage",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"These backups are stored on physical device(s).",
        "appendixEntry":[
          {
            "reviewList":"Is your physical storage still in good working order or is it time to upgrade?",
            "tipList": "There are physical storage devices available which offer additional security measures, such as keypads – but be sure to store them in a protective case to prevent accidental damage that could corrupt or wipe the data."
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Cloud storage",
        "storeAs":"[]",
        "excludes":[],
        "policyEntry":"We use a cloud storage provider to store backups.",
        "appendixEntry":[
          {
            "reviewList":"Does your cloud storage provider still provide the most appropriate package for your data or is it time to migrate?",
            "tipList": "Advise staff on how to recognise a legitimate automatic backup so that suspicious network activity can be flagged quickly."
          }
        ]
      }
    ],
    "tips":[
      {"relevance":""},
      {"meaning":"Physical storage includes devices like memory sticks and external hard drives and is preferable when the internet connection is insecure or unreliable, but physically vulnerable to loss or damage. Cloud storage includes services like SpiderOak One, Dropbox and iCloud and are preferable when a secure, reliable internet connection is available, but digitally vulnerable to data breaches and loss. When choosing a cloud storage solution, look for zero- or no-knowledge security and/or one which stores your data in a country with progressive privacy laws. Using a zero-knowledge service can make your backup data inaccessible to the service provider’s employees and, by extension, protects you from intrusion via government access requests."},
      {"implementation":"Backing up to both physical and cloud storage helps to ensure that if one is corrupted or lost then the other remains available to restore devices from."},
      {"more": ["physical storage vs cloud storage", "backing up data", "data backup types", "zero-knowledge cloud storage", "cloud backup vs traditional backup"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q23",
    "q":"How often are backups performed?",
    "required":true,
    "policyContent":"To ensure we’re able to recover data during a data loss or compromise incident, we perform backups on an [backupFreq]",
    "appendixContent":"Plan to test your backups on a regular basis! In an ideal world you might never have to restore from backup, but the last thing you want to find during an emergency is that your backups are corrupted or incomplete.",
    "answers":[
      {
        "type":"radio",
        "answerText":"Hourly",
        "storeAs":"[backupFreq]",
        "excludes":[],
        "policyEntry":"hourly basis.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": ""
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"Daily",
        "storeAs":"[backupFreq]",
        "excludes":[],
        "policyEntry":"daily basis.",
        "appendixEntry":[
          {
            "reviewList":"Are daily backups still frequent enough or do you need backups throughout the day?",
            "tipList": "It may be sensible to time automatic backups for after the majority of the day's work has been done."
          }
        ]
      },
      {
        "type":"radio",
        "answerText":"Weekly",
        "storeAs":"[backupFreq]",
        "excludes":[],
        "policyEntry":"weekly basis.",
        "appendixEntry":[
          {
            "reviewList":"Is your data changing more frequently? Could an increase in the backup frequency be appropriate?",
            "tipList": "A week can be a long time, so give your staff a way to trigger infrequent manual backups of their work."
          }
        ]
      },
      {
        "type":"radio",
        "editable":true,
        "answerText":"Another basis",
        "storeAs":"[backupFreq]",
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
      {"implementation":"If all staff are on the same operating system then using the built-in software to perform automatic backups can make the implementation process easier. There are great cross-platform alternatives available too, and whichever option you choose it’s advisable to go for a zero-knowledge service wherever possible."},
      {"more": ["how often should I back up my data", "zero-knowledge cloud storage", "cross-platform backup solutions"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q24",
    "q":"How does your organisation secure its backups?",
    "required":false,
    "policyContent":"Any devices used for work purposes will be backed up as the loss, exposure or manipulation of [orgName] data puts us, and those we work with, at risk. Backups are managed in the following ways: [backupArr]",
    "appendixContent":"Have you had any data loss or similar incidents since the last review? Did it trigger any change in your backup management? An approach to backups is the 3-2-1 rule: at least 3 backup copies of your data on at least 2 different kinds of medium, with at least 1 of these stored offsite.",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Backups are encrypted",
        "storeAs":"[backupArr]",
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
        "storeAs":"[backupArr]",
        "excludes":[],
        "policyEntry":"Sometimes backup data becomes corrupted, so to minimise the impact of this we test the backups regularly to detect any issues.",
        "appendixEntry":[
          {
            "reviewList":"Have there been any recent instances of backup failure that can be learned from?",
            "tipList": "If backups occur overnight, always check that they have finished without errors in the morning."
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Multi-factor authentication",
        "storeAs":"[backupArr]",
        "excludes":[],
        "policyEntry":"Multi-factor authentication is required in order to access the backups.",
        "appendixEntry":[
          {
            "reviewList":"Do those with access to backups still require it?",
            "tipList": "Carefully consider who should be granted access to [orgName]'s cloud storage. Too many people and it becomes hard to track any damage back to a particular user. Too few and you may struggle to gain access for emergency data restoration.'"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Delayed file deletion",
        "storeAs":"[backupArr]",
        "excludes":[],
        "policyEntry":"There is a delay in file deletion to minimise accidental destruction.",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "Set the delay to give ample time for detection and cancellation of the deletion."
          }
        ]
      },
      {
        "type":"checkbox",
        "editable":true,
        "answerText":"other security measure",
        "storeAs":"[backupArr]",
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
      {"meaning":"Backups aren’t much use if they’ve been damaged or corrupted during unauthorised access, so encrypting the files, requiring extra verification for access and preventing instant file deletion are all useful ways of protecting your backed up data. While it’s common to back up files, it’s not common enough to test them regularly to ensure they restore correctly and aren’t corrupted. Checking the integrity of the files can help to avoid a nasty shock when they have to be relied upon during emergency data recovery."},
      {"implementation":""},
      {"more": ["automatic backups vs manual", "how to secure your stored data"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q25",
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
            "reviewList":"Are staff still allowed to store passwords in their browser?",
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
            "tipList": "It’s annoying to keep dismissing the “save your password?” prompt but this can be disabled in the browser settings."
          }
        ]
      },
      {
        "type":"radio",
        "editable":true,
        "answerText":"Under some circumstances",
        "storeAs":"[exemptions]",
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
      {"relevance":"Applicable when a password manager isn't a feasible storage option."},
      {"meaning":"Storing long, complex passwords in a convenient place like the browser makes them easier to integrate into a workflow if there’s no password manager in use. However, the lists of password that are stored in the browser are not as well protected as they would be in a password manager. If the device on which that browser is installed gets stolen, confiscated or otherwise accessed without authorisation (physically or remotely), then the browser’s keychain becomes a treasure trove of account logins for anyone in control of that device."},
      {"implementation":"If in-browser password storage is appropriate for your organisation’s threat model, consider planning for frequent “clearing out” of old stored passwords in order to lessen the impact of any unauthorised access."},
      {"more": ["storing passwords in browser", "delete stored browser passwords", "browser password risks"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q26",
    "q":"Does your organisation use any tools for device security management?",
    "required":false,
    "policyContent":"In order to support device security across the organisation, we use the following tools: [devSecTools]",
    "appendixContent":"",
    "answers":[
      {
        "type":"checkbox",
        "answerText":"Flock",
        "storeAs":"[devSecTools]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "Flock Agent for macOS & Linux system 'health checks': https://github.com/firstlookmedia/flock-agent"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Stethoscope",
        "storeAs":"[devSecTools]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "Stethoscope for Windows & macOS systems: https://ragtag.org/stethoscope"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Apple MDM",
        "storeAs":"[devSecTools]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "Apple MDM documentation: https://developer.apple.com/documentation/devicemanagement"
          }
        ]
      },
      {
        "type":"checkbox",
        "answerText":"Google Endpoint Management",
        "storeAs":"[devSecTools]",
        "excludes":[],
        "policyEntry":"",
        "appendixEntry":[
          {
            "reviewList":"",
            "tipList": "Google Endpoint Management: https://gsuite.google.com/products/admin/endpoint"
          }
        ]
      },
      {
        "type":"checkbox",
        "editable":true,
        "answerText":"Other",
        "storeAs":"[devSecTools]",
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
      {"relevance":"For organisations where there are more than a handful of devices in use."},
      {"meaning":"A security policy is of little use unless everyone it applies to is adhering to the rules it lays out, but it’s time-consuming to dig into the settings of every device in your organisation. Tools like Flock and Stethoscope can help with this; enabling you to perform a security “health check” on devices. Managing the security of multiple devices can also be made easier with Mobile Device Management (MDM) services, as it can enable the remote install of VPNs and other security apps, as well as remote wipe in the case of device confiscation."},
      {"implementation":"Getting this sort of management tool in place is better done earlier rather than later while there are a manageable number of devices and people to introduce to the system."},
      {"more": ["mobile device management solutions"]}
    ]
  },
  {
    "isQuestion": true,
    "id":"q27",
    "q":"Bearing the previous questions in mind, what steps should staff take when their devices are seized?",
    "required":false,
    "policyContent":"... your device is seized: whether this is at a border, a protest or a raid, it is important to let someone know as soon about the situation as you are able, in order to begin countering any unauthorised access as early as possible. You are advised to follow these steps: [inc3Tactics]",
    "appendixContent": "Device seizures under any circumstances can be a traumatising event so be sure to offer support to your impacted colleague.",
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
      {"meaning":"Device seizures involve your device being taken out of your possession by an authority, and it can be hard to tell whether anyone has broken into it when it's returned. Given this uncertainty and confusion, it can be helpful to have a clear process for staff to follow in order to regain some control over the situation."},
      {"implementation":""},
      {"more": ["what to do if your phone is seized by police", "how to secure sim card"]}
    ]
  }
]
