Meraki Dashboard API Changelog

Changelog
=========

Version to

Renamed
-------

### Admins

**Create a new dashboard administrator**

#### POST

`/organizations/{organizationId}/admins`

> Param `createOrganizationAdmins` renamed to `createOrganizationAdmin`

* * *

#### PATH

`` `/devices/{serial}/camera/analytics/zones/{zoneId}/history` ``

> Path `` `/devices/{serial}/camera/analytics/zones/{zoneId}/history` `` renamed to `/devices/{serial}/camera/analytics/zones/{zone_id}/history`

* * *

### Networks

**Create a network**

#### POST

`/organizations/{organizationId}/networks`

> Param `createOrganizationNetworks` renamed to `createOrganizationNetwork`

* * *

### Group policies

**Create a group policy**

#### POST

`/networks/{networkId}/groupPolicies`

> Param `createNetworkGroupPolicies` renamed to `createNetworkGroupPolicy`

* * *

### HTTP servers

**Add an HTTP server**

#### POST

`/networks/{networkId}/httpServers`

> Param `createNetworkHttpServers` renamed to `createNetworkHttpServer`

* * *

**Send a test webhook**

#### POST

`/networks/{networkId}/httpServers/webhookTests`

> Param `createNetworkHttpServersWebhookTests` renamed to `createNetworkHttpServersWebhookTest`

* * *

### Organizations

**Create a new organization**

#### POST

`/organizations`

> Param `createOrganizations` renamed to `createOrganization`

* * *

### PII

**Submit a new delete or restrict processing PII request**

#### POST

`/networks/{networkId}/pii/requests`

> Param `createNetworkPiiRequests` renamed to `createNetworkPiiRequest`

* * *

### SAML roles

**Create a SAML role**

#### POST

`/organizations/{organizationId}/samlRoles`

> Param `createOrganizationSamlRoles` renamed to `createOrganizationSamlRole`

* * *

### Named tag scope

**Add a target group**

#### POST

`/networks/{networkId}/sm/targetGroups`

> Param `createNetworkSmTargetGroups` renamed to `createNetworkSmTargetGroup`

* * *

### SM

**Update an existing Polaris app**

#### PUT

`/networks/{network_id}/sm/app/polaris/{appId}`

> Param `updateNetworkSmAppPolari` renamed to `updateNetworkSmAppPolaris`

* * *

### Switch stacks

**Create a stack**

#### POST

`/networks/{networkId}/switchStacks`

> Param `createNetworkSwitchStacks` renamed to `createNetworkSwitchStack`

* * *

### Static routes

**Add a static route**

#### POST

`/networks/{networkId}/staticRoutes`

> Param `createNetworkStaticRoutes` renamed to `createNetworkStaticRoute`

* * *

### VLANs

**Add a VLAN**

#### POST

`/networks/{networkId}/vlans`

> Param `createNetworkVlans` renamed to `createNetworkVlan`

* * *

Major
-----

### Admins

**Create a new dashboard administrator**

#### POST

`/organizations/{organizationId}/admins`

> OperationId turned from `createOrganizationAdmins` to `createOrganizationAdmin`

* * *

#### PATH

`/devices/{serial}/camera/analytics/zones/{zoneId}/history`

> Deleted

* * *

### Networks

**Create a network**

#### POST

`/organizations/{organizationId}/networks`

> OperationId turned from `createOrganizationNetworks` to `createOrganizationNetwork`

* * *

### Cameras

**Generate a snapshot of what the camera sees at the specified time and return a link to that image.**

#### POST

`/networks/{networkId}/cameras/{serial}/snapshot`

> OperationId turned from `snapshotNetworkCamera` to `generateNetworkCameraSnapshot`

* * *

### Devices

**Blink the LEDs on a device**

#### POST

`/networks/{networkId}/devices/{serial}/blinkLeds`

> OperationId turned from `blinkLedsNetworkDevice` to `blinkNetworkDeviceLeds`

* * *

### Group policies

**Create a group policy**

#### POST

`/networks/{networkId}/groupPolicies`

> OperationId turned from `createNetworkGroupPolicies` to `createNetworkGroupPolicy`

* * *

### HTTP servers

**Add an HTTP server**

#### POST

`/networks/{networkId}/httpServers`

> OperationId turned from `createNetworkHttpServers` to `createNetworkHttpServer`

* * *

**Send a test webhook**

#### POST

`/networks/{networkId}/httpServers/webhookTests`

> OperationId turned from `createNetworkHttpServersWebhookTests` to `createNetworkHttpServersWebhookTest`

* * *

### Organizations

**Create a new organization**

#### POST

`/organizations`

> OperationId turned from `createOrganizations` to `createOrganization`

* * *

### PII

**Submit a new delete or restrict processing PII request**

#### POST

`/networks/{networkId}/pii/requests`

> OperationId turned from `createNetworkPiiRequests` to `createNetworkPiiRequest`

* * *

### SAML roles

**Create a SAML role**

#### POST

`/organizations/{organizationId}/samlRoles`

> OperationId turned from `createOrganizationSamlRoles` to `createOrganizationSamlRole`

* * *

### Named tag scope

**Add a target group**

#### POST

`/networks/{networkId}/sm/targetGroups`

> OperationId turned from `createNetworkSmTargetGroups` to `createNetworkSmTargetGroup`

* * *

### SM

**Update an existing Polaris app**

#### PUT

`/networks/{network_id}/sm/app/polaris/{appId}`

> OperationId turned from `updateNetworkSmAppPolari` to `updateNetworkSmAppPolaris`

* * *

**Lock a set of devices**

#### PUT

`/networks/{network_id}/sm/devices/lock`

