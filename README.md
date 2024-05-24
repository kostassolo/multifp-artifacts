# Harnessing Multiplicity: Granular Browser Extension Fingerprinting through User Configurations - Artifacts Page
This is the artifacts page for the ACSAC submission titled "Harnessing Multiplicity: Granular Browser Extension Fingerprinting through User Configurations.


## Summary

Our paper introduces a technique for extracting multiple signatures of each extension by applying different configuration options.  We include here 5 extensions of different option sizes,  along with their configuration options and the resulting signatures. 

We also provide a simplified honeypage for extension testing. Each configuration is applied through an additional content-script and the signature is extracted from a mutation observer.


## Contents

### Honeypage
Folder contains a simple HTML page and the  Node server hosting the page in localhost

### 

The folder contains 5 different extension folders. Each subfolder includes the extension's source code, as well as two directories: **configurations** and **signatures**.

- **Configurations:** Contains the initial options (`configuration.json`) and various fuzzed configurations specific to each extension.

- **Signatures:** Contains the following:
  - Baseline signature (e.g., the signature when enabling the extension without customization).
  - For each configuration (`config.json`), there is a corresponding resulting signature (`signature1.json`).


