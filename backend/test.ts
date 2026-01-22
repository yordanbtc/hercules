import * as sdk from './generated-sdk';

const organizationApi = new sdk.OrganizationApi(new sdk.Configuration({
    basePath: 'http://localhost:3000',
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzNjU0ODA2LWRlNzMtNDkwMy05MTE4LWE5Nzg0M2EwMzk2MiIsImVtYWlsIjoiYWRtaW5AaGVyY3VsZXMuY29tIiwidHlwZSI6IkFETUlOIiwiaWF0IjoxNzY5MTA1MjQzLCJleHAiOjE3NjkxOTE2NDN9.A2dRxmF1oPGWXuhtzqDYlHbhhKZudQ804TUPBqROaww',
}));


organizationApi.organizationControllerCreate({
    name: 'Organization created from SDK',
}).then(res=>console.log(res.data));