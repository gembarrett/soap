SOAP - the tool for building security policies
==============================

## SYNOPSIS

SOAP is a free, online security policy generator. The acronym stands for Securing Organizations with Automated Policymaking—reflecting the need to "clean up" standard organizational security policies, which all-too-often are unread, irrelevant, or ignored. Thanks to SOAP, organizations can now customize their own unique security policies. Say goodbye to the one-size-fits-all approaches of the past! And along the way, SOAP provides support and implementation tips to ensure the entire process is as easy as possible.

SOAP was researched, designed, and built by Gem Barrett, with funding from the Open Technology Fund. The need for a program like SOAP became apparent through their work in online rapid response coordination. Many organizations need to meet a baseline level of security but for various reasons are prevented from having a policy that works for them. SOAP seeks to change that.

In developing SOAP, research was conducted to understand the frustrations faced and obstacles encountered by organizations when creating, implementing, and maintaining security policies. The findings of this research and accompanying interviews are shared in the report [“Securing Civil Society”](https://usesoap.app/assets/SecuringCivilSociety-report.pdf) (PDF currently available in English, other versions coming soon). These findings, coupled with research into organizational security best practices, helped create the methodology that forms the basis of SOAP’s innovative process.

## Run SOAP locally (quick demo only)

1. python -m server.py
1. open browser to: http://localhost:8000/

## Run your own SOAP

You can run SOAP on any web server that can fallback to index.html on 404 not found. SOAP is a single-page Javascript application, and needs this fallback to support navigation with the History API.

To minimize the surface area for attack we recommend hosting your own SOAP instance on a fully-managed static hosting service. If you want to host SOAP on your own hardware/OS we recommend following all reasonable precautions in securing a public web server, including modern TLS profiles. Services such as Amazon S3 or GitHub Pages are options for self-hosting.

## FOLDER STRUCTURE

* **index.html**: sits at the root and is the place where all the Javascript is injected
* **content**: holds all the text content for the site in JSON format
* **assets**: contains CSS files, images, report PDFs and Javascript files
* **assets/js**: holds several files containing various feature-specific functions
* **assets/js/views**: files here direct the controller files to pull the data into the templates and serve it up for display. For example, views/questionsView.js calls on controllers/questionPage.js to get all the question data and plug it into templates/questionsTemplate.js
* **assets/js/controllers**: these files are instructed by their counterparts in the views folder to get all the data needed for that section and parcel it up ready for the corresponding template
* **assets/js/templates**: these files take the data provided and plug it into the appropriate HTML elements for serving back to the controller, who then renders it in the browser



## SUPPORT

Thanks for asking! It’s true: SOAP takes a lot of time (and coffee!) to maintain. So if you’re interested in giving back and supporting the project, here are a few options:
* **Donations** to fund SOAP’s maintenance can be made at
[ko-fi.com/supportsoap](https://ko-fi.com/supportsoap)
* **Fluent in a language other than English?** Email feedback(at)usesoap.app with the language(s) you can help with and we'll let you know how you can get started with translating SOAP to make it more accessible to non-English speakers
* **SOAP is an open-source project**. Contributions to the code (Javascript, HTML or CSS) or documentation are always welcomed on the [issues page](https://github.com/gembarrett/soap/issues)
* **Just want to say hi or ask a question?** Have an idea for how SOAP could be improved? Email us at: feedback(at)usesoap.app.

## BUGS

When you find issues, please report them via the following methods - be sure to include any output from the browser console if possible:

* **[GitHub Issues](https://github.com/gembarrett/soap/issues)**: there are templates set up to help you provide all the information needed
* **Email**: feedback at usesoap.app
