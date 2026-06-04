# PipelineState

Pipeline execution state tracking.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**PipelineStatus**](PipelineStatus.md) |  | 
**last_run_timestamp** | **datetime** | Timestamp of the last pipeline execution attempt (set once when a run starts) | [optional] 
**last_state_update_timestamp** | **datetime** | Timestamp of the last pipeline state change (set by activities) | [optional] 
**last_activity** | **str** | Name of the last activity that executed (e.g., &#39;document_preparation&#39;) | [optional] 
**error** | **str** | Error message if pipeline failed | [optional] 
**temporal_workflow_id** | **str** | Temporal workflow ID for tracking the ingestion run | [optional] 
**chunks_processed** | **int** | Number of chunks processed (for progress tracking) | [optional] 
**page_dpi** | **int** | DPI used for PDF page screenshots during ingestion | [optional] 
**ingestion_mode** | [**IngestionMode**](IngestionMode.md) |  | [optional] 
**chunk_type** | [**ChunkType**](ChunkType.md) |  | [optional] 

## Example

```python
from ksapi.models.pipeline_state import PipelineState

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineState from a JSON string
pipeline_state_instance = PipelineState.from_json(json)
# print the JSON string representation of the object
print(PipelineState.to_json())

# convert the object into a dict
pipeline_state_dict = pipeline_state_instance.to_dict()
# create an instance of PipelineState from a dict
pipeline_state_from_dict = PipelineState.from_dict(pipeline_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


