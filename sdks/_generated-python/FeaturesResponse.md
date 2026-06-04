# FeaturesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**google_login_enabled** | **bool** |  | 
**microsoft_login_enabled** | **bool** |  | 
**github_login_enabled** | **bool** |  | 
**sms_login_enabled** | **bool** |  | 
**default_frontend_language** | [**SupportedLanguage**](SupportedLanguage.md) |  | 

## Example

```python
from ksapi.models.features_response import FeaturesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FeaturesResponse from a JSON string
features_response_instance = FeaturesResponse.from_json(json)
# print the JSON string representation of the object
print(FeaturesResponse.to_json())

# convert the object into a dict
features_response_dict = features_response_instance.to_dict()
# create an instance of FeaturesResponse from a dict
features_response_from_dict = FeaturesResponse.from_dict(features_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


