# ExtractRequest

Request body for POST /v1/agent/extract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prompt** | **str** | User prompt passed directly to the agent | 
**schema_path_part_id** | **UUID** | PathPart ID of a KS document whose content is a JSON schema. | [optional] 
**output_schema** | **Dict[str, object]** | JSON schema provided inline as a dict. Mutually exclusive with schema_path_part_id; exactly one is required. | [optional] 

## Example

```python
from ksapi.models.extract_request import ExtractRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExtractRequest from a JSON string
extract_request_instance = ExtractRequest.from_json(json)
# print the JSON string representation of the object
print(ExtractRequest.to_json())

# convert the object into a dict
extract_request_dict = extract_request_instance.to_dict()
# create an instance of ExtractRequest from a dict
extract_request_from_dict = ExtractRequest.from_dict(extract_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