> OperationId turned from `updateNetworkSmDevicesLock` to `lockNetworkSmDevices`

* * *

**Wipe a device**

#### PUT

`/networks/{network_id}/sm/device/wipe`

> OperationId turned from `updateNetworkSmDeviceWipe` to `wipeNetworkSmDevice`

* * *

**Force check-in a set of devices**

#### PUT

`/networks/{network_id}/sm/devices/checkin`

> OperationId turned from `updateNetworkSmDevicesCheckin` to `checkinNetworkSmDevices`

* * *

**Move a set of devices to a new network**

#### PUT

`/networks/{network_id}/sm/devices/move`

> OperationId turned from `updateNetworkSmDevicesMove` to `moveNetworkSmDevices`

* * *

**Delete a Cisco Polaris app**

#### DELETE

`/networks/{network_id}/sm/app/polaris/{appId}`

> OperationId turned from `deleteNetworkSmAppPolari` to `deleteNetworkSmAppPolaris`

* * *

### Switch stacks

**Create a stack**

#### POST

`/networks/{networkId}/switchStacks`

> OperationId turned from `createNetworkSwitchStacks` to `createNetworkSwitchStack`

* * *

### Syslog servers

**Update the syslog servers for a network**

#### PUT

`/networks/{networkId}/syslogServers`

> Property `host` became required

> Property `port` became required

> Property `roles` became required

> Property `servers` became required

> Param `updateNetworkSyslogServers` became required

* * *

### Static routes

**Add a static route**

#### POST

`/networks/{networkId}/staticRoutes`

> OperationId turned from `createNetworkStaticRoutes` to `createNetworkStaticRoute`

* * *

### VLANs

**Add a VLAN**

#### POST

`/networks/{networkId}/vlans`

> OperationId turned from `createNetworkVlans` to `createNetworkVlan`

* * *

Changes
-------

### Networks

#### PATH

`/organizations/{organizationId}/networks/combine`

> Path added  
> 
> POST
> 
> _combineOrganizationNetworks_  
> **Combine multiple networks into a single network**
> 
>     {
>         "resultingNetwork": {
>             "id": "L_123456",
>             "organizationId": 2930418,
>             "name": "Long Island Office",
>             "timeZone": "America/Los_Angeles",
>             "tags": " tag1 tag2 ",
>             "type": "combined",
>             "disableMyMerakiCom": false
>         }
>     }

* * *

#### PATH

`/networks/{networkId}/split`

> Path added  
> 
> POST
> 
> _splitNetwork_  
> **Split a combined network into individual networks for each type of device**
> 
>     {
>         "resultingNetworks": [
>             {
>                 "id": "N_1234",
>                 "organizationId": 2930418,
>                 "name": "Long Island Office - switch",
>                 "timeZone": "America/Los_Angeles",
>                 "tags": " tag1 tag2 ",
>                 "type": "switch",
>                 "disableMyMerakiCom": false
>             },
>             {
>                 "id": "N_5678",
>                 "organizationId": 2930418,
>                 "name": "Long Island Office - wireless",
>                 "timeZone": "America/Los_Angeles",
>                 "tags": " tag1 tag2 ",
>                 "type": "wireless",
>                 "disableMyMerakiCom": false
>             }
>         ]
>     }

* * *

### Cameras

**Generate a snapshot of what the camera sees at the specified time and return a link to that image.**

#### POST

`/networks/{networkId}/cameras/{serial}/snapshot`

> Param `snapshotNetworkCamera` Deleted

> Optional param `generateNetworkCameraSnapshot` added

* * *

### Devices

**Blink the LEDs on a device**

#### POST

`/networks/{networkId}/devices/{serial}/blinkLeds`

> Param `blinkLedsNetworkDevice` Deleted

> Optional param `blinkNetworkDeviceLeds` added

* * *

### Group policies

**Update a group policy**

#### PUT

`/networks/{networkId}/groupPolicies/{groupPolicyId}`

> Optional property `firewallAndTrafficShaping` Added

* * *

### SM

**Lock a set of devices**

#### PUT

`/networks/{network_id}/sm/devices/lock`

> Param `updateNetworkSmDevicesLock` Deleted

> Optional param `lockNetworkSmDevices` added

* * *

**Wipe a device**

#### PUT

`/networks/{network_id}/sm/device/wipe`

> Param `updateNetworkSmDeviceWipe` Deleted

> Optional param `wipeNetworkSmDevice` added

* * *

**Force check-in a set of devices**

#### PUT

`/networks/{network_id}/sm/devices/checkin`

> Param `updateNetworkSmDevicesCheckin` Deleted

> Optional param `checkinNetworkSmDevices` added

* * *

**Move a set of devices to a new network**

#### PUT

`/networks/{network_id}/sm/devices/move`

> Param `updateNetworkSmDevicesMove` Deleted

> Optional param `moveNetworkSmDevices` added

* * *

### Config templates

**Update a configuration template**

#### PUT

`/organizations/{organizationId}/configTemplates/{id}`

> Method added

* * *

### SSIDs

#### PATH

`/networks/{networkId}/ssids/{number}/reset`

> Path added  
> 
> POST
> 
> _resetNetworkSsid_  
> **Reset configuration and stats for an SSID**
> 
>     {
>         "number": 0,
>         "name": "My SSID",
>         "enabled": true,
>         "splashPage": "Click-through splash page",
>         "ssidAdminAccessible": false,
>         "authMode": "open",
>         "ipAssignmentMode": "NAT mode",
>         "bandSelection": "5 GHz band only",
>         "perClientBandwidthLimitUp": 0,
>         "perClientBandwidthLimitDown": 0
>     }

