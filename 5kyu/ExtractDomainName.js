// Extract the domain name from a URL
// https://www.codewars.com/kata/514a024011ea4fb54200004b
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    // 1. split the url by .
    //let arr = url.split('.');

    // 2. check the fist element for www
    // let first = arr[0];
    // if (first.includes('www'))
    //     return arr[1];
    
    // 3. use the part after the last slash
    // let index = first.lastIndexOf('/');
    // return first.slice(index + 1);

    let split = url.split(".");
    return split[0].includes("www") ? split[1] : split[0].slice(split[0].lastIndexOf('/') + 1);
}

console.log(domainName("http://github.com/carbonfive/raygun")); // github

console.log(domainName("http://www.zombie-bites.com")); // zombie-bites

console.log(domainName("https://www.cnet.com")); // cnet