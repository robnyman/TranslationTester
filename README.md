# TranslationTester

To test translations for Firefox OS apps and to have a blueprint for your own app with translation support. Feel free to fork this repository and then build up your app supporting multiple languages.

Optionally, you can set up your project for localization at [Transifex](https://www.transifex.com/) to accept and import translations from other people.

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
	
	"en-US": {
		"name": "Translation Tester",
		"description": "This is a testing app for Firefox OS translations"
	}
    
## Adding new text to new elements

If you want to add a new text/translation in the content file:

1. Add the `data-l10n-id` attribute to the desired element: `<p data-l10n-id="winter-for-real">Winter for real</p>`
2. The value chosen for the `data-l10n-id` attribute needs to correspond to the same value in the `app.properties` file, e.g: `winter-for-real = Winter for real`


## Acknowledgements

This repository and these instructions have been inspired and greatly helped by the [Localizing the Firefox OS Boilerplate App](https://hacks.mozilla.org/2014/01/localizing-the-firefox-os-boilerplate-app/) article by Christie Koehler.