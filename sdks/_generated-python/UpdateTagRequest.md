# UpdateTagRequest

Request to update a tag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | New tag name | [optional] 
**color** | **str** | New tag color as 6-character hex string | [optional] 
**description** | **str** | New tag description (empty string to clear) | [optional] 

## Example

```python
from ksapi.models.update_tag_request import UpdateTagRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTagRequest from a JSON string
update_tag_request_instance = UpdateTagRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateTagRequest.to_json())

# convert the object into a dict
update_tag_request_dict = update_tag_request_instance.to_dict()
# create an instance of UpdateTagRequest from a dict
update_tag_request_from_dict = UpdateTagRequest.from_dict(update_tag_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


