# PaginatedResponseGroupPermissionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[GroupPermissionResponse]**](GroupPermissionResponse.md) | List of items | 
**total** | **int** | Total number of items | 
**limit** | **int** | Number of items per page | 
**offset** | **int** | Number of items to skip | 

## Example

```python
from ksapi.models.paginated_response_group_permission_response import PaginatedResponseGroupPermissionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedResponseGroupPermissionResponse from a JSON string
paginated_response_group_permission_response_instance = PaginatedResponseGroupPermissionResponse.from_json(json)
# print the JSON string representation of the object
print(PaginatedResponseGroupPermissionResponse.to_json())

# convert the object into a dict
paginated_response_group_permission_response_dict = paginated_response_group_permission_response_instance.to_dict()
# create an instance of PaginatedResponseGroupPermissionResponse from a dict
paginated_response_group_permission_response_from_dict = PaginatedResponseGroupPermissionResponse.from_dict(paginated_response_group_permission_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


