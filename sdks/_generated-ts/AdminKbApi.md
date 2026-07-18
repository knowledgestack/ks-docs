# AdminKbApi

All URIs are relative to *http://localhost:8000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAdminKbSummary**](AdminKbApi.md#getadminkbsummary) | **GET** /v1/admin/kb/summary | Get Admin Kb Summary Handler |
| [**getAdminKbTimeseries**](AdminKbApi.md#getadminkbtimeseries) | **GET** /v1/admin/kb/timeseries | Get Admin Kb Timeseries Handler |



## getAdminKbSummary

> KbSummaryResponse getAdminKbSummary()

Get Admin Kb Summary Handler

Point-in-time knowledge-base totals for the tenant.

### Example

```ts
import {
  Configuration,
  AdminKbApi,
} from '@knowledge-stack/ksapi';
import type { GetAdminKbSummaryRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminKbApi(config);

  try {
    const data = await api.getAdminKbSummary();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**KbSummaryResponse**](KbSummaryResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAdminKbTimeseries

> KbTimeseriesResponse getAdminKbTimeseries(metric, since, until, bucket, timezone)

Get Admin Kb Timeseries Handler

A knowledge-base metric bucketed over time, in the resolved timezone.

### Example

```ts
import {
  Configuration,
  AdminKbApi,
} from '@knowledge-stack/ksapi';
import type { GetAdminKbTimeseriesRequest } from '@knowledge-stack/ksapi';

async function example() {
  console.log("🚀 Testing @knowledge-stack/ksapi SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: cookieAuth
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminKbApi(config);

  const body = {
    // KbMetric | Which KB metric to bucket.
    metric: ...,
    // Date | Window start. (optional)
    since: 2013-10-20T19:20:30+01:00,
    // Date | Window end. (optional)
    until: 2013-10-20T19:20:30+01:00,
    // TimeBucket | Bucket size. (optional)
    bucket: ...,
    // string | IANA tz override; defaults to tenant setting. (optional)
    timezone: timezone_example,
  } satisfies GetAdminKbTimeseriesRequest;

  try {
    const data = await api.getAdminKbTimeseries(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **metric** | `KbMetric` | Which KB metric to bucket. | [Defaults to `undefined`] [Enum: document_uploads, ingestion_completed, ingestion_failed] |
| **since** | `Date` | Window start. | [Optional] [Defaults to `undefined`] |
| **until** | `Date` | Window end. | [Optional] [Defaults to `undefined`] |
| **bucket** | `TimeBucket` | Bucket size. | [Optional] [Defaults to `undefined`] [Enum: hour, day, week, month] |
| **timezone** | `string` | IANA tz override; defaults to tenant setting. | [Optional] [Defaults to `undefined`] |

### Return type

[**KbTimeseriesResponse**](KbTimeseriesResponse.md)

### Authorization

[cookieAuth](../README.md#cookieAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

