{
 "meta": {
  "module": "oasis-open.org/openc2/v1.0/ap-slpf",
  "patch": "wd03",
  "title": "Stateless Packet Filtering",
  "description": "Data definitions for Stateless Packet Filtering (SLPF) functions",
  "exports": ["Target", "Specifiers", "Args", "Results"]
 },

 "types": [
  ["Target", "Choice", [], "SLPF targets", [
    [1, "rule_number", "Rule-ID", [], "Uniquely identifies a rule associated with a previously-issued deny or allow."]]
  ],

  ["Args", "Map", [], "SLPF command arguments", [
    [1, "drop_process", "Drop-Process", ["[0"], "Specifies how to handle denied packets"],
    [2, "running", "Boolean", ["[0"], "Normal operation assumes updates are persistent. If TRUE, updates are not persistent in the event of a reboot or restart.  Default=FALSE."],
    [3, "direction", "Direction", ["[0"], "Specifies whether to apply rules to incoming or outgoing traffic. If omitted, rules are applied to both."],
    [4, "insert_rule", "Rule-ID", ["[0"], "Specifies the identifier of the rule within a list, typically used in a top-down rule list."]]
  ],

  ["Drop-Process", "Enumerated", [], "", [
    [1, "none", "Drop the packet and do not send a notification to the source of the packet."],
    [2, "reject", "Drop the packet and send an ICMP host unreachable (or equivalent) to the source of the packet."],
    [3, "false_ack", "Drop the traffic and send a false acknowledgement that the data was received by the destination."]]
  ],

  ["Direction", "Enumerated", [], "", [
    [1, "ingress", "Apply rules to incoming traffic only"],
    [2, "egress", "Apply rule to outbound traffic only"]]
  ],

  ["Rule-ID", "Integer", [], "Immutable identifier assigned when an access rule is created."],

  ["Specifiers", "Map", [], "SLPF actuator specifiers", [
    [1, "hostname", "String", ["[0"], "RFC 1123 hostname (can be a domain name or IP address) for a particular device with SLPF functionality"],
    [2, "named_group", "String", ["[0"], "User-defined collection of devices with SLPF functionality"],
    [3, "asset_id", "String", ["[0"], "Unique identifier for a particular SLPF"],
    [4, "asset_tuple", "String", ["[0", "]10"], "Unique tuple identifier for a particular SLPF consisting of a list of up to 10 strings"]]
  ],

  ["Results", "Map", [], "SLPF results", [
    [1, "rule_number", "Rule-ID", ["[0"], "Rule identifier returned from allow or deny command."]]
  ]]
}