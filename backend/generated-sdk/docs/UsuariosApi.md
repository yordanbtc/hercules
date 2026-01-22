# UsuariosApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usersControllerCreate**](#userscontrollercreate) | **POST** /users | |
|[**usersControllerFindAll**](#userscontrollerfindall) | **GET** /users | |
|[**usersControllerFindOne**](#userscontrollerfindone) | **GET** /users/{id} | |
|[**usersControllerRemove**](#userscontrollerremove) | **DELETE** /users/{id} | |
|[**usersControllerUpdate**](#userscontrollerupdate) | **PATCH** /users/{id} | |

# **usersControllerCreate**
> UserEntity usersControllerCreate(createUserDto)


### Example

```typescript
import {
    UsuariosApi,
    Configuration,
    CreateUserDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsuariosApi(configuration);

let createUserDto: CreateUserDto; //

const { status, data } = await apiInstance.usersControllerCreate(
    createUserDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createUserDto** | **CreateUserDto**|  | |


### Return type

**UserEntity**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersControllerFindAll**
> usersControllerFindAll()


### Example

```typescript
import {
    UsuariosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsuariosApi(configuration);

const { status, data } = await apiInstance.usersControllerFindAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersControllerFindOne**
> usersControllerFindOne()


### Example

```typescript
import {
    UsuariosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsuariosApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.usersControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersControllerRemove**
> usersControllerRemove()


### Example

```typescript
import {
    UsuariosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsuariosApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.usersControllerRemove(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersControllerUpdate**
> usersControllerUpdate(updateUserDto)


### Example

```typescript
import {
    UsuariosApi,
    Configuration,
    UpdateUserDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UsuariosApi(configuration);

let id: string; // (default to undefined)
let updateUserDto: UpdateUserDto; //

const { status, data } = await apiInstance.usersControllerUpdate(
    id,
    updateUserDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserDto** | **UpdateUserDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

