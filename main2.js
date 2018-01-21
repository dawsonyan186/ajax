window.jQuery = function(nodeOrSelector) {
    let nodes = {}
    nodes.addClass = function() {}
    nodes.html = function() {}
    return nodes
}
window.$ = window.jQuery

window.jQuery.ajax = function({ url, method, body, headers }) {
    return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest()
        request.open(method, url);
        for (let key in headers) {
            let value = headers[key]
            request.setRequestHeader(key, value)
        }
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText)
                } else if (request.status >= 400) {
                    reject.call(undefined, request)
                }
            }
        }
        request.send(body)
    });
}

myButton.addEventListener('click', (e) => {
    window.jQuery.ajax({
        url: 'http://localhost:8888/xxx.json',
        method: 'get',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    }).then(
        (text) => { console.log(`成功${text}`) },
        (request) => { console.log(`失败${request}`) }
    )
})