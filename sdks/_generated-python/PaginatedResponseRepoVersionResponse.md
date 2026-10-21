# PaginatedResponseRepoVersionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[RepoVersionResponse]**](RepoVersionResponse.md) | List of items | 
**total** | **int** | Total number of items | 
**limit** | **int** | Number of items per page | 
**offset** | **int** | Number of items to skip | 

## Example

```python
from ksapi.models.paginated_response_repo_version_response import PaginatedResponseRepoVersionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedResponseRepoVersionResponse from a JSON string
paginated_response_repo_version_response_instance = PaginatedResponseRepoVersionResponse.from_json(json)
# print the JSON string representation of the object
print(PaginatedResponseRepoVersionResponse.to_json())

# convert the object into a dict
paginated_response_repo_version_response_dict = paginated_response_repo_version_response_instance.to_dict()
# create an instance of PaginatedResponseRepoVersionResponse from a dict
paginated_response_repo_version_response_from_dict = PaginatedResponseRepoVersionResponse.from_dict(paginated_response_repo_version_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


