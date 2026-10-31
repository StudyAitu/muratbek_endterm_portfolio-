# Developer Portfolio — Muratbek Ibrai

## Project Overview

This project is a responsive multi-page developer portfolio created as part of the Web Technologies: Front-End Development course at Astana IT University.

The portfolio presents my background, technical skills, academic experience and programming projects. The Endterm version extends the original website with interactive JavaScript functionality, DOM manipulation, form validation and jQuery features.

## Student Information

- **Student Name:** Muratbek Ibrai
- **Group:** SE-2529
- **Academic Track:** Software Engineering
- **Institution:** Astana IT University
- **Course:** Web Technologies: Front-End Development

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5.3.3
- JavaScript
- jQuery 3.7.1
- Local Storage

## Project Structure

```text
muratbek_endterm_portfolio/
│
├── index.html
├── about.html
├── projects.html
├── skills.html
├── experience.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
├── images/
│   ├── profile.svg
│   ├── project-algorithms.svg
│   ├── project-java.svg
│   ├── project-library.svg
│   └── skills-chart.svg
│
└── README.mdWebsite Pages
1. Home
- Introduction and portfolio overview.
- Navigation to all website sections.
- Summary of the portfolio features.
2. About
- Personal introduction.
- Educational background.
- Software engineering interests.
- Development principles.
3. Projects
- Dynamic project cards generated using JavaScript.
- Project search functionality.
- Category filtering.
- Favorites functionality.
- Project workflow section.
4. Skills
- Technical skills overview.
- Dynamic skill indicators.
- Skill category tabs.
- Programming, web development and development tools.
5. Experience
- Academic background.
- Programming coursework.
- Independent learning journey.
6. Contact
- Contact information.
- Interactive contact form.
- JavaScript form validation.
- Field-specific error messages.
- Success message after valid submission.
JavaScript Features
The Endterm version includes the following JavaScript functionality:
1. Arrays
Two main arrays are used:
- projects — stores project information, including titles, descriptions, categories, technologies and images.
- skills — stores technical skills, categories, descriptions and progress values.
2. Loops
The project uses different loop approaches:
- for...of — processes project data and counts project categories.
- forEach() — processes arrays of skills and page elements.
- map() — generates HTML elements from array data.
3. Reusable Functions
The project includes reusable functions such as:
- createProjectCard()
- getProjectCategorySummary()
- renderProjects()
- filterProjects()
- toggleFavorite()
- renderSkillBars()
- renderSkillDetails()
- validateEmail()
- validateContactForm()
- setTheme()
These functions help organize the code and reduce repetition.
4. DOM Manipulation
JavaScript dynamically changes website content and interface elements.

Examples include:
- Generating project cards.
- Updating project counters.
- Displaying filtered projects.
- Adding and removing favorite states.
- Updating skill information.
- Displaying validation messages.
- Changing website themes.
- Showing and hiding workflow information.
5. Event Handling
The website uses addEventListener() to respond to user actions.

Examples:
- click — buttons, favorites and theme switching.
- input — project search.
- change — category selection.
- submit — contact form validation.
- reset — clearing form messages.
- DOMContentLoaded — initializing website functionality.
The event object and preventDefault() are used when handling form submission.
6. Local Storage
Local Storage is used to save:
- Favorite projects.
- Selected website theme.
These settings remain available after refreshing the browser.
Form Validation
The contact form uses custom JavaScript validation.

The form checks:
- Full name must contain at least 2 characters.
- Email must have a valid format.
- A contact topic must be selected.
- Message must contain at least 10 characters.
- The user must confirm the demonstration form notice.
If validation fails, specific error messages appear near the corresponding fields.

If all fields are valid, a success message is displayed.

Note: This is a front-end demonstration form. It does not send messages to a server.
jQuery Features
jQuery is included through the official CDN.

The project demonstrates:
- ID and class selectors.
- DOM traversal using find() and closest().
- Event handling using on().
- Visual effects using slideToggle() and fadeTo().
- Dynamic CSS changes.
- Attribute and class manipulation.
These features improve interaction and usability.
Responsive Design
The website uses Bootstrap 5.3.3 and custom CSS.

Responsive features include:
- Bootstrap grid system.
- Responsive navigation.
- Flexible layouts.
- Mobile-friendly project cards.
- Responsive images.
- CSS media queries.
The website is designed to work on desktop, tablet and mobile screens.
How to Run the Project
1. Download or copy the project folder.
2. Open the project folder in Visual Studio Code or another code editor.
3. Make sure the folder structure is preserved.
4. Open index.html in a browser.
5. For the best development experience, use the Live Server extension in Visual Studio Code.
An internet connection is required to load Bootstrap and jQuery from their CDNs.
How to Test the Features
Projects Page
1. Open projects.html.
2. Enter a keyword in the search field.
3. Select a project category.
4. Click the Favorites button.
5. Add or remove projects from favorites.
6. Refresh the page to check whether favorites remain saved.
Skills Page
1. Open skills.html.
2. Select different skill categories.
3. Observe how the displayed skill cards change.
Theme Switcher
1. Click the Theme button in the navigation bar.
2. Switch between light and dark themes.
3. Refresh the page to verify that the selected theme is saved.
Contact Form
1. Open contact.html.
2. Submit the form with empty fields.
3. Check the validation messages.
4. Enter an invalid email address.
5. Enter a message shorter than 10 characters.
6. Complete all fields correctly.
7. Submit the form and check the success message.
jQuery Workflow
1. Open projects.html.
2. Find the workflow section.
3. Click the Show workflow button.
4. Observe the slide animation.
5. Click the button again to hide the content.
Testing and Quality Checks
The following areas should be checked before submission:
- All six HTML pages open correctly.
- Navigation links connect the pages.
- Bootstrap components work.
- Project search and filtering work.
- Favorites are saved in Local Storage.
- Theme selection is saved in Local Storage.
- Skill category buttons work.
- Contact form validation displays correct messages.
- jQuery effects work.
- Images load correctly.
- The website layout adapts to different screen sizes.
- Browser console does not contain errors.
Group Members
- Muratbek Ibrai — Software Engineering

Add the names and contributions of the other group members if this is a group submission.
Deployment
The project can be published using GitHub Pages or Netlify.

Deployment URL: Add the published website link here after deployment.
Conclusion
This Endterm project extends the original developer portfolio into a more interactive multi-page website.

It demonstrates practical knowledge of HTML5, CSS3, Bootstrap, JavaScript, DOM manipulation, event handling, form validation and jQuery.

The project helped develop skills in creating responsive interfaces, organizing JavaScript code, handling user interactions and improving website usability.

Student: Muratbek Ibrai
Group: SE-2529
Institution: Astana IT University
Course: Web Technologies: Front-End Development
Git hub pages:https://studyaitu.github.io/muratbek_endterm_portfolio-/
Git hub repository:https://github.com/StudyAitu/muratbek_endterm_portfolio-
