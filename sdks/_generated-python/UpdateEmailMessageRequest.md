# UpdateEmailMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | [optional] 
**recipients** | **List[str]** |  | [optional] 
**cc_recipients** | **List[str]** |  | [optional] 
**bcc_recipients** | **List[str]** |  | [optional] 
**content** | **str** |  | [optional] 

## Example

```python
from ksapi.models.update_email_message_request import UpdateEmailMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateEmailMessageRequest from a JSON string
update_email_message_request_instance = UpdateEmailMessageRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateEmailMessageRequest.to_json())

# convert the object into a dict
update_email_message_request_dict = update_email_message_request_instance.to_dict()
# create an instance of UpdateEmailMessageRequest from a dict
update_email_message_request_from_dict = UpdateEmailMessageRequest.from_dict(update_email_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


