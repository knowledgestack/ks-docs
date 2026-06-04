# SSOInitiateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redirect_url** | **str** |  | 

## Example

```python
from ksapi.models.sso_initiate_response import SSOInitiateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SSOInitiateResponse from a JSON string
sso_initiate_response_instance = SSOInitiateResponse.from_json(json)
# print the JSON string representation of the object
print(SSOInitiateResponse.to_json())

# convert the object into a dict
sso_initiate_response_dict = sso_initiate_response_instance.to_dict()
# create an instance of SSOInitiateResponse from a dict
sso_initiate_response_from_dict = SSOInitiateResponse.from_dict(sso_initiate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


