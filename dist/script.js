const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const url = urlParams.get('url');

if(urlParams.has('url')){
  console.log(url);
 
  const Http = new XMLHttpRequest();
  const func='/.netlify/functions/twitter';
  Http.open("GET", func);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
  }
}
