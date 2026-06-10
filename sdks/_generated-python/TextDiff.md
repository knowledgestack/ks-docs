# TextDiff

A computed side-by-side diff of two texts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rows** | [**List[DiffRow]**](DiffRow.md) |  | 
**added** | **int** |  | 
**removed** | **int** |  | 
**changed** | **int** |  | 
**truncated** | **bool** |  | 

## Example

```python
from ksapi.models.text_diff import TextDiff

# TODO update the JSON string below
json = "{}"
# create an instance of TextDiff from a JSON string
text_diff_instance = TextDiff.from_json(json)
# print the JSON string representation of the object
print(TextDiff.to_json())

# convert the object into a dict
text_diff_dict = text_diff_instance.to_dict()
# create an instance of TextDiff from a dict
text_diff_from_dict = TextDiff.from_dict(text_diff_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


