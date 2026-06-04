# CheckpointDetails

Agent-internal overlay that replaces older messages in the loaded history.  Written as ``details.checkpoint`` on ``role=SYSTEM`` ThreadMessages. The boundary is explicit via ``upto_message_id`` + ``upto_message_created_at`` so the agent can keep recent messages uncompacted even though the checkpoint message itself is inserted at \"now\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upto_message_id** | **UUID** | Last message covered by this summary (inclusive). | 
**upto_message_created_at** | **datetime** | created_at of upto_message_id; tiebreaker for identical timestamps. | 
**summary** | **Dict[str, object]** | Agent-internal CompressionSummary as a JSON blob. Server does not interpret this; the agent serializes/deserializes via its own model. | 
**covered_message_count** | **int** |  | 
**tokens_before** | **int** |  | 
**tokens_after** | **int** |  | 
**summarizer_model** | **str** |  | 
**prompt_version** | **str** |  | 

## Example

```python
from ksapi.models.checkpoint_details import CheckpointDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CheckpointDetails from a JSON string
checkpoint_details_instance = CheckpointDetails.from_json(json)
# print the JSON string representation of the object
print(CheckpointDetails.to_json())

# convert the object into a dict
checkpoint_details_dict = checkpoint_details_instance.to_dict()
# create an instance of CheckpointDetails from a dict
checkpoint_details_from_dict = CheckpointDetails.from_dict(checkpoint_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


