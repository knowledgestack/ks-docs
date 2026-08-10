# BulkFailureReason

Why a single item in a bulk operation was not applied.  Every value is produced by a specific, pre-checked gate — an *unexpected* per-item error is deliberately not caught (it surfaces as a 500) rather than hidden behind a vague catch-all.

## Enum

* `NOT_FOUND` (value: `'not_found'`)

* `FORBIDDEN` (value: `'forbidden'`)

* `SYSTEM_MANAGED` (value: `'system_managed'`)

* `SUBSUMED` (value: `'subsumed'`)

* `CYCLE` (value: `'cycle'`)

* `SEALED` (value: `'sealed'`)

* `CHECKED_OUT` (value: `'checked_out'`)

* `NAME_CONFLICT` (value: `'name_conflict'`)

* `IN_PROGRESS_WORKFLOW` (value: `'in_progress_workflow'`)

* `PERMISSION_LIMIT` (value: `'permission_limit'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


