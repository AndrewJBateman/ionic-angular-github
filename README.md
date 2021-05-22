# :zap: Ionic Angular Github

* App to search for and display github data for a user from the [github API](https://developer.github.com/v3/search/#search-repositories) using the [Ionic 5 framework](https://ionicframework.com/docs).
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/ionic-angular-github?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/ionic-angular-github?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/ionic-angular-github?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/ionic-angular-github?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Ionic Angular Github](#zap-ionic-angular-github)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-do list](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* The [Github API](https://angular.io/) has a lot more detailed functionality available

## :camera: Screenshots

![Ionic page](./img/side-menu.png)

## :signal_strength: Technologies

* [Ionic v5](https://ionicframework.com/)
* [Angular v12](https://angular.io/)
* [Ionic/angular v5](https://www.npmjs.com/package/@ionic/angular)
* [github API](https://developer.github.com/v3/search/#search-repositories)

## :floppy_disk: Setup

* To start the server on _localhost://8100_ type: 'ionic serve'

## :computer: Code Examples

* Extract from `app.component.html` to create menu list from an array in the component file

```typescript
<ion-list>
  <ion-menu-toggle auto-hide="false" *ngFor="let p of appPages; let i = index">
		<ion-item
			[routerLink]="p.url"
			routerLinkActive="active"
			routerDirection="root"
			(click)="onSidenavClose()">
      <ion-icon slot="start" [name]="p.icon" [class]="p.menuIcon"></ion-icon>
      <ion-label *ngIf="language==='en'">
        {{ p.title }}
      </ion-label>
      <ion-label *ngIf="language==='fr'">
        {{ p.titlefr }}
      </ion-label>
      <ion-label *ngIf="language==='sp'">
        {{ p.titlesp }}
      </ion-label>
	  </ion-item>
  </ion-menu-toggle>
</ion-list>
```

## :cool: Features

* The side menu is activated by the burger menu and extends from the left hand side

## :clipboard: Status & To-do list

* Status: Working menu system but page content to be added.
* To-do: Change search result page to be a user profile with number of repos etc. and a photo. Add user repo detail page.

## :clap: Inspiration

* [github API](https://developer.github.com/v3/search/#search-repositories)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
