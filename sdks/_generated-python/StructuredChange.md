# StructuredChange

One changed key-path in a JSON/YAML document.  ``path`` is a dotted/indexed locator like ``services.web.image`` or ``items[3].qty``. ``old`` is null for added, ``new`` is null for removed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** |  | 
**old** | **str** |  | 
**new** | **str** |  | 
**type** | [**StructuredChangeType**](StructuredChangeType.md) |  | 

## Example

```python
from ksapi.models.structured_change import StructuredChange

# TODO update the JSON string below
json = "{}"
# create an instance of StructuredChange from a JSON string
structured_change_instance = StructuredChange.from_json(json)
# print the JSON string representation of the object
print(StructuredChange.to_json())

# convert the object into a dict
structured_change_dict = structured_change_instance.to_dict()
# create an instance of StructuredChange from a dict
structured_change_from_dict = StructuredChange.from_dict(structured_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


