export function parseQuery(variable, query) {
    let vars = query.replace('?','').split('&');
    let result = '';
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) === variable) {
            result = decodeURIComponent(pair[1]);
        }
    }

    return result;
}