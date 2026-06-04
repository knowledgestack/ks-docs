# @knowledge-stack/ksapi — Knowledge Stack TypeScript SDK

> **Focus on agents. We handle document intelligence.**
>
> TypeScript / JavaScript client for the Knowledge Stack API.

[![npm](https://img.shields.io/npm/v/@knowledge-stack/ksapi)](https://www.npmjs.com/package/@knowledge-stack/ksapi)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Discord](https://img.shields.io/badge/Discord-join%20the%20community-5865F2?logo=discord&logoColor=white)](https://discord.gg/McHmxUeS)

## Install

```bash
npm install @knowledge-stack/ksapi
# or
pnpm add @knowledge-stack/ksapi
# or
yarn add @knowledge-stack/ksapi
# or
bun add @knowledge-stack/ksapi
```

## Quickstart

```ts
import { Configuration, FoldersApi, DocumentsApi } from "@knowledge-stack/ksapi";

const config = new Configuration({
  basePath: process.env.KS_BASE_URL ?? "https://api.knowledgestack.ai",
  accessToken: process.env.KS_API_KEY, // sk-user-...
});

const folders = new FoldersApi(config);
const result = await folders.listFolderContents({ folderId: "..." });
console.log(result.data);
```

Runs in Node.js ≥ 18, Bun, Deno, Cloudflare Workers, and modern browsers.

## Related repos

- **[ks-cookbook](https://github.com/knowledgestack/ks-cookbook)** — 32 production-style agent demos.
- **[ks-mcp](https://github.com/knowledgestack/ks-mcp)** — MCP server for agent frameworks (recommended for most agent use cases).
- **[ks-sdk-python](https://github.com/knowledgestack/ks-sdk-python)** — Python counterpart of this SDK (`ksapi` on PyPI).
- **[ks-docs](https://github.com/knowledgestack/ks-docs)** — cross-SDK reference docs.

For **agent / RAG workflows**, prefer the MCP server (`ks-mcp`). Use this SDK when you need admin / write operations or are building infrastructure (ingestion pipelines, schedulers, tenant management).

## Generation

This package is **generated from the Knowledge Stack OpenAPI spec** by [OpenAPI Generator](https://openapi-generator.tech). API-shape issues belong upstream; client-side wrapper / packaging bugs belong here.

Below this line is auto-generated reference content.

---

# @knowledge-stack/ksapi@1.94.0

A TypeScript SDK client for the localhost API.

## Usage

First, install the SDK from npm.

```bash
npm install @knowledge-stack/ksapi --save
```

Next, try it out.


```ts
import {
  Configuration,
  AgentApi,
} from '@knowledge-stack/ksapi';
import type { AgentAskRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const api = new AgentApi();

  const body = {
    // AskRequest
    askRequest: ...,
    // string (optional)
    authorization: authorization_example,
    // string (optional)
    ksUat: ksUat_example,
  } satisfies AgentAskRequest;

  try {
    const data = await api.agentAsk(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *http://localhost:8000*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AgentApi* | [**agentAsk**](docs/AgentApi.md#agentask) | **POST** /v1/agent/ask | Agent Ask Handler
*AgentApi* | [**agentExtract**](docs/AgentApi.md#agentextract) | **POST** /v1/agent/extract | Agent Extract Handler
*ApiKeysApi* | [**createApiKey**](docs/ApiKeysApi.md#createapikeyoperation) | **POST** /v1/api-keys | Create Api Key Handler
*ApiKeysApi* | [**deleteApiKey**](docs/ApiKeysApi.md#deleteapikey) | **DELETE** /v1/api-keys/{api_key_id} | Delete Api Key Handler
*ApiKeysApi* | [**getApiKey**](docs/ApiKeysApi.md#getapikey) | **GET** /v1/api-keys/{api_key_id} | Get Api Key Handler
*ApiKeysApi* | [**listApiKeys**](docs/ApiKeysApi.md#listapikeys) | **GET** /v1/api-keys | List Api Keys Handler
*AuthApi* | [**changePhoneNumber**](docs/AuthApi.md#changephonenumberoperation) | **PUT** /v1/auth/pw/me/phone_number | Change Phone Number Handler
*AuthApi* | [**createPasswordUser**](docs/AuthApi.md#createpassworduseroperation) | **POST** /v1/auth/pw/user | Create Password User Handler
*AuthApi* | [**createPhonePasswordUser**](docs/AuthApi.md#createphonepassworduseroperation) | **POST** /v1/auth/pw/phone_user | Create Phone Password User Handler
*AuthApi* | [**fanweiDirectorySync**](docs/AuthApi.md#fanweidirectorysync) | **POST** /v1/auth/sso/{tenant_id}/directory_sync | Directory Sync Handler
*AuthApi* | [**fanweiDirectorySync_0**](docs/AuthApi.md#fanweidirectorysync_0) | **POST** /v1/auth/sso/{tenant_id}/directory_sync | Directory Sync Handler
*AuthApi* | [**initiateSso**](docs/AuthApi.md#initiatesso) | **POST** /v1/auth/sso/initiate | Initiate Sso Handler
*AuthApi* | [**oauth2Callback**](docs/AuthApi.md#oauth2callback) | **GET** /v1/auth/sso/oauth2/callback | Oauth2 Callback Handler
*AuthApi* | [**pwEmailVerification**](docs/AuthApi.md#pwemailverification) | **POST** /v1/auth/pw/email_verification | Pw Email Verification Handler
*AuthApi* | [**pwPhoneVerification**](docs/AuthApi.md#pwphoneverification) | **POST** /v1/auth/pw/phone_verification | Pw Phone Verification Handler
*AuthApi* | [**pwSignin**](docs/AuthApi.md#pwsignin) | **POST** /v1/auth/pw/signin | Signin Handler
*AuthApi* | [**refreshUat**](docs/AuthApi.md#refreshuat) | **POST** /v1/auth/uat | Refresh Uat Handler
*AuthApi* | [**requestPhoneChange**](docs/AuthApi.md#requestphonechangeoperation) | **POST** /v1/auth/pw/me/phone_number/verify | Request Phone Change Handler
*AuthApi* | [**resetPassword**](docs/AuthApi.md#resetpassword) | **POST** /v1/auth/pw/reset | Reset Password Handler
*AuthApi* | [**resetPasswordWithToken**](docs/AuthApi.md#resetpasswordwithtoken) | **POST** /v1/auth/pw/reset_with_token | Reset Password With Token Handler
*AuthApi* | [**sendPwResetEmail**](docs/AuthApi.md#sendpwresetemail) | **POST** /v1/auth/pw/send_reset_email | Send Pw Reset Email Handler
*AuthApi* | [**signout**](docs/AuthApi.md#signout) | **POST** /v1/auth/signout | Signout Handler
*AuthApi* | [**ssoSignin**](docs/AuthApi.md#ssosignin) | **GET** /v1/auth/sso/{tenant_id}/signin | Sso Login Handler
*AuthApi* | [**validatePwResetCode**](docs/AuthApi.md#validatepwresetcode) | **POST** /v1/auth/pw/validate_reset_code | Validate Reset Code Handler
*ChunkLineagesApi* | [**createChunkLineage**](docs/ChunkLineagesApi.md#createchunklineageoperation) | **POST** /v1/chunk-lineages | Create Chunk Lineage Handler
*ChunkLineagesApi* | [**deleteChunkLineage**](docs/ChunkLineagesApi.md#deletechunklineage) | **DELETE** /v1/chunk-lineages | Delete Chunk Lineage Handler
*ChunkLineagesApi* | [**getChunkLineage**](docs/ChunkLineagesApi.md#getchunklineage) | **GET** /v1/chunk-lineages/{chunk_id} | Get Chunk Lineage Handler
*ChunksApi* | [**createChunk**](docs/ChunksApi.md#createchunkoperation) | **POST** /v1/chunks | Create Chunk Handler
*ChunksApi* | [**deleteChunk**](docs/ChunksApi.md#deletechunk) | **DELETE** /v1/chunks/{chunk_id} | Delete Chunk Handler
*ChunksApi* | [**getChunk**](docs/ChunksApi.md#getchunk) | **GET** /v1/chunks/{chunk_id} | Get Chunk Handler
*ChunksApi* | [**getChunkNeighbors**](docs/ChunksApi.md#getchunkneighbors) | **GET** /v1/chunks/{chunk_id}/neighbors | Get Chunk Neighbors Handler
*ChunksApi* | [**getChunksBulk**](docs/ChunksApi.md#getchunksbulk) | **GET** /v1/chunks/bulk | Get Chunks Bulk Handler
*ChunksApi* | [**getVersionChunkIds**](docs/ChunksApi.md#getversionchunkids) | **GET** /v1/chunks/version-chunk-ids | Get Version Chunk Ids Handler
*ChunksApi* | [**searchChunks**](docs/ChunksApi.md#searchchunks) | **POST** /v1/chunks/search | Search Chunks Handler
*ChunksApi* | [**updateChunkContent**](docs/ChunksApi.md#updatechunkcontentoperation) | **PATCH** /v1/chunks/{chunk_id}/content | Update Chunk Content Handler
*ChunksApi* | [**updateChunkMetadata**](docs/ChunksApi.md#updatechunkmetadataoperation) | **PATCH** /v1/chunks/{chunk_id} | Update Chunk Metadata Handler
*DefaultApi* | [**healthCheck**](docs/DefaultApi.md#healthcheck) | **GET** /healthz | Health Check Handler
*DefaultApi* | [**hello**](docs/DefaultApi.md#hello) | **GET** / | Root Handler
*DocumentCheckoutApi* | [**acquireDocumentCheckout**](docs/DocumentCheckoutApi.md#acquiredocumentcheckout) | **POST** /v1/documents/{document_id}/checkout | Acquire Document Checkout Handler
*DocumentCheckoutApi* | [**getDocumentCheckout**](docs/DocumentCheckoutApi.md#getdocumentcheckout) | **GET** /v1/documents/{document_id}/checkout | Get Document Checkout Handler
*DocumentCheckoutApi* | [**releaseDocumentCheckout**](docs/DocumentCheckoutApi.md#releasedocumentcheckout) | **DELETE** /v1/documents/{document_id}/checkout | Release Document Checkout Handler
*DocumentVersionsApi* | [**clearDocumentVersionContents**](docs/DocumentVersionsApi.md#cleardocumentversioncontents) | **DELETE** /v1/document_versions/{version_id}/contents | Clear Document Version Contents Handler
*DocumentVersionsApi* | [**createDocumentVersion**](docs/DocumentVersionsApi.md#createdocumentversion) | **POST** /v1/documents/{document_id}/versions | Create Document Version Handler
*DocumentVersionsApi* | [**deleteDocumentVersion**](docs/DocumentVersionsApi.md#deletedocumentversion) | **DELETE** /v1/document_versions/{version_id} | Delete Document Version Handler
*DocumentVersionsApi* | [**documentVersionAction**](docs/DocumentVersionsApi.md#documentversionaction) | **POST** /v1/document_versions/{version_id} | Document Version Action Handler
*DocumentVersionsApi* | [**getDocumentVersion**](docs/DocumentVersionsApi.md#getdocumentversion) | **GET** /v1/document_versions/{version_id} | Get Document Version Handler
*DocumentVersionsApi* | [**getDocumentVersionContents**](docs/DocumentVersionsApi.md#getdocumentversioncontents) | **GET** /v1/document_versions/{version_id}/contents | Get Document Version Contents Handler
*DocumentVersionsApi* | [**listDocumentVersions**](docs/DocumentVersionsApi.md#listdocumentversions) | **GET** /v1/document_versions | List Document Versions Handler
*DocumentVersionsApi* | [**updateDocumentVersionMetadata**](docs/DocumentVersionsApi.md#updatedocumentversionmetadata) | **PATCH** /v1/document_versions/{version_id}/metadata | Update Document Version Metadata Handler
*DocumentsApi* | [**createDocument**](docs/DocumentsApi.md#createdocumentoperation) | **POST** /v1/documents | Create Document Handler
*DocumentsApi* | [**deleteDocument**](docs/DocumentsApi.md#deletedocument) | **DELETE** /v1/documents/{document_id} | Delete Document Handler
*DocumentsApi* | [**getDocument**](docs/DocumentsApi.md#getdocument) | **GET** /v1/documents/{document_id} | Get Document Handler
*DocumentsApi* | [**ingestDocument**](docs/DocumentsApi.md#ingestdocument) | **POST** /v1/documents/ingest | Ingest Document Handler
*DocumentsApi* | [**ingestDocumentVersion**](docs/DocumentsApi.md#ingestdocumentversion) | **POST** /v1/documents/{document_id}/ingest | Ingest Document Version Handler
*DocumentsApi* | [**listDocuments**](docs/DocumentsApi.md#listdocuments) | **GET** /v1/documents | List Documents Handler
*DocumentsApi* | [**updateDocument**](docs/DocumentsApi.md#updatedocumentoperation) | **PATCH** /v1/documents/{document_id} | Update Document Handler
*FeaturesApi* | [**getFeatures**](docs/FeaturesApi.md#getfeatures) | **GET** /v1/features | Get Features Handler
*FeedbackApi* | [**deleteFeedback**](docs/FeedbackApi.md#deletefeedback) | **DELETE** /v1/feedback/{feedback_id} | Delete Feedback Handler
*FeedbackApi* | [**listFeedback**](docs/FeedbackApi.md#listfeedback) | **GET** /v1/feedback | List Feedback Handler
*FeedbackApi* | [**submitFeedback**](docs/FeedbackApi.md#submitfeedbackoperation) | **POST** /v1/feedback | Submit Feedback Handler
*FoldersApi* | [**createFolder**](docs/FoldersApi.md#createfolderoperation) | **POST** /v1/folders | Create Folder Handler
*FoldersApi* | [**deleteFolder**](docs/FoldersApi.md#deletefolder) | **DELETE** /v1/folders/{folder_id} | Delete Folder Handler
*FoldersApi* | [**folderAction**](docs/FoldersApi.md#folderaction) | **POST** /v1/folders/{folder_id} | Folder Action Handler
*FoldersApi* | [**getFolder**](docs/FoldersApi.md#getfolder) | **GET** /v1/folders/{folder_id} | Get Folder Handler
*FoldersApi* | [**listFolderContents**](docs/FoldersApi.md#listfoldercontents) | **GET** /v1/folders/{folder_id}/contents | List Folder Contents Handler
*FoldersApi* | [**listFolders**](docs/FoldersApi.md#listfolders) | **GET** /v1/folders | List Folders Handler
*FoldersApi* | [**searchItems**](docs/FoldersApi.md#searchitems) | **GET** /v1/folders/search | Search Items Handler
*FoldersApi* | [**updateFolder**](docs/FoldersApi.md#updatefolderoperation) | **PATCH** /v1/folders/{folder_id} | Update Folder Handler
*InvitesApi* | [**acceptInvite**](docs/InvitesApi.md#acceptinvite) | **POST** /v1/invites/{invite_id}/accept | Accept Invite
*InvitesApi* | [**createInvite**](docs/InvitesApi.md#createinvite) | **POST** /v1/invites | Create Invite
*InvitesApi* | [**deleteInvite**](docs/InvitesApi.md#deleteinvite) | **DELETE** /v1/invites/{invite_id} | Delete Invite
*InvitesApi* | [**listInvites**](docs/InvitesApi.md#listinvites) | **GET** /v1/invites | List Invites Handler
*InvitesApi* | [**updateInvite**](docs/InvitesApi.md#updateinviteoperation) | **PATCH** /v1/invites/{invite_id} | Update Invite Handler
*PathPartApprovalsApi* | [**getPathPartApproval**](docs/PathPartApprovalsApi.md#getpathpartapproval) | **GET** /v1/path-parts/{path_part_id}/approval | Get Path Part Approval Handler
*PathPartApprovalsApi* | [**setPathPartApproval**](docs/PathPartApprovalsApi.md#setpathpartapproval) | **POST** /v1/path-parts/{path_part_id}/approval | Set Path Part Approval Handler
*PathPartsApi* | [**appendPathPartEvent**](docs/PathPartsApi.md#appendpathpartevent) | **POST** /v1/path-parts/{path_part_id}/events | Append Path Part Event Handler
*PathPartsApi* | [**bulkRemovePathPartTags**](docs/PathPartsApi.md#bulkremovepathparttags) | **DELETE** /v1/path-parts/{path_part_id}/tags | Bulk Remove Path Part Tags Handler
*PathPartsApi* | [**getPathPart**](docs/PathPartsApi.md#getpathpart) | **GET** /v1/path-parts/{path_part_id} | Get Path Part Handler
*PathPartsApi* | [**getPathPartAncestry**](docs/PathPartsApi.md#getpathpartancestry) | **GET** /v1/path-parts/{path_part_id}/ancestry | Get Path Part Ancestry Handler
*PathPartsApi* | [**getPathPartSubtreeChunks**](docs/PathPartsApi.md#getpathpartsubtreechunks) | **GET** /v1/path-parts/{path_part_id}/subtree_chunks | Get Path Part Subtree Chunks Handler
*PathPartsApi* | [**getPathPartTags**](docs/PathPartsApi.md#getpathparttags) | **GET** /v1/path-parts/{path_part_id}/tags | Get Path Part Tags Handler
*PathPartsApi* | [**listPathPartEvents**](docs/PathPartsApi.md#listpathpartevents) | **GET** /v1/path-parts/{path_part_id}/events | List Path Part Events Handler
*PathPartsApi* | [**listPathParts**](docs/PathPartsApi.md#listpathparts) | **GET** /v1/path-parts | List Path Parts Handler
*PathPartsApi* | [**setPathPartTags**](docs/PathPartsApi.md#setpathparttags) | **POST** /v1/path-parts/{path_part_id}/tags | Set Path Part Tags Handler
*PublicApi* | [**listPublicSubscriptions**](docs/PublicApi.md#listpublicsubscriptions) | **GET** /public/subscriptions | List Public Subscriptions Handler
*SectionsApi* | [**createSection**](docs/SectionsApi.md#createsectionoperation) | **POST** /v1/sections | Create Section Handler
*SectionsApi* | [**deleteSection**](docs/SectionsApi.md#deletesection) | **DELETE** /v1/sections/{section_id} | Delete Section Handler
*SectionsApi* | [**dissolveSection**](docs/SectionsApi.md#dissolvesection) | **POST** /v1/sections/{section_id}/dissolve | Dissolve Section Handler
*SectionsApi* | [**getSection**](docs/SectionsApi.md#getsection) | **GET** /v1/sections/{section_id} | Get Section Handler
*SectionsApi* | [**getSectionsBulk**](docs/SectionsApi.md#getsectionsbulk) | **GET** /v1/sections/bulk | Get Sections Bulk Handler
*SectionsApi* | [**updateSection**](docs/SectionsApi.md#updatesectionoperation) | **PATCH** /v1/sections/{section_id} | Update Section Handler
*SubscriptionsApi* | [**changeTenantSubscription**](docs/SubscriptionsApi.md#changetenantsubscription) | **POST** /v1/tenants/{tenant_id}/subscriptions | Change Tenant Subscription Handler
*SubscriptionsApi* | [**getTenantSubscription**](docs/SubscriptionsApi.md#gettenantsubscription) | **GET** /v1/tenants/{tenant_id}/subscriptions | Get Tenant Subscription Handler
*TagsApi* | [**createTag**](docs/TagsApi.md#createtagoperation) | **POST** /v1/tags | Create Tag Handler
*TagsApi* | [**deleteTag**](docs/TagsApi.md#deletetag) | **DELETE** /v1/tags/{tag_id} | Delete Tag Handler
*TagsApi* | [**getTag**](docs/TagsApi.md#gettag) | **GET** /v1/tags/{tag_id} | Get Tag Handler
*TagsApi* | [**listTags**](docs/TagsApi.md#listtags) | **GET** /v1/tags | List Tags Handler
*TagsApi* | [**updateTag**](docs/TagsApi.md#updatetagoperation) | **PATCH** /v1/tags/{tag_id} | Update Tag Handler
*TenantGroupsApi* | [**addGroupMember**](docs/TenantGroupsApi.md#addgroupmember) | **POST** /v1/tenant-groups/{group_id}/members | Add Group Member Handler
*TenantGroupsApi* | [**createGroupPermission**](docs/TenantGroupsApi.md#creategrouppermissionoperation) | **POST** /v1/tenant-groups/{group_id}/permissions | Create Group Permission Handler
*TenantGroupsApi* | [**createTenantGroup**](docs/TenantGroupsApi.md#createtenantgroup) | **POST** /v1/tenant-groups | Create Tenant Group Handler
*TenantGroupsApi* | [**deleteGroupPermission**](docs/TenantGroupsApi.md#deletegrouppermission) | **DELETE** /v1/tenant-groups/{group_id}/permissions/{permission_id} | Delete Group Permission Handler
*TenantGroupsApi* | [**deleteTenantGroup**](docs/TenantGroupsApi.md#deletetenantgroup) | **DELETE** /v1/tenant-groups/{group_id} | Delete Tenant Group Handler
*TenantGroupsApi* | [**getTenantGroup**](docs/TenantGroupsApi.md#gettenantgroup) | **GET** /v1/tenant-groups/{group_id} | Get Tenant Group Handler
*TenantGroupsApi* | [**listGroupMembers**](docs/TenantGroupsApi.md#listgroupmembers) | **GET** /v1/tenant-groups/{group_id}/members | List Group Members Handler
*TenantGroupsApi* | [**listGroupPermissions**](docs/TenantGroupsApi.md#listgrouppermissions) | **GET** /v1/tenant-groups/{group_id}/permissions | List Group Permissions Handler
*TenantGroupsApi* | [**listMyGroups**](docs/TenantGroupsApi.md#listmygroups) | **GET** /v1/tenant-groups/my-group | List My Groups Handler
*TenantGroupsApi* | [**listTenantGroups**](docs/TenantGroupsApi.md#listtenantgroups) | **GET** /v1/tenant-groups | List Tenant Groups Handler
*TenantGroupsApi* | [**removeGroupMember**](docs/TenantGroupsApi.md#removegroupmember) | **DELETE** /v1/tenant-groups/{group_id}/members/{user_id} | Remove Group Member Handler
*TenantGroupsApi* | [**updateGroupPermission**](docs/TenantGroupsApi.md#updategrouppermissionoperation) | **PATCH** /v1/tenant-groups/{group_id}/permissions/{permission_id} | Update Group Permission Handler
*TenantGroupsApi* | [**updateTenantGroup**](docs/TenantGroupsApi.md#updatetenantgroup) | **PATCH** /v1/tenant-groups/{group_id} | Update Tenant Group Handler
*TenantsApi* | [**activateTenantUser**](docs/TenantsApi.md#activatetenantuser) | **POST** /v1/tenants/{tenant_id}/users/{user_id}/activate | Activate Tenant User Handler
*TenantsApi* | [**deactivateTenantUser**](docs/TenantsApi.md#deactivatetenantuser) | **POST** /v1/tenants/{tenant_id}/users/{user_id}/deactivate | Deactivate Tenant User Handler
*TenantsApi* | [**deleteTenant**](docs/TenantsApi.md#deletetenant) | **DELETE** /v1/tenants/{tenant_id} | Delete Tenant
*TenantsApi* | [**deleteTenantLogo**](docs/TenantsApi.md#deletetenantlogo) | **DELETE** /v1/tenants/{tenant_id}/branding/logo | Delete Tenant Logo
*TenantsApi* | [**deleteTenantUser**](docs/TenantsApi.md#deletetenantuser) | **DELETE** /v1/tenants/{tenant_id}/users/{user_id} | Delete Tenant User Handler
*TenantsApi* | [**getTenant**](docs/TenantsApi.md#gettenant) | **GET** /v1/tenants/{tenant_id} | Get Tenant
*TenantsApi* | [**getTenantQuotaState**](docs/TenantsApi.md#gettenantquotastate) | **GET** /v1/tenants/{tenant_id}/quota | Get Tenant Quota State Handler
*TenantsApi* | [**listTenantUsers**](docs/TenantsApi.md#listtenantusers) | **GET** /v1/tenants/{tenant_id}/users | List Tenant Users
*TenantsApi* | [**listTenants**](docs/TenantsApi.md#listtenants) | **GET** /v1/tenants | List Tenants
*TenantsApi* | [**updateTenant**](docs/TenantsApi.md#updatetenantoperation) | **PATCH** /v1/tenants/{tenant_id} | Update Tenant
*TenantsApi* | [**updateTenantUser**](docs/TenantsApi.md#updatetenantuser) | **PATCH** /v1/tenants/{tenant_id}/users/{user_id} | Update Tenant User
*TenantsApi* | [**uploadTenantLogo**](docs/TenantsApi.md#uploadtenantlogo) | **POST** /v1/tenants/{tenant_id}/branding/logo | Upload Tenant Logo
*ThreadMessagesApi* | [**createThreadMessage**](docs/ThreadMessagesApi.md#createthreadmessageoperation) | **POST** /v1/threads/{thread_id}/messages | Create Thread Message Handler
*ThreadMessagesApi* | [**getThreadMessage**](docs/ThreadMessagesApi.md#getthreadmessage) | **GET** /v1/threads/{thread_id}/messages/{message_id} | Get Thread Message Handler
*ThreadMessagesApi* | [**listThreadMessages**](docs/ThreadMessagesApi.md#listthreadmessages) | **GET** /v1/threads/{thread_id}/messages | List Thread Messages Handler
*ThreadsApi* | [**createThread**](docs/ThreadsApi.md#createthreadoperation) | **POST** /v1/threads | Create Thread Handler
*ThreadsApi* | [**deleteThread**](docs/ThreadsApi.md#deletethread) | **DELETE** /v1/threads/{thread_id} | Delete Thread Handler
*ThreadsApi* | [**getThread**](docs/ThreadsApi.md#getthread) | **GET** /v1/threads/{thread_id} | Get Thread Handler
*ThreadsApi* | [**listThreads**](docs/ThreadsApi.md#listthreads) | **GET** /v1/threads | List Threads Handler
*ThreadsApi* | [**sendUserMessage**](docs/ThreadsApi.md#sendusermessage) | **POST** /v1/threads/{thread_id}/user_message | Send User Message Handler
*ThreadsApi* | [**streamThread**](docs/ThreadsApi.md#streamthread) | **GET** /v1/threads/{thread_id}/stream | Stream Thread Handler
*ThreadsApi* | [**updateThread**](docs/ThreadsApi.md#updatethreadoperation) | **PATCH** /v1/threads/{thread_id} | Update Thread Handler
*UserPermissionsApi* | [**createUserPermission**](docs/UserPermissionsApi.md#createuserpermission) | **POST** /v1/user-permissions | Create User Permission Handler
*UserPermissionsApi* | [**deleteUserPermission**](docs/UserPermissionsApi.md#deleteuserpermission) | **DELETE** /v1/user-permissions/{permission_id} | Delete User Permission Handler
*UserPermissionsApi* | [**listUserPermissions**](docs/UserPermissionsApi.md#listuserpermissions) | **GET** /v1/user-permissions | List User Permissions Handler
*UserPermissionsApi* | [**updateUserPermission**](docs/UserPermissionsApi.md#updateuserpermission) | **PATCH** /v1/user-permissions/{permission_id} | Update User Permission Handler
*UsersApi* | [**getMe**](docs/UsersApi.md#getme) | **GET** /v1/users/me | Get Me Handler
*UsersApi* | [**skipOnboarding**](docs/UsersApi.md#skiponboarding) | **POST** /v1/users/me/onboarding/skip | Skip Onboarding Handler
*UsersApi* | [**updateMe**](docs/UsersApi.md#updateme) | **PATCH** /v1/users | Update Me Handler
*UsersApi* | [**updateOnboardingCompany**](docs/UsersApi.md#updateonboardingcompany) | **PATCH** /v1/users/me/onboarding/company | Update Onboarding Company Handler
*UsersApi* | [**updateOnboardingProfile**](docs/UsersApi.md#updateonboardingprofile) | **PATCH** /v1/users/me/onboarding/profile | Update Onboarding Profile Handler
*WorkflowDefinitionsApi* | [**createWorkflowDefinition**](docs/WorkflowDefinitionsApi.md#createworkflowdefinitionoperation) | **POST** /v1/workflow-definitions | Create Workflow Definition Handler
*WorkflowDefinitionsApi* | [**createWorkflowRun**](docs/WorkflowDefinitionsApi.md#createworkflowrun) | **POST** /v1/workflow-definitions/{definition_id}/runs | Create Workflow Run Handler
*WorkflowDefinitionsApi* | [**deleteWorkflowDefinition**](docs/WorkflowDefinitionsApi.md#deleteworkflowdefinition) | **DELETE** /v1/workflow-definitions/{definition_id} | Delete Workflow Definition Handler
*WorkflowDefinitionsApi* | [**getWorkflowDefinition**](docs/WorkflowDefinitionsApi.md#getworkflowdefinition) | **GET** /v1/workflow-definitions/{definition_id} | Get Workflow Definition Handler
*WorkflowDefinitionsApi* | [**listWorkflowDefinitions**](docs/WorkflowDefinitionsApi.md#listworkflowdefinitions) | **GET** /v1/workflow-definitions | List Workflow Definitions Handler
*WorkflowDefinitionsApi* | [**listWorkflowRuns**](docs/WorkflowDefinitionsApi.md#listworkflowruns) | **GET** /v1/workflow-definitions/{definition_id}/runs | List Workflow Runs Handler
*WorkflowDefinitionsApi* | [**updateWorkflowDefinition**](docs/WorkflowDefinitionsApi.md#updateworkflowdefinitionoperation) | **PUT** /v1/workflow-definitions/{definition_id} | Update Workflow Definition Handler
*WorkflowMemoryApi* | [**appendWorkflowMemoryChunk**](docs/WorkflowMemoryApi.md#appendworkflowmemorychunk) | **POST** /v1/workflow-definitions/{definition_id}/memory/chunks | Append Workflow Memory Chunk Handler
*WorkflowMemoryApi* | [**editWorkflowMemoryChunk**](docs/WorkflowMemoryApi.md#editworkflowmemorychunk) | **PATCH** /v1/workflow-definitions/{definition_id}/memory/chunks/{chunk_id} | Edit Workflow Memory Chunk Handler
*WorkflowMemoryApi* | [**forgetWorkflowMemoryChunk**](docs/WorkflowMemoryApi.md#forgetworkflowmemorychunk) | **DELETE** /v1/workflow-definitions/{definition_id}/memory/chunks/{chunk_id} | Forget Workflow Memory Chunk Handler
*WorkflowMemoryApi* | [**getWorkflowMemoryChunk**](docs/WorkflowMemoryApi.md#getworkflowmemorychunk) | **GET** /v1/workflow-definitions/{definition_id}/memory/chunks/{chunk_id} | Get Workflow Memory Chunk Handler
*WorkflowMemoryApi* | [**listWorkflowMemoryChunks**](docs/WorkflowMemoryApi.md#listworkflowmemorychunks) | **GET** /v1/workflow-definitions/{definition_id}/memory | List Workflow Memory Chunks Handler
*WorkflowRunsApi* | [**cloneWorkflowRun**](docs/WorkflowRunsApi.md#cloneworkflowrunoperation) | **POST** /v1/workflow-runs/{run_id}/clone | Clone Workflow Run Handler
*WorkflowRunsApi* | [**deleteWorkflowRun**](docs/WorkflowRunsApi.md#deleteworkflowrun) | **DELETE** /v1/workflow-runs/{run_id} | Delete Workflow Run Handler
*WorkflowRunsApi* | [**getWorkflowRun**](docs/WorkflowRunsApi.md#getworkflowrun) | **GET** /v1/workflow-runs/{run_id} | Get Workflow Run Handler
*WorkflowRunsApi* | [**retryWorkflowRun**](docs/WorkflowRunsApi.md#retryworkflowrun) | **POST** /v1/workflow-runs/{run_id}/retry | Retry Workflow Run Handler
*WorkflowRunsApi* | [**setWorkflowRunApproval**](docs/WorkflowRunsApi.md#setworkflowrunapprovaloperation) | **POST** /v1/workflow-runs/{run_id}/approval | Set Workflow Run Approval Handler
*WorkflowRunsApi* | [**startWorkflowRun**](docs/WorkflowRunsApi.md#startworkflowrun) | **POST** /v1/workflow-runs/{run_id}/start | Start Workflow Run Handler
*WorkflowRunsApi* | [**stopWorkflowRun**](docs/WorkflowRunsApi.md#stopworkflowrun) | **POST** /v1/workflow-runs/{run_id}/stop | Stop Workflow Run Handler
*WorkflowRunsApi* | [**updateWorkflowRun**](docs/WorkflowRunsApi.md#updateworkflowrunoperation) | **PATCH** /v1/workflow-runs/{run_id} | Update Workflow Run Handler
*WorkflowRunsApi* | [**workflowRunCallback**](docs/WorkflowRunsApi.md#workflowruncallbackoperation) | **POST** /v1/workflow-runs/{run_id}/callback | Workflow Run Callback Handler
*WorkflowsApi* | [**cancelTemporalWorkflow**](docs/WorkflowsApi.md#canceltemporalworkflow) | **DELETE** /v1/workflows/{workflow_id} | Cancel Temporal Workflow Handler
*WorkflowsApi* | [**dvWorkflowRerun**](docs/WorkflowsApi.md#dvworkflowrerun) | **POST** /v1/workflows/document_versions/{workflow_id} | Dv Workflow Rerun Handler
*WorkflowsApi* | [**getDvWorkflow**](docs/WorkflowsApi.md#getdvworkflow) | **GET** /v1/workflows/document_versions/{workflow_id} | Get Dv Workflow Handler
*WorkflowsApi* | [**getTemporalWorkflowStatus**](docs/WorkflowsApi.md#gettemporalworkflowstatus) | **GET** /v1/workflows/{workflow_id} | Get Temporal Workflow Status Handler
*WorkflowsApi* | [**listDvWorkflows**](docs/WorkflowsApi.md#listdvworkflows) | **GET** /v1/workflows/document_versions | List Dv Workflows Handler


### Models

- [AcceptInviteResponse](docs/AcceptInviteResponse.md)
- [AddMemberRequest](docs/AddMemberRequest.md)
- [AncestryResponse](docs/AncestryResponse.md)
- [ApiKeyResponse](docs/ApiKeyResponse.md)
- [AppendEventRequest](docs/AppendEventRequest.md)
- [AppendMemoryChunkRequest](docs/AppendMemoryChunkRequest.md)
- [Args](docs/Args.md)
- [AskRequest](docs/AskRequest.md)
- [AskResponse](docs/AskResponse.md)
- [BrandingLogoType](docs/BrandingLogoType.md)
- [BulkTagRequest](docs/BulkTagRequest.md)
- [ChangePhoneNumberRequest](docs/ChangePhoneNumberRequest.md)
- [ChangeSubscriptionRequest](docs/ChangeSubscriptionRequest.md)
- [CheckpointDetails](docs/CheckpointDetails.md)
- [ChunkBulkResponse](docs/ChunkBulkResponse.md)
- [ChunkContentItem](docs/ChunkContentItem.md)
- [ChunkDocumentResponse](docs/ChunkDocumentResponse.md)
- [ChunkDocumentVersionResponse](docs/ChunkDocumentVersionResponse.md)
- [ChunkLineageResponse](docs/ChunkLineageResponse.md)
- [ChunkMetadata](docs/ChunkMetadata.md)
- [ChunkNeighborsResponse](docs/ChunkNeighborsResponse.md)
- [ChunkResponse](docs/ChunkResponse.md)
- [ChunkSearchRequest](docs/ChunkSearchRequest.md)
- [ChunkType](docs/ChunkType.md)
- [Citation](docs/Citation.md)
- [CitedChunk](docs/CitedChunk.md)
- [ClearVersionContentsResponse](docs/ClearVersionContentsResponse.md)
- [CloneWorkflowRunRequest](docs/CloneWorkflowRunRequest.md)
- [CreateApiKeyRequest](docs/CreateApiKeyRequest.md)
- [CreateApiKeyResponse](docs/CreateApiKeyResponse.md)
- [CreateChunkLineageRequest](docs/CreateChunkLineageRequest.md)
- [CreateChunkRequest](docs/CreateChunkRequest.md)
- [CreateDocumentRequest](docs/CreateDocumentRequest.md)
- [CreateFolderRequest](docs/CreateFolderRequest.md)
- [CreateGroupPermissionRequest](docs/CreateGroupPermissionRequest.md)
- [CreateGroupRequest](docs/CreateGroupRequest.md)
- [CreatePasswordUserRequest](docs/CreatePasswordUserRequest.md)
- [CreatePermissionRequest](docs/CreatePermissionRequest.md)
- [CreatePhonePasswordUserRequest](docs/CreatePhonePasswordUserRequest.md)
- [CreateSectionRequest](docs/CreateSectionRequest.md)
- [CreateTagRequest](docs/CreateTagRequest.md)
- [CreateThreadMessageRequest](docs/CreateThreadMessageRequest.md)
- [CreateThreadRequest](docs/CreateThreadRequest.md)
- [CreateWorkflowDefinitionRequest](docs/CreateWorkflowDefinitionRequest.md)
- [DirectorySyncResponse](docs/DirectorySyncResponse.md)
- [DisplayNameFormat](docs/DisplayNameFormat.md)
- [DissolveSectionResponse](docs/DissolveSectionResponse.md)
- [DocumentCheckoutResponse](docs/DocumentCheckoutResponse.md)
- [DocumentOrigin](docs/DocumentOrigin.md)
- [DocumentResponse](docs/DocumentResponse.md)
- [DocumentType](docs/DocumentType.md)
- [DocumentVersionAction](docs/DocumentVersionAction.md)
- [DocumentVersionActionResponse](docs/DocumentVersionActionResponse.md)
- [DocumentVersionContentTypeFilter](docs/DocumentVersionContentTypeFilter.md)
- [DocumentVersionMetadata](docs/DocumentVersionMetadata.md)
- [DocumentVersionMetadataUpdate](docs/DocumentVersionMetadataUpdate.md)
- [DocumentVersionResponse](docs/DocumentVersionResponse.md)
- [DocxParagraphAnchorInput](docs/DocxParagraphAnchorInput.md)
- [DocxParagraphAnchorOutput](docs/DocxParagraphAnchorOutput.md)
- [EditMemoryChunkRequest](docs/EditMemoryChunkRequest.md)
- [EmailSentResponse](docs/EmailSentResponse.md)
- [EmailVerificationRequest](docs/EmailVerificationRequest.md)
- [EnrichedCitation](docs/EnrichedCitation.md)
- [EnrichedThreadMessageContent](docs/EnrichedThreadMessageContent.md)
- [EventResponse](docs/EventResponse.md)
- [ExtractRequest](docs/ExtractRequest.md)
- [ExtractResponse](docs/ExtractResponse.md)
- [FeaturesResponse](docs/FeaturesResponse.md)
- [FeedbackEventResponse](docs/FeedbackEventResponse.md)
- [FeedbackRating](docs/FeedbackRating.md)
- [FeedbackReason](docs/FeedbackReason.md)
- [FeedbackTargetType](docs/FeedbackTargetType.md)
- [FolderAction](docs/FolderAction.md)
- [FolderActionResponse](docs/FolderActionResponse.md)
- [FolderResponse](docs/FolderResponse.md)
- [FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponse](docs/FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponse.md)
- [GroupPermissionResponse](docs/GroupPermissionResponse.md)
- [GroupResponse](docs/GroupResponse.md)
- [HTTPValidationError](docs/HTTPValidationError.md)
- [HealthCheckResponse](docs/HealthCheckResponse.md)
- [HybridSearchProfile](docs/HybridSearchProfile.md)
- [IdpConfig](docs/IdpConfig.md)
- [IdpType](docs/IdpType.md)
- [ImageTaxonomy](docs/ImageTaxonomy.md)
- [InformationStatistics](docs/InformationStatistics.md)
- [IngestDocumentResponse](docs/IngestDocumentResponse.md)
- [IngestionMode](docs/IngestionMode.md)
- [InputSnapshot](docs/InputSnapshot.md)
- [InstructionSnapshot](docs/InstructionSnapshot.md)
- [InviteLinkSettingsRequest](docs/InviteLinkSettingsRequest.md)
- [InviteLinkSettingsResponse](docs/InviteLinkSettingsResponse.md)
- [InviteResponse](docs/InviteResponse.md)
- [InviteStatus](docs/InviteStatus.md)
- [InviteUserRequest](docs/InviteUserRequest.md)
- [LineageEdgeResponse](docs/LineageEdgeResponse.md)
- [LineageGraphResponse](docs/LineageGraphResponse.md)
- [LineageNodeResponse](docs/LineageNodeResponse.md)
- [LocationInner](docs/LocationInner.md)
- [MembershipResponse](docs/MembershipResponse.md)
- [MemoryChunkResponse](docs/MemoryChunkResponse.md)
- [MemoryKind](docs/MemoryKind.md)
- [MessageRole](docs/MessageRole.md)
- [MeteredQuotaStatus](docs/MeteredQuotaStatus.md)
- [NonFilesystemReferenceType](docs/NonFilesystemReferenceType.md)
- [OnboardingCompanyRequest](docs/OnboardingCompanyRequest.md)
- [OnboardingProfileRequest](docs/OnboardingProfileRequest.md)
- [PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDiscriminator](docs/PaginatedResponseAnnotatedUnionFolderResponseDocumentResponseWorkflowDefinitionResponseWorkflowRunResponseDiscriminator.md)
- [PaginatedResponseAnnotatedUnionSectionContentItemChunkContentItemDiscriminator](docs/PaginatedResponseAnnotatedUnionSectionContentItemChunkContentItemDiscriminator.md)
- [PaginatedResponseDocumentResponse](docs/PaginatedResponseDocumentResponse.md)
- [PaginatedResponseDocumentVersionResponse](docs/PaginatedResponseDocumentVersionResponse.md)
- [PaginatedResponseEventResponse](docs/PaginatedResponseEventResponse.md)
- [PaginatedResponseFeedbackEventResponse](docs/PaginatedResponseFeedbackEventResponse.md)
- [PaginatedResponseFolderResponse](docs/PaginatedResponseFolderResponse.md)
- [PaginatedResponseGroupPermissionResponse](docs/PaginatedResponseGroupPermissionResponse.md)
- [PaginatedResponseGroupResponse](docs/PaginatedResponseGroupResponse.md)
- [PaginatedResponseInviteResponse](docs/PaginatedResponseInviteResponse.md)
- [PaginatedResponseMembershipResponse](docs/PaginatedResponseMembershipResponse.md)
- [PaginatedResponseMemoryChunkResponse](docs/PaginatedResponseMemoryChunkResponse.md)
- [PaginatedResponsePathPartResponse](docs/PaginatedResponsePathPartResponse.md)
- [PaginatedResponsePermissionResponse](docs/PaginatedResponsePermissionResponse.md)
- [PaginatedResponseTagResponse](docs/PaginatedResponseTagResponse.md)
- [PaginatedResponseTenantResponse](docs/PaginatedResponseTenantResponse.md)
- [PaginatedResponseTenantUserResponse](docs/PaginatedResponseTenantUserResponse.md)
- [PaginatedResponseThreadMessageResponse](docs/PaginatedResponseThreadMessageResponse.md)
- [PaginatedResponseThreadResponse](docs/PaginatedResponseThreadResponse.md)
- [PaginatedResponseWorkflowDefinitionResponse](docs/PaginatedResponseWorkflowDefinitionResponse.md)
- [PaginatedResponseWorkflowRunResponse](docs/PaginatedResponseWorkflowRunResponse.md)
- [PaginatedResponseWorkflowSummaryResponse](docs/PaginatedResponseWorkflowSummaryResponse.md)
- [PartType](docs/PartType.md)
- [PasswordResetRequest](docs/PasswordResetRequest.md)
- [PasswordResetTokenResponse](docs/PasswordResetTokenResponse.md)
- [PasswordResetWithTokenRequest](docs/PasswordResetWithTokenRequest.md)
- [PathOrder](docs/PathOrder.md)
- [PathPartAncestorItem](docs/PathPartAncestorItem.md)
- [PathPartApprovalDecision](docs/PathPartApprovalDecision.md)
- [PathPartApprovalResponse](docs/PathPartApprovalResponse.md)
- [PathPartApprovalState](docs/PathPartApprovalState.md)
- [PathPartResponse](docs/PathPartResponse.md)
- [PathPartTagsResponse](docs/PathPartTagsResponse.md)
- [PermissionCapability](docs/PermissionCapability.md)
- [PermissionResponse](docs/PermissionResponse.md)
- [PhoneValidationResponse](docs/PhoneValidationResponse.md)
- [PhoneVerificationRequest](docs/PhoneVerificationRequest.md)
- [PipelineState](docs/PipelineState.md)
- [PipelineStatus](docs/PipelineStatus.md)
- [Polygon](docs/Polygon.md)
- [PolygonReference](docs/PolygonReference.md)
- [ReferenceType](docs/ReferenceType.md)
- [RequestPhoneChangeRequest](docs/RequestPhoneChangeRequest.md)
- [ResolvedReferenceInput](docs/ResolvedReferenceInput.md)
- [ResolvedReferenceOutput](docs/ResolvedReferenceOutput.md)
- [ResponseSendPwResetEmail](docs/ResponseSendPwResetEmail.md)
- [RootResponse](docs/RootResponse.md)
- [SSOInitiateResponse](docs/SSOInitiateResponse.md)
- [ScoredChunkResponse](docs/ScoredChunkResponse.md)
- [SearchSortOrder](docs/SearchSortOrder.md)
- [SearchType](docs/SearchType.md)
- [SearchablePartType](docs/SearchablePartType.md)
- [SeatQuotaStatus](docs/SeatQuotaStatus.md)
- [SectionContentItem](docs/SectionContentItem.md)
- [SectionContentItemOrChunkContentItem](docs/SectionContentItemOrChunkContentItem.md)
- [SectionResponse](docs/SectionResponse.md)
- [SectionSystemMetadata](docs/SectionSystemMetadata.md)
- [SendPasswordResetRequest](docs/SendPasswordResetRequest.md)
- [SetApprovalStateRequest](docs/SetApprovalStateRequest.md)
- [SetWorkflowRunApprovalRequest](docs/SetWorkflowRunApprovalRequest.md)
- [SignInRequest](docs/SignInRequest.md)
- [StepInput](docs/StepInput.md)
- [StepKind](docs/StepKind.md)
- [StepOutput](docs/StepOutput.md)
- [SubmitFeedbackRequest](docs/SubmitFeedbackRequest.md)
- [SubmitSubscriptionResponse](docs/SubmitSubscriptionResponse.md)
- [SubscriptionPlanResponse](docs/SubscriptionPlanResponse.md)
- [SubtreeChunkGroup](docs/SubtreeChunkGroup.md)
- [SubtreeChunksResponse](docs/SubtreeChunksResponse.md)
- [SupportedIdP](docs/SupportedIdP.md)
- [SupportedLanguage](docs/SupportedLanguage.md)
- [TagResponse](docs/TagResponse.md)
- [TemporalWorkflowStatusResponse](docs/TemporalWorkflowStatusResponse.md)
- [TenantBrandingResponse](docs/TenantBrandingResponse.md)
- [TenantQuotaStateResponse](docs/TenantQuotaStateResponse.md)
- [TenantResponse](docs/TenantResponse.md)
- [TenantSettingsResponse](docs/TenantSettingsResponse.md)
- [TenantSettingsUpdate](docs/TenantSettingsUpdate.md)
- [TenantUserEditRequest](docs/TenantUserEditRequest.md)
- [TenantUserResponse](docs/TenantUserResponse.md)
- [TenantUserRole](docs/TenantUserRole.md)
- [ThreadMessageContent](docs/ThreadMessageContent.md)
- [ThreadMessageDetailsInput](docs/ThreadMessageDetailsInput.md)
- [ThreadMessageDetailsOutput](docs/ThreadMessageDetailsOutput.md)
- [ThreadMessageResponse](docs/ThreadMessageResponse.md)
- [ThreadResponse](docs/ThreadResponse.md)
- [UpdateChunkContentRequest](docs/UpdateChunkContentRequest.md)
- [UpdateChunkMetadataRequest](docs/UpdateChunkMetadataRequest.md)
- [UpdateDocumentRequest](docs/UpdateDocumentRequest.md)
- [UpdateFolderRequest](docs/UpdateFolderRequest.md)
- [UpdateGroupPermissionRequest](docs/UpdateGroupPermissionRequest.md)
- [UpdateGroupRequest](docs/UpdateGroupRequest.md)
- [UpdateInviteRequest](docs/UpdateInviteRequest.md)
- [UpdatePermissionRequest](docs/UpdatePermissionRequest.md)
- [UpdateSectionRequest](docs/UpdateSectionRequest.md)
- [UpdateTagRequest](docs/UpdateTagRequest.md)
- [UpdateTenantRequest](docs/UpdateTenantRequest.md)
- [UpdateThreadRequest](docs/UpdateThreadRequest.md)
- [UpdateUserRequest](docs/UpdateUserRequest.md)
- [UpdateWorkflowDefinitionRequest](docs/UpdateWorkflowDefinitionRequest.md)
- [UpdateWorkflowRunRequest](docs/UpdateWorkflowRunRequest.md)
- [UsageMetric](docs/UsageMetric.md)
- [UserInfo](docs/UserInfo.md)
- [UserMessageRequest](docs/UserMessageRequest.md)
- [UserMessageResponse](docs/UserMessageResponse.md)
- [UserResponse](docs/UserResponse.md)
- [ValidateResetCodeRequest](docs/ValidateResetCodeRequest.md)
- [ValidationError](docs/ValidationError.md)
- [VersionChunkIdsResponse](docs/VersionChunkIdsResponse.md)
- [WorkflowActionResponse](docs/WorkflowActionResponse.md)
- [WorkflowCallbackResponse](docs/WorkflowCallbackResponse.md)
- [WorkflowCancelResponse](docs/WorkflowCancelResponse.md)
- [WorkflowDefinitionResponse](docs/WorkflowDefinitionResponse.md)
- [WorkflowDetailResponse](docs/WorkflowDetailResponse.md)
- [WorkflowExecutionState](docs/WorkflowExecutionState.md)
- [WorkflowRunCallbackRequest](docs/WorkflowRunCallbackRequest.md)
- [WorkflowRunResponse](docs/WorkflowRunResponse.md)
- [WorkflowRunSnapshot](docs/WorkflowRunSnapshot.md)
- [WorkflowSummaryResponse](docs/WorkflowSummaryResponse.md)
- [XlsxCellAnchorInput](docs/XlsxCellAnchorInput.md)
- [XlsxCellAnchorInputOrDocxParagraphAnchorInput](docs/XlsxCellAnchorInputOrDocxParagraphAnchorInput.md)
- [XlsxCellAnchorOutput](docs/XlsxCellAnchorOutput.md)
- [XlsxCellAnchorOutputOrDocxParagraphAnchorOutput](docs/XlsxCellAnchorOutputOrDocxParagraphAnchorOutput.md)

### Authorization

Endpoints do not require authorization.


## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `0.1.0`
- Package version: `1.94.0`
- Generator version: `7.21.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
