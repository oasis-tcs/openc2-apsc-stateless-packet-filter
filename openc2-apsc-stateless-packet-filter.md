![OASIS Logo](http://docs.oasis-open.org/openc2/oc2ls/v1.0/csd01/oc2ls-v1.0-csd01_files/image001.jpg)

-------

# Open Command and Control (OpenC2) Profile for Stateless Packet Filtering Firewall Functions Version 1.0
## Working Draft 01
## 7 March 2018
**Specification URIs**

**This version:**

* oasis-to-fill-in-link.md (Authoritative)
* oasis-to-fill-in-link.html
* oasis-to-fill-in-link.pdf
* oasis-to-fill-in-link.docx

**Previous Version:**

* TBSL

**Technical Committee:**

* [OASIS Open Command and Control (OpenC2) TC](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=openc2)

**Chairs**

* Joe Brule (jmbrule@nsa.gov), National Security Agency
* Sounil Yu (sounil.yu@bankofamerica.com), Bank of America

**Editors**

* Joe Brule (jmbrule@nsa.gov), National Security Agency
* Duncan Sparrell (duncan@sfractal.com), sFractal Consulting
* Alex Everet (TBSL), TBSL
* Jyoti Verma ([jyoverma@cisco.com](mailto:jyoverma@cisco.com)), Cisco

## Abstract
Cyberattacks are increasingly sophisticated, less expensive to execute, dynamic and automated. The provision of cyberdefense via statically configured products operating in isolation is no longer tenable. Standardized interfaces, protocols and data models will facilitate the integration of the functional blocks within a system or enterprise. Open Command and Control (OpenC2) is a concise and extensible language to enable the command and control of cyber defense components, subsystems and/or systems in a manner that is agnostic of the underlying products, technologies, transport mechanisms or other aspects of the implementation. The motivation behind OpenC2 was to enable command and control of cyber defense and recognizes that a language such as OpenC2 is necessary but insufficient to enable coordinated cyber response. Other aspects of coordinated cyber response such as sensing, analytics, and selecting appropriate courses of action are beyond the scope of OpenC2.

## Status
This document was last revised or approved by the OASIS Open Command and Control (OpenC2) TC on the above date. The level of approval is also listed above. Check the "Latest version" location noted above for possible later revisions of this document. Any other numbered Versions and other technical work produced by the Technical Committee (TC) are listed at https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=openc2#technical.

TC members should send comments on this specification to the TC's email list. Others should send comments to the TC's public comment list, after subscribing to it by following the instructions at the "Send A Comment" button on the TC's web page at https://www.oasis-open.org/committees/openc2/.

This Draft is provided under the Non-Assertion Mode of the OASIS IPR Policy, the mode chosen when the Technical Committee was established. For information on whether any patents have been disclosed that may be essential to implementing this specification, and any offers of patent licensing terms, please refer to the Intellectual Property Rights section of the TC's web page (https://www.oasis-open.org/committees/openc2/ipr.php).

Note that any machine-readable content (Computer Language Definitions) declared Normative for this Work Product is provided in separate plain text files. In the event of a discrepancy between any such plain text file and display content in the Work Product's prose narrative document(s), the content in the separate plain text file prevails.

### Citation format:
When referencing this specification the following citation format should be used:

**[TBSL]**

_Open Command and Control (OpenC2) Profile for Stateless Packet Filtering Firewall Functions Version 1.0_. Edited by Joe Brule, Duncan Sparrell, Alex Everet, and Jyoti Verma. 7 March 2018. OASIS Working Draft 01. oasis-to-fill-in-link.html. Latest version: TBSL.

-------

## Notices
Copyright © OASIS Open 2018. All Rights Reserved.

All capitalized terms in the following text have the meanings assigned to them in the OASIS Intellectual Property Rights Policy (the "OASIS IPR Policy"). The full [Policy](https://www.oasis-open.org/policies-guidelines/ipr) may be found at the OASIS website.

This document and translations of it may be copied and furnished to others, and derivative works that comment on or otherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part, without restriction of any kind, provided that the above copyright notice and this section are included on all such copies and derivative works. However, this document itself may not be modified in any way, including by removing the copyright notice or references to OASIS, except as needed for the purpose of developing any document or deliverable produced by an OASIS Technical Committee (in which case the rules applicable to copyrights, as set forth in the OASIS IPR Policy, must be followed) or as required to translate it into languages other than English.

The limited permissions granted above are perpetual and will not be revoked by OASIS or its successors or assigns.

This document and the information contained herein is provided on an "AS IS" basis and OASIS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTY THAT THE USE OF THE INFORMATION HEREIN WILL NOT INFRINGE ANY OWNERSHIP RIGHTS OR ANY IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.

OASIS requests that any OASIS Party or any other party that believes it has patent claims that would necessarily be infringed by implementations of this OASIS Committee Specification or OASIS Standard, to notify OASIS TC Administrator and provide an indication of its willingness to grant patent licenses to such patent claims in a manner consistent with the IPR Mode of the OASIS Technical Committee that produced this specification.

OASIS invites any party to contact the OASIS TC Administrator if it is aware of a claim of ownership of any patent claims that would necessarily be infringed by implementations of this specification by a patent holder that is not willing to provide a license to such patent claims in a manner consistent with the IPR Mode of the OASIS Technical Committee that produced this specification. OASIS may include such claims on its website, but disclaims any obligation to do so.

OASIS takes no position regarding the validity or scope of any intellectual property or other rights that might be claimed to pertain to the implementation or use of the technology described in this document or the extent to which any license under such rights might or might not be available; neither does it represent that it has made any effort to identify any such rights. Information on OASIS' procedures with respect to rights in any document or deliverable produced by an OASIS Technical Committee can be found on the OASIS website. Copies of claims of rights made available for publication and any assurances of licenses to be made available, or the result of an attempt made to obtain a general license or permission for the use of such proprietary rights by implementers or users of this OASIS Committee Specification or OASIS Standard, can be obtained from the OASIS TC Administrator. OASIS makes no representation that any information or list of intellectual property rights will at any time be complete, or that any claims in such list are, in fact, Essential Claims.

The name "OASIS" is a trademark of [OASIS](https://www.oasis-open.org/), the owner and developer of this specification, and should be used only to refer to the organization and its official outputs. OASIS welcomes reference to, and implementation and use of, specifications, while reserving the right to enforce its marks against misleading uses. Please see https://www.oasis-open.org/policies-guidelines/trademark for above guidance.

-------

## Table of Contents
[[TOC]]

-------

# 1 Introduction
A firewall is a network security function that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules.  Current firewalls are characterized as:

1. Stateful packet inspection (or "traditional") - allows or blocks traffic based on connection state, port and protocol
2. Unified threat management (UTM) - performs stateful packet inspection functions plus intrusion prevention, anti-virus, and potentially other services
3. Next-generation firewall (NGFW) - performs stateful packet inspection functions plus intrusion prevention, application awareness, external information feeds, and adaptability to future threats. [1], [2], [3]

Firewalls are generally categorized as network-based or host-based and can take many forms, from dedicated appliances or as part of a multi-function security appliance, to software that runs on general-purpose physical hosts or virtual networks.  This actuator profile applies to stateful packet inspection functions.  Additional functions performed by UTM and NGFW products are covered in separate profiles.

This actuator profile specifies the set of actions, targets, specifiers, and options that integrates firewall functionality with the Open Command and Control (OpenC2) command set. Through this command set, cyber security orchestrators may gain visibility and provide control into the firewall functionality in a manner that is independent of the vendor or generator of the firewall. In the context of this document, 'firewall' refers to the first generation packet filter firewalls. Next generation firewall products that provide additional functionality are referred to other actuator profiles. NEED TO DEFINE

## 1.1 Purpose
The purpose of this document is to:

* Identify the OpenC2 ACTIONS that are applicable to the actuators with firewall functionality.
* Identify the TARGETS that are applicable to the firewall class of actuators.
* Identify ACTUATOR SPECIFIERS and OPTIONS that are applicable and/or unique to the firewall class of actuators
* Identify the COMMAND OPTIONS that are applicable to firewall actuators
* Provide sample OpenC2 commands to a firewall

All components, devices and systems that provide firewall functionality will implement the ACTIONS, TARGETS, SPECIFIERS and OPTIONS identified as minimum to implement (MTI) in this document. Actions that are applicable, but not necessarily required for firewalls will be identified as optional.

## 1.2 Scope
Actuator profiles will provide mandatory to implement and optional actions for a cyber defense function. The profiles will be used for the purposes of validation and interoperability.

Actuator profiles will use as much information from the OpenC2 Language Specification as possible, including vocabularies for action types, target types specifiers and options, actuator types, and command options.

The possible action target pairings will be called out in the actuator profiles

Actuator Profiles:

* MUST NOT define or implement ACTIONS external to this specification.
* Are specifications that SHALL have a normative reference to the OpenC2 Language Specification
* Reference ACTIONS and OPTIONS that MUST be a subset of the ACTIONS and OPTIONS defined in Section X.X of this specification.
* MUST define the mandatory to implement ACTIONS and OPTIONS.
* MAY define optional ACTIONS and OPTIONS.
* MUST define the applicable TARGETS utilizing the target data model provided in Section X.X of this specification.
* MAY define required actuator 'specifiers' as defined in Section X.X of this specification.
* MAY define required actuator 'options' as defined in Section X.X of this specification.
* MAY define optional actuator 'specifiers' and 'options' as defined in Section
* MAY define an actuator specific TARGET data model.

Figure 1 presents a notional OpenC2 implementation which illustrates cases were a firewall profile may be required and the components within the network that may interact with or be affected by OpenC2.

* OpenC2 Message Fabric: The transport mechanism for passing OpenC2 commands between OpenC2 compliant entities within the network.
* Orchestrator: Products that send commands, receives responses, and manages the execution of a course of action involving one or more actuators. The orchestrator needs a priori knowledge of which commands the actuator can process and execute therefore must implement the profiles for any device that it intends to command.
* OpenC2 Proxy: An abstraction of the firewall functionality that maps (or translates) OpenC2 commands to an appropriate API (i.e., a mitigation manager or vendor API).
* Device Manager: Interfaces with one or more physical or virtual firewalls. A device manager is a means to provide mitigation system management, which includes participation in OpenC2 workflow processing, transforming actions into a format suitable for a given device, set of devices or capability within a device that provides the firewall functionality. A proxy between the OpenC2 message fabric and the device manager may implement the firewall profile and map the commands to the device manager's API or the device manager itself may natively support OpenC2 at its API (thus removing the need for the proxy).
* Proxy to Physical or virtual firewalls. An OpenC2 proxy must implement the firewall profile and map the commands to the vendor API.
* Native OpenC2 support: In the future, there may be devices that natively support OpenC2, and will be required to implement the firewall profile.
* Other Actuators: A product may provide multiple cyber defense mechanisms including firewall functionality as a subset of its capabilities thus the firewall profile is (in addition to other profiles) needed.

![image alt text](image_0.png)

**Figure 1. Notional OpenC2 Implementations**

## 1.3 Terminology
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this specification are to be interpreted as described in IETF RFC 2119 [RFC2119].

## 1.4 Document Conventions
The following typographical conventions are used in this document.

_italics_

Indicates new terms, URLs, email addresses, filenames, and file extensions.

ALL CAPS

Used for components of the abstract syntax: ACTION, TARGET, ACTUATOR, OPTIONS.

'single quotes'

Used for action names.

## 1.5 Document Overview
TBD

## 1.6 Normative References
TBD

## 1.7 Non normative References
TBD

## 1.8 Acknowledgements
TBD

# 2 OpenCLanguage Binding
The OpenC2 Language Specification (OpenC2 Forum, 2016) describes a vocabulary by which network elements may be commanded and controlled. By design, the language is intended to convey high level actions so that the desired effects of a command can be communicated despite a lack of detailed knowledge of the cyber defense components. As additional information is made available, the language is extensible with context specific specifiers and options which permits additional granularity of the command.

This section defines the set of ACTIONS, TARGETS, and OPTIONS that are meaningful in the context of the actuator in question. This section also describes the format of the RESPONSE frame's status and results field.

* The ACTIONS and OPTIONS defined in this section of the actuator profile MUST be a subset of the ACTIONS and OPTIONS defined in the OpenC2 Language specification. The actuator profiles MAY NOT define ACTIONS and OPTIONS that are external to OpenC2.
* This of the actuator profile MAY augment the definition of the actions and modifiers in the context of the actuator but MUST NOT define the actions and modifiers in a manner that is inconsistent with this specification.
* The actuator profiles MUST define the set of ACTIONS that are mandatory to implement.
* The actuator profiles MAY define the set of ACTIONS that are optional to implement.
* The actuator profile MUST identify the OpenC2 TARGETs and target-specifiers that are meaningful in the context of the actuator in question.
* The actuator profile SHOULD include a data model for the TARGETs and target-specifiers in accordance with the schema defined in this specification.
* The actuator profile SHOULD NOT define target-specifiers that are unique to the actuator profile.

## 2.1 Commands
### 2.1.1 Actions
The OpenC2 Language Specification (OpenC2 Forum, 2016) describes a vocabulary by which network elements may be commanded and controlled. By design, the language is intended to convey high level actions so that the desired effects of a command can be communicated despite a lack of detailed knowledge of the cyber defense components. As additional information is made available, the language is extensible with context specific modifiers and specifiers which permits additional granularity of the command.

OpenC2 actions are persistent in firewalls unless they are explicitly identified as running or temporary through the use of modifiers. See Table 1.

**Table 1. Firewall Actions**

| Action | Description | MTI |
|:---|:---|:---|
| query | The query action initiates a single request for information. Used to determine the state or settings of the firewall.  | MTI |
| deny | The deny action is used to prevent a traffic from reaching a destination or preventing access. | MTI |
| allow | The allow action permits traffic or access. | MTI |
| set | The set action changes a value within a configuration, a setting or some other value | MTI |
| notify | The notify action is used to direct an entity to send alerts to another entity. Notify is not used for normal operations, but is required for the use case where you need to rapidly direct the firewall to send alerts. | MTI |
| update | The update action instructs the component to retrieve and process a software update, reconfiguration, or some other update. | MTI |
| delete | Removes data, files and or entries. | MTI |
| save | Commits data or state to memory. | MTI |
| start | The start action initiates a process, application, system or some other activity. | Optional |
| stop | The stop action halts a system or ends an activity. | Optional |
| restart | The restart action conducts a stop of a system or an activity followed by a start. | Optional |
| redirect | In the context of a firewall, redirect is used to forward the packet, traffic or flow to another actuator or honey net and not necessarily to induce an alternate path to the destination. | Optional |

### 2.1.2 Targets
The TARGET is the object of the ACTION (or alternatively, the ACTION is performed on the TARGET). This document will use the OpenC2 schema which was derived from the STIX data model for cyber observables. Table 2 lists the TARGETs that are applicable to firewall functionality.

**Table 2. Target Data Model Applicable to Firewalls**

| Target | Description/Notes | Applicable Actions | MTI |
|:---|:---|:---|:---|
| domain-name | Fully qualified domain name. Supported by some firewalls. The actual rule within the firewall will be an IP address so the DNS resolution must take place. Most firewall implementations utilize tools that are optimized for DNS resolution. | deny, allow | Opt |
| Five-tuple | Consists of the address (source and destination), port number (source and destination) and protocol identifier. An 'incomplete' five-tuple may be sent to the firewall and it is left to the implementer's discretion with respect to the default value of the unspecified fields and/or if the unspecified fields make sense in the context of the device. | deny, allow | MTI |
| CIDR | In the interest of generating a more concise command, the use of the classless inter-domain routing notation to specific multiple addresses within the five-tuple is permitted. | deny, allow | Opt |
| Hostname | Supported by some firewalls. The actual rule within the firewall is an IP address so the hostname resolution must take place. | deny, allow | Opt |
| File | Typically supported by device managers but may be supported by some firewalls. The file object includes the path and name specifiers | Update | Opt |
| x-config | The x-config.fw object identifies configurable attributes of the firewall. The attributes include:<br><NOT_PARA> | Set | Opt |

### 2.1.3 Modifiers
Modifiers provide additional information about the action such as time, periodicity, duration, location etc. Modifiers can denote the when, where, and how aspects of an action. Modifiers can be used to indicate whether the actuator should explicitly acknowledge receipt of the command, respond upon completion of the execution of the command, or provide some other status information. OpenC2 actions are persistent (or permanent) in their implementations. Running, non-persistent or temporary commands can be achieved through the use of modifiers.

There are two types of Action Modifiers:

* Universal – Applicable to all actions for all actuators. The universal modifiers are documented in the Language Description document and by definition apply actuators that provide firewall function.
* Action Specific – Applicable to specific actions for all actuators.
* Actuator Specific; Are only meaningful in the context of a particular actuator function.

Table 3 summarizes the Modifiers as they relate to firewall functionality.

**Table 3. Firewall Functionality Modifiers**

| Modifier | Type | Description | Applicable Actions | MTI |
|:---|:---|:---|:---|:---|
| id | string | The unique identifier for the action. | Universal | MTI |
| response | string | Indicate the type of response required for the action. | Universal | MTI |
| start-time | datetime | The specific date/time to initiate the action. | Universal | MTI |
| end-time | datetime | The specific date/time to end the action. | Universal | MTI |
| destination | string | Identifies where to send an acknowledgement or other response. | Universal | MTI |

## 2.2 Responses and Alerts
Response and Alerts messages originate from the actuator and are informative rather than a command or request that the recipient execute some task(s).

Alert is used to signal the occurrence of an event and are unsolicited. Response is used to provide any data requested as a result of an action such as acknowledgement, providing the status, or additional information related to the requested action. The recipient of the response can be the original requester of the action or to another recipient(s) designated in the modifier of the action.

Status codes apply to all actions and are presented in Table 4. The formats and what is expected in the response and alerts for specific actions will be captured when the specifiers for the various actions are defined in section 2.3 and examples will be provided in section 3. Responses and Alerts associated with MTI actions MUST be implemented. Implementations that include optional actions MUST implement the Responses associated with the implemented action.

**Table 4. Response Codes Applicable to All Actions**

| Status Code | Status Text | MTI |
|:---|:---|:---|
| 102 | Processing. Command received but action not necessarily complete | MTI |
| 200 | OK | MTI |
| 301 | Cannot execute, redirect to another entity. In this response code, a specifier that indicates a suggested entity MUST be included in the data field. | Optional |
| 400 | Unable to process command, parsing error | MTI |
| 401 | Authentication or authorization failure | MTI |
| 403 | Forbidden | MTI |
| 500 | Server Error | MTI |
| 501 | Not implemented | MTI |

# 3 Actuator Data Model
This section defines the data model for the profile. The ACTUATOR field within an OpenC2 message command is identified with the actuator profile, and this section defines the actuator-specifiers and actuator-options needed for additional precision.

* The specifiers provide information with respect to a particular actuator to increasing levels of precision.
* Actuator-options provide information with respect to how the actuator is to execute the action.
* The actuator profile MUST define a schema that includes specifiers and options that are meaningful in the context of the actuator.
* The actuator profile MUST define the parts of the schema that are mandatory to implement.
* The actuator profile MUST provide property tables which are derived from the schema. The property tables are normative and define the mandatory to implement and optional actuator-specifiers and actuator-options.

## 3.1 Actuator Specifiers
An ACTUATOR is the entity that provides the functionality and performs the action. The ACTUATOR executes the ACTION on the TARGET. In the context of this profile, the actuator is the firewall and the presence of one or more specifiers further refine which actuator(s) shall execute the action.

The ACTUATOR is optional in an OpenC2 command. If absent, then any entity that can execute the action should execute the command. If the ACTUATOR field is specified, then only the entities identified to the degree specified in the actuator field act upon the command.

Whether or not an actuator specifier is meaningful in the context of a firewall is strongly dependent on the individual product, therefore are optional.

Table 5 identifies the specifiers that are applicable to the firewall actuator. Section 3 provides sample commands with the use of specifiers.

**Table 5. Firewall Specifiers**

| Firewall Specifier | Description |
|:---|:---|
| Network | All network layer devices that implement the firewall profile |
| Perimeter | Perimeter; Firewalls with connections to the network and to external networks that maintain external routing tables |
| Internal | Internal; Firewalls that are not directly connected to devices external to the network. |
| Host | Hostname for a particular w/ firewall functionality |
| Ip-addr | Ip address for a particular w/ firewall functionality |
| Swid | Further specifies the Software ID for a particular device w/ firewall functionality |
| Named Group | User defined collection of devices with firewall functionality |

## 3.2 Actuator Options
There are actuator options that only apply to a subset of firewall actions. These options provide detail on how the action is executed. See Table 6.

**Table 6. Action Specific Firewall Actuator Options**

| Specifier | Type | Description | Applicable Actions | MTI |
|:---|:---|:---|:---|:---|
| Drop | Boolean | Stop processing and do not send a notification to the source of the packet. | Deny | MTI |
| Reject | Boolean | Stop processing and send a notification to the source of the packet. | Deny | MTI |
| Complete | Boolean | Stop processing and send a false acknowledgment to the source that the processing was completed. | Deny | Optional |
| Running | Boolean | Any changes to a device are to be implemented as persistent changes. Setting the running modifier to TRUE results in a command that is not persistent in the event of a reboot or restart. The running modifier can be overridden by issuing a subsequent _save_ action | Set, update | Optional |

 

# 4 Applicable OpenC2 COMMANDS
<This section contains action – target pairs, including target specifiers and options that are applicable to the actuator. Actuator specifier and options are also laid out.>

This page intentionally left blank.

# 5 Conformance statements
Conformant implementations of OpenC2 Firewall Functions:

* MUST support OpenC2 commands, responses, and alerts as defined in Section 4.
* MUST implement JSON serialization of the commands, responses and alerts that are consistent with the syntax defined in the OpenC2 Language Specification.
* MAY implement any serialization that provides a one to one mapping of the data elements as defined in the abstract schema presented in the Language Specification to a format that is consistent with the syntax defined in Appendix B OpenC2 SCHEMA – FIREWALL FUNCTIONS.
* MUST implement the actuator data model as presented in the abstract schema presented in Section 3.

<Note: need to define "support" - behavior that must occur as a result of executing commands>

# 6 References
1. https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-firewall.html
2. https://www.juniper.net/uk/en/solutions/software-defined-secure-networks/next-gen-firewall 
3. https://www.paloaltonetworks.com/cyberpedia/what-is-a-firewall 

This page intentionally left blank.

# Appendix A. Sample commands
This section will summarize and provide examples of OpenC2 commands as they pertain to firewalls. The sample commands will be encoded in verbose JSON, however other encodings are possible provided the command is validated against the schema presented in Appendix A. Examples of corresponding responses and/or alerts will be provided where appropriate.

The samples provided in this section are for illustrative purposes only and are not to be interpreted as operational examples for actual systems. Within the scope of this document, a # character indicates a comment, however it should be noted that OpenC2 itself does not support comments within a command.

## 7.1 Deny and Allow
Deny and allow are mandatory to implement and can be treated as mathematical complements of each other. Unless otherwise stated, the example targets, specifiers, modifiers and corresponding responses are applicable to both actions.

```
# Block a particular connection within the domain and do not send a host unreachable
{
    "action": "deny",
    "target": {
        "ip_connection": {
            "layer4_protocol": "TCP",
            "src_addr": {"name": "www.badco.com"},
            "src_port": {"number": 10996},
            "dst_addr": {"ipv4": "1.2.3.5"},
            "dst_port": {"protocol": "https"}
        }
    },
    "actuator": {
        "firewall": {
            "asset_id": "30"
        }
    },
    "command-options": {
        "context": "91",
        "start_time": "2016-11-25T08:10:31-04:00",
        "duration": "PT2M30S",
        "command_id": "fw17_8675309"
    }
}
```

```
# Block all ftp data transfers from hosts and request ack. Note that the five-tuple is incomplete
{
    "action": "deny",
    "target": {
        "type": "openc2:five-tuple",
        "specifiers": {
            "Layer4Protocol": "TCP",
            "src-port": 21
        }
    }
    "actuator": {
        "type": "openc2:firewall",
        "specifiers": {endpoint},
        "options":{ openc2: drop}
    },
    "command-options": {
        {"id":"UUID=123e4567-e89b-12d3-a456-426655440000"}
        {response=TRUE}
    }
}
# Note that the response was requested and all endpoints that can execute the command should.
```

```
# In this case, one of the endpoints successfully issued the deny but the endpoint located at 1.2.3.8 failed
{
    response
        {Source: openc2:ip-addr=1.2.3.4}
        {cmdref=123e4567-e89b-12d3-a456-426655440000 }
        {statuscode=200}
}
{
    response
        {Source: openc2:ip-addr=1.2.3.8}
        {cmdref=123e4567-e89b-12d3-a456-426655440000 }
        {statuscode=400}
}
```

```
# Allow ftp data transfers to a particular ip address from any host. Note that the five-tuple is incomplete
{
    "action": "allow",
    "target": {
        "type": "openc2:five-tuple",
        "specifiers": {
            "Layer4Protocol": "TCP",
            "ip-address-dst": 1.2.3.5
            "src-port": 21
        }
    }
    "actuator": {
        "type": "openc2:firewall",
        "command-options": {
            {"id":"UUID=123e4567-e89b-12d3-a456-426655440000"}
            {response=TRUE}
        }
    }
}
#
{
    response
        {Source: openc2:ip-addr=1.2.3.4}
        {cmdref=123e4567-e89b-12d3-a456-426655440000 }
        {statuscode=200}
}
```

## 7.2 Set
Set is mandatory to implement and is intended for toggling of values or enabling capabilities or functions. This action is distinct from update in that set needs to select from the allowed values of target (artifact, file, process, user-account, windows-registry-key) and the allowed actuator types. Set is intended for more atomic modifications rather than a full replacement of a configuration. In the context of firewalls, set is intended to modify data that impacts the firewall itself and it is inappropriate to use set to modify the ACL. Modifications of the ACL should utilize the deny and allow actions.

```
# Turn the logging on for all of the network layer firewalls
{
    "action": "set",
    "target": {
        "x-config": {"firewall.logging": true}
    },
    "actuator": {
        "type": "openc2:firewall": {
        "named-group": "network"}
    }
}
```

## 7.3 Update
Update is mandatory to implement and is intended for the device to process new configuration files, software updates, patches, policy updates etc. The update action is a compound action in that all of the steps required for a successful update (such as download the new file, install the file, reboot etc.) are implied. In the context of configuration updates, update is distinct from set in that a set command will provide the new value within the command itself while an update command may provide the location of the new files which are retrieved out of band.

```
# instructs the firewalls to acquire a new configuration file. Note that all network based firewalls will install the new update because no particular firewall was identified. Host based firewalls will not act on this because network firewalls were identified as the actuator
{ 	
    "action": "update",
    "target": {
        "file": {
            "parent_directory": {
            "path":"\\\\someshared-drive\\somedirectory\\configurations"},
            "name": "firewallconfiguration.txt"
        }
    },
    "actuator": {
        "openc2:firewall": {
            "named-group":"network"
        }
    }
}
```

```
# Instructs any firewall running a particular software load to install a software upgrade
{
    "action": "update",
    "target": {
        "file": {
            "parent_directory": {
                "path": "\\\\someshared-drive\\somedirectory\\so"
            },
            "name": " version2.2offirewallsoftware.exe"
        }
    },
    "actuator": {
        "openc2:firewall": {
            "x-tagID": "firewallcompanyversion2.1"
        }
    }
}
```

# Appendix B. OpenC2 SCHEMA – FIREWALL FUNCTIONS
