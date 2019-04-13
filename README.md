Building a game to practice JavaScript, React, and Redux.

Known issues:
- Clicking "Add" on an instance timer will add `Number.MAX_SAFE_INTEGER` to the current count, which in turn breaks the interval (tick) timer. 
    - You can continue to click "Add" and the counter will increase by `Number.MAX_SAFE_INTEGER` each time.
    - So, the issue is not in displaying the number. It may be the `setInterval()` method