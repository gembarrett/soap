var questions = [
  {
    "q":"Which of the following statements applies to your organisation?",
    "required":"true", // hide the Skip button if true
    "id":"q1",
    "answers":[
      { "type":"checkbox", "answerText":"Our staff participate in work-related travel.", "excludes":""},
      { "type":"checkbox", "answerText":"We provide laptops, phones and other devices to our staff.", "excludes":""},
      { "type":"checkbox", "answerText":"We are a remote organisation; we have at least one member of staff who works remotely.", "excludes":""}
    ],
    "tips":[ // hide the ? info button if these are all empty
      {"relevance":""},
      {"meaning":""},
      {"implementation":""},
      {"more":""}
    ],
    "policy-section":"", // hide Preview button if empty
    "appendix": [
      {
        "skipped":"false", //do not include on the "review checklist"
        "text":""
      }
    ]
  }
]
