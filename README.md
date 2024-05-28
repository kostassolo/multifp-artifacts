# Harnessing Multiplicity Granular Browser Extension Fingerprinting through User Configurations - Artifacts Page

## Summary

Our paper introduces a technique for extracting multiple signatures of each extension by applying different configuration options. We include here 5 extensions of different option sizes, along with their configuration options and the resulting signatures.

We also provide the code that applies fuzzing and generates the options, a simplified honeypage and automation code  for extension testing. Each configuration is applied through an additional content-script, and the signature is extracted from a mutation observer.

## Extensions

We include the artifacts for the following extensions:

| Name                               | ID                                | Options | Users |
|------------------------------------|-----------------------------------|---------|-------|
| `Color Temperature (Change Lux)`   | mppedbpcpkaeclkgoppmdpdobhlpifeb  | 5       | 5K    |
| `OpenDyslexic`                     | cdnapgfjopgaggbmfgbiinmmbdcglnam  | 2       | 700K  |
| `Dyslexia Friendly`                | miepjgfkkommhllbbjaedffcpkncboeo  | 4       | 10K   |
| `Dark Reader`                      | eimadpbcbfnmbkopoojfekhnkhdbieeh  | 20      | 5M    |
| `Read Bee`                         | phjbepamfhjgjdgmbhmfflhnlohldchb  | 6       | 500K  |



### Artifacts

Contains 5 different extension folders, with configuration options and different signatures.

Specifically, for each folder, we store the following:

- **extensionID:** The extension's source code as extracted from the Chrome Store.
- **Configurations Directory:**
  - `configuration.json`: The initial options for the extension.
  - `config1.json`, `config2.json`, `configX`: Various options specific to the extension.
- **Signatures Directory:**
  - Baseline signature: The fingerprint of the extension without customization.
  - Configuration-specific signatures: For each configuration (e.g., `config1.json`), there is a corresponding signature file (e.g., `signature1.json`).

### Honeypage

The folder contains a simple HTML page and a Node server hosting the page in localhost.s


### Fuzzing

Contains a simplified version of the options fuzzing element. It targets the majority of boolean, string, and numerical values.

- **Run:** `python fuzzing_options.py configuration.json`
- **Output:** Creates a `configurations` folder containing multiple (fuzzed) options.

### Testing and Signature Extraction

The folder `testing` contains the main logic of the configuration testing. It generates a new content-script that applies the options to the extension, and updates the `Manifest.json` automatically. Then it visits the honeypage and extracts the (additional) signature.


1. **Set up the Honeypage:**

    - Navigate to the `honeypage` directory:
      ```sh
      cd honeypage
      ```

    - Install the necessary Node.js packages:
      ```sh
      npm install
      ```

    - Start the Node server:
      ```sh
      node server.js
      ```

    The honeypage will be available at `http://localhost:3000`.

2. **Prepare Configuration Files:**

    For each extension, prepare store the  configuration file(s) in the `configurations` directory. Each file represents a different set of options for the extension.

3. **Run the Fuzzing Script:**

      ```sh
      python fuzzing_options.py ../extensions/extension-name/configurations/configuration.json
      ```

    This will generate multiple fuzzed configurations and store them in the `configurations` folder.

4. **Test and Extract Signatures:**

    - Crawler runs on top of Chrome browser using Selenium

    - Run the crawler script with the configuration folder and the extension code folder  as  arguments :
      ```sh
      python3 crawler.py <configurations> ../extensions/<extensionID>
      ```

    This will open a new browser instance, apply each configuration, and extract the signature, storing it in the `signatures` directory.

