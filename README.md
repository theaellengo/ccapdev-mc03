# ccapdev-mc03
Mini Challenge 3 for CCAPDEV1920T2

## General Instructions
- READ THE INSTRUCTIONS FIRST BEFORE PROCEEDING!
- For any clarifications, ask your instructor

## Submission Details
- Fork this repository and submit the URL of the forked repository to AnimoSpace. If you know the internet will be slow, submit earlier to meet the deadline.

## Challenge Description
You are to create a web application which simulates an online phonebook.

When a client requests for the root path, i.e. `/`, the server should display `index.hbs`. Your web browser should display the screen below:
![alt text](https://github.com/arvention/ccapdev-mc03/blob/master/home.png "Index Page")

The web application accepts two inputs - a name and a number. When the user submits the form, the web application first checks if both fields are filled. Sample user input:
![alt text](https://github.com/arvention/ccapdev-mc03/blob/master/filled-form.png "Filled Form")

The web application then saves the values in the database, then display the values in `index.hbs`. Use `views/partials/card.hbs` to render the `<div>` for each contact. The picture below shows how the web application should display the values that we have entered earlier:
![alt text](https://github.com/arvention/ccapdev-mc03/blob/master/displayed-contact.png "Displayed Contact")

Note that the number should be unique for each contact - no two contacts may have the same number.

You are already provided with the skeleton code organized in MVC architecture. Your task is to study the code and complete the code of the following files:

