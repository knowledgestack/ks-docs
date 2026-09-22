# DiagnosticTraceItem

One trace of the conversation; stats and the link are null unless ready.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**DiagnosticTraceStatus**](DiagnosticTraceStatus.md) |  | 
**kind** | [**TraceKind**](TraceKind.md) |  | 
**reason** | [**DiagnosticTraceFailureReason**](DiagnosticTraceFailureReason.md) |  | [optional] 
**trace_id** | **str** |  | 
**run_id** | **UUID** |  | [optional] 
**thread_id** | **UUID** |  | [optional] 
**message_id** | **UUID** |  | [optional] 
**user_id** | **UUID** |  | 
**started_at** | **datetime** |  | 
**ended_at** | **datetime** |  | [optional] 
**duration_ms** | **int** |  | [optional] 
**model** | **str** |  | [optional] 
**generations** | **int** |  | [optional] 
**tool_calls** | **int** |  | [optional] 
**subagents** | **int** |  | [optional] 
**input_tokens** | **int** |  | [optional] 
**output_tokens** | **int** |  | [optional] 
**cached_tokens** | **int** |  | [optional] 
**reasoning_tokens** | **int** |  | [optional] 
**max_context** | **int** |  | [optional] 
**degenerate_gens** | **int** |  | [optional] 
**self_doubt_per_1k** | **float** |  | [optional] 
**cache_rate** | **float** |  | [optional] 
**reasoning_share** | **float** |  | [optional] 
**single_tool_rate** | **float** |  | [optional] 
**n_events** | **int** |  | [optional] 
**metrics** | **Dict[str, object]** |  | [optional] 
**trace_complete** | **bool** |  | [optional] 
**corrupt_results** | **bool** |  | [optional] 
**backend_version** | **str** |  | [optional] 
**schema_version** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**workflow_id** | **UUID** |  | [optional] 
**workflow_name** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**run_label** | **str** |  | [optional] 
**trace_url** | **str** |  | [optional] 
**expires_in_seconds** | **int** |  | [optional] 

## Example

```python
from ksapi.models.diagnostic_trace_item import DiagnosticTraceItem

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticTraceItem from a JSON string
diagnostic_trace_item_instance = DiagnosticTraceItem.from_json(json)
# print the JSON string representation of the object
print(DiagnosticTraceItem.to_json())

# convert the object into a dict
diagnostic_trace_item_dict = diagnostic_trace_item_instance.to_dict()
# create an instance of DiagnosticTraceItem from a dict
diagnostic_trace_item_from_dict = DiagnosticTraceItem.from_dict(diagnostic_trace_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


