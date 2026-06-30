# SheetVisibilityChange

A worksheet that became hidden or visible.  Hidden data is an audit red flag (a sheet quietly hidden between versions), so a ``visible``↔``hidden``/``veryHidden`` transition is surfaced. ``old_state``/ ``new_state`` is null when the sheet was added or removed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sheet** | **str** |  | 
**old_state** | **str** |  | 
**new_state** | **str** |  | 

## Example

```python
from ksapi.models.sheet_visibility_change import SheetVisibilityChange

# TODO update the JSON string below
json = "{}"
# create an instance of SheetVisibilityChange from a JSON string
sheet_visibility_change_instance = SheetVisibilityChange.from_json(json)
# print the JSON string representation of the object
print(SheetVisibilityChange.to_json())

# convert the object into a dict
sheet_visibility_change_dict = sheet_visibility_change_instance.to_dict()
# create an instance of SheetVisibilityChange from a dict
sheet_visibility_change_from_dict = SheetVisibilityChange.from_dict(sheet_visibility_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


