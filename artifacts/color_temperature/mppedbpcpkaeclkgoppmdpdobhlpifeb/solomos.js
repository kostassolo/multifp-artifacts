function processStorageData() {
    // chrome.storage.sync.set("{automation:{behavior:OnOff,enabled:true,mode:},changeBrowserTheme:true,customThemes:[],detectDarkTheme:false,disabledFor:[],displayedNews:[thanks-2023],enableContextMenus:false,enableForPDF:true,enableForProtectedPages:false,enabled:false,enabledByDefault:true,enabledFor:[],fetchNews:true,location:{latitude:null,longitude:null},presets:[],previewNewDesign:false,schemeVersion:2,syncSettings:true,syncSitesFixes:false,theme:{brightness:100,contrast:90,darkColorScheme:Default,darkSchemeBackgroundColor:#181a1b,darkSchemeTextColor:#e8e6e3,engine:dynamicTheme,fontFamily:Helvetica Neue,grayscale:0,immediateModify:false,lightColorScheme:Default,lightSchemeBackgroundColor:#dcdad7,lightSchemeTextColor:#181a1b,mode:1,scrollbarColor:,selectionColor:auto,sepia:0,styleSystemControls:false,stylesheet:,textStroke:0,useFont:false}}")

    chrome.storage.local.get(null, function(localData) {
        var localJsonData = JSON.stringify(localData);
        console.log('Local Storage Data:', localJsonData);
        localStorage.setItem('l_dd666', localJsonData);

        // Retrieve all data from chrome.storage.sync
        chrome.storage.sync.get(null, function(syncData) {
            var syncJsonData = JSON.stringify(syncData);
            console.log('Sync Storage Data:', syncJsonData);
            localStorage.setItem('s_dd666', syncJsonData);

            // Process the storage data again after 1 second
            setTimeout(processStorageData, 5000); // 1000 milliseconds = 1 second
        });
    });
}

// Start the process initially
processStorageData();
