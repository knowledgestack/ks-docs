# BillingSystem

External payment platform a subscription or payment is linked to.  ``STRIPE`` serves North America; ``PING_PP`` (Ping++, a mainland-China payment aggregator fronting Alipay + WeChat Pay) serves China. Rows with no external billing linkage (free / admin-issued / synthetic fall-back subscriptions) carry NULL instead of a value.

## Enum

* `STRIPE` (value: `'STRIPE'`)

* `PING_PP` (value: `'PING_PP'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


