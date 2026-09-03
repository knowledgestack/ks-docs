# TranscriptionsApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTranscription**](TranscriptionsApi.md#createtranscription) | **POST** /v1/transcriptions | Create Transcription Handler |



## createTranscription

> TranscriptionResponse createTranscription(file, language)

Create Transcription Handler

Transcribe a short spoken clip to text.  **Answers synchronously.** Unlike document ingestion there is no &#x60;Location&#x60; header and nothing to poll — the transcript is in the response body. Expect roughly a second per 10s of audio.  Send &#x60;multipart/form-data&#x60; with a &#x60;file&#x60; part; add &#x60;language&#x60; only to pin &#x60;zh&#x60; or &#x60;en&#x60; instead of auto-detecting. The clip is re-encoded server-side to mono 16 kHz mp3, so any listed container works.  Limits: **25 MiB** and **5 min** per clip.  Errors, all carrying the standard &#x60;code&#x60;/&#x60;request_id&#x60; body: &#x60;413&#x60; clip over either limit · &#x60;415&#x60; content type not accepted · &#x60;422&#x60; empty clip, or audio that could not be decoded · &#x60;503&#x60; the speech backend is unreachable or unconfigured.  The audio is held for one ASR call and never persisted; the transcript is never logged.

### Example

```ts
import {
  Configuration,
  TranscriptionsApi,
} from '@knowledge-stack/ksapi';
import type { CreateTranscriptionRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TranscriptionsApi(config);

  const body = {
    // Blob | The audio clip. Accepts what a browser records (audio/webm, audio/ogg, audio/mp4) plus audio/mpeg, audio/wav and audio/flac. Re-encoded server-side, so the container does not have to match the backend.
    file: BINARY_DATA_HERE,
    // SupportedLanguage (optional)
    language: ...,
  } satisfies CreateTranscriptionRequest;

  try {
    const data = await api.createTranscription(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **file** | `Blob` | The audio clip. Accepts what a browser records (audio/webm, audio/ogg, audio/mp4) plus audio/mpeg, audio/wav and audio/flac. Re-encoded server-side, so the container does not have to match the backend. | [Defaults to `undefined`] |
| **language** | `SupportedLanguage` |  | [Optional] [Defaults to `undefined`] [Enum: en, zh] |

### Return type

[**TranscriptionResponse**](TranscriptionResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

