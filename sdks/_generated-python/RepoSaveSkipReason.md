# RepoSaveSkipReason

Why retention or integration could not complete.  ``conflict``: integration failed; a retained branch remains recoverable. ``history_rewrite``: the run rewrote saved history. ``no_write``: the turn's user cannot write the workflow. ``uncommitted``: changes were never committed to the assigned branch. ``rejected``: the platform refused the bundle (too large, unsafe paths). ``failed``: the checkout or the save itself failed.

## Enum

* `CONFLICT` (value: `'conflict'`)

* `HISTORY_REWRITE` (value: `'history_rewrite'`)

* `NO_WRITE` (value: `'no_write'`)

* `UNCOMMITTED` (value: `'uncommitted'`)

* `REJECTED` (value: `'rejected'`)

* `FAILED` (value: `'failed'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


