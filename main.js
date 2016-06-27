var addScript = function(url) {
  var script  = document.createElement('script');
  script.src  = url;
  document.body.appendChild(script);
  document.body.removeChild(script);
}
var changeColor = function() {
  var color    = Math.floor(Math.random()*16777215).toString(16);
  var quote    = document.getElementById('quote');
  var author   = document.getElementById('author');
  var newQuote = document.getElementById('new-quote');

  document.body.style.backgroundColor = '#' + color;
  quote.style.color                   = '#' + color;
  author.style.color                  = '#' + color;
  newQuote.style.backgroundColor      = '#' + color;

}
var getQuote = function() {
  var url    = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=parseQuote';
  addScript(url);
}
var parseQuote = function(data) {
  var quote    = document.getElementById('quote');
  var author   = document.getElementById('author');
  
  var quoteAuthor  = data.quoteAuthor;
  var quoteText    = data.quoteText;

  quote.innerHTML  = quoteText;
  author.innerHTML = quoteAuthor;  

  changeColor();
}

function main() {
  getQuote();
}
