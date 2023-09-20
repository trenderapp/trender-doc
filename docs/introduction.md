---
id: docs
title: Introduction
description: All you need to know before starting using the API
slug: /
sidebar_position: 0
---

# API References

## Base URL

- You have two different ways to work with the REST API :
    

| Version        | URL                                                           |
| -------------- | ------------------------------------------------------------- |
| Stable Version | [https://api.trenderapp.com](https://api.trenderapp.com)      |
| Beta Version   | [https://api.beta.trenderapp.com](https://api.trenderapp.com) |

## Stable versions

- You have two different ways to work with the REST API :
    

| Version | Status | URL     |
| ------- | ------ | ------- |
| 4       | Online | /v4     |
| 3       | Down   | /v3     |
| 2       | Down   | /api/v2 |
| 1       | Down   | /api/v1 |

## Websocket URL

| Version        | URL                           |
| -------------- | ----------------------------- |
| Stable Version | wss://api.trenderapp.com      |
| Beta Version   | wss://api.beta.trenderapp.com |

## Account Token

Your account token is a unique token use to access to the API with your account authorization.  
It's totaly private, never share it with anyone and we will never ask you to send it to us.  
We can't renew it and we are not responsible in case of leak or something else if your token is share on the internet.

However you can revoke all token by changing you password or directly via a mobile app.

## Authorization API KEY

You must send your Trener API Key for each request to access to the API except to some public API call.

- The Key name is **trendertokenapi**
- The Key value is **your account token**

## Rate limit

To prevent for spam, we limited the number of request by 900 for 15 minutes but we can change it at any time. It correspond to 1 by second.

| Header                    | Type     | Description                                      |
| ------------------------- | -------- | ------------------------------------------------ |
| `X-RateLimit-Limit`       | `number` | Maximum number of calls allowed for this bucket. |
| `X-RateLimit-Bucket`      | `string` | Unique identifier for this bucket.               |
| `X-RateLimit-Remaining`   | `number` | Remaining number of calls left for this bucket.  |
| `X-RateLimit-Reset-After` | `number` | Milliseconds left until calls are replenished.   |


## Error messages

All errors messages are sending with this structure :

```json
{
	"error": {
		"message": "Error description",
		"code": 0
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

