# enCapsulate

### [Deployed Link](https://encapsulate.herokuapp.com/)

## Table of Contents:

* [Description](#description)
* [Installing](#installing)
* [Usage](#usage)
* [Testing](#testing)

## Description

A clothing-capsule ecommerce site with a sleek, modern interface.

## Installing

The npm packages used for this are as follows:

Stack:
* *MongoDB*: for the database
* *Express*: for the server
* *React*: for the front-end
* *Node*: for literally everything else

Libraries:
* *express-session*: for session storage
* *mongoose*: for the schema
* *dotenv*: to protect environment variables
* *bcrypt*: for password encryption
* *react-router*: for page routing
* *stripe*: to handle user payments

Use `npm i` to install all of them at once if you have cloned the repo, or use the Heroku link for the ready-to-use live version.

## Usage

Upon entering the site, sign-up. You will automatically be redirected to the Seasons page, which contains a card view of capsules for each season. You can add your selection to your cart and navigate to the checkout page to purchase your items. Once there, you will be able to click a button for redirection to stripe for payment handling. Upon filling out the form, you will be brought back to the homepage of the site. From there, you can navigate to Accessories, which is currently stocked with swanky shoes and the same functionality as the Seasons page.  

## Testing

Robo3T was employed for DB testing. Insomnia helped with routing requests. 
