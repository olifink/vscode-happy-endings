# `Happy Endings` Extension for VSCode

A small Visual Studio Code extension with a couple of slightly smarter editing commands for working in code that I have been missing.

## Features

Currently there are two commands provided. Both are intended to be used primarily via keyboard shortcuts which have been bound to what makes sense to me, but of course you can change that for your setup.

* Smart semicolon at the end of line
* Smart comment moving down

### 1. Smart semicolon at end of line

There are of course a lot of languages where semicolons at the end of statments are mandatory or should be used for clarity, like JavaScript, Java, C#, C/C++, CSS, Vala etc.

The `Happy: Smart semicolon at end of line end` command is bound by default to `Ctrl+Alt Enter` adds a semicolon to the end of the current line if there is none at the moment and then creates a new line.

This is particularly helpful when using [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense) or [Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets) which do a great job writing code for you. However, they usually leave you in the middle of the line, with closing braces and whatnots at the end - which means you need to move the cursor to the end just to place the final semicolon ending the statement.

Well: no more! Just invoke `Ctrl+Alt Enter` anywhere on that line and you're done:

![smart semicolon](https://raw.githubusercontent.com/olifink/vscode-happy-endings/main/screenshots/smart-semicolon.gif)

### 2. Smart comment current line and move to next

The smart un/comment function is the simple union of commenting or uncommenting the current line and moving down to the next line with one shortcut `Ctrl+Shift /`. 

It makes commenting consequtive lines quick and easy without having to mark a selection block first:

![smart comment](https://raw.githubusercontent.com/olifink/vscode-happy-endings/main/screenshots/smart-comment.gif)


## Requirements

No special requirements.

## Extension Settings

No special settings.

## Known Issues

Currently the `Smart semicolon at end of line end` command doesn't take comments into account yet, neither does it work smartly with multi-line selections.

## Release Notes

### 0.0.1

Initial version

-----------------------------------------------------------------------------------------------------------


**Enjoy!**

Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>