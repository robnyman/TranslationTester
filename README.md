# TranslationTester

This app is to test translations for Firefox OS apps and to have a blueprint for your own app with translation support. Feel free to fork this repository and then build up your app supporting multiple languages.

Optionally, you can set up your project for localization at [Transifex](https://www.transifex.com/) to accept and import translations from other people.

## Try it out

If you go to [http://robnyman.github.io/TranslationTester/](http://robnyman.github.io/TranslationTester/) in your web browser or add it as an app in the [App Manager in the Firefox Developer Tools](https://developer.mozilla.org/en-US/Firefox_OS/Using_the_App_Manager) (`Tools > Web Developer > App Manager`in Firefox) you can test it out right away.

If you plan on testing in the App Manager, these are your two options:

- Clone or fork this repository, choose `Add Packaged App`and point to the directory
- Choose `Add Hosted App` and point your App Manager to this URL: [http://robnyman.github.io/TranslationTester/manifest-hosted.webapp](http://robnyman.github.io/TranslationTester/manifest-hosted.webapp)

### How to view different locales

To view TranslationTester with a different locale, change the language in Firefox/App Manager:

- Firefox: Choose language under `Preferences > Content > Languages`. More information in [Set content language in Firefox](https://support.mozilla.org/en-US/kb/settings-fonts-languages-pop-ups-javascript)
- App Manager/Firefox OS: Go to `Settings > Language`. More information in [Change The Default Language on Firefox OS](https://support.mozilla.org/en-US/kb/change-default-language-firefox-os?esab=a&s=language&r=0&as=s)

## How it works

- All localizations are available in the `locales`directory, organized by each language code
- The `locales.ini` file imports them
- The included `l10n.js` JavaScript file applies the current user locale's translation to respective element through their `data-l10n-id` attribute.

## Add a new language/locale

If you want to add a new language, here's how to do it:

1. Create a directory in the `locales` directory, e.g. `en-US`
2. Create two files in your locale directory: `app.properties` and `manifest.properties`. `app.properties` will have all the translations for your app's content, `manifest.properties` will have the translation for the name and description of your app
3. Open `locales.ini` and import your translation, e.g: `[en-US] @import url(en-US/app.properties)`
4. Open `manifest.webapp` and add your language in the locales directive:
	
	```
	"en-US": {
		"name": "Translation Tester",
		"description": "This is a testing app for Firefox OS translations"
	}
	```
    
## Adding new text to new elements

If you want to add a new text/translation in the content file:

1. Add the `data-l10n-id` attribute to the desired element: `<p data-l10n-id="winter-for-real">Winter for real</p>`
2. The value chosen for the `data-l10n-id` attribute needs to correspond to the same value in the `app.properties` file for each language, e.g: `winter-for-real = Winter for real`

## Credit for translators

If you have translations offered by people not on the project - for instance, through the [Transifex](https://www.transifex.com/) service - it's highly recommended that you list their names and give them appropriate credits. The suggestion, and implemented in this example, is to give an element an attribute, `data-l10n-id="translation-credits"` in which the names will be retrieved from respective àpp.properties` file for the specific language being shown.


## Acknowledgements

This repository and these instructions have been inspired and greatly helped by the [Localizing the Firefox OS Boilerplate App](https://hacks.mozilla.org/2014/01/localizing-the-firefox-os-boilerplate-app/) article by Christie Koehler.