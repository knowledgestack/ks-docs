# GroupResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | 
**tenant_id** | **UUID** |  | 
**name** | **str** |  | 
**description** | **str** |  | 
**idp_group_id** | **str** |  | [optional] 
**member_count** | **int** |  | [optional] 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from ksapi.models.group_response import GroupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GroupResponse from a JSON string
group_response_instance = GroupResponse.from_json(json)
# print the JSON string representation of the object
print(GroupResponse.to_json())

# convert the object into a dict
group_response_dict = group_response_instance.to_dict()
# create an instance of GroupResponse from a dict
group_response_from_dict = GroupResponse.from_dict(group_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


