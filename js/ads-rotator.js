$(function(){
  var adBanners = [
    "images/txp-leaderboard-728x90.jpg",
    "images/basic-textpattern-728x90.jpg",
    "images/wordpress-mythemesshop-728x90.jpg",
    "images/mwp_banner_18_728x90.jpg",
    "images/grooveshark-ad-728x90.jpg",
    "images/treehouse-learning-ad-728x90.jpg",
    "images/ddg-duck-duck-go-ad-728x90.jpg",
    "images/photoshop-to-html-ad-728x90.jpg",
    "images/getting-good-javascript-ad-728x90.jpg"
  ];
  var bannerLinks = [
    "http://textpattern.com/",
    "http://textpattern.com/",
    "http://mythemeshop.com/",
    "https://managewp.com/",
    "http://grooveshark.com/",
    "http://teamtreehouse.com/",
    "https://duckduckgo.com/",
    "http://rockablepress.com/books/photoshop-to-html",
    "http://rockablepress.com/books/getting-good-with-javascript"
  ];
  
  
  var imgPrefix   = "images/";
  var randNum     = Math.floor(Math.random() * (8 - 0 + 1)) + 0; /* http://stackoverflow.com/a/1527834/477958 */
  var topAdBanner = $('#topad > a > img');
  
  var newBannerImg  = imgPrefix + adBanners[randNum];
  var newBannerLink = bannerLinks[randNum];
  
  // update new img src and link HREF value
  $(topAdBanner).attr('src',newBannerImg);
  $('#topad > a').attr('href',newBannerLink);
});
