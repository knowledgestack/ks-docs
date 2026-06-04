# InstructionSnapshot

Snapshot of one instruction document, pinned at trigger time.  ``path_part_id`` is the pinned ``DOCUMENT_VERSION`` identity that audit replay keys off. The agent reads the body straight from ``source_s3_uri`` and resolves the version's PDO id live — no PDO id is stored here.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path_part_id** | **UUID** | DOCUMENT_VERSION path_part of the instruction version | 
**materialized_path** | **str** |  | 
**part_type** | **str** |  | 
**source_s3_uri** | **str** | S3 URI of the instruction file&#39;s source bytes (flat UTF-8 markdown), read directly by the agent at startup. &#x60;&#x60;None&#x60;&#x60; when the instruction is empty — the run still starts and completes with empty output. | 

## Example

```python
from ksapi.models.instruction_snapshot import InstructionSnapshot

# TODO update the JSON string below
json = "{}"
# create an instance of InstructionSnapshot from a JSON string
instruction_snapshot_instance = InstructionSnapshot.from_json(json)
# print the JSON string representation of the object
print(InstructionSnapshot.to_json())

# convert the object into a dict
instruction_snapshot_dict = instruction_snapshot_instance.to_dict()
# create an instance of InstructionSnapshot from a dict
instruction_snapshot_from_dict = InstructionSnapshot.from_dict(instruction_snapshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


