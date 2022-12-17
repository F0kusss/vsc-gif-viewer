import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "gif-viewer" is now active!');

	let inputBoxOptions = {
		ignoreFocusOut: true,
		title: "Please enter URL"
	  };

	context.subscriptions.push(
		vscode.commands.registerCommand('gif-viewer.view', () => {
		  vscode.window.showInputBox(inputBoxOptions)
		  .then(arg => {
			const panel = vscode.window.createWebviewPanel(
				'gifViewer',
				'Gif Viewer',
				vscode.ViewColumn.One,
				{}
			  );
		
			  if(arg === undefined)
			  {
				arg = 'https://media.giphy.com/media/kWp8QC99Z6xFn8bF0v/giphy.gif';
			  }
			  panel.webview.html = getWebviewContent(arg);
		  }); 
		})
	  );
}

function getWebviewContent(link: string | undefined) {
	return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Cat Coding</title>
  </head>
  <body>
	  <img src="${link}" width="300" />
  </body>
  </html>`;
  }

export function deactivate() {}
