# StructuredDiff

A key-path diff of two JSON/YAML versions.  ``added``/``removed``/``modified`` are full totals; ``changes`` is capped at the engine limit and ``omitted`` reports exactly how many were dropped, so a truncated diff never silently hides a change.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changes** | [**List[StructuredChange]**](StructuredChange.md) |  | 
**added** | **int** |  | 
**removed** | **int** |  | 
**modified** | **int** |  | 
**truncated** | **bool** |  | 
**omitted** | **int** |  | 

## Example

```python
from ksapi.models.structured_diff import StructuredDiff

# TODO update the JSON string below
json = "{}"
# create an instance of StructuredDiff from a JSON string
structured_diff_instance = StructuredDiff.from_json(json)
# print the JSON string representation of the object
print(StructuredDiff.to_json())

# convert the object into a dict
structured_diff_dict = structured_diff_instance.to_dict()
# create an instance of StructuredDiff from a dict
structured_diff_from_dict = StructuredDiff.from_dict(structured_diff_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


