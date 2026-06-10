# ItemPermissions

Caller's authorization on an item: whether an action is permitted.  Authorization only — not whether it will currently succeed. An authorized write/delete can still be refused by transient state on the same response: a run's ``execution_state`` (e.g. not IN_PROGRESS to delete), a ``system_managed`` item, or a document that is ``approval_state``-sealed or checked out by another user (see authorization.md §5.6). Ladder: ``can_delete`` ⟹ ``can_write`` ⟹ ``can_read``; ``can_approve`` is orthogonal and always false for agents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_read** | **bool** | False only on a navigation-ancestor row (visible to traverse, not open). | 
**can_write** | **bool** | Authorized to create/update. Run: triggerer-or-admin, not path-based. | 
**can_delete** | **bool** | Authorized to delete. Run: triggerer-or-admin. | 
**can_approve** | **bool** | Authorized to approve/unapprove. Always false for agents (assumed). | 

## Example

```python
from ksapi.models.item_permissions import ItemPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of ItemPermissions from a JSON string
item_permissions_instance = ItemPermissions.from_json(json)
# print the JSON string representation of the object
print(ItemPermissions.to_json())

# convert the object into a dict
item_permissions_dict = item_permissions_instance.to_dict()
# create an instance of ItemPermissions from a dict
item_permissions_from_dict = ItemPermissions.from_dict(item_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


