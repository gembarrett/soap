SOAP - the tool for building security policies
==============================

## What is SOAP

SOAP is a free, online security policy generator. The acronym stands for Securing Organizations with Automated Policymaking—reflecting the need to "clean up" standard organizational security policies, which all-too-often are unread, irrelevant, or ignored. Thanks to SOAP, organizations can now customize their own unique security policies. Say goodbye to the one-size-fits-all approaches of the past! And along the way, SOAP provides support and implementation tips to ensure the entire process is as easy as possible.

SOAP was researched, designed, and built by Gem Barrett, with funding from the Open Technology Fund. The need for a program like SOAP became apparent through their work in online rapid response coordination. Many organizations need to meet a baseline level of security but for various reasons are prevented from having a policy that works for them. SOAP seeks to change that.

## Using SOAP offline on your local computer
You have two options. You can either go to the [SOAP website](https://usesoap.app) and then disconnect from the internet once the page has loaded to continue using it offline.

Alternatively, if you plan to use it multiple times offline then you can use a simple local server pointed at the root of the downloaded repository. Here's instructions on how to do that (or you can [read the Mozilla directions here](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server)):
1. Download the SOAP repository. Go to the [GitHub page](https://github.com/gembarrett/soap) and click on the green button labelled 'Code'. If you're not familiar with the Clone options then click on Download ZIP.
2. [Unzip the downloaded ZIP](https://duckduckgo.com/?q=how+to+unzip+files), which should be named soap-main unless you selected a different branch to download. Ensure the folder is somewhere convenient for you to access as we will need to access it via the command line next.
3. Check if your computer has Python installed. First, [find and open your command line/terminal](https://duckduckgo.com/?q=where+to+find+your+command+line) and then type in ```python3 --version``` and press Enter. If you don't get a version number (e.g. "Python 3.8.6") in response, then try again with just ```python --version```. You will need to [install Python](https://duckduckgo.com/?t=canonical&q=how+to+install+python) (3 or above, ideally) on your computer to follow the rest of these directions, or use another method of running a local web server.
4. In your command prompt/terminal, [change directory](https://duckduckgo.com/?q=how+to+change+directory+in+command+line) to the root of the download SOAP folder. Alternatively, you may be able to right-click on a folder and select "Open in Terminal" or something similar, depending on your operating system. You can check you're in the right place by typing ```ls``` and pressing Enter; if the response includes README.md then you're doing fine.
5. Next, type ```python3 -m http.server``` and if you're using Python 2 then instead type ```python2 -m SimpleHTTPServer``` If you get an error about the port or address being busy or in use then add a four-digit number to the end, e.g. ```python3 -m http.server 8080```
6. If you're successful, you should see a message like ```Serving HTTP on 0.0.0.0 port 8000``` followed by a web address. You can open your browser and go to that web address or ```localhost:8000```. You're now able to use SOAP on your own computer anytime without internet connection. Remember to check the repository regularly for new and updated versions.
7. To stop the server, press Ctrl + C


## Hosting a version of SOAP
If you have difficulties accessing the SOAP website, it is possible to host your own version as an alternative. You can run SOAP on any web server that can fallback to index.html on "404 not found". SOAP is a single-page JavaScript application, and needs this fallback to support navigation with the History API.

To minimize the surface area for attack we recommend hosting your own SOAP instance on a fully-managed static hosting service. If you want to host SOAP on your own hardware/OS we recommend following all reasonable precautions in securing a public web server, including modern TLS profiles. Services such as Amazon S3 or GitHub Pages are options for self-hosting.


## FOLDER STRUCTURE

* **index.html**: sits at the root and is the place where all the JavaScript is injected
* **content**: holds all the text content for the site in JSON format
* **assets**: contains CSS files, images, report PDFs and JavaScript files
* **assets/js**: holds several files containing various feature-specific functions
* **assets/js/views**: files here direct the controller files to pull the data into the templates and serve it up for display. For example, views/questionsView.js calls on controllers/questionPage.js to get all the question data and plug it into templates/questionsTemplate.js
* **assets/js/controllers**: these files are instructed by their counterparts in the views folder to get all the data needed for that section and parcel it up ready for the corresponding template
* **assets/js/templates**: these files take the data provided and plug it into the appropriate HTML elements for serving back to the controller, who then renders it in the browser



## SUPPORT

If you’re interested in giving back and supporting the project, here are a few options:
* **Donations** to fund SOAP’s maintenance can be made at
[ko-fi.com/supportsoap](https://ko-fi.com/supportsoap)
* **Fluent in a language other than English?** Email feedback(at)usesoap.app with the language(s) you can help with and we'll let you know how you can get started with translating SOAP to make it more accessible to non-English speakers
* **SOAP is an open-source project**. Contributions to the code (JavaScript, HTML or CSS) or documentation are always welcomed on the [issues page](https://github.com/gembarrett/soap/issues)
* **Just want to say hi or ask a question?** Have an idea for how SOAP could be improved? Email us at: feedback(at)usesoap.app.

## BUGS

When you find issues, please report them via the following methods - be sure to include any output from the browser console if possible:

* **[GitHub Issues](https://github.com/gembarrett/soap/issues)**: there are templates set up to help you provide all the information needed
* **Email**: feedback at usesoap.app
