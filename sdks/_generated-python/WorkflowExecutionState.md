# WorkflowExecutionState

Execution lifecycle of a workflow run.  Two-step flow lifecycle:  * ``PENDING`` — entry state when the create call carries uploads.   Inputs are being ingested by Temporal; the run cannot be started   yet. The ingestion-completion hook auto-flips the run to   ``NOT_STARTED`` once every input under ``inputs/`` reaches   ``pipeline_state.status == COMPLETED``. * ``NOT_STARTED`` — entry state when the create call has no   uploads (KB references only), OR the post-ingestion landing   pad. The user can Start the run from here. * ``IN_PROGRESS`` — set by ``POST /v1/workflow-runs/{id}/start``,   which builds the snapshot and dispatches the Temporal workflow. * ``COMPLETED`` / ``FAILED`` — terminal; ``completed_at`` is set.

## Enum

* `PENDING` (value: `'PENDING'`)

* `NOT_STARTED` (value: `'NOT_STARTED'`)

* `IN_PROGRESS` (value: `'IN_PROGRESS'`)

* `COMPLETED` (value: `'COMPLETED'`)

* `FAILED` (value: `'FAILED'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


