window.jQuery = function(nodeOrSelector) {
    let nodes = {}
    nodes.addClass = function() {}
    nodes.html = function() {}
    return nodes
}
window.$ = window.jQuery

window.jQuery.ajax = function({ url, method, body, successFn, failFn, headers }) {
    let request = new XMLHttpRequest()
    request.open(method, url); 
    for (let key in headers) {
        let value = headers[key]
        request.setRequestHeader(key, value)
    }
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                successFn.call(undefined, request.responseText)
            } else if (request.status >= 400) {
                failFn.call(undefined, request)
            }
        }
    }
    request.send(body)
}

myButton.addEventListener('click', (e) => {
    window.jQuery.ajax({
        url: 'http://localhost:8888/xxx.json',
        method: 'get',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        successFn: (x) => {
            console.log(`成功${x}`);
        },
        failFn: (x) => {
            console.log(`失败${x}`);
        }
    })
})