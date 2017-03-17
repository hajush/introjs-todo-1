var cheerio = require('cheerio');
var fs = require('fs');

var htmlString = fs.readFileSync('/Users/harold/Desktop/Dogs.html').toString();
var $ = cheerio.load(htmlString);

// query for all elements with class 'foo' and loop over them
var dogImgs = [];
$('.list-animal-photo').each((i, x) => dogImgs.push(x.attribs.src));
var dogNames = [];
$('.list-animal-name').each((i, x) => dogNames.push(x.children[0].children[0].data));

dogNames.forEach((x, i) => console.log(x, dogImgs[i]));
