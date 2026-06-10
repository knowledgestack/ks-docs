# DiffRow

One aligned side-by-side row.  ``left`` is the old version, ``right`` is the new. For ``equal`` both are present; ``delete`` has left only; ``insert`` has right only; ``replace`` has both plus ``left_spans`` / ``right_spans`` marking the changed words. Line numbers are 1-based and null on the absent side.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**DiffRowType**](DiffRowType.md) |  | 
**left_no** | **int** |  | [optional] 
**left** | **str** |  | [optional] 
**right_no** | **int** |  | [optional] 
**right** | **str** |  | [optional] 
**left_spans** | [**List[DiffSpan]**](DiffSpan.md) |  | [optional] 
**right_spans** | [**List[DiffSpan]**](DiffSpan.md) |  | [optional] 

## Example

```python
from ksapi.models.diff_row import DiffRow

# TODO update the JSON string below
json = "{}"
# create an instance of DiffRow from a JSON string
diff_row_instance = DiffRow.from_json(json)
# print the JSON string representation of the object
print(DiffRow.to_json())

# convert the object into a dict
diff_row_dict = diff_row_instance.to_dict()
# create an instance of DiffRow from a dict
diff_row_from_dict = DiffRow.from_dict(diff_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


