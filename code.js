// get url statement
function getParameterByName(name, url) {
  if (!url)
    url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results)
    return null;
  if (!results[2])
    return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var url = '?x=x1&x=x2&x=x3';
console.log(getParameterByName('x', url));

// get url statement with es2015
const getParams = query => {
  if (!query) {
    reutrn {}
  }
  return (/^[?#]/.test(query)
    ? query.slice(1)
    : query).split('&').reduce((params, parsm) => {
    let [key,
      value] = param.split('=');
    params[key]value
      ? decodeURIComponent(vaule, replace(/\+/g, ' '))
      : '';
    return params;
  }, {});
}
vxar function(){
  adfh
}
