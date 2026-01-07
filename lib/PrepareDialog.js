if (!("prepareDialog" in window)) {
    (() => {
        const prepareDialog = {
            show: null,
            hide: null
        };

        window.prepareDialog = prepareDialog;

        function showPrepareDialog() {
            const overlay = document.createElement('div');
            const dialog = document.createElement('div');
            const title = document.createElement('h2');
            const status = document.createElement('div');

            overlay.appendChild(dialog);
            dialog.appendChild(title);
            dialog.appendChild(status);

            title.textContent = 'Loading Note Folders';
            status.textContent = 'Processing...';

            overlay.className = 'prepare-dialog-overlay';
            dialog.className = 'prepare-dialog';
            status.className = 'prepare-dialog-status-text';

            document.body.appendChild(overlay);

            const hidePrepareDialog = () => {
                document.body.removeChild(overlay);
            };

            prepareDialog.hide = hidePrepareDialog;
        }

        prepareDialog.show = showPrepareDialog;

        const prepareDialogStyles = `
.prepare-dialog-overlay {
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

.prepare-dialog {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  min-width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.prepare-dialog-status-text {
  margin: 1rem 0;
  min-height: 1.5em;
}
`;

        const prepareDialogStyleSheet = document.createElement('style');
        prepareDialogStyleSheet.innerText = prepareDialogStyles;
        document.head.appendChild(prepareDialogStyleSheet);

    })();
}