* * *

**Update the attributes of an SSID**

#### PUT

`/networks/{networkId}/ssids/{number}`

> Optional property `radiusAttributeForGroupPolicies` Added

> Optional property `radiusOverride` Added

* * *

### Wireless health

**Aggregated connectivity info for this network**

#### GET

`/networks/{networkId}/connectionStats`

> Optional param `timespan` added

* * *

**Aggregated connectivity info for this network, grouped by node**

#### GET

`/networks/{networkId}/devices/connectionStats`

> Optional param `timespan` added

* * *

**Aggregated connectivity info for a given AP on this network**

#### GET

`/networks/{networkId}/devices/{serial}/connectionStats`

> Optional param `timespan` added

* * *

**Aggregated connectivity info for this network, grouped by clients**

#### GET

`/networks/{networkId}/clients/connectionStats`

> Optional param `timespan` added

* * *

**Aggregated connectivity info for a given client on this network**

#### GET

`/networks/{networkId}/clients/{clientId}/connectionStats`

> Optional param `timespan` added

* * *

**Aggregated latency info for this network**

#### GET

`/networks/{networkId}/latencyStats`

> Optional param `timespan` added

* * *

**Aggregated latency info for this network, grouped by node**

#### GET

`/networks/{networkId}/devices/latencyStats`

> Optional param `timespan` added

* * *

**Aggregated latency info for a given AP on this network**

#### GET

`/networks/{networkId}/devices/{serial}/latencyStats`

> Optional param `timespan` added

* * *

**Aggregated latency info for this network, grouped by clients**

#### GET

`/networks/{networkId}/clients/latencyStats`

> Optional param `timespan` added

* * *

**Aggregated latency info for a given client on this network**

#### GET

`/networks/{networkId}/clients/{clientId}/latencyStats`

> Optional param `timespan` added

* * *

**List of all failed client connection events on this network in a given time range**

#### GET

`/networks/{networkId}/failedConnections`

> Optional param `timespan` added

* * *

### Action batches

#### PATH

`/organizations/{organizationId}/actionBatches`

> Path added  
> 
> GET
> 
> _getOrganizationActionBatches_  
> **Return the list of action batches in the organization**
> 
>     [
>         {
>             "id": "123",
>             "status": "in progress",
>             "confirmed": true,
>             "synchronous": false,
>             "actions": [
>                 {
>                     "resource": "/devices/QXXX-XXXX-XXXX/switchPorts/3",
>                     "operation": "update",
>                     "body": {
>                         "enabled": false
>                     }
>                 }
>             ]
>         }
>     ]
> 
>   
> 
> POST
> 
> _createOrganizationActionBatch_  
> **Create an action batch**
> 
>     {
>         "id": "123",
>         "status": "in progress",
>         "confirmed": true,
>         "synchronous": false,
>         "actions": [
>             {
>                 "resource": "/devices/QXXX-XXXX-XXXX/switchPorts/3",
>                 "operation": "update",
>                 "body": {
>                     "enabled": false
>                 }
>             }
>         ]
>     }

* * *

#### PATH

`/organizations/{organizationId}/actionBatches/{id}`

> Path added  
> 
> GET
> 
> _getOrganizationActionBatch_  
> **Return an action batch**
> 
>     {
>         "id": "123",
>         "status": "in progress",
>         "confirmed": true,
>         "synchronous": false,
>         "actions": [
>             {
>                 "resource": "/devices/QXXX-XXXX-XXXX/switchPorts/3",
>                 "operation": "update",
>                 "body": {
>                     "enabled": false
>                 }
>             }
>         ]
>     }
> 
>   
> 
> PUT
> 
> _updateOrganizationActionBatch_  
> **Update an action batch**
> 
>     {
>         "id": "123",
>         "status": "in progress",
>         "confirmed": true,
>         "synchronous": false,
>         "actions": [
>             {
>                 "resource": "/devices/QXXX-XXXX-XXXX/switchPorts/3",
>                 "operation": "update",
>                 "body": {
>                     "enabled": false
>                 }
>             }
>         ]
>     }
> 
>   
> 
> DELETE
> 
> _deleteOrganizationActionBatch_  
> **Delete an action batch**

* * *

### Clients

#### PATH

`/networks/{networkId}/clients`

> Path added  
> 
> GET
> 
> _getNetworkClients_  
> **List the clients that have used this network in the timespan**
> 
>     {
>         "usage": {
>             "sent": 138,
>             "recv": 61
>         },
>         "id": "k74272e",
>         "description": "Miles's phone",
>         "mac": "00:11:22:33:44:55",
>         "ip": "1.2.3.4",
>         "user": "milesmeraki",
>         "vlan": 255,
>         "switchport": null,
>         "ip6": "",
>         "firstSeen": 1518365681,
>         "lastSeen": 1526087474,
>         "manufacturer": "Apple",
>         "os": "iOS"
>     }

* * *

### OpenAPI Spec

#### PATH

`/organizations/{organizationId}/openapiSpec`

