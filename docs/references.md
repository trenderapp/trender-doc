---
id: references
title: References
description: All you need to know before starting using the API
slug: /
sidebar_position: 0
---

# API References

## HTTP API

### Base REST API Url

```
https://api.trenderapp.com/
```

### Authentification

For all requests you made you need to be connected, send in header the following identification :

```json
"trendertokenapi": "you account token"
```

### Rate limit

To prevent for spam, we limited the number of request by 900 for 15 minutes but we can change it at any time. It correspond to 1 by second.


### Error messages

All errors messages are sending with this structure :

```json
{
	error: {
		message: "Error description",
		code: 0
	}
}
```

**JSON Response Codes**

| CODE  | DESCRIPTION                                                          |
| ----- | -------------------------------------------------------------------- |
| 200   | success                                                              |
| 404   | This root doesn't exit                                               |
| 505   | Upload failed                                                        |
| 0     | Invalid parameter                                                    |
| 1     | Invalid email or password                                            |
| 2     | Invalid token provided                                               |
| 3     | Invalid account permission                                           |
| 4     | Invalid birthday                                                     |
| 5     | Invalid captcha                                                      |
| 6     | Invalid file extension                                               |
| 7     | Invalid field name                                                   |
| 8     | Invalid field length                                                 |
| 9     | Invalid request ID or already used                                   |
| 10    | Invalid field size                                                   |
| 11    | Invalid query name                                                   |
| 1000  | Unknown post                                                         |
| 1001  | Unknown user                                                         |
| 1002  | Unknown invite                                                       |
| 1003  | Unknown message                                                      |
| 1004  | Unknown follow                                                       |
| 1005  | Unknown guild                                                        |
| 1006  | Unknown gift code                                                    |
| 1007  | Unknown verification code                                            |
| 1008  | Unknown email                                                        |
| 1009  | Unknown attached post                                                |
| 2000  | Too many requests, please try again after 15 minutes                 |
| 2001  | Maximum number of characters has been reached in a post (1000)       |
| 2002  | Maximum number of characters has been reached in a comment (1000)    |
| 2003  | Maximum number of characters has been reached in a description (120) |
| 3000  | User nickname already taken                                          |
| 3001  | User email already taken                                             |
| 3002  | User banned                                                          |
| 3003  | Access denied the user blocked you                                   |
| 3004  | Access denied this account is private                                |
| 3005  | This account is not verified yet                                     |
| 4000  | User already following                                               |
| 4001  | Follow already accepted                                              |
| 5000  | This user is already blocked                                         |
| 5001  | This user is not blocked                                             |
| 6000  | This user has already been report by you                             |
| 7000  | Your account has been banned                                         |
| 8000  | Post not found                                                       |
| 9000  | Too many parts                                                       |
| 9001  | File too large                                                       |
| 9002  | Too many files                                                       |
| 9003  | Field name too long                                                  |
| 9004  | Field value too long                                                 |
| 9005  | Too many fields                                                      |
| 9006  | Unexpected field                                                     |
| 10000 | Field name missing                                                   |
| 10001 | Missing query field                                                  |

**HTTP Response Codes**

| CODE | DESCRIPTION                     |
| ---- | ------------------------------- |
| 100  | CONTINUE                        |
| 101  | SWITCHING_PROTOCOLS             |
| 102  | PROCESSING                      |
| 200  | OK                              |
| 201  | CREATED                         |
| 202  | ACCEPTED                        |
| 203  | NON_AUTHORITATIVE_INFORMATION   |
| 204  | NO_CONTENT                      |
| 205  | RESET_CONTENT                   |
| 206  | PARTIAL_CONTENT                 |
| 300  | AMBIGUOUS                       |
| 301  | MOVED_PERMANENTLY               |
| 302  | FOUND                           |
| 303  | SEE_OTHER                       |
| 304  | NOT_MODIFIED                    |
| 307  | TEMPORARY_REDIRECT              |
| 308  | PERMANENT_REDIRECT              |
| 400  | BAD_REQUEST                     |
| 401  | UNAUTHORIZED                    |
| 402  | PAYMENT_REQUIRED                |
| 403  | FORBIDDEN                       |
| 404  | NOT_FOUND                       |
| 405  | METHOD_NOT_ALLOWED              |
| 406  | NOT_ACCEPTABLE                  |
| 407  | PROXY_AUTHENTICATION_REQUIRED   |
| 408  | REQUEST_TIMEOUT                 |
| 409  | CONFLICT                        |
| 410  | GONE                            |
| 411  | LENGTH_REQUIRED                 |
| 412  | PRECONDITION_FAILED             |
| 413  | PAYLOAD_TOO_LARGE               |
| 414  | URI_TOO_LONG                    |
| 415  | UNSUPPORTED_MEDIA_TYPE          |
| 416  | REQUESTED_RANGE_NOT_SATISFIABLE |
| 417  | EXPECTATION_FAILED              |
| 418  | I_AM_A_TEAPOT                   |
| 422  | UNPROCESSABLE_ENTITY            |
| 424  | FAILED_DEPENDENCY               |
| 429  | TOO_MANY_REQUESTS               |
| 500  | INTERNAL_SERVER_ERROR           |
| 501  | NOT_IMPLEMENTED                 |
| 502  | BAD_GATEWAY                     |
| 503  | SERVICE_UNAVAILABLE             |
| 504  | GATEWAY_TIMEOUT                 |
| 505  | HTTP_VERSION_NOT_SUPPORTED      |

## Snowflakes

