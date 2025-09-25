
export const setDebounce = function (handler: Function, delay: number) {
    let timeout: number;
    
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(handler, delay);
    }
}

export const sleep = function (ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}