> Path added  
> 
> GET
> 
> _getOrganizationOpenapiSpec_  
> **Return the OpenAPI Specification of the organization's API documentation in JSON**
> 
>     {
>         "swagger": "2.0",
>         "info": {
>             "version": "0",
>             "title": "Meraki Dashboard API",
>             "description": "The Cisco Meraki Dashboard API is a modern REST API based on the [OpenAPI](https://swagger.io/docs/specification/about/) specification.\n\n## What can the API be used for?\nThe Dashboard API can be used for many purposes. It’s meant to be an open-ended tool. Here are some examples of use cases:\n\n* Add new organizations, admins, networks, devices, VLANs, and more\n* Configure networks at scale\n* Automatically on-board and off-board new employees’ teleworker setups\n* Build your own dashboard for store managers, field techs, or unique use cases\n\n## Enabling the Dashboard API\n1. Begin by logging into [Meraki Dashboard](https://dashboard.meraki.com) and navigating to **Organization > Settings**\n\n2. Locate the section titled **Dashboard API access** and select **Enable Access**, then **Save** your changes\n\n3. After enabling the API, choose your username at the top-right of the Meraki Dashboard and select **my profile**\n\n4. Locate the section titled **Dashboard API access** and select **Generate new API key**\n\n*Note: The API key is associated with a Dashboard administrator account. You can generate, revoke, and regenerate your API key on your profile.*\n\n**Keep your API key safe as it provides authentication to all of your organizations with the API enabled. If your API key is shared, you can regenerate your API key at any time. This will revoke the existing API key.**\n\nCopy and store your API key in a safe place. Dashboard does not store API keys in plaintext for security reasons, so this is the only time you will be able to record it. If you lose or forget your API key, you will have to revoke it and generate a new one.\n\nEvery request must specify an API key via a request header.\n\nThe API key must be specified in the URL header. The API will return a 404 (rather than a 403) in response to a request with a missing or incorrect API key in order to prevent leaking the existence of resources to unauthorized users.\n\n`X-Cisco-Meraki-API-Key: <secret key>`\n\nRead more about API [authorization](../api/#/python/getting-started/authorizing-your-client)\n\n\n## Versioning\nOnce an API version is released, we will make only backwards-compatible changes to it. Backwards-compatible changes include:\n\n* Adding new API resources\n\n* Adding new optional request parameters to existing API methods\n\n* Adding new properties to existing API responses\n\n* Changing the order of properties in existing API responses\n\n## Rate Limit\n* The Dashboard API is limited to **5 calls per second**, per organization.\n* A burst of 5 additional calls are allowed in the first second, so a maximum of 15 calls in the first 2 seconds.\n* The rate limiting technique is based off of the [token bucket model](https://en.wikipedia.org/wiki/Token_bucket).\n* An error with a `429` status code will be returned when the rate limit has been exceeded.\n* Expect to backoff for 1 - 2 seconds if the limit has been exceeded. You may have to wait potentially longer if a large number of requests were made within this timeframe.\n\n\n## Additional Details\nIdentifiers in the API are opaque strings. A `{networkId}`, for example, might be the string “126043”, whereas an `{orderId}` might contain characters, such as “4S1234567”. Client applications must not try to parse them as numbers. Even identifiers that look like numbers might be too long to encode without loss of precision in Javascript, where the only numeric type is IEEE 754 floating point.\n\nVerbs in the API follow the usual REST conventions:\n\n`GET` returns the value of a resource or a list of resources, depending on whether an identifier is specified. For example, a `GET` of `/v0/organizations` returns a list of organizations, whereas a `GET` of `/v0/organizations/{organizationId}` returns a particular organization.\n\n`POST` adds a new resource, as in a `POST` to `/v0/organizations/{organizationId}/admins`, or performs some other non-idempotent change.\n\n`PUT` updates a resource. `PUTs` are idempotent; they update a resource, creating it first if it does not already exist. A `PUT` should specify all the fields of a resource; the API will revert omitted fields to their default value.\n\n`DELETE` removes a resource.\n",
>             "x-codegen-settings": {
>                 "appendContentHeaders": true,
>                 "brandLabel": "meraki",
>                 "collectParameters": true,
>                 "doNotSplitWords": [
>                     "SSIDs",
>                     "VLANs"
>                 ],
>                 "generateAsyncCode": true,
>                 "projectName": "meraki",
>                 "sortResources": true,
>                 "useEnumPostfix": true,
>                 "useMethodPrefix": false,
>                 "useModelPostfix": true,
>                 "validateRequiredParameters": true
>             }
>         },
>         "host": "api.meraki.com",
>         "basePath": "/api/v0",
>         "schemes": [
>             "https"
>         ],
>         "consumes": [
>             "application/json"
>         ],
>         "produces": [
>             "application/json"
>         ],
>         "securityDefinitions": {
>             "meraki_api_key": {
>                 "type": "apiKey",
>                 "name": "X-Cisco-Meraki-API-Key",
>                 "in": "header"
>             }
>         },
>         "security": [
>             {
>                 "meraki_api_key": []
>             }
>         ],
>         "paths": {
>             "/pets": {
>                 "get": {
>                     "description": "Returns all pets from the system",
>                     "operationId": "getPets",
>                     "responses": {
>                         "200": {
>                             "description": "Successful operation",
>                             "examples": {
>                                 "application/json": [
>                                     {
>                                         "id": 1,
>                                         "name": "Riley",
>                                         "type": "Cat"
>                                     }
>                                 ]
>                             }
>                         }
>                     }
>                 }
>             }
>         }
>     }

* * *

### Organization alert settings

#### PATH

`/organizations/{organizationId}/alertSettings`

