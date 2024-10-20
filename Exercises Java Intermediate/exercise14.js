function throttle(func, limit) {
    let lastFunc;
    let lastRan;

    return function() {
        const context = this;
        const args = arguments;

        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}

function calculate() {
    const limit = parseInt(document.getElementById('inputThrottle').value);
    const throttledFunc = throttle(() => {
        document.getElementById('output').innerText += 'Throttled function executed. ';
    }, limit);

    throttledFunc();
}

document.getElementById('inputs').innerHTML = `
    <input type="number" id="inputThrottle" placeholder="Enter throttle limit in ms" />
`;
