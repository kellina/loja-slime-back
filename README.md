<p align="left">
   <img src="./assets/logo.png" width="200"/>
</p>

# Slime Shop API

> A back-end rest API of a [slime shopping application](https://github.com/kellina/loja-slime-front)

> [Click here to see the database model](https://dbdiagram.io/d/5fe73bce9a6c525a03bc55dd)

[![Author](https://img.shields.io/badge/author-kellina-b56576?style=flat-square)](https://github.com/kellina)
[![Languages](https://img.shields.io/github/languages/count/kellina/spotify-api-pkce?color=%23b56576&style=flat-square)](#)
[![Heroku CI Status](https://loja-slime-backend.herokuapp.com/last.svg)](https://dashboard.heroku.com/pipelines/pipeline/tests)
![GitHub package.json version](https://img.shields.io/github/package-json/v/kellina/loja-slime-back?color=b56576)

## :pushpin: Table of Contents

-   [Project Status](#heavy_check_mark-project-status)
-   [Features](#rocket-features)
-   [Installation](#construction_worker-installation)
-   [Getting Started](#runner-getting-started)
-   [Found a bug? Missing a specific feature?](#bug-issues)
-   [Contributing](#tada-contributing)
-   [License](#closed_book-license)

## :heavy_check_mark: Project Status

<p align="center">
  :construction: Slime Shop backend :construction: Under construction :construction:
</p>

## :rocket: Features

-   Query products in the database
-
-

## :construction_worker: Installation

**You need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**

```bash
git clone https://github.com/kellina/loja-slime-back.git
```

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have a SSH key registered in your Github account, clone the project using this command:

```bash
git clone git@github.com:kellina/loja-slime-back.git
```

**Install dependencies**

```bash
npm install
```

**Setup a database**

1. Install the postregres and create a database.

2. This [tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04) may help you

3. Connect the database and run the SQL script `/src/scripts/slime-shop.sql` to create the tables

4. To show the tables, type `\dt`

**Configure environment variables**

Create your environment variables based on the examples of `.env.example`

```bash
cp .env.example .env
```

After copying the examples, make sure to fill the variables with new values.

## :runner: Getting Started

Run the following command in order to start the application in a development environment:

```bash
 // Start the server
  npm start
```

## :beetle: Issues

Feel free to **file a new issue** with a respective title and description on the the [Slime Shop API](https://github.com/kellina/loja-slime-back/issues) repository. If you already found a solution to your problem, **I would love to review your pull request**! Have a look at our [contribution guidelines](https://github.com/kellina/loja-slime-back/blob/master/CONTRIBUTING.md) to find out about the coding standards.

## :tada: Contributing

Check out the [contributing](https://github.com/kellina/loja-slime-back/blob/master/CONTRIBUTING.md) page to see the best places to file issues, start discussions and begin contributing.

## :closed_book: License

Released in 2020.
This project is under the [MIT license](https://github.com/kellina/loja-slime-back/blob/master/LICENSE).

Made with love by [Kellina Oliveira](https://github.com/kellina) :two_hearts: :rocket:
