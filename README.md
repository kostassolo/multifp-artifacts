# Harnessing Multiplicity: Granular Browser Extension Fingerprinting through User Configurations - Artifacts Page

This is the artifacts page for the ACSAC submission titled "Harnessing Multiplicity: Granular Browser Extension Fingerprinting through User Configurations."

## Summary

Our paper introduces a technique for extracting multiple signatures of each extension by applying different configuration options. We include here 5 extensions of different option sizes, along with their configuration options and the resulting signatures.

We also provide a simplified honeypage for extension testing. Each configuration is applied through an additional content-script, and the signature is extracted from a mutation observer.

## Extensions

We include the artifacts for the following extensions
| Name  | ID   | Options|  Users |
|-------|------|-------| |-------|
| `Color Temperature (Change Lux) ` | mppedbpcpkaeclkgoppmdpdobhlpifeb  | 5   | 5,000 |




## Contents

### Honeypage

The folder contains a simple HTML page and a Node server hosting the page in localhost.

### Artifacts

The folder contains 5 different extension folders. Each subfolder includes the extension's source code, as well as two directories:

- **Configurations:** Contains the initial options (`configuration.json`) and various fuzzed configurations specific to each extension.

- **Signatures:** Contains the following:
  - Baseline signature (e.g., when enabling the extension without customization).
  - Each configuration (`config1.json`) has a corresponding resulting signature (`signature1.json`).
