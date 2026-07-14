# ToolDisplayType

Language-neutral render category for a completed tool call.  The frontend keys its activity-card registry on this token and localizes the label itself (zh/en) — the server never emits human prose here. Unknown or unmapped tools fall back to ``GENERIC`` so a new/dev tool degrades to the generic card instead of breaking rendering.

## Enum

* `GENERIC` (value: `'generic'`)

* `SEARCH_RESULTS` (value: `'search_results'`)

* `FILE_LIST` (value: `'file_list'`)

* `FILE_CONTENT` (value: `'file_content'`)

* `DOCUMENT_CREATED` (value: `'document_created'`)

* `DOCUMENT_EDITED` (value: `'document_edited'`)

* `SQL_RESULT` (value: `'sql_result'`)

* `SCHEMA` (value: `'schema'`)

* `COMMAND_OUTPUT` (value: `'command_output'`)

* `IMAGE` (value: `'image'`)

* `API_RESPONSE` (value: `'api_response'`)

* `WORKFLOW_RUN` (value: `'workflow_run'`)

* `NODE_INFO` (value: `'node_info'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


