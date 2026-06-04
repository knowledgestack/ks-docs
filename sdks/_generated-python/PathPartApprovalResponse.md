# PathPartApprovalResponse

Current approval decision over any path_part (file or folder).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | 
**path_part_id** | **UUID** |  | 
**status** | [**PathPartApprovalDecision**](PathPartApprovalDecision.md) |  | 
**reviewer_id** | **UUID** |  | 
**reviewed_at** | **datetime** |  | 
**reason** | **str** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from ksapi.models.path_part_approval_response import PathPartApprovalResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PathPartApprovalResponse from a JSON string
path_part_approval_response_instance = PathPartApprovalResponse.from_json(json)
# print the JSON string representation of the object
print(PathPartApprovalResponse.to_json())

# convert the object into a dict
path_part_approval_response_dict = path_part_approval_response_instance.to_dict()
# create an instance of PathPartApprovalResponse from a dict
path_part_approval_response_from_dict = PathPartApprovalResponse.from_dict(path_part_approval_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


