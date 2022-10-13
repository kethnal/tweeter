/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];


const createTweetElement = function(tweet) {

  const user = tweet.user;

  let tempVars = {
    name: user.name,
    avatar: user.avatars,
    handle: user.handle,
    content: tweet.content.text,
    time: tweet.created_at
  };

  const $tweet = $(`
  <article>

    <header>
      <div id="avatar">
        <img src="${tempVars.avatar}">
        <p>${tempVars.name}</p>
      </div>
      <p>${tempVars.handle}</p>
    </header>

    <p id="tweet-text">${tempVars.content}</p>
    <hr class="solid">

    <footer>
      <p>${tempVars.time}</p>
      <div id="icons">
        <div class="icon"><i class="fa-solid fa-flag"></i></div>
        <div class="icon"><i class="fa-solid fa-retweet"></i></div>
        <div class="icon"><i class="fa-solid fa-heart"></i></div>
      </div>
    </footer>

  </article>
`);

  return $tweet;
};


const renderTweets = function(tweets) {

  for (let datum of data) {
    let newTweet = createTweetElement(datum);
    $('#tweet-container').prepend(newTweet);
  }

};


$(document).ready(function() {

  renderTweets(data);

});
