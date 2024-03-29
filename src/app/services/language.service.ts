import { TranslateService } from "@ngx-translate/core";
import { Platform } from "@ionic/angular";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";

const LNG_KEY = "SELECTED_LANGUAGE";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  selected = "en";

  constructor(
    private translate: TranslateService,
    private storage: Storage,
    private plt: Platform
  ) {}

  // sets default language as browser language if no other language choice made
  // if language language selected then this value is stored using the ionic storage module
  async setInitialAppLanguage() {
    await this.storage.create();
    const language = this.translate.getBrowserLang();
    console.log("language", language);
    this.translate.setDefaultLang(language);

    this.storage.get(LNG_KEY).then((val) => {
      if (val) {
        this.setLanguage(val);
        this.selected = val;
      }
    });
  }

  // lng can be 'en', 'fr' or 'sp'
  async setLanguage(lng: string) {
    // await this.storage.create();
    this.translate.use(lng);
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
  }
}
