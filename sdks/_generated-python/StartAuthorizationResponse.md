# StartAuthorizationResponse

Where to send the resource owner, and how long the link stays usable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_uri** | **str** | Open this in a popup; MSAL built every param | 
**expires_in** | **int** | Seconds the pending authorization lasts | 

## Example

```python
from ksapi.models.start_authorization_response import StartAuthorizationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StartAuthorizationResponse from a JSON string
start_authorization_response_instance = StartAuthorizationResponse.from_json(json)
# print the JSON string representation of the object
print(StartAuthorizationResponse.to_json())

# convert the object into a dict
start_authorization_response_dict = start_authorization_response_instance.to_dict()
# create an instance of StartAuthorizationResponse from a dict
start_authorization_response_from_dict = StartAuthorizationResponse.from_dict(start_authorization_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


