# <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=24&duration=1&pause=1&color=EB008B&center=true&vCenter=true&repeat=false&width=310&height=40&lines=COUNTRIES+STATES+CITIES" alt="COUNTRIES STATES CITIES" />

<!-- repository summary badges start -->
<div>
    <img alt="GitHub contributors badge" src="https://img.shields.io/github/contributors/montasim/countries-states-cities?labelColor=EB008B&color=00B8B5">
    <img alt="GitHub language count badge" src="https://img.shields.io/github/languages/count/montasim/countries-states-cities?labelColor=EB008B&color=00B8B5"/>
    <img alt="GitHub top language badge" src="https://img.shields.io/github/languages/top/montasim/countries-states-cities?labelColor=EB008B&color=00B8B5">
    <img alt="GitHub code size badge" src="https://img.shields.io/github/languages/code-size/montasim/countries-states-cities?labelColor=EB008B&color=00B8B5">
    <img alt="GitHub repo size badge" src="https://img.shields.io/github/repo-size/montasim/countries-states-cities?labelColor=EB008B&color=00B8B5">
    <img alt="GitHub file count badge" src="https://img.shields.io/github/directory-file-count/montasim/countries-states-cities?labelColor=EB008B&color=00B8B5">
    <img alt="GitHub open issues badge" src="https://img.shields.io/github/issues-raw/montasim/countries-states-cities?labelColor=EB008B&color=00B8B5">
    <img alt="GitHub closed issues badge" src="https://img.shields.io/github/issues-closed-raw/montasim/countries-states-cities?labelColor=EB008B&color=00B8B5">
    <img alt="GitHub open pull requests badge" src="https://img.shields.io/github/issues-pr-raw/montasim/countries-states-cities?labelColor=EB008B&color=00B8B5">
    <img alt="GitHub closed pull requests badge" src="https://img.shields.io/github/issues-pr-closed-raw/montasim/countries-states-cities?labelColor=EB008B&color=00B8B5">
    <img alt="GitHub active milestones badge" src="https://img.shields.io/github/milestones/open/montasim/countries-states-cities?labelColor=EB008B&color=00B8B5">
    <img alt="GitHub completed milestones badge" src="https://img.shields.io/github/milestones/closed/montasim/countries-states-cities?labelColor=EB008B&color=00B8B5">
    <img alt="GitHub license badge" src="https://img.shields.io/github/license/montasim/countries-states-cities?labelColor=EB008B&color=00B8B5">
    <img alt="GitHub last commit badge" src="https://img.shields.io/github/last-commit/montasim/countries-states-cities?labelColor=EB008B&color=00B8B5">
    <img alt="GitHub Discussions badge" src="https://img.shields.io/github/discussions/montasim/countries-states-cities?labelColor=EB008B&color=00B8B5">
</div>
<!-- repository summary badges end -->


<br/>

🌍 World countries, states, regions, provinces, cities, and towns api. All Countries, States, Cities with ISO2, ISO3, Country Code, Phone Code, Capital, Native Language, Time zones, Latitude, Longitude, Region, Subregion, Flag Emoji, and Currency.


<br/>

## <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=20&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=120&height=40&lines=CONTENTS:" alt="CONTENTS:" />

