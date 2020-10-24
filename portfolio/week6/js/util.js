export function qs(selector) {
    return document.querySelector(selector);
}

export function getFromList(key) {
    var s = localStorage.getItem(key);
    var toParse;

    //test and parse to json
    try {
        toParse = JSON.parse(s);
    } 
    catch (exception) {
        console.error(exception);
    }
    return toParse;
}

export function saveToList(key, data) {
    localStorage.setItem(key, Json.stringify(data));
    
}