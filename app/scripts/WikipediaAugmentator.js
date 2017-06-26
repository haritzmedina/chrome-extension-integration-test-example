class WikipediaAugmentator{
  constructor(){

  }

  init(){
    let dbpediaPrefix = 'http://dbpedia.org/page/';
    let urlParts = window.location.href.split("/");
    let articleId = urlParts[urlParts.length -1];
    let heading = document.querySelector('#firstHeading');
    let dbpediaLink = document.createElement('a');
    dbpediaLink.href = dbpediaPrefix+articleId;
    dbpediaLink.innerText = heading.innerText;
    dbpediaLink.target = '_blank';
    heading.innerHTML = dbpediaLink.outerHTML;
  }
}

module.exports = WikipediaAugmentator;
