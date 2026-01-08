(
    () => {
        console.log('Starting popup logic');

        const sendButton = document.getElementById('send-button');

        if (sendButton === null) {
            return;
        }

        let isProcessingNotes = false;

        sendButton.textContent = isProcessingNotes ? 'Exporting...' : 'Download';

        sendButton.onclick = function (el) {
            function parserRunExport() {
                if ("xiaomiNotesParser" in window) {
                    window.xiaomiNotesParser.runExport();
                }
            }

            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.scripting.executeScript(
                    {
                        target: {tabId: tabs[0].id},
                        func: parserRunExport,
                    },
                    () => {
                    }
                );
            });
        }

        // Injecting content scripts
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.scripting.executeScript(
                {
                    target: {tabId: tabs[0].id},
                    files: [
                        'lib/FileSaver.js',
                        'lib/PrepareDialog.js',
                        'lib/ProgressDialog.js',
                        'lib/WarningDialog.js',
                        'lib/convert.js',
                        'lib/jszip.js',
                        'parser.js'
                    ],
                },
                () => {
                }
            );
        });
    }
)();