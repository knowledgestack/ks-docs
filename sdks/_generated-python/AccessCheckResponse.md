# AccessCheckResponse

Result of an admin access-check for a target user on a path part.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed** | **bool** | Whether the user has the capability | 
**reason** | **str** | Why access was granted or denied | 
**matched_path** | **str** | The permission path that granted access (None if denied or role bypass) | [optional] 

## Example

```python
from ksapi.models.access_check_response import AccessCheckResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccessCheckResponse from a JSON string
access_check_response_instance = AccessCheckResponse.from_json(json)
# print the JSON string representation of the object
print(AccessCheckResponse.to_json())

# convert the object into a dict
access_check_response_dict = access_check_response_instance.to_dict()
# create an instance of AccessCheckResponse from a dict
access_check_response_from_dict = AccessCheckResponse.from_dict(access_check_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


