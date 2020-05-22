var ros = [
  {
    "head":"SOAP is a free, easy-to-use online tool that helps civil society organizations build better security policies.",
    "subhead":"",
    "features":[
      {
        "feat":"Design customized security policies",
        "desc":"SOAP allows users to create useful, relevant security policies that fit their organization’s unique needs.",
        "points":["Each answer contributes to refining the process and eliminating irrelevant questions", "Non-essential questions can be skipped to further refine the policy-building process","No suitable answer? Editable buttons mean you can write your own answers in"],
        "icon": "fa-drafting-compass"
      },
      {
        "feat":"Receive security policy support",
        "desc":"Security policies need support to be effective. SOAP provides users with effective and efficient support throughout the process based on innovative security policy research and analysis.",
        "points":["Each question has a dropdown panel containing useful tips","Definitions of key terms help to ensure clarity", "Use the linked search terms to do further research on the topics covered"],
        "icon": "fa-layer-group"
      },
      {
        "feat":"Successfully implement new policies",
        "desc":"SOAP offers implementation and maintenance tips to help users ensure their new security policies are impactful and up-to-date.",
        "points":["Every policy comes with an appendix of implementation tips", "A review checklist is provided to support future maintenance","Download and share your policy as text, Markdown or HTML"],
        "icon": "fa-clipboard-list"
      }
    ],
    "cta": "Ready to start creating your new organizational security policy?",
    "what":[
      {
        "head":"What is SOAP?",
        "img":"pic-bc-h2",
        "imgBig":"",
        "overview":"SOAP is a free, online security policy generator which aims to make it easier to build and implement security guidelines.",
        "desc": ["SOAP is a free, online security policy generator. The acronym stands for Securing Organizations with Automated Policymaking—reflecting the need to \"clean up\" standard organizational security policies, which all-too-often are unread, irrelevant, or ignored. Thanks to SOAP, organizations can now customize their own unique security policies. Say goodbye to the one-size-fits-all approaches of the past! And along the way, SOAP provides support and implementation tips to ensure the entire process is as easy as possible."]
      }
    ],
    "who":[
      {
        "head":"Who should use SOAP?",
        "img":"pic-policy",
        "overview":"SOAP can be a useful tool for any organization that needs a set of formalised security rules or a preparatory resource for staff.",
        "desc":["Almost any organization that needs or uses a security policy! In particular, SOAP is geared towards helping civil society organizations (“CSOs”) and other mission-driven groups increase their digital resilience by building an organizational security policy that works for their specific situation.","So whether your organization needs to update an existing policy, create an entirely new one, or is just preparing to work with a security consultant, SOAP can help!", "Research indicates nearly half of all CSOs don’t have a security policy. These organizations instead rely on informal guidelines and “trust” to manage their security. In today’s world, that’s not enough. Although such flexibility allows organizations to adapt quickly to new threats, it makes it much harder to ensure workers are operating under the same security standard. And new members are often left unprepared for even the most basic security incidents. SOAP provides a set of security rules that everyone can work with—all totally customizable to your organization’s specific needs."]
      }
    ],
    "how":[
      {
        "head":"How does SOAP work?",
        "img":"pic-options",
        "overview":"SOAP asks questions about your organization's security practices and uses your answers to compile a custom policy, review checklist and appendix of tips.",
        "desc":["It’s simple! SOAP asks questions about your organizational security practices. Your answers help SOAP build a policy which is presented to you at the end of the process. You can preview your policy at any point, and each question is accompanied by information to help you fully understand, research, and implement the associated practices. SOAP’s unique process focuses on key areas commonly included in policies, like devices or travel security. Each section is preceded by a hypothetical—but common—security incident to help orient the questions within the context of a realistic threat."]
      }
    ],
    "security":[
      {
        "head":"How secure and private is it?",
        "img":"pic-security",
        "overview":"Your data is not sent anywhere; it exists only in your browser. It relies on Javascript to work, which may be relevant to your threat model.",
        "desc":["SOAP is a web app that works solely in your browser: no cookies or server-side processing is involved in building your policy. No IP addresses, web logs, or any text entered into the answer boxes is stored or sent back to the SOAP servers. A <a href='assets/SOAP-alphaReport.pdf' target='_blank'>report on SOAP's security</a> (alpha version) was carried out by SubGraph as part of OTF's Red Team program, and verified that \"SOAP is quite simple and has essentially no attack surface that's (realistically) exposed, at this time, to a third-party attacker.\" Like many websites, SOAP relies on Javascript to achieve its functionality, so it must be enabled in your browser for SOAP to work (hint: if you’re reading this, it’s already enabled). If your threat model means you can’t turn on Javascript, you can download the code (<a href='https://github.com/gembarrett/soap' target='_blank'>github.com/gembarrett/soap</a>) to run the tool in your own secure environment. Questions? Concerns? Email <a href='mailto:feedback@usesoap.app'>feedback@usesoap.app</a>"]
      }
    ],
    "background":[
      {
        "head":"What's behind the SOAP project?",
        "overview":"SOAP background",
        "desc":["SOAP was researched, designed, and built by Gem Barrett, with funding from the Open Technology Fund. The need for a program like SOAP became apparent through their work in online rapid response coordination. Many organizations need to meet a baseline level of security but for various reasons are prevented from having a policy that works for them. SOAP seeks to change that.","In developing SOAP, research was conducted to understand the frustrations faced and obstacles encountered by organizations when creating, implementing, and maintaining security policies. The findings of this research and accompanying interviews are shared in the report <a href='/assets/SecuringCivilSociety-report.pdf'>“Securing Civil Society”</a> (PDF currently available in English, other versions coming soon). These findings, coupled with research into organizational security best practices, helped create the methodology that forms the basis of SOAP’s innovative process."],
        "links":[
          {
            "name":"SAFETAG by Internews",
            "url":"https://safetag.org"
          },
          {
            "name": "Umbrella by Security First",
            "url": "https://secfirst.org/umbrella"
          },
          {
            "name": "LevelUp by Engine Room",
            "url":"https://www.level-up.cc"
          },
          {
            "name":"Security Planner by Citizen Lab",
            "url":"https://securityplanner.org"
          }
        ]
      }
    ],
    "future":[
      {
        "head":"What's planned for the SOAP project?",
        "desc":[
          {
            "text":"SOAP is currently in beta and the full launch is scheduled for March 2020. Here are a few of the new features currently being worked on:",
            "url":""
          },
          {
            "text":"Policy tone options - giving you the choice between the standard formal policy and a more informal list format.",
            "url":"https://github.com/gembarrett/soap/issues/22"
          },
          {
            "text":"Keyboard navigation - the aim with SOAP is to make security policy creation accessible to as many people as possible, including those who rely on keyboard navigation.",
            "url": "https://github.com/gembarrett/soap/issues/14"
          },
          {
            "text":"Additional language support - because folks who speak Spanish, Portuguese, Arabic, French and a host of other languages should be able to create a security policy in their own language.",
            "url":"https://github.com/gembarrett/soap/issues/45"
          },
          {
            "text":"More content areas - including questions covering travel and environmental security",
            "url":"https://github.com/gembarrett/soap/issues/48"
          }
        ]
      }
    ],
    "support":[
      {
        "head":"Can I help support this project?",
        "desc":["Thanks for asking! It’s true: SOAP takes a lot of time (and coffee!) to maintain. So if you’re interested in giving back and supporting the project, here are a few options:","Donations to fund SOAP’s upkeep can be made <a href='https://www.ko-fi.com/supportsoap'>here</a>", "Fluent in a language other than English? Email <a href='mailto:feedback@usesoap.app'>feedback(at)usesoap.app</a> with the languages you can translate to and we'll let you know how you can help translate SOAP and make it more accessible to non-English speakers","SOAP is an open-source project. Contributions to the code (Javascript, HTML or CSS) or documentation are always welcomed <a href='https://www.github.com/gembarrett/soap'>here</a>.", "Just want to say hi or ask a question? Have an idea for how SOAP could be improved? Email us at: <a href='mailto:feedback@usesoap.app'>feedback(at)usesoap.app</a>."]
      }
    ]
  }
]
