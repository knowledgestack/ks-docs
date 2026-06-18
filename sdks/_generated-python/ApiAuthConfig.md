# ApiAuthConfig

Auth header to inject on every request. ``header_value`` is write-only.  Inherits ``extra=\"forbid\"`` so a typo'd field (e.g. ``header_values``) is rejected rather than silently dropped — this object carries the secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header_name** | **str** |  | 
**header_value** | **str** |  | 

## Example

```python
from ksapi.models.api_auth_config import ApiAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ApiAuthConfig from a JSON string
api_auth_config_instance = ApiAuthConfig.from_json(json)
# print the JSON string representation of the object
print(ApiAuthConfig.to_json())

# convert the object into a dict
api_auth_config_dict = api_auth_config_instance.to_dict()
# create an instance of ApiAuthConfig from a dict
api_auth_config_from_dict = ApiAuthConfig.from_dict(api_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


