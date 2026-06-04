# AncestryResponse

Response containing the ancestry chain from root to target (inclusive).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ancestors** | [**List[PathPartAncestorItem]**](PathPartAncestorItem.md) | Ancestors ordered root-to-leaf | 

## Example

```python
from ksapi.models.ancestry_response import AncestryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AncestryResponse from a JSON string
ancestry_response_instance = AncestryResponse.from_json(json)
# print the JSON string representation of the object
print(AncestryResponse.to_json())

# convert the object into a dict
ancestry_response_dict = ancestry_response_instance.to_dict()
# create an instance of AncestryResponse from a dict
ancestry_response_from_dict = AncestryResponse.from_dict(ancestry_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