> Path added  
> 
> GET
> 
> _getOrganizationAlertSettings_  
> **Return the alert configuration for this organization**
> 
>     {
>         "defaultDestinations": {
>             "emails": [
>                 "miles@meraki.com"
>             ],
>             "allAdmins": true
>         },
>         "alerts": [
>             {
>                 "type": "insightAppOutage",
>                 "enabled": true,
>                 "alertDestinations": {
>                     "emails": [
>                         "miles@meraki.com"
>                     ],
>                     "allAdmins": false
>                 },
>                 "filters": {
>                     "alertOnAllApps": true
>                 }
>             }
>         ]
>     }
> 
>   
> 
> PUT
> 
> _updateOrganizationAlertSettings_  
> **Update the alert configuration for this organization**
> 
>     {
>         "defaultDestinations": {
>             "emails": [
>                 "miles@meraki.com"
>             ],
>             "allAdmins": true
>         },
>         "alerts": [
>             {
>                 "type": "insightAppOutage",
>                 "enabled": true,
>                 "alertDestinations": {
>                     "emails": [
>                         "miles@meraki.com"
>                     ],
>                     "allAdmins": false
>                 },
>                 "filters": {
>                     "alertOnAllApps": true
>                 }
>             }
>         ]
>     }

* * *

### Radio settings

#### PATH

`/networks/{networkId}/devices/{serial}/wireless/radioSettings`

> Path added  
> 
> GET
> 
> _getNetworkDeviceWirelessRadioSettings_  
> **Return the radio settings of a device**
> 
>     {
>         "serial": "Q234-ABCD-5678",
>         "rfProfileId": "1234"
>     }
> 
>   
> 
> PUT
> 
> _updateNetworkDeviceWirelessRadioSettings_  
> **Update the radio settings of a device**
> 
>     {
>         "serial": "Q234-ABCD-5678",
>         "rfProfileId": "1234"
>     }

* * *

#### PATH

`/networks/{networkId}/wireless/rfProfiles`

> Path added  
> 
> GET
> 
> _getNetworkWirelessRfProfiles_  
> **List the non-basic RF profiles for this network**
> 
>     [
>         {
>             "id": "1234",
>             "networkId": "N_24329156",
>             "name": "Some Custom RF Profile"
>         }
>     ]

* * *

### Intrusion settings

#### PATH

`/networks/{networkId}/security/intrusionSettings`

> Path added  
> 
> GET
> 
> _getNetworkSecurityIntrusionSettings_  
> **Returns all supported intrusion settings for an MX network**
> 
>     {
>         "mode": "prevention",
>         "idsRulesets": "balanced",
>         "protectedNetworks": {
>             "useDefault": false,
>             "includedCidr": [
>                 "10.0.0.0/8",
>                 "127.0.0.0/8",
>                 "169.254.0.0/16",
>                 "172.16.0.0/12"
>             ],
>             "excludedCidr": [
>                 "10.0.0.0/8",
>                 "127.0.0.0/8"
>             ]
>         }
>     }
> 
>   
> 
> PUT
> 
> _updateNetworkSecurityIntrusionSettings_  
> **Set the supported instrusion settings for an MX network**
> 
>     {
>         "mode": "prevention",
>         "idsRulesets": "balanced",
>         "protectedNetworks": {
>             "useDefault": false,
>             "includedCidr": [
>                 "10.0.0.0/8",
>                 "127.0.0.0/8",
>                 "169.254.0.0/16",
>                 "172.16.0.0/12"
>             ],
>             "excludedCidr": [
>                 "10.0.0.0/8",
>                 "127.0.0.0/8"
>             ]
>         }
>     }

* * *

#### PATH

`/organizations/{organizationId}/security/intrusionSettings`

> Path added  
> 
> GET
> 
> _getOrganizationSecurityIntrusionSettings_  
> **Returns all supported intrusion settings for an organization.**
> 
>     {
>         "whitelistedRules": [
>             {
>                 "ruleId": "meraki:intrusion/snort/GID/01/SID/688",
>                 "message": "SQL sa login failed"
>             },
>             {
>                 "ruleId": "meraki:intrusion/snort/GID/01/SID/5805",
>                 "message": "MALWARE-OTHER Trackware myway speedbar runtime detection - switch engines"
>             }
>         ]
>     }
> 
>   
> 
> PUT
> 
> _updateOrganizationSecurityIntrusionSettings_  
> **Sets supported intrusion settings for an organization.**
> 
>     {
>         "whitelistedRules": [
>             {
>                 "ruleId": "meraki:intrusion/snort/GID/01/SID/688",
>                 "message": "SQL sa login failed"
>             },
>             {
>                 "ruleId": "meraki:intrusion/snort/GID/01/SID/5805",
>                 "message": "MALWARE-OTHER Trackware myway speedbar runtime detection - switch engines"
>             }
>         ]
>     }

* * *

### Security events

#### PATH

`/networks/{networkId}/securityEvents`

> Path added  
> 
> GET
> 
> _getNetworkSecurityEvents_  
> **List the security events for a network**
> 
>     [
>         {
>             "ts": 1547683314.270398,
>             "deviceMac": "00:18:0a:01:02:03",
>             "clientMac": "A1:B2:C3:D4:E5:F6",
>             "srcIp": "1.2.3.4:34195",
>             "destIp": "10.20.30.40:80",
>             "protocol": "tcp/ip",
>             "priority": "2",
>             "classification": "4",
>             "blocked": true,
>             "message": "SERVER-WEBAPP JBoss JMX console access attempt",
>             "signature": "1:21516:9",
>             "sigSource": ""
>         },
>         {
>             "ts": 1547683827.723265,
>             "deviceMac": "00:18:0a:01:02:03",
>             "clientMac": "A1:B2:C3:D4:E5:F6",
>             "srcIp": "1.2.3.4:56023",
>             "destIp": "10.20.30.40:80",
>             "protocol": "tcp/ip",
>             "priority": "1",
>             "classification": "33",
>             "blocked": true,
>             "message": "POLICY-OTHER Adobe ColdFusion admin interface access attempt",
>             "signature": "1:25975:2",
>             "sigSource": ""
>         }
>     ]

* * *

#### PATH

`/organizations/{organizationId}/securityEvents`

