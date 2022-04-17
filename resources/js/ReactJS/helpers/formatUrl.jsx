function formatUrl(url) {
    if (url[url.length - 1] === "/") return url.substring(0, url.length - 1);
    else {
        return url;
    }
}

export default formatUrl;
