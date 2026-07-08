# ContentsSortOrder

Sort options for the folder-contents listing.  Superset of the base :class:`PathOrder` columns plus ``STATUS`` (``approval_state``). Kept separate from ``PathOrder`` so the extra columns do not leak onto ``/folders`` or ``/path-parts``, and only apply at depth 1.

## Enum

* `LOGICAL` (value: `'LOGICAL'`)

* `NAME` (value: `'NAME'`)

* `UPDATED_AT` (value: `'UPDATED_AT'`)

* `CREATED_AT` (value: `'CREATED_AT'`)

* `STATUS` (value: `'STATUS'`)

* `OWNER` (value: `'OWNER'`)

* `TAGS` (value: `'TAGS'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


