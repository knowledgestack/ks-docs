# AccessRequestResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested_at** | **datetime** | When this member&#39;s request was recorded. A repeat inside the daily window returns the original request and sends no second email. | 

## Example

```python
from ksapi.models.access_request_response import AccessRequestResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccessRequestResponse from a JSON string
access_request_response_instance = AccessRequestResponse.from_json(json)
# print the JSON string representation of the object
print(AccessRequestResponse.to_json())

# convert the object into a dict
access_request_response_dict = access_request_response_instance.to_dict()
# create an instance of AccessRequestResponse from a dict
access_request_response_from_dict = AccessRequestResponse.from_dict(access_request_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


