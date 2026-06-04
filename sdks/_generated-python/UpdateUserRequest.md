# UpdateUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_tenant_id** | **UUID** | Default tenant ID the user shall be logged into | [optional] 
**first_name** | **str** | First name of the user | [optional] 
**last_name** | **str** | Last name of the user | [optional] 

## Example

```python
from ksapi.models.update_user_request import UpdateUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateUserRequest from a JSON string
update_user_request_instance = UpdateUserRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateUserRequest.to_json())

# convert the object into a dict
update_user_request_dict = update_user_request_instance.to_dict()
# create an instance of UpdateUserRequest from a dict
update_user_request_from_dict = UpdateUserRequest.from_dict(update_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


