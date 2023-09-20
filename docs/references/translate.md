---
title: Translate
description: All you need to know about translation
---

### Introduction

#### How to help and translate the app ?
1. Copy the english translation JSON file : 
[https://github.com/trenderapp/mobile/blob/main/src/locales/en.json](https://github.com/trenderapp/mobile/blob/main/src/locales/en.json)
2. Rename it with the [ISO-639-1](https://en.wikipedia.org/wiki/ISO_639-1) two-letter code `{language-shortcut}.json` (`ru.json` or `fr.json`) :
3. Modify the text and move the variable if needed :
   
	```json
	"redirect_secondes": "Перенаправление за {{time}} секунд",
	```

All available languages available on the app are :

| LOCALE | LANGUAGE NAME | STATUS      |
| ------ | ------------- | ----------- |
| fr     | French        | Finish      |
| en     | English       | Finish      |
| ru     | Russian       | Help wanted |
