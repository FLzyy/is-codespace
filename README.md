# is-codespace

> Detect if your code is currently running on Replit

```js
import isCodespace from "is-replit";

// true if ran in Codespaces, false otherwise
console.log(isCodespace());

process.env.CODESPACE = "true"; // Manually set CODESPACE

// true
console.log(isCodespace());
```
