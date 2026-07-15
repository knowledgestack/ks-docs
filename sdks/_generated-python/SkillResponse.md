# SkillResponse

Skill response; ``part_type`` is the folder-listing discriminator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**part_type** | **str** | Path part type | [optional] [default to 'SKILL']
**id** | **UUID** |  | 
**path_part_id** | **UUID** | SKILL path_part of this skill | 
**parent_path_part_id** | **UUID** | FOLDER path_part of the containing folder | 
**materialized_path** | **str** | Full materialized path from root | 
**tenant_id** | **UUID** |  | 
**name** | **str** |  | 
**description** | **str** | One-line &#39;use when…&#39; routing signal, from the SKILL.md frontmatter. | 
**skill_md** | **str** | Full SKILL.md content; populated on detail reads, null on list. | [optional] 
**script_names** | **List[str]** | Bundled script file names; populated on detail reads. | [optional] 
**has_unpublished_changes** | **bool** | Whether the working copy differs from the active published version. Always present (incl. list responses) so the UI can flag a skill with an unpublished draft. | [optional] [default to False]
**approval_state** | [**PathPartApprovalState**](PathPartApprovalState.md) |  | 
**owner** | [**UserInfo**](UserInfo.md) | Creator, or null. | [optional] 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 
**permissions** | [**ItemPermissions**](ItemPermissions.md) | Caller&#39;s effective rights; null on mutation responses. | [optional] 

## Example

```python
from ksapi.models.skill_response import SkillResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SkillResponse from a JSON string
skill_response_instance = SkillResponse.from_json(json)
# print the JSON string representation of the object
print(SkillResponse.to_json())

# convert the object into a dict
skill_response_dict = skill_response_instance.to_dict()
# create an instance of SkillResponse from a dict
skill_response_from_dict = SkillResponse.from_dict(skill_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


