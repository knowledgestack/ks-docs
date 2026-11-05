# ItemPermissions

Caller's authorization on an item: whether an action is permitted.  Authorization only — not whether it will currently succeed. An authorized write/delete can still be refused by transient state on the same response: a run's ``execution_state`` (e.g. not IN_PROGRESS to delete), a ``system_managed`` item, or a document that is ``approval_state``-sealed or checked out by another user. Stored path grants require delete → write → read; approval requires read independently of write/delete. Workflow-run permissions also use ownership rules. ``can_approve`` is always false for agents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_read** | **bool** | Authorized to read content; navigation visibility alone does not grant read. | 
**can_write** | **bool** | Authorized to create/update. Run: triggerer-or-admin, not path-based. | 
**can_delete** | **bool** | Authorized to delete. Run: triggerer-or-admin. | 
**can_approve** | **bool** | Authorized to approve/unapprove. Always false for agents (assumed). | 
**can_grant_permissions** | **bool** | Authorized to manage user and group grants on this subtree. | 

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