> Path added  
> 
> GET
> 
> _getOrganizationSecurityEvents_  
> **List the security events for an organization**
> 
>     [
>         {
>             "ts": 1547683314.270398,
>             "deviceMac": "00:18:0a:01:02:03",
>             "clientMac": "A1:B2:C3:D4:E5:F6",
>             "srcIp": "1.2.3.4:34195",
>             "destIp": "10.20.30.40:80",
>             "protocol": "tcp/ip",
>             "priority": "2",
>             "classification": "4",
>             "blocked": true,
>             "message": "SERVER-WEBAPP JBoss JMX console access attempt",
>             "signature": "1:21516:9",
>             "sigSource": ""
>         },
>         {
>             "ts": 1547683827.723265,
>             "deviceMac": "00:18:0a:01:02:03",
>             "clientMac": "A1:B2:C3:D4:E5:F6",
>             "srcIp": "1.2.3.4:56023",
>             "destIp": "10.20.30.40:80",
>             "protocol": "tcp/ip",
>             "priority": "1",
>             "classification": "33",
>             "blocked": true,
>             "message": "POLICY-OTHER Adobe ColdFusion admin interface access attempt",
>             "signature": "1:25975:2",
>             "sigSource": ""
>         }
>     ]

* * *

### Geofence regions

#### PATH

`/networks/{networkId}/sm/geofences/{geofenceId}/regions`

> Path added  
> 
> GET
> 
> _getNetworkSmGeofenceRegions_  
> **List the geofence's regions associated with the specified geofence**
> 
>     [
>         {
>             "description": "This is a sample geofence region",
>             "type": "circle",
>             "lat": 10,
>             "lon": 10,
>             "radius": 10
>         }
>     ]
> 
>   
> 
> POST
> 
> _createNetworkSmGeofenceRegion_  
> **Add a new geofence region to the specified geofence**
> 
>     {
>         "description": "This is a sample geofence region",
>         "type": "circle",
>         "lat": 10,
>         "lon": 10,
>         "radius": 10
>     }

* * *

#### PATH

`/networks/{networkId}/sm/geofences/{geofenceId}/regions/{regionId}`

> Path added  
> 
> GET
> 
> _getNetworkSmGeofenceRegion_  
> **Show the specified geofence region**
> 
>     {
>         "description": "This is a sample geofence region",
>         "type": "circle",
>         "lat": 10,
>         "lon": 10,
>         "radius": 10
>     }
> 
>   
> 
> PUT
> 
> _updateNetworkSmGeofenceRegion_  
> **Update a specified geofence region**
> 
>     {
>         "description": "This is a sample geofence region",
>         "type": "circle",
>         "lat": 10,
>         "lon": 10,
>         "radius": 10
>     }
> 
>   
> 
> DELETE
> 
> _deleteNetworkSmGeofenceRegion_  
> **Delete a geofence region attached to the specified geofence**

* * *

### Geofences

#### PATH

`/networks/{networkId}/sm/geofences`

> Path added  
> 
> GET
> 
> _getNetworkSmGeofences_  
> **List the geofences in this network**
> 
>     [
>         {
>             "name": "My Geofence",
>             "description": "This is a sample geofence",
>             "maxTimeOutside": 5
>         }
>     ]
> 
>   
> 
> POST
> 
> _createNetworkSmGeofence_  
> **Add a new geofence**
> 
>     {
>         "name": "My Geofence",
>         "description": "This is a sample geofence",
>         "maxTimeOutside": 5
>     }

* * *

#### PATH

`/networks/{networkId}/sm/geofences/{geofenceId}`

> Path added  
> 
> GET
> 
> _getNetworkSmGeofence_  
> **Returns a specific geofence**
> 
>     {
>         "name": "My Geofence",
>         "description": "This is a sample geofence",
>         "maxTimeOutside": 5
>     }
> 
>   
> 
> PUT
> 
> _updateNetworkSmGeofence_  
> **Update a geofence**
> 
>     {
>         "name": "My Geofence",
>         "description": "This is a sample geofence",
>         "maxTimeOutside": 5
>     }

* * *

#### PATH

`/networks/{networkId}/sm/geofences/{geofence_id}`

> Path added  
> 
> DELETE
> 
> _deleteNetworkSmGeofence_  
> **Delete a geofence**

* * *

### Tags

#### PATH

`/networks/{networkId}/sm/tags`

> Path added  
> 
> GET
> 
> _getNetworkSmTags_  
> **List the tags on this node group**
> 
>     [
>         {
>             "name": "Geofence Tag",
>             "type": "geofence",
>             "scope": "withAll",
>             "tags": [
>                 "tag",
>                 "test"
>             ]
>         }
>     ]

* * *

#### PATH

`/networks/{networkId}/sm/tags/{tagId}`

> Path added  
> 
> GET
> 
> _getNetworkSmTag_  
> **Show a specific tag**
> 
>     {
>         "name": "Geofence Tag",
>         "type": "geofence",
>         "scope": "withAll",
>         "tags": [
>             "tag",
>             "test"
>         ]
>     }
> 
>   
> 
> POST
> 
> _createNetworkSmTag_  
> **Add a new tag**
> 
>     {
>         "name": "Geofence Tag",
>         "type": "geofence",
>         "scope": "withAll",
>         "tags": [
>             "tag",
>             "test"
>         ]
>     }
> 
>   
> 
> PUT
> 
> _updateNetworkSmTag_  
> **Update a tag**
> 
>     {
>         "name": "Geofence Tag",
>         "type": "geofence",
>         "scope": "withAll",
>         "tags": [
>             "tag",
>             "test"
>         ]
>     }
> 
>   
> 
> DELETE
> 
> _deleteNetworkSmTag_  
> **Delete a tag**

