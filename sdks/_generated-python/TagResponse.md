# TagResponse

Tag response model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | Tag ID | 
**name** | **str** | Tag name | 
**color** | **str** | Tag color hex | 
**description** | **str** | Tag description | [optional] 
**tenant_id** | **UUID** | Tenant ID | 
**created_at** | **datetime** | Creation timestamp | 
**updated_at** | **datetime** | Last update timestamp | 

## Example

```python
from ksapi.models.tag_response import TagResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TagResponse from a JSON string
tag_response_instance = TagResponse.from_json(json)
# print the JSON string representation of the object
print(TagResponse.to_json())

# convert the object into a dict
tag_response_dict = tag_response_instance.to_dict()
# create an instance of TagResponse from a dict
tag_response_from_dict = TagResponse.from_dict(tag_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


