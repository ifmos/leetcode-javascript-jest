# LeetCode Javascript Jest

Starter kit with zero-config for testing LeetCode answer in JavaScript, supported by jest, recommend working with vscode!

## Requirements

> node =^8.0.0  
> npm =^5.0.0  
> vscode =^1.23.0

## Usage

1. Setup the source code:

   ```bash
   # Clone this repository into local with a name you like
   git clone https://github.com/ifmos/leetcode-javascript-jest {DIRECTORY_NAME_YOU_LIKE}

   # Install development dependencies
   npm run install
   ```

2. Setup vscode

   - Install [VS Code](https://code.visualstudio.com)

   - Open directory you made with vscode

   - Install workspace `@recommended` vscode plugins [**LeetCode**](https://github.com/jdneo/vscode-leetcode) and [**Jest**](https://github.com/jest-community/vscode-jest)

   - Change VS Code settings to setup LeetCode:

   ```json
   {
     "leetcode.endpoint": "leetcode",
     "leetcode.defaultLanguage": "javascript",
     "leetcode.outputFolder": "./src"
   }
   ```

3. Enjoying!

   Put your test cases into src too with named `xx.test.js`

   Run under script to start!

   ```bash
   npm start
   ```
