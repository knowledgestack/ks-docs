# UpdateInviteRequest

Partial update for an invite (admin/owner only).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_at** | **datetime** |  | [optional] 
**groups** | **List[UUID]** |  | [optional] 

## Example

```python
from ksapi.models.update_invite_request import UpdateInviteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateInviteRequest from a JSON string
update_invite_request_instance = UpdateInviteRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateInviteRequest.to_json())

# convert the object into a dict
update_invite_request_dict = update_invite_request_instance.to_dict()
# create an instance of UpdateInviteRequest from a dict
update_invite_request_from_dict = UpdateInviteRequest.from_dict(update_invite_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


