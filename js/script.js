
/*
  An array of quote objects name it `quotes`.
  whit five quote objects to the `quotes` array, In each quote object give
  a `quote` and `source` property.
  Add the `citation` and 'year' property to at least one object in the array.
*/
var quotes = [
  {
    quote: 'The Way Get Started Is To Quit Talking And Begin Doing. ',
    source: '-Walt Disney'
  },
  {
    quote: 'Creativity Is Intelligence Having Fun. ',
    source: '-Albert Einstein'
  },
  {
    quote: 'You Only Live Once, But If You Do It Right Once Is Enough. ',
    source: '-Mae West'
  },
  {
    quote: 'If You Can Dream It, You Can Do It. ',
    source: '-Walt Disney'
  },
  {
    quote: 'Try Not To Became A Man Of Success. Rather Become A Man Of Value.',
    source: '-Albert Einstein ',
    citation: 'Psychological ',
    year: '1840'
  }
];

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote(array){
  var randomNumber = Math.floor(Math.random() * quotes.length); //Generator a random number
  for (var i = 0; i < quotes.length; i+=1){
    var randomquote = quotes[randomNumber]; // // randomquote variable with the index set to my randomNumber variable
    return randomquote; // Return randomquote variable
  }
}
var result = getRandomQuote(quotes);

// Create the `printQuote` function to:
function printQuote(){
  var myrandomQuotes = getRandomQuote(); // Call the `getRandomQuote` function and assign it to a variable.
  var fullHTML = '<p class= "Quote ">' + myrandomQuotes.quote + '</p>' + // Add the quote and source section to the HTML string.
                 '<p class= "Source">' + myrandomQuotes.source;
  //check for optional properties
  if(myrandomQuotes.hasOwnProperty('citation') === true && myrandomQuotes.hasOwnProperty('year') === true){
    fullHTML += '<span class= " Citation ">' + myrandomQuotes.citation + '</span>' +
    '<span class= " Year ">' + myrandomQuotes.year + '</span>';
  }else{
    fullHTML += '</p>';

  }

    // set the innnerHTML of the .quote-box to the complete HTML string
document.getElementById('quote-box').innerHTML = fullHTML;

}
//Button click event listener
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