-   [FEATURES](#features)
-   [PREREQUISITES](#prerequisites)
-   [SETUP](#setup)
-   [RUNNING THE SCRIPT](#running-the-script)
-   [ERROR HANDLING](#error-handling)
-   [HOSTING](#hosting)
-   [TOOLS](#tools)
-   [ARTICLES](#articles)
-   [DO NOT FORGET TO DO](#do-not-forget-to-do)
-   [TUTORIALS](#tutorials)
-   [INSPIRATIONS](#inspirations)
-   [SPETIAL THANKS](#special-thanks)
-   [CONTRIBUTE](#contribute)
-   [CONTRIBUTORS](#contributors)
-   [SPECIAL THANKS](#special-thanks)
-   [LICENSE](#license)
-   [CONTACT](#contact)

<br/>

## <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=20&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=100&height=40&lines=FEATURES" alt="FEATURES" id="features" />

1. ### Get a list of Countries

   GET: https://countries-states-cities.vercel.app/api/v1/countries
   
   - ### Request Parameters
   
      No parameters
   
   - ### Example Success Response

      ```json
      {
         "timeStamp": "2024-07-24T14:58:55.767Z",
         "success": true,
         "data": [
         {
            "_id": "66962e25e7dec94bff9a9ba9",
            "id": 19,
            "name": "Bangladesh",
            "iso3": "BGD",
            "iso2": "BD",
            "numeric_code": "050",
            "phone_code": "880",
            "capital": "Dhaka",
            "currency": "BDT",
            "currency_name": "Bangladeshi taka",
            "currency_symbol": "৳",
            "tld": ".bd",
            "native": "Bangladesh",
            "region": "Asia",
            "region_id": "3",
            "subregion": "Southern Asia",
            "subregion_id": "14",
            "nationality": "Bangladeshi",
            "timezones": [
               {
               "zoneName": "Asia/Dhaka",
               "gmtOffset": 21600,
               "gmtOffsetName": "UTC+06:00",
               "abbreviation": "BDT",
               "tzName": "Bangladesh Standard Time"
               }
            ],
            "translations": {
               "kr": "방글라데시",
               "pt-BR": "Bangladesh",
               "pt": "Bangladeche",
               "nl": "Bangladesh",
               "hr": "Bangladeš",
               "fa": "بنگلادش",
               "de": "Bangladesch",
               "es": "Bangladesh",
               "fr": "Bangladesh",
               "ja": "バングラデシュ",
               "it": "Bangladesh",
               "cn": "孟加拉",
               "tr": "Bangladeş"
            },
            "latitude": "24.00000000",
            "longitude": "90.00000000",
            "emoji": "🇧🇩",
            "emojiU": "U+1F1E7 U+1F1E9"
            },
         ...
         ],
         "message": "Successfully retrieved countries matching criteria.",
         "status": 200,
         "route": "/api/v1/countries"
      }
     ```

2. ### Get country details from ISO2 code

   GET: https://countries-states-cities.vercel.app/api/v1/countries/[ciso]
   
   - ### Request Parameters
   
      <table align="center">
       <thead align="center">
           <tr>
               <th>
                   Name
               </th>
               <th>
                   Located in
               </th>
               <th>
                   Description
               </th>
               <th>
                   Required
               </th>
               <th>
                   Type
               </th>
           </tr>
           <tr>
               <td>
                   [ciso]
               </td>
               <td>
                   URL
               </td>
               <td>
                   ISO2 Code of Country
               </td>
               <td>
                   required
               </td>
               <td>
                   string
               </td>
           </tr>
       </thead>
   </table>
   
   - ### Example Success Response

      ```json
      {
         "timeStamp": "2024-07-24T14:58:55.767Z",
         "success": true,
         "data": {
            "_id": "66962e25e7dec94bff9a9ba9",
            "id": 19,
            "name": "Bangladesh",
            "iso3": "BGD",
            "iso2": "BD",
            "numeric_code": "050",
            "phone_code": "880",
            "capital": "Dhaka",
            "currency": "BDT",
            "currency_name": "Bangladeshi taka",
            "currency_symbol": "৳",
            "tld": ".bd",
            "native": "Bangladesh",
            "region": "Asia",
            "region_id": "3",
            "subregion": "Southern Asia",
            "subregion_id": "14",
            "nationality": "Bangladeshi",
            "timezones": [
               {
               "zoneName": "Asia/Dhaka",
               "gmtOffset": 21600,
               "gmtOffsetName": "UTC+06:00",
               "abbreviation": "BDT",
               "tzName": "Bangladesh Standard Time"
               }
            ],
            "translations": {
               "kr": "방글라데시",
               "pt-BR": "Bangladesh",
               "pt": "Bangladeche",
               "nl": "Bangladesh",
               "hr": "Bangladeš",
               "fa": "بنگلادش",
               "de": "Bangladesch",
               "es": "Bangladesh",
               "fr": "Bangladesh",
               "ja": "バングラデシュ",
               "it": "Bangladesh",
               "cn": "孟加拉",
               "tr": "Bangladeş"
            },
            "latitude": "24.00000000",
            "longitude": "90.00000000",
            "emoji": "🇧🇩",
            "emojiU": "U+1F1E7 U+1F1E9"
         },
         "message": "Successfully retrieved the country.",
         "status": 200,
         "route": "/api/v1/countries/BD"
      }
     ```


3. ### Get a list of States

   GET: https://countries-states-cities.vercel.app/api/v1/states
   
   - ### Request Parameters
   
      No parameters
   
   - ### Example Success Response

      ```json
      {
         "timeStamp": "2024-07-24T14:58:55.767Z",
         "success": true,
         "data": [
            {
               "_id": "66962e1ae7dec94bff9a891d",
               "id": 759,
               "name": "Rangpur District",
               "country_id": 19,
               "country_code": "BD",
               "country_name": "Bangladesh",
               "state_code": "55",
               "type": "district",
               "latitude": "25.74679250",
               "longitude": "89.25083350"
            },
            ...
         ],
         "message": "Successfully retrieved states matching criteria.",
         "status": 200,
         "route": "/api/v1/states"
      }
     ```

4. ### Get a list of States within country

   GET: https://countries-states-cities.vercel.app/api/v1/countries/[ciso]/states
   
   - ### Request Parameters

      <table align="center">
       <thead align="center">
           <tr>
               <th>
                   Name
               </th>
               <th>
                   Located in
               </th>
               <th>
                   Description
               </th>
               <th>
                   Required
               </th>
               <th>
                   Type
               </th>
           </tr>
           <tr>
               <td>
                   [ciso]
               </td>
               <td>
                   URL
               </td>
               <td>
                   ISO2 Code of Country
               </td>
               <td>
                   required
               </td>
               <td>
                   string
               </td>
           </tr>
       </thead>
   </table>
   
   - ### Example Success Response
   
      ```json
      {
         "timeStamp": "2024-07-24T14:58:55.767Z",
         "success": true,
         "data": [
         {
         "_id": "66962e1ae7dec94bff9a891d",
         "id": 759,
         "name": "Rangpur District",
         "country_id": 19,
         "country_code": "BD",
         "country_name": "Bangladesh",
         "state_code": "55",
         "type": "district",
         "latitude": "25.74679250",
         "longitude": "89.25083350"
         },
         ...
         ],
         "message": "Successfully retrieved the state.",
         "status": 200,
         "route": "/api/v1/countries/BD/states"
      }
      ```


5. ### Get the state details from ISO2 Code

   GET: https://countries-states-cities.vercel.app/api/v1/countries/[ciso]/states/[siso]
   
   - ### Request Parameters

      <table align="center">
       <thead align="center">
           <tr>
               <th>
                   Name
               </th>
               <th>
                   Located in
               </th>
               <th>
                   Description
               </th>
               <th>
                   Required
               </th>
               <th>
                   Type
               </th>
           </tr>
           <tr>
               <td>
                   [ciso]
               </td>
               <td>
                   URL
               </td>
               <td>
                   ISO2 Code of Country
               </td>
               <td>
                   required
               </td>
               <td>
                   string
               </td>
           </tr>
           <tr>
               <td>
                   [siso]
               </td>
               <td>
                   URL
               </td>
               <td>
                   ISO2 Code of State
               </td>
               <td>
                   required
               </td>
               <td>
                   string
               </td>
           </tr>
       </thead>
   </table>
   
   - ### Example Success Response
   
      ```json
      {
         "timeStamp": "2024-07-24T14:58:55.767Z",
         "success": true,
         "data": {
            "_id": "66962e1ae7dec94bff9a891d",
            "id": 759,
            "name": "Rangpur District",
            "country_id": 19,
            "country_code": "BD",
            "country_name": "Bangladesh",
            "state_code": "55",
            "type": "district",
            "latitude": "25.74679250",
            "longitude": "89.25083350"
         },
         "message": "Successfully retrieved the state.",
         "status": 200,
         "route": "/api/v1/countries/BD/states/55"
      }
      ```


6. ### Get the list of cities in a state

   GET: https://countries-states-cities.vercel.app/api/v1/countries/[ciso]/states/[siso]/cities
   
   - ### Request Parameters

      <table align="center">
       <thead align="center">
           <tr>
               <th>
                   Name
               </th>
               <th>
                   Located in
               </th>
               <th>
                   Description
               </th>
               <th>
                   Required
               </th>
               <th>
                   Type
               </th>
           </tr>
           <tr>
               <td>
                   [ciso]
               </td>
               <td>
                   URL
               </td>
               <td>
                   ISO2 Code of Country
               </td>
               <td>
                   required
               </td>
               <td>
                   string
               </td>
           </tr>
           <tr>
               <td>
                   [siso]
               </td>
               <td>
                   URL
               </td>
               <td>
                   ISO2 Code of State
               </td>
               <td>
                   required
               </td>
               <td>
                   string
               </td>
           </tr>
       </thead>
   </table>
   
   - ### Example Success Response
   
      ```json
      {
         "timeStamp": "2024-07-24T14:58:55.767Z",
         "success": true,
         "data": [
            {
               "_id": "66962e33e7dec94bff9abe90",
               "id": 8577,
               "name": "Rangpur",
               "state_id": 759,
               "state_code": "55",
               "state_name": "Rangpur District",
               "country_id": 19,
               "country_code": "BD",
               "country_name": "Bangladesh",
               "latitude": "25.73333000",
               "longitude": "89.25000000",
               "wikiDataId": "Q2344570"
            },
            ...
         ], 
         "message": "Successfully retrieved the cities.",
         "status": 200,
         "route": "/api/v1/countries/BD/states/55/cities"
      }
      ```


7. ### Get a list of Cities within country

   GET: https://countries-states-cities.vercel.app/api/v1/countries/[ciso]/cities
   
   - ### Request Parameters

      <table align="center">
       <thead align="center">
           <tr>
               <th>
                   Name
               </th>
               <th>
                   Located in
               </th>
               <th>
                   Description
               </th>
               <th>
                   Required
               </th>
               <th>
                   Type
               </th>
           </tr>
           <tr>
               <td>
                   [ciso]
               </td>
               <td>
                   URL
               </td>
               <td>
                   ISO2 Code of Country
               </td>
               <td>
                   required
               </td>
               <td>
                   string
               </td>
           </tr>
       </thead>
   </table>
   
   - ### Example Success Response
   
      ```json
      {
         "timeStamp": "2024-07-24T14:58:55.767Z",
         "success": true,
         "data": [
            {
               "_id": "66962e33e7dec94bff9abe90",
               "id": 8577,
               "name": "Rangpur",
               "state_id": 759,
               "state_code": "55",
               "state_name": "Rangpur District",
               "country_id": 19,
               "country_code": "BD",
               "country_name": "Bangladesh",
               "latitude": "25.73333000",
               "longitude": "89.25000000",
               "wikiDataId": "Q2344570"
            },
            ...
         ], 
         "message": "Successfully retrieved the cities.",
         "status": 200,
         "route": "/api/v1/countries/BD/cities"
      }
      ```

<br/>

## <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=20&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=148&height=40&lines=PREREQUISITES" alt="PREREQUISITES" id="prerequisites" />

1. Node.js (v20.x or higher)
2. Yarn (v1.22.x or higher)

Ensure you have `Node.js` and `Yarn` installed by running `node -v` and `yarn -v` in your terminal. These commands will display the current version of each installed on your system. If these are not installed, follow the installation instructions on the [Node.js website](https://nodejs.org/) and the [Yarn website](https://classic.yarnpkg.com/en/).

<br/>

## <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=20&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=60&height=40&lines=SETUP" alt="SETUP" id="setup" />

1. **Clone the repository and navigate to the directory:**

    ```bash
    git clone https://github.com/montasim/countries-states-cities.git
    cd countries-states-cities
    ```

2. **Install the dependencies:**

    ```bash
    yarn install
    ```

3. **Configuring the Environment:**

    Create a `.env.development` or `.env.staging` or `.env.production` file in the root directory of the project and populate it with the necessary environment variables. See the [.env.example](.env.example) file for an example.

<br/>

## <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=20&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=208&height=40&lines=RUNNING+THE+SCRIPT" alt="RUNNING THE SCRIPT" id="running-the-script" />

1. **Running the Application:**

    To start the application in development mode, use:

    ```bash
    yarn dev
    ```

    This will run the server with nodemon, automatically restarting when any changes are made.

2. **To build and run the application in production mode, use:**

    ```bash
    yarn start
    ```

    This will build the application and start the server using the built files.

    This script first builds the project by linting the code, fixing lint issues, running prettier, and then starts the application with pm2.

3. **Testing:**

    To run the tests configured with Jest, use:

    ```bash
    yarn test
    ```

    This will build the project and then run all the Jest tests.

4. **Linting and Code Formatting:**

    - To check for linting errors:

        ```bash
        yarn lint:check
        ```

    - To fix linting errors:

        ```bash
        yarn lint:fix
        ```

    - To check if files are formatted correctly:

        ```bash
        yarn prettier:check
        ```

    - To format files:

        ```bash
        yarn prettier:fix
        ```

5. **Generating Documentation:**

    To generate code documentation with JSDoc, run:

    ```bash
    yarn generate-docs
    ```

    This will create documentation based on your JSDoc comments.

6. **Release Management:**

    To create a new release, you can use:

    ```bash
    yarn release
    ```

    This will automatically bump the version, update the CHANGELOG, and create a commit and a tag.

    For minor or major releases:

    ```bash
    yarn release:minor
    yarn release:major
    ```

7. **Cleanup:**

    To clean up dependencies and rebuild the project:

    ```bash
    yarn clean
    ```

    This command initializes the auto cleanup process and then forces a rebuild.
    <br/>

## <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=20&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=170&height=40&lines=ERROR+HANDLING" alt="ERROR HANDLING" id="error-handling" />

<br/>

## <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=20&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=90&height=40&lines=HOSTING" alt="HOSTING" id="hosting" />

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/montasim/countries-states-cities)

<details>
    <summary>
        Step-by-step guide on setting up your own Vercel instance:
    </summary>

Vercel is the recommended option for hosting the files since it is free and easy to set up.

1.  Go to [vercel.com](https://vercel.com/).
2.  Click on `Log in`.
    ![Login page](https://files.catbox.moe/qwqrjn.png)
3.  Sign in with GitHub by pressing `Continue with GitHub`.
    ![Sign in with GitHub](https://files.catbox.moe/18vwjq.png)
4.  Sign in to GitHub and allow access to all repositories if prompted.
5.  [Fork this repo.](https://github.com/montasim/countries-states-cities/fork)
6.  Go back to your [Vercel dashboard](https://vercel.com/dashboard).
7.  To import a project, click the `Add New...` button and select the `Project` option.
    ![Add new project](https://files.catbox.moe/h1a87z.png)
8.  Click the `Continue with GitHub` button, search for the required Git Repository and import it by clicking the `Import` button. Alternatively, you can import a Third-Party Git Repository using the `Import Third-Party Git Repository ->` link at the bottom of the page.
    ![Select GitHub project](https://files.catbox.moe/92nfhb.png)
9.  Create a personal access token (PAT) [here](https://github.com/settings/tokens/new) and enable the `repo` and `user` permissions (this allows access to see private repo and user stats).
10. Copy all the .env.development file as environment variables in the Vercel dashboard.
11. Click deploy, and you're good to go. See your domains to use the API!
</details>

<br/>

## <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=20&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=65&height=40&lines=TOOLS" alt="TOOLS" id="tools" />

1. [WebStorm](https://www.jetbrains.com/webstorm/)
2. [Postman](https://www.postman.com/)
3. [Swagify.io](https://swagify.io/convert/)

<br/>

## <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=20&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=95&height=40&lines=ARTICLES" alt="ARTICLES" id="articles" />

<br/>

## <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=20&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=230&height=40&lines=DO+NOT+FORGET+TO+DO" alt="DO NOT FORGET TO DO" id="do-not-forget-to-do" />

<br/>

## <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=20&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=110&height=40&lines=TUTORIALS" alt="TUTORIALS" id="tutorials" />

<br/>

## <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=20&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=140&height=40&lines=INSPIRATIONS" alt="INSPIRATIONS" id="inspirations" />

[https://countrystatecity.in/](https://countrystatecity.in/)

<br/>

## <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=20&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=165&height=40&lines=SPETIAL+THANKS" alt="SPETIAL THANKS" id="special-thanks" />

[github.com/dr5hn/countries-states-cities-database](https://github.com/dr5hn/countries-states-cities-database) - For the countries, states, cities data.

<br/>

## <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=20&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=125&height=40&lines=CONTRIBUTE" alt="CONTRIBUTE" id="contribute" />

Contributions are always welcome!
Please read the [contribution guidelines](CONTRIBUTION.md) first.

<br/>

## <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=20&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=160&height=40&lines=CONTRIBUTORS" alt="CONTRIBUTORS" id="contributors" />

<img loading="lazy" src="https://badges.pufler.dev/contributors/montasim/countries-states-cities?size=50&padding=5&perRow=10&bots=true" alt="contributors" />

<br/>

## <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=20&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=168&height=40&lines=SPECIAL+THANKS" alt="SPECIAL THANKS" id="special-thanks" />

<br/>

## <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=20&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=78&height=40&lines=LICENSE" alt="LICENSE" id="license" />

[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)

<br/>

## <img loading="lazy" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=20&duration=1&pause=1&color=00B8B5&center=true&vCenter=true&repeat=false&width=100&height=40&lines=CONTACT" alt="CONTACT" id="contact" />

<!-- social media links start -->
<table align="center">
    <thead align="center">
        <tr>
            <th>
                <a href="https://www.linkedin.com/in/montasim" target="_blank" rel="noopener noreferrer" title="linkedin.com/in/montasim">
                    <img loading="lazy" alt="linkedin icon" src="https://cdn.simpleicons.org/linkedin/EB008B" width="35px">
                </a>
            </th>
            <th>
                <a href="https://www.github.com/montasim" target="_blank" rel="noopener noreferrer" title="github.com/montasim">
                    <img loading="lazy" alt="github icon" src="https://cdn.simpleicons.org/github/EB008B" width="35px">
                </a>
            </th>
            <th>
                <a href="https://stackoverflow.com/users/20348607/montasim" target="_blank" rel="noopener noreferrer" title="stackoverflow.com/users/20348607/montasim">
                    <img loading="lazy" alt="github icon" src="https://cdn.simpleicons.org/stackoverflow/EB008B" width="35px">
                </a>
            </th>
            <th>
                <a href="https://montasim-dev.web.app/" target="_blank" rel="noopener noreferrer" title="montasim-dev.web.app">
                    <img loading="lazy" alt="web icon" src="https://cdn.simpleicons.org/googlechrome/EB008B" width="35px">
                </a>
            </th>
            <th>
                <a href="mailto:montasimmamun@gmail.com" target="_blank" rel="noopener noreferrer" title="montasimmamun@gmail.com">
                    <img loading="lazy" alt="gmail icon" src="https://cdn.simpleicons.org/gmail/EB008B" width="35px">
                </a>
            </th>
            <th>
                <a href="https://www.facebook.com/montasimmamun/" target="_blank" rel="noopener noreferrer" title="facebook.com/montasimmamun">
                    <img loading="lazy" alt="facebook icon" src="https://cdn.simpleicons.org/facebook/EB008B" width="35px">
                </a>
            </th>
            <th>
                <a href="https://x.com/montasimmamun" target="_blank" rel="noopener noreferrer" title="https://x.com/montasimmamun">
                    <img loading="lazy" alt="x icon" src="https://cdn.simpleicons.org/x/EB008B" width="35px">
                </a>
            </th>
        </tr>
    </thead>
</table>
<!-- social media links end -->

<br/>
<br/>
<br/>
