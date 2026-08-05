## What is Event Handling?
-> Event Handling is the process of executing a function when a user interacts with the UI, such as clicking a button, typing in an input, or submitting a form.

## what are events?
->In JavaScript, an event is an action that happens in the browser, often triggered by user interaction or by the browser itself. Examples include mouse clicks, key presses, form submissions, and page loads.
->Event Handling means performing an action when a user interacts with the UI.

1. Browser Events => Browser events are triggered automatically by the browser or system, not by the user.  
    Examples:
        load → when the page finishes loading.
        resize → when the browser window size changes.
        scroll → when the user scrolls (detected by browser).

2. User events are triggered directly by user actions (interaction with the UI).  
    Examples:
        click → when a user clicks a button.
        keydown / keyup → when a user presses or releases a key.
        input / change → when a user types or changes a form field.
        mouseover → when a user hovers over an element.

-Example:    
    function App() {

        function handleClick() {
            alert("Button Clicked");
        }

        return (
            <button onClick={handleClick}>
                Click Me
            </button>
        );

    }