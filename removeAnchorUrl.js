function removeUrlAnchor(url){
    var cleanUrl = url.split('#').shift(); 
    return cleanUrl
}