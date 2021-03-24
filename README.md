# _Happy Endings_ Extension for VSCode

A small Visual Studio Code extension with a couple of slightly smarter editing commands for working in code that I have been missing.

## Features

Currently there are two commands provided. Both are intended to be used primarily via keyboard shortcuts which have been bound to what makes sense to me, but of course you can change that for your setup.

### 1. Smart semicolon at end of line end

There are of course a lot of languages where semicolons at the end of statments are mandatory or should be used for clarity, like JavaScript, Java, C/C++, CSS, Go etc.

The `Happy: Smart semicolon at end of line end` command is bound by default to <kdb>Ctrl</kbd><kdb>Alt</kbd> <kdb>Enter</kbd> adds a semicolon to the end of the current line if there is none at the moment and then creates a new line.

This is particularly helpful when using [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense) or [Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets) which do a great job writing code for you. However, they usually leave you in the middle of the line, with closing braces and whatnots at the end - which means you need to move the cursor to the end just to place the final semicolon ending the statement.

Well: no more! Just invoke <kdb>Ctrl</kbd><kdb>Alt</kbd> <kdb>Enter</kbd> anywhere on that line and you're done:

\!\[feature X\]\(images/feature-x.png\)

### 2. Smart comment current line and move to next



## Requirements

No special requirements.

## Extension Settings

No special settings.

## Known Issues

Currently the `Smart semicolon at end of line end` command doesn't take comments into account yet, neither does it work smartly with multi-line selections.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

-----------------------------------------------------------------------------------------------------------


**Enjoy!**
