# PaginatedResponseUserInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[UserInfo]**](UserInfo.md) | List of items | 
**total** | **int** | Total number of items | 
**limit** | **int** | Number of items per page | 
**offset** | **int** | Number of items to skip | 

## Example

```python
from ksapi.models.paginated_response_user_info import PaginatedResponseUserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedResponseUserInfo from a JSON string
paginated_response_user_info_instance = PaginatedResponseUserInfo.from_json(json)
# print the JSON string representation of the object
print(PaginatedResponseUserInfo.to_json())

# convert the object into a dict
paginated_response_user_info_dict = paginated_response_user_info_instance.to_dict()
# create an instance of PaginatedResponseUserInfo from a dict
paginated_response_user_info_from_dict = PaginatedResponseUserInfo.from_dict(paginated_response_user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


