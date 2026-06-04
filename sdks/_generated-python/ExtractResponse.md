# ExtractResponse

Response body for POST /v1/agent/extract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**structured** | **Dict[str, object]** |  | 

## Example

```python
from ksapi.models.extract_response import ExtractResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExtractResponse from a JSON string
extract_response_instance = ExtractResponse.from_json(json)
# print the JSON string representation of the object
print(ExtractResponse.to_json())

# convert the object into a dict
extract_response_dict = extract_response_instance.to_dict()
# create an instance of ExtractResponse from a dict
extract_response_from_dict = ExtractResponse.from_dict(extract_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


