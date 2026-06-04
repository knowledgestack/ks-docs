# PathPartApprovalDecision

Audit-row decision label.  The PG enum ``path_part_approval_decision`` carries a legacy ``'rejected'`` value that is intentionally NOT mapped here. It survives in the database as a noop — never written, never read. Loading a row whose column holds ``'rejected'`` will fail to decode; prod is empty of such rows.

## Enum

* `PENDING` (value: `'pending'`)

* `APPROVED` (value: `'approved'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


