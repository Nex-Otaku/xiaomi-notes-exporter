if (!("warningDialog" in window)) {
    (() => {
        const warningDialog = {
            show: null,
            hide: null
        };

        window.warningDialog = warningDialog;

        function showWarningDialog() {
            const overlay = document.createElement('div');
            const dialog = document.createElement('div');
            const title = document.createElement('h2');
            const status = document.createElement('div');
            const thanksButton = document.createElement('button');

            overlay.appendChild(dialog);
            dialog.appendChild(title);
            dialog.appendChild(status);
            dialog.appendChild(thanksButton);

            title.textContent = 'Please Go To Xiaomi Cloud';
            status.innerHTML = '<p>Note export is only available on the Xiaomi Cloud website.</p>' +
                '<p>Please go to Xiaomi Cloud website, open Notes section and try again.</p>' +
                '<p></p>' +
                '<p><a href="https://us.i.mi.com/" target="_blank">Open Xiaomi Cloud in new tab</a></p>';
            thanksButton.textContent = 'OK';

            overlay.className = 'warning-dialog-overlay';
            dialog.className = 'warning-dialog';
            status.className = 'warning-dialog-status-text';
            thanksButton.className = 'warning-dialog-ok-btn';

            document.body.appendChild(overlay);

            const hideWarningDialog = () => {
                document.body.removeChild(overlay);
            };

            warningDialog.hide = hideWarningDialog;

            thanksButton.addEventListener('click', () => {
                document.body.removeChild(overlay);
            });
        }

        warningDialog.show = showWarningDialog;

        const warningDialogStyles = `
.warning-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.warning-dialog {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  min-width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.warning-dialog-status-text {
  margin: 1rem 0;
  min-height: 1.5em;
}

.warning-dialog-ok-btn {
  background: #2196F3;
  color: white;
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  margin: 1rem auto 0 auto;
  display: block;
  font-family: inherit;
}

.warning-dialog-ok-btn:hover {
  background: #1976D2;
}
`;

        const warningDialogStyleSheet = document.createElement('style');
        warningDialogStyleSheet.innerText = warningDialogStyles;
        document.head.appendChild(warningDialogStyleSheet);

    })();
}
