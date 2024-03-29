import {
  Component,
  ViewEncapsulation,
  OnInit,
  EventEmitter,
  Output,
} from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";

// Services
import { LanguageService } from "./services/language.service";
import { ThemeService } from "./services/theme.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  darkMode: any;
  public language: string = this.languageService.selected;
  public appPages = [
    {
      title: "User-Search",
      titlefr: "Pays",
      titlesp: "Países",
      url: "/app/tabs/user-search",
      icon: "search",
      menuIcon: "menuIconCountry",
    },
    {
      title: "User-Detail",
      titlefr: "Océans",
      titlesp: "Océanos",
      url: "/app/tabs/user-detail",
      icon: "list-outline",
      menuIcon: "menuIconOceans",
    },
    {
      title: "Favourites",
      titlefr: "Favoris",
      titlesp: "Favoritas",
      url: "/app/tabs/favourites",
      icon: "heart-outline",
      menuIcon: "menuIconFavourites",
    },
    {
      title: "About",
      titlefr: "Sur cette app",
      titlesp: "Sobre esta app",
      url: "/app/tabs/about",
      icon: "information-circle-outline",
      menuIcon: "menuIconAbout",
    },
  ];

  constructor(
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public themeService: ThemeService,
    private languageService: LanguageService
  ) {
    this.initializeApp();
    this.darkMode = this.themeService.darkMode;
  }

  ngOnInit() {}

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.languageService.setInitialAppLanguage();
    });
  }

  languageChange() {
    this.languageService.setLanguage(this.language);
  }

  onSidenavClose = () => {
    this.sidenavClose.emit();
  };
}
