---
title: Files
description: All you need to know about file system
---

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
