# EmailDeltaLinkRequest

Where one folder's walk got to, recorded the moment it got there.  Written per folder rather than once per run on purpose: a run that dies after the second of four folders keeps what the first two earned, and the two that did not finish are re-walked instead of all four.  Safe to record as soon as Graph hands it over, because Graph only hands it over when a folder's pages have run out — every mail behind it has already been through this activity by then.  Carries no tenant or connector id: it is posted to the connector's own ``/v1`` route, so the connector comes from the path and the tenant from the caller's token rather than from the body. A body that named them could name a different tenant's.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder** | **str** |  | 
**delta_link** | **str** | Graph&#39;s own @odata.deltaLink, stored verbatim. Opaque except for its origin, which must be the connector&#39;s own resource host: the worker fetches this with the mailbox&#39;s bearer token attached. | 

## Example

```python
from ksapi.models.email_delta_link_request import EmailDeltaLinkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EmailDeltaLinkRequest from a JSON string
email_delta_link_request_instance = EmailDeltaLinkRequest.from_json(json)
# print the JSON string representation of the object
print(EmailDeltaLinkRequest.to_json())

# convert the object into a dict
email_delta_link_request_dict = email_delta_link_request_instance.to_dict()
# create an instance of EmailDeltaLinkRequest from a dict
email_delta_link_request_from_dict = EmailDeltaLinkRequest.from_dict(email_delta_link_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