* * *

#### PATH

`/networks/{networkId}/sm/tags/{tagId}/scopedDevices`

> Path added  
> 
> GET
> 
> _getNetworkSmTagScopedDevices_  
> **Get the devices in scope of this tag**
> 
>     {
>         "name": "Geofence Tag",
>         "type": "geofence",
>         "scope": "withAll",
>         "tags": [
>             "tag",
>             "test"
>         ]
>     }

* * *

### Traffic shaping

#### PATH

`/networks/{networkId}/trafficShaping`

> Path added  
> 
> GET
> 
> _getNetworkTrafficShaping_  
> **Display the traffic shaping settings for an MX network**
> 
>     {
>         "defaultRulesEnabled": true,
>         "rules": [
>             {
>                 "definitions": [
>                     {
>                         "type": "host",
>                         "value": "google.com"
>                     },
>                     {
>                         "type": "port",
>                         "value": "9090"
>                     },
>                     {
>                         "type": "ipRange",
>                         "value": "192.1.0.0"
>                     },
>                     {
>                         "type": "ipRange",
>                         "value": "192.1.0.0/16"
>                     },
>                     {
>                         "type": "ipRange",
>                         "value": "10.1.0.0/16:80"
>                     },
>                     {
>                         "type": "localNet",
>                         "value": "192.168.0.0/16"
>                     },
>                     {
>                         "type": "applicationCategory",
>                         "value": {
>                             "id": "meraki:layer7/category/2",
>                             "name": "Blogging"
>                         }
>                     },
>                     {
>                         "type": "application",
>                         "value": {
>                             "id": "meraki:layer7/application/133",
>                             "name": "Battle.net"
>                         }
>                     }
>                 ],
>                 "perClientBandwidthLimits": {
>                     "settings": "custom",
>                     "bandwidthLimits": {
>                         "limitUp": 1000000,
>                         "limitDown": 1000000
>                     }
>                 },
>                 "dscpTagValue": null,
>                 "priority": "normal"
>             }
>         ]
>     }
> 
>   
> 
> PUT
> 
> _updateNetworkTrafficShaping_  
> **Update the traffic shaping settings for an MX network**
> 
>     {
>         "defaultRulesEnabled": true,
>         "rules": [
>             {
>                 "definitions": [
>                     {
>                         "type": "host",
>                         "value": "google.com"
>                     },
>                     {
>                         "type": "port",
>                         "value": "9090"
>                     },
>                     {
>                         "type": "ipRange",
>                         "value": "192.1.0.0"
>                     },
>                     {
>                         "type": "ipRange",
>                         "value": "192.1.0.0/16"
>                     },
>                     {
>                         "type": "ipRange",
>                         "value": "10.1.0.0/16:80"
>                     },
>                     {
>                         "type": "localNet",
>                         "value": "192.168.0.0/16"
>                     },
>                     {
>                         "type": "applicationCategory",
>                         "value": {
>                             "id": "meraki:layer7/category/2",
>                             "name": "Blogging"
>                         }
>                     },
>                     {
>                         "type": "application",
>                         "value": {
>                             "id": "meraki:layer7/application/133",
>                             "name": "Battle.net"
>                         }
>                     }
>                 ],
>                 "perClientBandwidthLimits": {
>                     "settings": "custom",
>                     "bandwidthLimits": {
>                         "limitUp": 1000000,
>                         "limitDown": 1000000
>                     }
>                 },
>                 "dscpTagValue": null,
>                 "priority": "normal"
>             }
>         ]
>     }

* * *

#### PATH

`/networks/{networkId}/ssids/{number}/trafficShaping`

> Path added  
> 
> GET
> 
> _getNetworkSsidTrafficShaping_  
> **Display the traffic shaping settings for a SSID on an MR network**
> 
>     {
>         "trafficShapingEnabled": true,
>         "defaultRulesEnabled": true,
>         "rules": [
>             {
>                 "definitions": [
>                     {
>                         "type": "host",
>                         "value": "google.com"
>                     },
>                     {
>                         "type": "port",
>                         "value": "9090"
>                     },
>                     {
>                         "type": "ipRange",
>                         "value": "192.1.0.0"
>                     },
>                     {
>                         "type": "ipRange",
>                         "value": "192.1.0.0/16"
>                     },
>                     {
>                         "type": "ipRange",
>                         "value": "10.1.0.0/16:80"
>                     },
>                     {
>                         "type": "localNet",
>                         "value": "192.168.0.0/16"
>                     },
>                     {
>                         "type": "applicationCategory",
>                         "value": {
>                             "id": "meraki:layer7/category/2",
>                             "name": "Blogging"
>                         }
>                     },
>                     {
>                         "type": "application",
>                         "value": {
>                             "id": "meraki:layer7/application/133",
>                             "name": "Battle.net"
>                         }
>                     }
>                 ],
>                 "perClientBandwidthLimits": {
>                     "settings": "custom",
>                     "bandwidthLimits": {
>                         "limitUp": 1000000,
>                         "limitDown": 1000000
>                     }
>                 },
>                 "dscpTagValue": null,
>                 "pcpTagValue": null
>             }
>         ]
>     }
> 
>   
> 
> PUT
> 
> _updateNetworkSsidTrafficShaping_  
> **Update the traffic shaping settings for an SSID on an MR network**
> 
>     {
>         "trafficShapingEnabled": true,
>         "defaultRulesEnabled": true,
>         "rules": [
>             {
>                 "definitions": [
>                     {
>                         "type": "host",
>                         "value": "google.com"
>                     },
>                     {
>                         "type": "port",
>                         "value": "9090"
>                     },
>                     {
>                         "type": "ipRange",
>                         "value": "192.1.0.0"
>                     },
>                     {
>                         "type": "ipRange",
>                         "value": "192.1.0.0/16"
>                     },
>                     {
>                         "type": "ipRange",
>                         "value": "10.1.0.0/16:80"
>                     },
>                     {
>                         "type": "localNet",
>                         "value": "192.168.0.0/16"
>                     },
>                     {
>                         "type": "applicationCategory",
>                         "value": {
>                             "id": "meraki:layer7/category/2",
>                             "name": "Blogging"
>                         }
>                     },
>                     {
>                         "type": "application",
>                         "value": {
>                             "id": "meraki:layer7/application/133",
>                             "name": "Battle.net"
>                         }
>                     }
>                 ],
>                 "perClientBandwidthLimits": {
>                     "settings": "custom",
>                     "bandwidthLimits": {
>                         "limitUp": 1000000,
>                         "limitDown": 1000000
>                     }
>                 },
>                 "dscpTagValue": null,
>                 "pcpTagValue": null
>             }
>         ]
>     }

