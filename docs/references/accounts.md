---
title: Accounts
description: All you need to know about accounts
---

# Account's informations

Trender have a strict structure and rules for the account to help us and developpers to work better with Trender functionalities.

## Username, nickname and description

Username and description have no restrictions except the length :

| FIELD       | ACCOUNT TYPE | LENGTH |
| ----------- | ------------ | ------ |
| username    | All          | 3 - 30 |
| nickname    | All          | 3 - 30 |
| description | normal       | 512    |
| description | premium      | 1024   |

Nicknames cannot contain special characters with a maximum length of 30.
These characters are not allowed and will be replace by an underscore `_` :
 - `[` `!` `@` `#` `$` `%` `^` `&` `*` `(` `)` `+` `-` `=` `\` `{` `}` `;` `'` `:` `"` `/` `|` `,` `.` `<` `>` `?` `]`

## Account structure

| FIELD           | TYPE           | DESCRIPTION                                        |
| --------------- | -------------- | -------------------------------------------------- |
| user_id         | snowflake      | unique ID of the account                           |
| username        | string         | displayed name of the account                      |
| nickname        | string         | unique name of the account                         |
| description?    | string         | description of the account                         |
| avatar          | string         | the user's avatar                                  |
| link?           | string         | the user's gived link                              |
| banner?         | string         | the user's banner                                  |
| accent_color    | string         | the user's account color                           |
| locale          | string         | the user local fetched during the account creation |
| language_spoken | Array<string\> | the user choosen language                          |
| verified        | boolean        | verified user email                                |
| certified       | boolean        | certified account                                  |
| flags           | integer        | the user's flags                                   |
| is_private      | boolean        | private account                                    |
| allow_mp        | boolean        | account accept public private messages             |
| premium_type    | integer        | account subscription type                          |
| created_at      | string         | Creation date of the account                       |

### Exemple account structure

```json
{
    "user_id": "227139578069385220",
    "username": "Trender",
    "nickname": "trender",
    "description": "Welcome to Trender",
    "avatar": "mYNwAwEzsoZVZXM1sF4K_trender_255.png",
    "banner": "9NpgkVUFyLUm3nAZ8xFd_login_background.jpg",
    "accent_color": "#14141b",
    "locale": "fr",
    "language_spoken": ["fr", "ru"],
    "verified": true,
    "certified": true,
    "flags": 20,
    "is_private": false,
    "allow_mp": true,
    "premium_type": 3,
    "created_at": "2020-04-02T08:02:17-05:00"
}
```

## Account flags

| VALUE  | NAME                | DESCRIPTION             |
| ------ | ------------------- | ----------------------- |
| 0      | None                | None                    |
| 1 << 0 | TRENDER_EMPLOYEE    | Trender employee        |
| 1 << 1 | TRENDER_PARTNER     | Trender partner         |
| 1 << 2 | VERIFIED_USER       | Verified email          |
| 1 << 3 | PREMIUM_USER        | Premium account         |
| 1 << 4 | EARLY_SUPPORTER     | Early supporter account |
| 1 << 5 | CERTIFIED_MODERATOR | Official moderator      |

## Premium Types

| VALUE | DESCRIPTION                  |
| ----- | ---------------------------- |
| 0     | None                         |
| 1     | Normal                       |
| 2     | Shared with partners project |
| 3     | All advantages               |
