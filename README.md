# :zap: Ionic Angular Github

* App to search for and display github data for a user from the [github API](https://developer.github.com/v3/search/#search-repositories) using the [Ionic framework](https://ionicframework.com/docs).
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/ionic-angular-github?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/ionic-angular-github?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/ionic-angular-github?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/ionic-angular-github?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Ionic Angular Github](#zap-ionic-angular-github)
  * [:page\_facing\_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal\_strength: Technologies](#signal_strength-technologies)
  * [:floppy\_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status \& To-do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file\_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* The [Github API](https://angular.io/) has a lot more detailed functionality available

## :camera: Screenshots

![Ionic page](./img/side-menu.png)

## :signal_strength: Technologies

* [Ionic v7](https://ionicframework.com/)
* [Angular v16](https://angular.io/)
* [Ionic/angular v7](https://www.npmjs.com/package/@ionic/angular)
* [github API](https://developer.github.com/v3/search/#search-repositories)

## :floppy_disk: Setup

* `npm i` to install dependencies
* `ionic serve` to start the server on _localhost://8100_

## :computer: Code Examples

* Extract from `user-search.page.html` to search for Github repos using username input text

```typescript
  <ion-searchbar
    color="primary"
    type="search"
    placeholder="search name"
    [debounce]="1000"
    (ionInput)="handleInput($event)"
  >
  </ion-searchbar>
```

## :cool: Features

* The side menu is activated by the burger menu and extends from the left hand side

## :clipboard: Status & To-do List

* Status: Working menu system but page content to be added and fr & es texts to be corrected.
* To-do: Fix dark mode switch mode, Info page, i18n, replace sidebar image. Change search result page to be a user profile with number of repos etc. and a photo.

## :clap: Inspiration

* [github API documentation](https://developer.github.com/v3/search/#search-repositories)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
