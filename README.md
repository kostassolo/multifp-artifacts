# Harnessing Multiplicity Granular Browser Extension Fingerprinting through User Configurations - Artifacts Page


## Summary

Our paper introduces a technique for extracting multiple signatures of each extension by applying different configuration options. We include here 5 extensions of different option sizes, along with their configuration options and the resulting signatures.

We also provide a simplified honeypage for extension testing. Each configuration is applied through an additional content-script, and the signature is extracted from a mutation observer.

## Extensions

We include the artifacts for the following extensions

| Name                               | ID                                | Options | Users |
|------------------------------------|-----------------------------------|---------|-------|
| `Color Temperature (Change Lux)`   | mppedbpcpkaeclkgoppmdpdobhlpifeb  | 5       | 5K |
| `OpenDyslexic`                     | cdnapgfjopgaggbmfgbiinmmbdcglnam  | 2       | 700K |
| `Dyslexia Friendly `                     | miepjgfkkommhllbbjaedffcpkncboeo  | 4       | 10K |
| `Dark Reader `                     | eimadpbcbfnmbkopoojfekhnkhdbieeh  | 20       | 5M |
| `Read Bee `                     | phjbepamfhjgjdgmbhmfflhnlohldchb  | 6       | 500K |






## Contents

### Honeypage

The folder contains a simple HTML page and a Node server hosting the page in localhost.

### Artifacts

Contains 5 different extension folders, with configuration options and different signatures.
Specifically each folder has the following : 

- **Source Code:** The extension's original source code.

- **Configurations Directory:**
  - `configuration.json`: The initial options for the extension.
  - `config1,config2, ...`, etc.: Various  options  specific to the extension.

- **Signatures Directory:**
  - Baseline signature: The fingerprint of the extension without customization.
  - Configuration-specific signatures: For each configuration (e.g., `config1.json`), there is a corresponding signature file (e.g., `signature1.json`).