* * *

#### PATH

`/networks/{networkId}/trafficShaping/dscpTaggingOptions`

> Path added  
> 
> GET
> 
> _getNetworkTrafficShapingDscpTaggingOptions_  
> **Returns the available DSCP tagging options for your traffic shaping rules.**
> 
>     [
>         {
>             "dscpTagValue": 10,
>             "description": "AF11 - High Throughput, Latency Insensitive, Low Drop"
>         },
>         {
>             "dscpTagValue": 12,
>             "description": "AF12 - High Throughput, Latency Insensitive, Medium Drop"
>         },
>         {
>             "dscpTagValue": 14,
>             "description": "AF13 - High Throughput, Latency Insensitive, High Drop"
>         },
>         {
>             "dscpTagValue": 18,
>             "description": "AF21 - Low Latency Data, Low Drop"
>         }
>     ]

* * *

#### PATH

`/networks/{networkId}/trafficShaping/applicationCategories`

> Path added  
> 
> GET
> 
> _getNetworkTrafficShapingApplicationCategories_  
> **Returns the application categories for traffic shaping rules.**
> 
>     [
>         {
>             "applicationCategories": [
>                 {
>                     "id": "meraki:layer7/category/24",
>                     "name": "Advertising",
>                     "applications": [
>                         {
>                             "id": "meraki:layer7/application/5",
>                             "name": "Advertising.com"
>                         },
>                         {
>                             "id": "meraki:layer7/application/0",
>                             "name": "AppNexus"
>                         },
>                         {
>                             "id": "meraki:layer7/application/1",
>                             "name": "Brightroll"
>                         }
>                     ]
>                 }
>             ]
>         }
>     ]

* * *

### Uplink interface settings

#### PATH

`/networks/{networkdId}/devices/{serial}/uplinkInterfaceSettings`

> Path added  
> 
> GET
> 
> _getNetworkDeviceUplinkInterfaceSettings_  
> **Return the uplink interface settings for a device**
> 
>     {
>         "wan1": {
>             "usingStaticIp": true,
>             "staticIp": "1.2.3.4",
>             "staticSubnetMask": "255.255.255.0",
>             "staticGatewayIp": "1.2.3.1",
>             "staticDns": [
>                 "1.2.3.2",
>                 "1.2.3.3"
>             ],
>             "vlan": 7
>         },
>         "wan2": {
>             "usingStaticIp": false,
>             "vlan": 2
>         }
>     }

* * *

#### PATH

`/networks/{networkId}/devices/{serial}/uplinkInterfaceSettings`

> Path added  
> 
> PUT
> 
> _updateNetworkDeviceUplinkInterfaceSettings_  
> **Update the uplink interface settings for a device**
> 
>     {
>         "wan1": {
>             "usingStaticIp": true,
>             "staticIp": "1.2.3.4",
>             "staticSubnetMask": "255.255.255.0",
>             "staticGatewayIp": "1.2.3.1",
>             "staticDns": [
>                 "1.2.3.2",
>                 "1.2.3.3"
>             ],
>             "vlan": 7
>         },
>         "wan2": {
>             "usingStaticIp": false,
>             "vlan": 2
>         }
>     }

* * *

### Webhook logs

#### PATH

`/organizations/{organizationId}/webhookLogs`

> Path added  
> 
> GET
> 
> _getOrganizationWebhookLogs_  
> **Return the log of webhook POSTs sent**
> 
>     [
>         {
>             "organizationId": "33619",
>             "networkId": "L_22742",
>             "alertType": "Settings changed",
>             "url": "https://www.example.com/path",
>             "sentAt": "2019-01-01T13:37:28.123456Z",
>             "loggedAt": "2019-01-01T13:37:28.423456Z",
>             "responseCode": 200,
>             "responseDuration": 244
>         }
>     ]

* * *

### IDS alerts

#### PATH

`/ids_alerts?start_time=<float_start_time>&end_time=<optional_float_end_time>`

> Path added  
> 
> GET
> 
> _getIds\_alerts?start\_time=&end\_time=_  
> **Query a shard for up to the last 24 hours of IDS alert data**

* * *

#### PATH

`/ids_alerts/packet?q_ts=<ids_alert_timestamp>q_organization_id=<organization_id>&q_network_id=<network_id>`

> Path added  
> 
> GET
> 
> _getIds\_alertsPacket?q\_ts=q\_organization\_id=&q\_network\_id=_  
> **Query a single network for the packet that generated the ids alert at the given timestamp**

* * *