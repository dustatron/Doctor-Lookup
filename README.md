# _Doctor Look Up_

#### _This site will allow you to look up a doctor near you. | Feb 14th. 2020_

#### By _** Dusty McCord**_
[link to demo site coming](https://dustatron.github.io/webpack-boilerplate/)

## Description

This site was created as an Epicodus independent project. It uses the BetterDoctor API to find doctors near you. 

## Setup/Installation Requirements

_Make sure you have [git version control](https://git-scm.com/downloads) installed on your computer._

1. Find the green 'Clone or Download' button and copy the link
2. Open your terminal and type...

**Windows**
```sh 
cd desktop
```

 **Mac & linux** 
 ```sh
 cd ~/Desktop
 ```

 3. Then clone the repositor by typing:

```sh
git clone https://github.com/dustatron/Doctor-Lookup.git
```

4. Navigate to the new folder that was created by typing:
```sh
cd folder name
```

5. Now install all node packages by typing:
```sh
npm install
```
6. Get an API key from [BetterDoctor API](https://developer.betterdoctor.com/)

7.Get an API key from [OpenCage Geocoder](https://opencagedata.com/)

7. Create a new '.env' file by typing:
```sh
touch .env
```

8. Open the .env file in your test editor and add the following:
```sh
API_KEY = YOUR UNIQUE API KEY FOR BETTERDOCTOR API
GEO_API_KEY = YOUR OPENCAGE API HERE
```

9. Now run the development server
```sh
npm run start
```

10. Edit files in '/src' to make changes to the project.




## Specs
### Behavior Driven Development Spec List

Behavoir | Input | Output
:---------|:------:|:------:
|1 - A user will enter a medical issue and the program will return a listing of doctors near them. | 'couching' | return list of doctors |
|2 - A user will enter a name and the program will return a list of doctors. | McCord | return list of Doctors with the name McCord |
|3 - The program will return a list that includes first name, last name, address, phone number, website and whether or not the doctor is accepting new patients. | McCord | list with first name, last name, address, phone number, website and whether or not the doctor is accepting new patients
|4 - When the API returns an error the program will return a message stating the issue | API returns error | show error |
|5 - If the API returns no doctors the program should tell the user no Doctors where found | API returns an empty array | "We did not find any Doctors that fit your search criteria"


## Support 

_The software is provided as is. It might work as expected - or not. Use at your own risk._


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Simple Scaffolding
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used for interactivity in the page
* [jQuery](https://jquery.com/) - Used to interact with the DOM
* [Bootstrap 4.4](https://getbootstrap.com/) - Used for styling
* [webpack](https://webpack.js.org/)
* [Sass](https://sass-lang.com/)
* [ESLint](https://eslint.org/)
* [Node.js](https://nodejs.org/en/)
* [Uglifyjs](https://www.uglifyjs.net/)
* [Jest](https://jestjs.io/)
* [dotenv](#)
* [BetterDoctor API](https://developer.betterdoctor.com/)
* [OpenCage Geocoder](https://opencagedata.com/)

## Environmental Variables Basics

Make sure you have an '.env' in the top level of your project.
The syntax should look like this 
```sh
API_KEY = YOUR UNIQUE API KEY GOES HERE
OTHER_API_KEY = OTHER UNIQUE API KEY GOES HERE
```
Use this syntax in your query string:
```sh
'process.env.API_KEY'.
```

Example query string:

```javascript
const city = 'get city from user';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
```
Add this to your eslinter settings file under env:
```js
... 
"extends": "eslint:recommended",
"env": {
    "node": true //allows env api key
}
...
```

## Useful tools

* [Jest Cheat Sheets](https://devhints.io/jest)
* [Cheat Sheets](https://devhints.io/)

* [free icons @ icons8](https://icons8.com/)
* [free  icons @ fontawesome](https://fontawesome.com/)
---
* [Old School Gifs Search](https://gifcities.org/)
* [free images @ unsplash](https://unsplash.com/)
    * **_source.unsplash.com_ will return a random image at a desired size by simply calling the size after the url followed by a '?' and a keyword. Example below**

    * _https://source.unsplash.com/400x400/?cat_
    * http://unsplash.it/500/500 - This will just return a random image the size of 500x500
---
* [Flex-box Cheat Sheet](http://yoksel.github.io/flex-cheatsheet/)
* [CSS Grid Cheat Sheet](http://grid.malven.co/)
---
* [CSS Gradient BG Generator](https://mycolor.space/gradient)
* [CSS Basic Gradient Generator](https://cssgradient.io/)
---
* [CSS Dropshadow Generator](https://cssgenerator.org/box-shadow-css-generator.html)

* [git worktree](http://sangsoonam.github.io/2019/02/08/using-git-worktree-to-deploy-github-pages.html) 

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

Copyright (c) 2020 **_Dusty McCord_**

