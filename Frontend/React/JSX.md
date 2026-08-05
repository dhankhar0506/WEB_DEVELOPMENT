## What is JSX?
-> JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript. React converts JSX into JavaScript before the browser executes it.
-> JSX (JavaScript XML) is a syntax extension that allows us to write HTML-like structure inside JavaScript. It makes the code easier to read, write, and maintain. Babel then compiles JSX into JavaScript, which the browser can understand.

## Does Browser Understand JSX?
-> NO, Browser only understand HTML, CSS, JS    

## JSX Rules
-> Return Only One Parent Element
-> Use className Instead of class
    - Because class is a reserved keyword in JavaScript.
-> Use camelCase for Attributes
    HTML / JS => <button onclick="">
    JSX => <button onClick="">
-> JavaScript Inside {}
    - Why Curly Braces? 
      - Curly braces tell JSX:"Now switch from JSX to JavaScript."