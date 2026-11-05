# SearchablePartType

Part types that can be searched.  The same members as ``BROWSEABLE_PART_TYPES``, spelled out rather than derived: FastAPI needs a real enum to put the choices in the contract, and a dynamically built one would come out of the SDK generator unordered. The two lists are pinned equal by ``tests/agent/tools/test_browse.py::test_listable_kinds_match_api_enum`` — adding a part type here without adding it there (or the reverse) fails that test rather than silently dropping a type from search, which is how API_CONNECTION was lost once.

## Enum

* `FOLDER` (value: `'FOLDER'`)

* `DOCUMENT` (value: `'DOCUMENT'`)

* `WORKFLOW_DEFINITION` (value: `'WORKFLOW_DEFINITION'`)

* `WORKFLOW_RUN` (value: `'WORKFLOW_RUN'`)

* `DATA_SOURCE` (value: `'DATA_SOURCE'`)

* `DATA_SOURCE_SCHEMA` (value: `'DATA_SOURCE_SCHEMA'`)

* `DATA_SOURCE_TABLE` (value: `'DATA_SOURCE_TABLE'`)

* `API_CONNECTION` (value: `'API_CONNECTION'`)

* `SKILL` (value: `'SKILL'`)

* `EMAIL_THREAD` (value: `'EMAIL_THREAD'`)

* `EMAIL_MESSAGE` (value: `'EMAIL_MESSAGE'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


