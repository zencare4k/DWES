function decomposeUrl(url) {
    prot_s = url.split("://")
    prot = prot_s[0]
    url_s = prot_s[1].split("/")
    dom_s = url_s[0].split(".")
    subdom = (dom_s.length > 2) ? dom_s[0] : null 
    dom = (subdom === null) ? dom_s[0] + "." + dom_s[1] : dom_s[1] + "." + dom_s[2]
    ip = url.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)
    if( ip != null ) {
      subdom = null
      dom = null
      ip = ip[0]
    }
    if( ip == "192.168.256.1" ) {
      dom = ip
      ip = null
    }
    file_s = url_s[url_s.length-1].split("?")
    file = (file_s[0] === "") ? null : file_s[0] 
    args = (file != null && file_s[1] != undefined) ? "?" + file_s[1] : null
    path_s = url_s.splice(1, url_s.length-2)
    path = (path_s.length == 0) ? null : path_s
    return {protocol:prot,
        ipAdress:ip,
        subDomain:subdom,
        domainName:dom,
        folderTree:path,
        targetFile:file,
        argumentsFile:args
    };
}
    

decomposeUrl(console.log(decomposeUrl("https://www.google.com/search/test.js?ok=1"))
)