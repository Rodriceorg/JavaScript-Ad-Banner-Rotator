$(function(){
  var adBanners = [
    "txp-leaderboard-728x90.jpg",
    "basic-textpattern-728x90.jpg",
    "wordpress-mythemesshop-728x90.jpg",
    "mwp_banner_18_728x90.jpg",
    "grooveshark-ad-728x90.jpg",
    "treehouse-learning-ad-728x90.jpg",
    "ddg-duck-duck-go-ad-728x90.jpg",
    "photoshop-to-html-ad-728x90.jpg",
    "getting-good-javascript-ad-728x90.jpg"
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