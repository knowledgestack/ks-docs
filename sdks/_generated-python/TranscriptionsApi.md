# ksapi.TranscriptionsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_transcription**](TranscriptionsApi.md#create_transcription) | **POST** /v1/transcriptions | Create Transcription Handler


# **create_transcription**
> TranscriptionResponse create_transcription(file, language=language)

Create Transcription Handler

Transcribe a short spoken clip to text.

**Answers synchronously.** Unlike document ingestion there is no `Location`
header and nothing to poll — the transcript is in the response body. Expect
roughly a second per 10s of audio.

Send `multipart/form-data` with a `file` part; add `language` only to pin
`zh` or `en` instead of auto-detecting. The clip is re-encoded server-side
to mono 16 kHz mp3, so any listed container works.

Limits: **25 MiB** and **5 min** per clip.

Errors, all carrying the standard `code`/`request_id` body:
`413` clip over either limit · `415` content type not accepted ·
`422` empty clip, or audio that could not be decoded ·
`503` the speech backend is unreachable or unconfigured.

The audio is held for one ASR call and never persisted; the transcript is
never logged.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.supported_language import SupportedLanguage
from ksapi.models.transcription_response import TranscriptionResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Configure Bearer authorization: bearerAuth
configuration = ksapi.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.TranscriptionsApi(api_client)
    file = None # bytes | The audio clip. Accepts what a browser records (audio/webm, audio/ogg, audio/mp4) plus audio/mpeg, audio/wav and audio/flac. Re-encoded server-side, so the container does not have to match the backend.
    language = ksapi.SupportedLanguage() # SupportedLanguage |  (optional)

    try:
        # Create Transcription Handler
        api_response = api_instance.create_transcription(file, language=language)
        print("The response of TranscriptionsApi->create_transcription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscriptionsApi->create_transcription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **bytes**| The audio clip. Accepts what a browser records (audio/webm, audio/ogg, audio/mp4) plus audio/mpeg, audio/wav and audio/flac. Re-encoded server-side, so the container does not have to match the backend. | 
 **language** | [**SupportedLanguage**](SupportedLanguage.md)|  | [optional] 

### Return type

[**TranscriptionResponse**](TranscriptionResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

