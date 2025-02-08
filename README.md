# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Alyssa Leung**


## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- https://www.w3schools.com/js/js_random.asp
- https://flexboxfroggy.com
- https://www.w3schools.com/js/js_arrays.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

One challenge I encountered while creating this project was when my Replit project exceeded the developing time limit before I was finished with my project. I did not wish to purchase the premium version of Replit and decided to use the lightweight version of VSCode on vscode.dev. When testing the files on VSCode, it noticed that the project was not working as originally intended. When clicking the start button there was a connection error, and the CSS was not loading and I could only see the HTML I originally wrote. Upon coming across this problem, I knew what was wrong – the CSS file and JavaScript file weren’t correctly linking to the HTML file. I checked my syntax for linking HTML, JS, and CSS files (which were correct), and even learned more about the difference in environments from Replit and VSCode. Eventually, I decided to test my project on the Google Chrome browser (I was using Safari at the time) and my project worked! It turns out that Safari was not updated to the latest version – leading to VSCode not loading properly on this browser. 

From this problem, I learned a lot about the variety of programming environments, including how different browsers interpret JavaScript and CSS, and the importance of keeping software updated to be compatible on multiple machines and browsers. I also learned more about methodical troubleshooting. While the process is similar to looking for a bug in written code, the scope of issues goes beyond a syntax error and was initially very overwhelming to manage since I am used to programming in one familiar environment. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

One question I have about web development is what are the advantages of using other frameworks like React or Vue? Additionally, what are the trade-offs between using a lightweight setup like VSCode EDU versus the full IDE?

Another question I have involves the security of web applications. While developing this project, I was not required to provide a way to authenticate users to save their gameplay, however in a real-world scenario, how do developers ensure security against a variety of attacks? This is a problem that goes beyond the small Javascript and HTML files I edited, and brings up the topic of securing websites from SQL injections, buffer overflow attacks, and HTML injections.

Finally, I am also interested in how to optimize the performance and search through larger databases. In this small-scale project, I decided to use an array of size three to keep track of the top 3 scores from the current session. This was very straightforward, however when dealing with millions of records, how would I keep track of and sort through these the most efficiently? Would this algorithm be done strictly in Javascript or another location entirely?

I would love to explore these topics in more depth to improve my understanding of the real-world applications of how these web applications handle various security issues and performance challenges.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, I would focus on integrating a database to store users’ scores persistently. This would involve setting up a back-end system with a database like MongoDB or SQL, depending on the project requirements. I’d create API endpoints to handle user score submissions and retrievals, ensuring that the scores are saved after the page reloads. 

I would also create a way to display and update the leaderboard dynamically. This would involve sorting the highest scores each time a user clicks a button. Aside from this, I would like to improve upon the design of the game. Unfortunately, I am not very skilled in CSS, however I see it as a field that I can make great improvements in. I would add CSS animations to make the game feel more interactive to users, as well as change the style of the buttons to reflect more on the classic Simon Says game by Hasbro.
With these improvements, the game would be more polished and engaging for users virtually and systematically.


## Video Walkthrough 

Add your screen recordings for specified implemented features here:

[losing screen recording](https://www.loom.com/share/f1496bca22c149e4a9505c376e05e682?sid=23a101df-1646-477d-9149-ad71c99b714a)

[winning screen recording](https://www.loom.com/share/f61cf43dee444e6eb88b7a336efb9cfb?sid=5378fced-51b4-4a29-ac79-85538bddc972)

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/0875348af6a6439380ce1c3fb185713c?sid=04769219-1e2b-4496-89ed-c1785521a5c3)


## License

    Copyright Alyssa Leung

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