Trender use the same ID's system as Discord and Twitter, called snowflakes ![Snowflakes image](/img/snowflakes.jpg)

## Message Formatting

Trender use a sort of markdown base to render message, but we also added some functionnalies to improve user experience.

| TYPE      | STRUCTURE        | DESCRIPTION                                                    |
| --------- | ---------------- | -------------------------------------------------------------- |
| Bold      | \*\*text\*\*     | Bold the text `/(\*\*.+\*\*)/gi`                               |
| Underline | \_\_text\_\_     | Underline the text `/(\_\_.+\_\_)/gi`                          |
| Code      | \`\`\`text\`\`\` | For code text formating ```/(\`\`\`.+\n[\s\S]*?\n\`\`\`)/gi``` |
| Mention   | <@user_id>       | Tag a user `/(<@.+>)/gi`                                       |
| Hashtags  | <#text>          | Use hashtag `/(<#.+>)/gi`                                      |

## CDN

### Files base url

```
https://cdn.trenderapp.com/
```

| TYPE                 | PATH                                         | SUPPORT                                             |
| -------------------- | -------------------------------------------- | --------------------------------------------------- |
| Profile Avatars      | profile_avatars/**user_id**/**image.png**    | png, jpeg, jpg                                      |
| Profile Banners      | profile_banners/**user_id**/**image.png**    | png, jpeg, jpg                                      |
| Posts Attachments    | posts/**user_id**/**post_id**/**file**       | png, jpeg, jpg, webp, gif, mp4, mov, webm, mp3, wav |
| Messages Attachments | messages/**user_id**/**message_id**/**file** | png, jpeg, jpg, webp, gif, mp4, mov, webm, mp3, wav |

### Uploading files

All files as to be sent at :

```
{{apiurl}}/upload?type=
```

With a formData body with one or all your files the key of the files must be the same as the type. The total size of your file depend of the type of your account.

Where the type can be :

| TYPE   | DESCRIPTION                  | Max Files                             |
| ------ | -----------------------------| ------------------------------------- |
| banner | Change your banner account   | 1                                     |
| avatar | Change your avatar account   | 1                                     |
| posts  | Upload file to create a post | 8 for images but 1 for video or music |

And you will receive a response with the error of the upload or a `200 SUCCESS` with this informations :

```json
{
	"request_id": "290503551044681728",
    "type": 1,
    "attachments": [
        {
            "id": "290503551090819073",
            "name": "o4KCC_2.gif",
            "size": 9452,
            "mimetype": "image/gif",
            "created_at": "2022-03-12T15:17:23.876Z"
        },
        {
            "id": "290503551095013378",
            "name": "ccJ4i_512.png",
            "size": 22837,
            "mimetype": "image/png",
            "created_at": "2022-03-12T15:17:23.876Z"
        },
        {
            "id": "290503551095013379",
            "name": "2P61f_log.png",
            "size": 38465,
            "mimetype": "image/png",
            "created_at": "2022-03-12T15:17:23.876Z"
        }
    ]
}
```

The type correspond to the type of files sent :

| NUMBER | FILE TYPE |
| ------ | --------- |
| 0      | NONE      |
| 1      | IMAGE     |
| 2      | VIDEO     |
| 3      | MUSIC     |
| 4      | OTHER     |

To use the file send all the request you receive into your request.
The files will automaticly deleted after 1 hour if you didn't use it.

## Locales

| LOCALE | LANGUAGE NAME |
| ------ | ------------- |
| fr     | French        |
| en     | English       |

  
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

- `[`  `!`  `@`  `#`  `$`  `%`  `^`  `&`  `*`  `(`  `)`  `+`  `-`  `=`  `\`  `{`  `}`  `;`  `'`  `:`  `"`  `/`  `|`  `,`  `.`  `<`  `>`  `?`  `]`

  

## Account structure

  

| FIELD        | TYPE      | DESCRIPTION                            |
| ------------ | --------- | -------------------------------------- |
| user_id      | snowflake | unique ID of the account               |
| email        | string    | the user's email                       |
| username     | string    | displayed name of the account          |
| nickname     | string    | unique name of the account             |
| description? | string    | description of the account             |
| avatar       | string    | the user's avatar                      |
| link?        | string    | the user's gived link                  |
| banner?      | string    | the user's banner                      |
| accent_color | string    | the user's account color               |
| locale       | string    | the user's chosen language             |
| verified     | boolean   | verified user email                    |
| certified    | boolean   | certified account                      |
| flags        | integer   | the user's flags                       |
| is_private   | boolean   | private account                        |
| allow_mp     | boolean   | account accept public private messages |
| theme        | string    | theme of the account                   |
| premium_type | integer   | account subscription type              |

  

### Exemple account structure

  

```json

{
	"user_id": "227139578069385220",
	"email": "contact@trenderapp.com",
	"username": "Trender",
	"nickname": "trender",
	"description": "Welcome to Trender",
	"avatar": "mYNwAwEzsoZVZXM1sF4K_trender_255.png",
	"banner": "9NpgkVUFyLUm3nAZ8xFd_login_background.jpg",
	"accent_color": "#14141b",
	"locale": "fr",
	"verified": true,
	"certified": true,
	"flags": 20,
	"is_private": false,
	"allow_mp": true,
	"theme": "blue",
	"premium_type": 3,
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

![Bitfield et flags (bitwise operations)](/img/bitwise.jpg)

## Premium Types

| VALUE | DESCRIPTION                  |
| ----- | ---------------------------- |
| 0     | None                         | None |
| 1     | Normal                       |
| 2     | Shared with partners project |
| 3     | All advantages               |