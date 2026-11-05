# ksapi.EmailConnectorsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**complete_email_connector_authorization**](EmailConnectorsApi.md#complete_email_connector_authorization) | **POST** /v1/email-connectors/callback | Complete Email Connector Authorization Handler
[**email_removed**](EmailConnectorsApi.md#email_removed) | **POST** /v1/email-connectors/{data_source_id}/removed | Email Removed Handler
[**email_stored_ids**](EmailConnectorsApi.md#email_stored_ids) | **POST** /v1/email-connectors/{data_source_id}/stored-ids | Email Stored Ids Handler
[**mint_email_access_token**](EmailConnectorsApi.md#mint_email_access_token) | **POST** /v1/email-connectors/{data_source_id}/access-token | Mint Email Access Token Handler
[**record_email_delta_link**](EmailConnectorsApi.md#record_email_delta_link) | **POST** /v1/email-connectors/{data_source_id}/delta-link | Record Email Delta Link Handler
[**record_email_unfinished**](EmailConnectorsApi.md#record_email_unfinished) | **POST** /v1/email-connectors/{data_source_id}/unfinished | Record Email Unfinished Handler
[**start_email_connector_authorization**](EmailConnectorsApi.md#start_email_connector_authorization) | **POST** /v1/email-connectors/{data_source_id}/authorize | Start Email Connector Authorization Handler
[**sync_email_connector**](EmailConnectorsApi.md#sync_email_connector) | **POST** /v1/email-connectors/{data_source_id}/sync | Sync Email Connector Handler
[**test_email_connector**](EmailConnectorsApi.md#test_email_connector) | **POST** /v1/email-connectors/{data_source_id}/test | Test Email Connector Handler


# **complete_email_connector_authorization**
> CompleteAuthorizationResponse complete_email_connector_authorization(complete_authorization_request)

**Synchronous variant:** `complete_email_connector_authorization_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Complete Email Connector Authorization Handler

Redeem the consent the popup brought back.

Called by our own frontend, with its own session: the consent runs in a
popup the page opened, the popup hands the fragment to that page, and the
page posts it here. So this is an ordinary authorized call — it needs
``can_write`` on the connector like every other acting endpoint, and the
tenant comes from the caller rather than from anything the provider
echoed. ``state`` is what finds the parked flow and says which connector
the consent was for; it decides no authority of its own.

The outcome goes back in the response body, to the page that never moved.
A refusal is an ordinary error — ``{detail, code, request_id}`` — and the
handshake's four have their own codes in that closed set:
``consent_refused``, ``no_code``, ``wrong_account`` and ``mailbox_in_use``.
Branch on the code rather than on ``detail``, which is an English literal
in a product that is not.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.complete_authorization_request import CompleteAuthorizationRequest
from ksapi.models.complete_authorization_response import CompleteAuthorizationResponse
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.EmailConnectorsApi(api_client)
    complete_authorization_request = ksapi.CompleteAuthorizationRequest() # CompleteAuthorizationRequest | 

    try:
        # Complete Email Connector Authorization Handler
        api_response = await api_instance.complete_email_connector_authorization(complete_authorization_request)
        print("The response of EmailConnectorsApi->complete_email_connector_authorization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailConnectorsApi->complete_email_connector_authorization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **complete_authorization_request** | [**CompleteAuthorizationRequest**](CompleteAuthorizationRequest.md)|  | 

### Return type

[**CompleteAuthorizationResponse**](CompleteAuthorizationResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **email_removed**
> EmailRemovedResponse email_removed(data_source_id, email_removed_request)

**Synchronous variant:** `email_removed_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Email Removed Handler

Trash the mail this mailbox no longer holds in the folders it walks.

The other half of the sync diff. The tree mirrors the mailbox's send and
receive folders, so a mail that left them is no longer a record of
anything — and the provider reports leaving a folder and nothing finer:
measured on 2026-10-25, a mail deleted and a mail moved to Archive both
came back from the folder's delta as ``@removed`` with
``reason: "deleted"``.

Only the mail this connector records as living in the folder that is
reporting it, which is why the folder is in the body. A delta is per
folder, so a mail moved from Sent to Inbox is reported removed from Sent
while the mailbox still holds it — and the diff is connector-wide, so the
Inbox pass skipped it rather than re-filing it. Trashing on the id alone
took that mail, with both folders' bookmarks advanced so that no later run
ever listed it again.

Trashed, not erased. The path system's trash is the mechanism this product
already has for a removal, and a mail is still there to be looked at;
erasing on request is a separate thing and not this path.

The sync's own identity only, like creating mail here. A connector's
subtree is its crawl's: everything in it is ``system_managed`` precisely
so that nobody edits the record by hand, and a removal that follows the
source is the record changing rather than somebody editing it.

POST for the same reason as the diff: a page's worth of opaque ids is the
request's body in every meaningful sense.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.email_removed_request import EmailRemovedRequest
from ksapi.models.email_removed_response import EmailRemovedResponse
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.EmailConnectorsApi(api_client)
    data_source_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    email_removed_request = ksapi.EmailRemovedRequest() # EmailRemovedRequest | 

    try:
        # Email Removed Handler
        api_response = await api_instance.email_removed(data_source_id, email_removed_request)
        print("The response of EmailConnectorsApi->email_removed:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailConnectorsApi->email_removed: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 
 **email_removed_request** | [**EmailRemovedRequest**](EmailRemovedRequest.md)|  | 

### Return type

[**EmailRemovedResponse**](EmailRemovedResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **email_stored_ids**
> EmailStoredIdsResponse email_stored_ids(data_source_id, email_stored_ids_request)

**Synchronous variant:** `email_stored_ids_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Email Stored Ids Handler

The sync diff for one listing page: which of these ids we already hold.

Asked per page rather than handed over whole at the start of the run. The
id set grows with the mailbox, so shipping it would make the sync work for
a small mailbox and fail outright for a large one.

Answered for the connector rather than for the folder, on purpose: one
mail held by two walked folders must not be stored twice. The folder is
still named, and the mail reported as already stored is recorded as living
in it — the only moment a move between two walked folders is recorded, and
what keeps the folder it left from trashing it when that folder's own
delta reports it gone.

POST rather than GET because the ids are a page's worth of opaque strings;
they do not fit a query string, and they are the request's body in every
meaningful sense. The write it also does makes it a POST twice over.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.email_stored_ids_request import EmailStoredIdsRequest
from ksapi.models.email_stored_ids_response import EmailStoredIdsResponse
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.EmailConnectorsApi(api_client)
    data_source_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    email_stored_ids_request = ksapi.EmailStoredIdsRequest() # EmailStoredIdsRequest | 

    try:
        # Email Stored Ids Handler
        api_response = await api_instance.email_stored_ids(data_source_id, email_stored_ids_request)
        print("The response of EmailConnectorsApi->email_stored_ids:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailConnectorsApi->email_stored_ids: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 
 **email_stored_ids_request** | [**EmailStoredIdsRequest**](EmailStoredIdsRequest.md)|  | 

### Return type

[**EmailStoredIdsResponse**](EmailStoredIdsResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mint_email_access_token**
> EmailAccessToken mint_email_access_token(data_source_id)

**Synchronous variant:** `mint_email_access_token_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Mint Email Access Token Handler

A fresh token for a run that has outlived the one it started with.

A mailbox takes hours to walk and a Graph token lasts about one, so without
this a first sync would spend most of its run being refused — and every
refusal looks like one more unreadable mail, not like an expired token.

POST rather than GET: minting rotates the stored refresh token.

**This connector's own crawl only**, which is the one gate here that is not
a path permission. What comes back is a Graph bearer token, and its reach
is not ours to narrow: a delegated token carries the *consenting mailbox
owner's* permissions, intersected with what the app registration asked for
— never the permissions of whoever called this. So a KS user with read on
one subfolder would get a token that reads the entire mailbox, outside our
permission system and for as long as it lives.

Gated through :func:`is_sync_identity`, the same predicate that
decides who may write inside a connector's subtree — one definition, so
narrowing it narrows both. It asks a token minted through
``/system/auth/assume_user`` (which needs the deployment's admin key, so
no browser session reaches this however privileged) **and** that the
identity is this connector's own owner, which is what its crawl assumes.
A bare "is a service identity" was not enough: every ingestion activity
assumes its uploader and every agent run carries one too, so a user who
happens to be the uploader on an unrelated document could have minted a
token for any mailbox they had write on.

A tenant admin who wants the mail reads it through the mail endpoints,
where our own path scoping still applies.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.email_access_token import EmailAccessToken
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.EmailConnectorsApi(api_client)
    data_source_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Mint Email Access Token Handler
        api_response = await api_instance.mint_email_access_token(data_source_id)
        print("The response of EmailConnectorsApi->mint_email_access_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailConnectorsApi->mint_email_access_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 

### Return type

[**EmailAccessToken**](EmailAccessToken.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **record_email_delta_link**
> record_email_delta_link(data_source_id, email_delta_link_request)

**Synchronous variant:** `record_email_delta_link_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Record Email Delta Link Handler

Record where one folder's walk got to, for the next run to start from.

One folder at a time rather than a whole run's worth, because that is when
the link is earned: Graph hands it over only once a folder's pages have run
out, and a run that dies on the third folder should keep what the first two
did.

Merged into ``sync_state`` rather than replacing it. The other key there is
written by the sync report, and a folder list that changed since the last
run leaves behind links for folders nobody walks any more — harmless, and
cheaper than reconciling them: an unused key costs nothing and a wrong
reconciliation costs a full re-walk.

The crawl calls this as the connector's owner, which is also the gate:
``can_write``, because what it writes is the connector's own cursor. The
tenant comes from the token and the connector from the path, so no body
can name a row in somebody else's workspace — which is what this endpoint
traded away by living under ``/system``, where the tenant was a parameter
the caller chose.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.email_delta_link_request import EmailDeltaLinkRequest
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.EmailConnectorsApi(api_client)
    data_source_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    email_delta_link_request = ksapi.EmailDeltaLinkRequest() # EmailDeltaLinkRequest | 

    try:
        # Record Email Delta Link Handler
        await api_instance.record_email_delta_link(data_source_id, email_delta_link_request)
    except Exception as e:
        print("Exception when calling EmailConnectorsApi->record_email_delta_link: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 
 **email_delta_link_request** | [**EmailDeltaLinkRequest**](EmailDeltaLinkRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **record_email_unfinished**
> record_email_unfinished(data_source_id, email_unfinished_request)

**Synchronous variant:** `record_email_unfinished_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Record Email Unfinished Handler

Record what one folder's pass could not finish, for the next run to retry.

A folder is walked by delta, and a delta returns what *changed* — so a
mail this pass could not store is not listed again unless something about
it changes at the source, which for a mail nobody touches never happens.
Without this ledger the only way not to lose it would be to withhold the
bookmark, which re-walks the whole folder on every run for ever once one
mail goes permanently bad. With it the bookmark is saved as usual and the
few that failed are fetched by id next time.

Replaces that folder's entries rather than merging into them: the pass
that calls this just finished walking that folder, so it knows the whole
answer for it, and anything it managed this time is simply absent from
what it sends. Other folders are untouched — a run walks them in sequence.

Gated like the bookmark: ``can_write`` on the connector *and* the crawl's
own identity, with the tenant from the token and the connector from the
path.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.email_unfinished_request import EmailUnfinishedRequest
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.EmailConnectorsApi(api_client)
    data_source_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    email_unfinished_request = ksapi.EmailUnfinishedRequest() # EmailUnfinishedRequest | 

    try:
        # Record Email Unfinished Handler
        await api_instance.record_email_unfinished(data_source_id, email_unfinished_request)
    except Exception as e:
        print("Exception when calling EmailConnectorsApi->record_email_unfinished: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 
 **email_unfinished_request** | [**EmailUnfinishedRequest**](EmailUnfinishedRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_email_connector_authorization**
> StartAuthorizationResponse start_email_connector_authorization(data_source_id)

**Synchronous variant:** `start_email_connector_authorization_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Start Email Connector Authorization Handler

Build the consent URL from the registration this mailbox carries.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.start_authorization_response import StartAuthorizationResponse
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.EmailConnectorsApi(api_client)
    data_source_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Start Email Connector Authorization Handler
        api_response = await api_instance.start_email_connector_authorization(data_source_id)
        print("The response of EmailConnectorsApi->start_email_connector_authorization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailConnectorsApi->start_email_connector_authorization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 

### Return type

[**StartAuthorizationResponse**](StartAuthorizationResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_email_connector**
> object sync_email_connector(data_source_id)

**Synchronous variant:** `sync_email_connector_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Sync Email Connector Handler

Sync this mailbox now, without waiting for the recurrence.

202, not 200: the crawl is accepted, not finished — a mailbox takes minutes
to hours. A press while this connector is already syncing is refused with
409 by the workflow id rather than queued, so the caller is never told a
crawl started when it did not.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.EmailConnectorsApi(api_client)
    data_source_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Sync Email Connector Handler
        api_response = await api_instance.sync_email_connector(data_source_id)
        print("The response of EmailConnectorsApi->sync_email_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailConnectorsApi->sync_email_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 

### Return type

**object**

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_email_connector**
> TestConnectionResponse test_email_connector(data_source_id)

**Synchronous variant:** `test_email_connector_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Test Email Connector Handler

Whether this mailbox is reachable right now, without starting a sync.

The outcome is in the body with a 200 either way, exactly as the SQL
connectors' test does, so the frontend renders it inline rather than
handling a 400.

Both halves are tested, because either can be what is broken: the stored
grant is refreshed, and the token is then spent on one folder listing
against the directory's own cloud. A grant that refreshes but cannot read
mail is the case a token check alone would call healthy.

Deliberately read-only about ``sync_status``. A connector is marked
NEEDS_REAUTH by the crawl and by the system token endpoint, which are the
paths that were trying to do real work; a probe anyone can press should not
move a working connector's state because the network blinked.

### Example

* Api Key Authentication (cookieAuth):
* Bearer Authentication (bearerAuth):

```python
import ksapi
from ksapi.models.test_connection_response import TestConnectionResponse
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
async with ksapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = ksapi.EmailConnectorsApi(api_client)
    data_source_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Test Email Connector Handler
        api_response = await api_instance.test_email_connector(data_source_id)
        print("The response of EmailConnectorsApi->test_email_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailConnectorsApi->test_email_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_source_id** | **UUID**|  | 

### Return type

[**TestConnectionResponse**](TestConnectionResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

