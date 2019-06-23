# Ionic Angular Github

App to search for and display github data for a user from the [github API](https://developer.github.com/v3/search/#search-repositories) using the [Ionic 5 framework](https://ionicframework.com/docs).

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* The [Github API](https://angular.io/) has a lot more detailed functionality available:

## Screenshots

![Ionic page](./img/user-search.png)

## Technologies

* [Ionic v5.0.0](https://ionicframework.com/)

* [Angular v7.2.2](https://angular.io/)

* [Ionic/angular v4.1.0](https://www.npmjs.com/package/@ionic/angular)

* [github API](https://developer.github.com/v3/search/#search-repositories)

## Setup

* To start the server on _localhost://8100_ type: 'ionic serve'

## Code Examples

* Extract from `service.ts` that gets data from the API.

```typescript
export class NewsService {
  currentArticle: any;

  constructor(private http: HttpClient) {}

  getData(url) {
    return this.http.get(`${apiUrl}/${url}&apiKey=${apiKey}`);
  }
}
```

## Features

* tba

## Status & To-do list

* Status: Working. Very basic.

* To-do: Change search result page to be a user profile with number of repos etc and a photo. Add user repo detail page.

## Inspiration

* none

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
