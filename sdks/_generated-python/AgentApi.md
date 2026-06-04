# ksapi.AgentApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agent_ask**](AgentApi.md#agent_ask) | **POST** /v1/agent/ask | Agent Ask Handler
[**agent_extract**](AgentApi.md#agent_extract) | **POST** /v1/agent/extract | Agent Extract Handler


# **agent_ask**
> AskResponse agent_ask(ask_request, authorization=authorization, ks_uat=ks_uat)

Agent Ask Handler

Run a one-shot text agent request to completion and return the payload.

The request blocks until the underlying Temporal workflow finishes.
Clients should set a generous HTTP timeout to accommodate tool-heavy runs.

Quota: consumes one MESSAGE before ``start_workflow``. Refund
semantics distinguish cause:

* **Cancellation** (client disconnect → ``asyncio.CancelledError``,
  OR explicit ``DELETE /v1/workflows/{id}`` while we await
  ``handle.result()`` → Temporal-wrapped ``CancelledError``)
  → **NO REFUND.** The user walked away or actively cancelled;
  that's their volition. We still best-effort cancel the
  workflow so the agent stops burning LLM tokens, but the
  consume stays charged. Detection uses
  ``temporalio.exceptions.is_cancelled_exception`` which spans
  both forms.
* Any other exception (pre-enqueue ``start_workflow`` raise,
  Temporal failure, workflow-internal error) → **REFUND.** Server
  / our-problem failures don't bill the user.

### Example


```python
import ksapi
from ksapi.models.ask_request import AskRequest
from ksapi.models.ask_response import AskResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.AgentApi(api_client)
    ask_request = ksapi.AskRequest() # AskRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Agent Ask Handler
        api_response = api_instance.agent_ask(ask_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of AgentApi->agent_ask:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentApi->agent_ask: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ask_request** | [**AskRequest**](AskRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**AskResponse**](AskResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **agent_extract**
> ExtractResponse agent_extract(extract_request, authorization=authorization, ks_uat=ks_uat)

Agent Extract Handler

Run a one-shot structured extraction request and return the payload.

Validates the schema input on the route side (DOCUMENT → active
version → valid JSON object) BEFORE consuming quota or starting
the workflow. Bad schema → 400 with no quota debit. The workflow
activity trusts the input and does not re-validate.

Quota: consumes one MESSAGE before ``start_workflow``. Refunds on
any failure between consume and ``handle.result()`` returning —
pre-enqueue ``start_workflow`` raises and post-enqueue workflow
failures both refund.

### Example


```python
import ksapi
from ksapi.models.extract_request import ExtractRequest
from ksapi.models.extract_response import ExtractResponse
from ksapi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8000
# See configuration.py for a list of all supported configuration parameters.
configuration = ksapi.Configuration(
    host = "http://localhost:8000"
)


# Enter a context with an instance of the API client
with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.AgentApi(api_client)
    extract_request = ksapi.ExtractRequest() # ExtractRequest | 
    authorization = 'authorization_example' # str |  (optional)
    ks_uat = 'ks_uat_example' # str |  (optional)

    try:
        # Agent Extract Handler
        api_response = api_instance.agent_extract(extract_request, authorization=authorization, ks_uat=ks_uat)
        print("The response of AgentApi->agent_extract:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentApi->agent_extract: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extract_request** | [**ExtractRequest**](ExtractRequest.md)|  | 
 **authorization** | **str**|  | [optional] 
 **ks_uat** | **str**|  | [optional] 

### Return type

[**ExtractResponse**](ExtractResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

