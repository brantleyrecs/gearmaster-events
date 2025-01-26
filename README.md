
# GearMaster Events
___
## Overview
### This is an app to help a production company set up an event with what is needed for that event.

[Wireframe](https://www.figma.com/file/E2emcWBy1POAPTlaUErdum/Untitled?type=design&node-id=0-1&mode=design&t=iYVHefe2fby53AXd-0)
[Project Board](https://github.com/users/brantleyrecs/projects/3)

## The User
### The user is a production company that needs to plan, prep, and setup an event and needs a better way to keep up with equipment.

## Features
### There is full CRUD on an event so you can Create, Read, Update, and Delete an event. You can create and read gear. Gear can be on many events and events can have many gear. You can also add a type to the event so you know what kind of event it is. 

## Screen Shot
![Screen Shot of App](https://github.com/brantleyrecs/gearmaster-events/assets/72366361/5d2f12c8-9296-4dcb-b334-5db919beb0ba)

[Loom Video](https://www.loom.com/share/0868a17b175d4b938a34c6e7acb9a4e4?sid=3ac8d7b5-485f-4926-8db0-94685df1794d)

## Contributor
### [Michael Brantley](https://github.com/brantleyrecs)

## Topics
- [Get Started](#getting-started)
- [Starting the Project](#starting-the-project)
___
## Getting Started
### Use Template
#### 1. To get started, click the GREEN "Use this Template" button at the top of the repo
<img width="915" alt="Screen Shot 2022-07-06 at 12 54 01 PM" src="https://user-images.githubusercontent.com/29741570/177612998-4aac9237-5a1e-4f13-8ae0-468587521564.png">

#### 2. Make sure YOUR github account is selected in the dropdown and name your project
<img width="763" alt="Screen Shot 2022-07-06 at 12 54 48 PM" src="https://user-images.githubusercontent.com/29741570/177613126-dd38f678-7553-4f27-8a4a-75680f14d71e.png">

#### 3. Clone your new repo to your local machine
#### 4. Go to the **NEXT** section

## Starting the Project
1. Create a Firebase project and set up authentication. Use [these videos](https://vimeo.com/showcase/codetracker-firebase) as a refresher if needed.
1. Create a `.env` file at the root of the project
1. Copy/Paste the contents of the `.env.sample` file to your newly created `.env` file.
1. Copy over all of your Firebase values into the `.env` file.
1. Open the `package.json` file and change the `name` property to the name of your application, and `author` to  your name.
1. From your command line, be in the root directory and run `npm install` OR `npm i` for short.
1. Next, run `npm run prepare`. This command sets up husky to track eslint errors on commit that will make your deploy fail on Netlify.
1. To start your application, run `npm run dev`. THIS IS THE COMMAND YOU WILL USE TO RUN YOUR DEVELOPMENT SERVER FROM NOW ON.
1. Open [http://localhost:3000](http://localhost:3000) with your browser.
   

### If you see this, you are set to go!
<img width="450" alt="Screen Shot 2022-07-06 at 1 07 27 PM" src="https://user-images.githubusercontent.com/29741570/177615077-9b6a75bc-0260-4d29-bb88-bd95a3140687.png">

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

**NOTES:** 
- If you see the following error, you did not follow all the setup steps correctly and failed to add your Firebase creds. Go back and do that NOW.

<img width="1043" alt="Screen Shot 2022-07-06 at 11 18 45 AM" src="https://user-images.githubusercontent.com/29741570/177612501-c2628f18-4bbd-4de9-aae6-27ffba1172d6.png">
        
## Learn More about Next.js
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

- 
