/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  
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
  
    for (let tweet of tweets) {
      let newTweet = createTweetElement(tweet);
      $('#tweet-container').prepend(newTweet);
    }
  
  };


  $('form').on('submit', (event) => {
    event.preventDefault();
    
    console.log("form submitted");

    const dataToSendToServer = $("form").serialize();
    console.log(dataToSendToServer);

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: dataToSendToServer
    });
  });


  const loadTweets = function() {

    $.ajax({
      method: 'GET',
      url: '/tweets',
    }).then(renderTweets);

  };

  loadTweets();

});
