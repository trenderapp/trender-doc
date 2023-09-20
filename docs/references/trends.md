---
title: Trends
description: All you need to know about Trends
---

### Trends structure

```ts
{
    post_id: string;
    user_id: string;
    attached_post_id?: string;
    shared_post_id?: string;
    content: string;
    content_language?: ISO_639_CODE_LIST;
    attachments?: Array<fileAttachmentsInterface>;
    type: postTypeI;
    embeds?: Array<embedInterface>;
    locale?: ISO_3166_CODE_LIST;
    device?: string;
    hashtags?: Array<string>;
    mentions: Array<string>;
    categories: number[];
    poll?: {
    poll_id: string;
    time: Date
    options: Array<pollInterface>;
    };
    giveway?: givewayInterface;
    paid: boolean;
    deleted: boolean;
    created_at: Date;
}
```

### Informations :

**The embed interface :**

```ts
{
    /**0 = text only | 1 = image (include gif) | 2 = video | 3 = audio
     * @default 0
     */
    type?: 0 | 1 | 2 | 3;
    icon_url?: string;
    url?: string;
    title?: string;
    description?: string;
    color?: string;
    attachments?: string;
    timestamp?: Date;
}
```
**The poll interface :**

```ts
{
    option_id: string;
    name: string;
}
```

**The giveway interface :**

```ts
{
    follow: boolean;
    sub: boolean;
    like: boolean;
    comment: boolean;
    share: boolean;
}
```

**The post types can be :**

| Number | description         |
| ------ | ------------------- |
| 0      | Text only           |
| 1      | Image (include gif) |
| 2      | Video               |
| 3      | Audio               |
| 4      | Others              |

**All availables categories for Trends :**

```js
{ number: 0, name: 'News' },
{ number: 1, name: 'Technology' },
{ number: 2, name: 'Science' },
{ number: 3, name: 'Politics' },
{ number: 4, name: 'Sports' },
{ number: 5, name: 'Health' },
{ number: 6, name: 'Fashion' },
{ number: 7, name: 'Cooking' },
{ number: 8, name: 'Music' },
{ number: 9, name: 'Movies' },
{ number: 10, name: 'Books' },
{ number: 11, name: 'Travel' },
{ number: 12, name: 'Photography' },
{ number: 13, name: 'Art' },
{ number: 14, name: 'History' },
{ number: 15, name: 'Education' },
{ number: 16, name: 'Environment' },
{ number: 17, name: 'Animals' },
{ number: 18, name: 'Science Fiction' },
{ number: 19, name: 'Humor' },
{ number: 20, name: 'Philosophy' },
{ number: 21, name: 'Psychology' },
{ number: 22, name: 'Parenting' },
{ number: 23, name: 'Automobiles' },
{ number: 24, name: 'Entertainment' },
{ number: 25, name: 'Economy' },
{ number: 26, name: 'Business' },
{ number: 27, name: 'Video Games' },
{ number: 28, name: 'Spirituality' },
{ number: 29, name: 'Interior Design' },
{ number: 30, name: 'Fitness' },
{ number: 31, name: 'Nutrition' },
{ number: 32, name: 'Marketing' },
{ number: 33, name: 'Humanities' },
{ number: 34, name: 'Pop Culture' },
{ number: 35, name: 'Ethical Fashion' },
{ number: 36, name: 'Biographies' },
{ number: 37, name: 'Astronomy' },
{ number: 38, name: 'Alternative Medicine' },
{ number: 39, name: 'Creative Hobbies' },
{ number: 40, name: 'Urban Ecology' },
{ number: 41, name: 'Comics' },
{ number: 42, name: 'Archaeology' },
{ number: 43, name: 'Podcasts' },
{ number: 44, name: 'Hiking' },
{ number: 45, name: 'Adventure' },
{ number: 46, name: 'Entrepreneurship' },
{ number: 47, name: 'Horseback Riding' },
{ number: 48, name: 'Investment' },
{ number: 49, name: 'Geopolitics' },
{ number: 50, name: 'Nudity' },
{ number: 51, name: 'Lifestyle' }
```

**Here are all content_language possible in Trends :**

