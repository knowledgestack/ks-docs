# SetApprovalStateRequest

Body for ``POST /v1/path-parts/{path_part_id}/approval``.  Single endpoint covers every transition in the state machine:  * ``{state: \"pending\"}`` — request approval (from ``not_required``) OR   unapprove (from ``approved``). Server dispatches on current state. * ``{state: \"approved\", reason?}`` — approve. For folders, fails 409   if any descendant is still ``pending``. ``reason`` is an optional   reviewer note persisted on the audit row.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | Target approval state. &#x60;&#x60;pending&#x60;&#x60; means &#39;request approval&#39; (from not_required) or &#39;unapprove&#39; (from approved) — server dispatches on current state. | 
**reason** | **str** | Optional reviewer note attached to the decision. | [optional] 

## Example

```python
from ksapi.models.set_approval_state_request import SetApprovalStateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetApprovalStateRequest from a JSON string
set_approval_state_request_instance = SetApprovalStateRequest.from_json(json)
# print the JSON string representation of the object
print(SetApprovalStateRequest.to_json())

# convert the object into a dict
set_approval_state_request_dict = set_approval_state_request_instance.to_dict()
# create an instance of SetApprovalStateRequest from a dict
set_approval_state_request_from_dict = SetApprovalStateRequest.from_dict(set_approval_state_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


