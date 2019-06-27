// To do:
// - validate input, inc. radio button selection
// - arrangement of textboxes alongside text
// - show preview of policy
// - provide policy at end
// - add more questions
// - add a progress visual
// - what happens at the end of question queue?

## when user hits skip button
// var skipButton = document.getElementById('skip')
// onclick skipButton
// get question.id
// add question.id to checklist array
// at end, use question id to find question.q

## on load of each question
### function hide skip button if question is optional
// var skipButton = document.getElementById('skip')
// if required === true/y
// remove skipButton
// else if skipButton is hidden
// show skipButton
// else return

### function hide preview button if no policy text available for it
// var previewButton = document.getElementById('preview')
// if policySection === ""
// remove previewButton
// else if previewButton is hidden
// show previewButton
// else return

### function user hits next button
// var nextButton = document.getElementById('next')
// onclick nextButton
// validate the answer
// push the answer to the policyRefs along with the question id
// push the relevant policy text to the policyText array
// compare the list of excluded questions with the question queue
// remove any excluded questions from the queue


// each section has a startung scenario and several related questions
// the answers to each question will hide/show questions in other sections
// the questions should all be shown by default, then removed from the queue as necessary
// so if scenario 1, question 2 is answered negatively then scenario 3, question 4 should not be shown
// having the content in sections means the logic for each could also be split into separate files
