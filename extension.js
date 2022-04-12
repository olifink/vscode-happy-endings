// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Command: vscode-happy-endings.endOfLine 
	// a semicolon is placed at the end of the current line if it doesn't exist
	// works no matter where the cursor is on the line at the time of invokation
	// also adds a following with a new empty line
	let disposable = vscode.commands.registerTextEditorCommand('vscode-happy-endings.endOfLine',
		function (textEditor, edit, args, thisArg) {
			// get the current line and text
			let pos = textEditor.selection.active;
			let text = textEditor.document.lineAt(pos.line).text;

			// check for a line comment
			if(text.includes("//")) {
				text=text.split("//")[0];
			} else if(text.includes("/*")) {
				// check for a start of a block comment
				text=text.split("/*")[0];
			}
			
			// add the semicolon at the end
			text = text.trimEnd();
			if (text.length > 0 && text[text.length - 1] != ";") {
				let posEnd = pos.with(pos.line, text.length)

				// bug: edit.insert(posEnd, ";"); // why would that suddenly not work anymore?
				textEditor.edit( builder => {
					builder.insert(posEnd,";");
				})
			}

			// and finally make a new line
			vscode.commands.executeCommand("editor.action.insertLineAfter");
		});


	// Command: vscode-happy-endings.multicomment
	// Comment or uncomment the current line and move to the next one so that
	// it can be used quickly multiple times to comment a couple of lines without
	// having to select them first
	let disposable2 = vscode.commands.registerTextEditorCommand('vscode-happy-endings.comment',
		function (textEditor, edit, args, thisArg) {
			vscode.commands.executeCommand("editor.action.commentLine");
			if (textEditor.selection.isSingleLine) {
				vscode.commands.executeCommand("cursorDown");
			}
		});
	context.subscriptions.push(disposable, disposable2);


}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
