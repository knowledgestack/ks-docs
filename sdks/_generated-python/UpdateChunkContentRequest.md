# UpdateChunkContentRequest

Request to update chunk content (creates new content row).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | New chunk text content | 

## Example

```python
from ksapi.models.update_chunk_content_request import UpdateChunkContentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateChunkContentRequest from a JSON string
update_chunk_content_request_instance = UpdateChunkContentRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateChunkContentRequest.to_json())

# convert the object into a dict
update_chunk_content_request_dict = update_chunk_content_request_instance.to_dict()
# create an instance of UpdateChunkContentRequest from a dict
update_chunk_content_request_from_dict = UpdateChunkContentRequest.from_dict(update_chunk_content_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