```js
{ language: 'af', name: 'Afrikaans', local_language: { english: 'Afrikaans', original: 'Afrikaans' } },
{ language: 'als', name: 'Alemannic', local_language: { english: 'Alemannic', original: 'Alemannisch' } },
{ language: 'am', name: 'Amharic', local_language: { english: 'Amharic', original: 'አማርኛ' } },
{ language: 'an', name: 'Aragonese', local_language: { english: 'Aragonese', original: 'Aragonés' } },
{ language: 'ar', name: 'Arabic', local_language: { english: 'Arabic', original: 'العربية' } },
{ language: 'arz', name: 'Egyptian Arabic', local_language: { english: 'Egyptian Arabic', original: 'مصرى' } },
{ language: 'as', name: 'Assamese', local_language: { english: 'Assamese', original: 'অসমীয়া' } },
{ language: 'ast', name: 'Asturian', local_language: { english: 'Asturian', original: 'Asturianu' } },
{ language: 'av', name: 'Avaric', local_language: { english: 'Avaric', original: 'авар мацӀ' } },
{ language: 'az', name: 'Azerbaijani', local_language: { english: 'Azerbaijani', original: 'Azərbaycanca' } },
{ language: 'azb', name: 'South Azerbaijani', local_language: { english: 'South Azerbaijani', original: 'تورکجه' } },
{ language: 'ba', name: 'Bashkir', local_language: { english: 'Bashkir', original: 'башҡортса' } },
{ language: 'bar', name: 'Bavarian', local_language: { english: 'Bavarian', original: 'Boarisch' } },
{ language: 'bcl', name: 'Central Bikol', local_language: { english: 'Central Bikol', original: 'Bikol Central' } },
{ language: 'be', name: 'Belarusian', local_language: { english: 'Belarusian', original: 'Беларуская' } },
{ language: 'bg', name: 'Bulgarian', local_language: { english: 'Bulgarian', original: 'Български' } },
{ language: 'bh', name: 'Bihari', local_language: { english: 'Bihari', original: 'भोजपुरी' } },
{ language: 'bn', name: 'Bengali', local_language: { english: 'Bengali', original: 'বাংলা' } },
{ language: 'bo', name: 'Tibetan', local_language: { english: 'Tibetan', original: 'བོད་ཡིག' } },
{ language: 'bpy', name: 'Bishnupriya Manipuri', local_language: { english: 'Bishnupriya Manipuri', original: 'বিষ্ণুপ্রিয়া মণিপুরী' } },
{ language: 'br', name: 'Breton', local_language: { english: 'Breton', original: 'Brezhoneg' } },
{ language: 'bs', name: 'Bosnian', local_language: { english: 'Bosnian', original: 'Bosanski' } },
{ language: 'bxr', name: 'Russia Buryat', local_language: { english: 'Russia Buryat', original: 'Буряад' } },
{ language: 'ca', name: 'Catalan', local_language: { english: 'Catalan', original: 'Català' } },
{ language: 'cbk', name: 'Chavacano', local_language: { english: 'Chavacano', original: 'Chavacano' } },
{ language: 'ce', name: 'Chechen', local_language: { english: 'Chechen', original: 'нохчийн' } },
{ language: 'ceb', name: 'Cebuano', local_language: { english: 'Cebuano', original: 'Cebuano' } },
{ language: 'ckb', name: 'Central Kurdish', local_language: { english: 'Central Kurdish', original: 'کوردی' } },
{ language: 'co', name: 'Corsican', local_language: { english: 'Corsican', original: 'Corsu' } },
{ language: 'cs', name: 'Czech', local_language: { english: 'Czech', original: 'Čeština' } },
{ language: 'cv', name: 'Chuvash', local_language: { english: 'Chuvash', original: 'Чăваш' } },
{ language: 'cy', name: 'Welsh', local_language: { english: 'Welsh', original: 'Cymraeg' } },
{ language: 'da', name: 'Danish', local_language: { english: 'Danish', original: 'Dansk' } },
{ language: 'de', name: 'German', local_language: { english: 'German', original: 'Deutsch' } },
{ language: 'diq', name: 'Zazaki', local_language: { english: 'Zazaki', original: 'Zazaki' } },
{ language: 'dsb', name: 'Lower Sorbian', local_language: { english: 'Lower Sorbian', original: 'Dolnoserbski' } },
{ language: 'dty', name: 'Doteli', local_language: { english: 'Doteli', original: 'डोटेली' } },
{ language: 'dv', name: 'Divehi', local_language: { english: 'Divehi', original: 'ދިވެހި' } },
{ language: 'el', name: 'Greek', local_language: { english: 'Greek', original: 'Ελληνικά' } },
{ language: 'eml', name: 'Emilian-Romagnol', local_language: { english: 'Emilian-Romagnol', original: 'Emigliàn e Rumagnòl' } },
{ language: 'en', name: 'English', local_language: { english: 'English', original: 'English' } },
{ language: 'eo', name: 'Esperanto', local_language: { english: 'Esperanto', original: 'Esperanto' } },
{ language: 'es', name: 'Spanish', local_language: { english: 'Spanish', original: 'Español' } },
{ language: 'et', name: 'Estonian', local_language: { english: 'Estonian', original: 'Eesti' } },
{ language: 'eu', name: 'Basque', local_language: { english: 'Basque', original: 'Euskara' } },
{ language: 'fa', name: 'Persian', local_language: { english: 'Persian', original: 'فارسی' } },
{ language: 'fi', name: 'Finnish', local_language: { english: 'Finnish', original: 'Suomi' } },
{ language: 'fr', name: 'French', local_language: { english: 'French', original: 'Français' } },
{ language: 'frr', name: 'North Frisian', local_language: { english: 'North Frisian', original: 'Nordfriisk' } },
{ language: 'fy', name: 'Western Frisian', local_language: { english: 'Western Frisian', original: 'Frysk' } },
{ language: 'ga', name: 'Irish', local_language: { english: 'Irish', original: 'Gaeilge' } },
{ language: 'gd', name: 'Scottish Gaelic', local_language: { english: 'Scottish Gaelic', original: 'Gàidhlig' } },
{ language: 'gl', name: 'Galician', local_language: { english: 'Galician', original: 'Galego' } },
{ language: 'gn', name: 'Guarani', local_language: { english: 'Guarani', original: 'Avañe`\'ẽ' } },
{ language: 'gom', name: 'Konkani', local_language: { english: 'Konkani', original: 'कोंकणी / Konknni' } },
{ language: 'gu', name: 'Gujarati', local_language: { english: 'Gujarati', original: 'ગુજરાતી' } },
{ language: 'gv', name: 'Manx', local_language: { english: 'Manx', original: 'Gaelg' } },
{ language: 'he', name: 'Hebrew', local_language: { english: 'Hebrew', original: 'עברית' } },
{ language: 'hi', name: 'Hindi', local_language: { english: 'Hindi', original: 'हिन्दी' } },
{ language: 'hif', name: 'Fiji Hindi', local_language: { english: 'Fiji Hindi', original: 'Fiji Hindi' } },
{ language: 'hr', name: 'Croatian', local_language: { english: 'Croatian', original: 'Hrvatski' } },
{ language: 'hsb', name: 'Upper Sorbian', local_language: { english: 'Upper Sorbian', original: 'Hornjoserbsce' } },
{ language: 'ht', name: 'Haitian Creole', local_language: { english: 'Haitian Creole', original: 'Kreyòl Ayisyen' } },
{ language: 'hu', name: 'Hungarian', local_language: { english: 'Hungarian', original: 'Magyar' } },
{ language: 'hy', name: 'Armenian', local_language: { english: 'Armenian', original: 'Հայերեն' } },
{ language: 'ia', name: 'Interlingua', local_language: { english: 'Interlingua', original: 'Interlingua' } },
{ language: 'id', name: 'Indonesian', local_language: { english: 'Indonesian', original: 'Bahasa Indonesia' } },
{ language: 'ie', name: 'Interlingue', local_language: { english: 'Interlingue', original: 'Interlingue' } },
{ language: 'ilo', name: 'Iloko', local_language: { english: 'Iloko', original: 'Ilokano' } },
{ language: 'io', name: 'Ido', local_language: { english: 'Ido', original: 'Ido' } },
{ language: 'is', name: 'Icelandic', local_language: { english: 'Icelandic', original: 'Íslenska' } },
{ language: 'it', name: 'Italian', local_language: { english: 'Italian', original: 'Italiano' } },
{ language: 'ja', name: 'Japanese', local_language: { english: 'Japanese', original: '日本語' } },
{ language: 'jbo', name: 'Lojban', local_language: { english: 'Lojban', original: 'Lojban' } },
{ language: 'jv', name: 'Javanese', local_language: { english: 'Javanese', original: 'Basa Jawa' } },
{ language: 'ka', name: 'Georgian', local_language: { english: 'Georgian', original: 'ქართული' } },
{ language: 'kk', name: 'Kazakh', local_language: { english: 'Kazakh', original: 'Қазақша' } },
{ language: 'km', name: 'Khmer', local_language: { english: 'Khmer', original: 'ភាសាខ្មែរ' } },
{ language: 'kn', name: 'Kannada', local_language: { english: 'Kannada', original: 'ಕನ್ನಡ' } },
{ language: 'ko', name: 'Korean', local_language: { english: 'Korean', original: '한국어' } },
{ language: 'krc', name: 'Karachay-Balkar', local_language: { english: 'Karachay-Balkar', original: 'Къарачай-Малкъар' } },
{ language: 'ku', name: 'Kurdish', local_language: { english: 'Kurdish', original: 'Kurdî' } },
{ language: 'kv', name: 'Komi', local_language: { english: 'Komi', original: 'Коми' } },
{ language: 'kw', name: 'Cornish', local_language: { english: 'Cornish', original: 'Kernowek' } },
{ language: 'ky', name: 'Kyrgyz', local_language: { english: 'Kyrgyz', original: 'Кыргызча' } },
{ language: 'la', name: 'Latin', local_language: { english: 'Latin', original: 'Latina' } },
{ language: 'lb', name: 'Luxembourgish', local_language: { english: 'Luxembourgish', original: 'Lëtzebuergesch' } },
{ language: 'lez', name: 'Lezgian', local_language: { english: 'Lezgian', original: 'Лезги' } },
{ language: 'li', name: 'Limburgish', local_language: { english: 'Limburgish', original: 'Limburgs' } },
{ language: 'lmo', name: 'Lombard', local_language: { english: 'Lombard', original: 'Lumbaart' } },
{ language: 'lo', name: 'Lao', local_language: { english: 'Lao', original: 'ລາວ' } },
{ language: 'lrc', name: 'Northern Luri', local_language: { english: 'Northern Luri', original: 'لۊری شومالی' } },
{ language: 'lt', name: 'Lithuanian', local_language: { english: 'Lithuanian', original: 'Lietuvių' } },
{ language: 'lv', name: 'Latvian', local_language: { english: 'Latvian', original: 'Latviešu' } },
{ language: 'mai', name: 'Maithili', local_language: { english: 'Maithili', original: 'मैथिली' } },
{ language: 'mg', name: 'Malagasy', local_language: { english: 'Malagasy', original: 'Malagasy' } },
{ language: 'mhr', name: 'Eastern Mari', local_language: { english: 'Eastern Mari', original: 'олык марий' } },
{ language: 'min', name: 'Minangkabau', local_language: { english: 'Minangkabau', original: 'Minangkabau' } },
{ language: 'mk', name: 'Macedonian', local_language: { english: 'Macedonian', original: 'Македонски' } },
{ language: 'ml', name: 'Malayalam', local_language: { english: 'Malayalam', original: 'മലയാളം' } },
{ language: 'mn', name: 'Mongolian', local_language: { english: 'Mongolian', original: 'Монгол' } },
{ language: 'mr', name: 'Marathi', local_language: { english: 'Marathi', original: 'मराठी' } },
{ language: 'mrj', name: 'Hill Mari', local_language: { english: 'Hill Mari', original: 'кырык мары' } },
{ language: 'ms', name: 'Malay', local_language: { english: 'Malay', original: 'Bahasa Melayu' } },
{ language: 'mt', name: 'Maltese', local_language: { english: 'Maltese', original: 'Malti' } },
{ language: 'mwl', name: 'Mirandese', local_language: { english: 'Mirandese', original: 'Mirandés' } },
{ language: 'my', name: 'Burmese', local_language: { english: 'Burmese', original: 'မြန်မာ' } },
{ language: 'myv', name: 'Erzya', local_language: { english: 'Erzya', original: 'эрзянь' } },
{ language: 'mzn', name: 'Mazanderani', local_language: { english: 'Mazanderani', original: 'مازِرونی' } },
{ language: 'nah', name: 'Nahuatl', local_language: { english: 'Nahuatl', original: 'Nāhuatl' } },
{ language: 'nap', name: 'Neapolitan', local_language: { english: 'Neapolitan', original: 'Napulitano' } },
{ language: 'nds', name: 'Low German', local_language: { english: 'Low German', original: 'Plattdüütsch' } },
{ language: 'ne', name: 'Nepali', local_language: { english: 'Nepali', original: 'नेपाली' } },
{ language: 'new', name: 'Newari', local_language: { english: 'Newari', original: 'नेपाल भाषा' } },
{ language: 'nl', name: 'Dutch', local_language: { english: 'Dutch', original: 'Nederlands' } },
{ language: 'nn', name: 'Norwegian Nynorsk', local_language: { english: 'Norwegian Nynorsk', original: 'Norsk nynorsk' } },
{ language: 'no', name: 'Norwegian', local_language: { english: 'Norwegian', original: 'Norsk' } },
{ language: 'oc', name: 'Occitan', local_language: { english: 'Occitan', original: 'Occitan' } },
{ language: 'or', name: 'Oriya', local_language: { english: 'Oriya', original: 'ଓଡ଼ିଆ' } },
{ language: 'os', name: 'Ossetian', local_language: { english: 'Ossetian', original: 'Ирон' } },
{ language: 'pa', name: 'Punjabi', local_language: { english: 'Punjabi', original: 'ਪੰਜਾਬੀ / پنجابی' } },
{ language: 'pam', name: 'Kapampangan', local_language: { english: 'Kapampangan', original: 'Kapampangan' } },
{ language: 'pfl', name: 'Palatinate German', local_language: { english: 'Palatinate German', original: 'Pfälzisch' } },
{ language: 'pl', name: 'Polish', local_language: { english: 'Polish', original: 'Polski' } },
{ language: 'pms', name: 'Piedmontese', local_language: { english: 'Piedmontese', original: 'Piemontèis' } },
{ language: 'pnb', name: 'Western Punjabi', local_language: { english: 'Western Punjabi', original: 'پنجابی' } },
{ language: 'ps', name: 'Pashto', local_language: { english: 'Pashto', original: 'پښتو' } },
{ language: 'pt', name: 'Portuguese', local_language: { english: 'Portuguese', original: 'Português' } },
{ language: 'qu', name: 'Quechua', local_language: { english: 'Quechua', original: 'Runa Simi' } },
{ language: 'rm', name: 'Romansh', local_language: { english: 'Romansh', original: 'Rumantsch' } },
{ language: 'ro', name: 'Romanian', local_language: { english: 'Romanian', original: 'Română' } },
{ language: 'ru', name: 'Russian', local_language: { english: 'Russian', original: 'Русский' } },
{ language: 'rue', name: 'Rusyn', local_language: { english: 'Rusyn', original: 'Русиньскый' } },
{ language: 'sa', name: 'Sanskrit', local_language: { english: 'Sanskrit', original: 'संस्कृतम्' } },
{ language: 'sah', name: 'Sakha', local_language: { english: 'Sakha', original: 'Саха тыла' } },
{ language: 'sc', name: 'Sardinian', local_language: { english: 'Sardinian', original: 'Sardu' } },
{ language: 'scn', name: 'Sicilian', local_language: { english: 'Sicilian', original: 'Sicilianu' } },
{ language: 'sco', name: 'Scots', local_language: { english: 'Scots', original: 'Scots' } },
{ language: 'sd', name: 'Sindhi', local_language: { english: 'Sindhi', original: 'سنڌي' } },
{ language: 'sh', name: 'Serbo-Croatian', local_language: { english: 'Serbo-Croatian', original: 'Srpskohrvatski / Српскохрватски' } },
{ language: 'si', name: 'Sinhalese', local_language: { english: 'Sinhalese', original: 'සිංහල' } },
{ language: 'sk', name: 'Slovak', local_language: { english: 'Slovak', original: 'Slovenčina' } },
{ language: 'sl', name: 'Slovenian', local_language: { english: 'Slovenian', original: 'Slovenščina' } },
{ language: 'so', name: 'Somali', local_language: { english: 'Somali', original: 'Soomaaliga' } },
{ language: 'sq', name: 'Albanian', local_language: { english: 'Albanian', original: 'Shqip' } },
{ language: 'sr', name: 'Serbian', local_language: { english: 'Serbian', original: 'Српски' } },
{ language: 'su', name: 'Sundanese', local_language: { english: 'Sundanese', original: 'Basa Sunda' } },
{ language: 'sv', name: 'Swedish', local_language: { english: 'Swedish', original: 'Svenska' } },
{ language: 'sw', name: 'Swahili', local_language: { english: 'Swahili', original: 'Kiswahili' } },
{ language: 'ta', name: 'Tamil', local_language: { english: 'Tamil', original: 'தமிழ்' } },
{ language: 'te', name: 'Telugu', local_language: { english: 'Telugu', original: 'తెలుగు' } },
{ language: 'tg', name: 'Tajik', local_language: { english: 'Tajik', original: 'Тоҷикӣ' } },
{ language: 'th', name: 'Thai', local_language: { english: 'Thai', original: 'ไทย' } },
{ language: 'tk', name: 'Turkmen', local_language: { english: 'Turkmen', original: 'Türkmençe' } },
{ language: 'tl', name: 'Tagalog', local_language: { english: 'Tagalog', original: 'Tagalog' } },
{ language: 'tr', name: 'Turkish', local_language: { english: 'Turkish', original: 'Türkçe' } },
{ language: 'tt', name: 'Tatar', local_language: { english: 'Tatar', original: 'Татарча / Tatarça' } },
{ language: 'tyv', name: 'Tuvan', local_language: { english: 'Tuvan', original: 'Тыва дыл' } },
{ language: 'ug', name: 'Uighur', local_language: { english: 'Uighur', original: 'ئۇيغۇرچە / Uyghurche' } },
{ language: 'uk', name: 'Ukrainian', local_language: { english: 'Ukrainian', original: 'Українська' } },
{ language: 'ur', name: 'Urdu', local_language: { english: 'Urdu', original: 'اردو' } },
{ language: 'uz', name: 'Uzbek', local_language: { english: 'Uzbek', original: 'Oʻzbekcha / Ўзбекча' } },
{ language: 'vec', name: 'Venetian', local_language: { english: 'Venetian', original: 'Vèneto' } },
{ language: 'vep', name: 'Veps', local_language: { english: 'Veps', original: 'vepsän kel’' } },
{ language: 'vi', name: 'Vietnamese', local_language: { english: 'Vietnamese', original: 'Tiếng Việt' } },
{ language: 'vls', name: 'West Flemish', local_language: { english: 'West Flemish', original: 'West-Vlams' } },
{ language: 'vo', name: 'Volapük', local_language: { english: 'Volapük', original: 'Volapük' } },
{ language: 'wa', name: 'Walloon', local_language: { english: 'Walloon', original: 'Walon' } },
{ language: 'war', name: 'Waray', local_language: { english: 'Waray', original: 'Winaray' } },
{ language: 'wuu', name: 'Wu Chinese', local_language: { english: 'Wu Chinese', original: '吴语' } },
{ language: 'xal', name: 'Kalmyk', local_language: { english: 'Kalmyk', original: 'Хальмг' } },
{ language: 'xmf', name: 'Mingrelian', local_language: { english: 'Mingrelian', original: 'მარგალური' } },
{ language: 'yi', name: 'Yiddish', local_language: { english: 'Yiddish', original: 'ייִדיש' } },
{ language: 'yo', name: 'Yoruba', local_language: { english: 'Yoruba', original: 'Yorùbá' } },
{ language: 'yue', name: 'Cantonese', local_language: { english: 'Cantonese', original: '粵語' } },
{ language: 'zh', name: 'Chinese', local_language: { english: 'Chinese', original: '中文' } }
```
