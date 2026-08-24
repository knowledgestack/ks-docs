# ScheduleCadence

How often a workflow definition runs itself.  The cadence names the recurrence; the time of day, weekday and day of month all come from the definition's ``schedule_start_at``, so an illegal combination (a daily cadence carrying a weekday, say) cannot be expressed. ``None`` on the definition means manual-only — the state every definition is in today.

## Enum

* `DAILY` (value: `'DAILY'`)

* `WEEKLY` (value: `'WEEKLY'`)

* `MONTHLY` (value: `'MONTHLY'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


