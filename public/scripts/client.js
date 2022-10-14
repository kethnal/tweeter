/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  $('.error').hide();


  const createTweetElement = function(tweet) {

    const user = tweet.user;
  
    const escape = function (str) {

      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));

      return div.innerHTML;
    };
  
    const safeHTML = `<p>${escape(tweet.content.text)}</p>`;

    const $tweet = $(`
    <article>
  
      <header>
        <div class="avatar">
          <img src="${user.avatars}">
          <p class="name">${user.name}</p>
        </div>
        <p class="name">${user.handle}</p>
      </header>
  
      <div class="tweet-text">${safeHTML}</div>
      <hr class="solid">
  
      <footer>
        <p>${timeago.format(tweet.created_at)}</p>
        <div class="icons">
          <div class="icon"><i class="fa-solid fa-flag"></i></div>
          <div class="icon"><i class="fa-solid fa-retweet"></i></div>
          <div class="icon"><i class="fa-solid fa-heart"></i></div>
        </div>
      </footer>
  
    </article>
  `);
  
    return $tweet;
  };
  
  
  const renderTweets = function(tweetsArr) {

    $('#tweet-container').empty();

    for (let tweet of tweetsArr) {
      let newTweet = createTweetElement(tweet);
      $('#tweet-container').prepend(newTweet);
    }

  };


  const loadTweets = function() {

    $.ajax({
      method: 'GET',
      url: '/tweets',
    }).then(renderTweets);

  };


  loadTweets();


  $('#tweet-input').on('submit', function(event) {

    event.preventDefault();

    const $dataToSendToServer = $(this).serialize();

    let $input = $(this).children().first().val();

    $('.error').slideUp();

    if ($input.length > 140) {
      return $('#length').slideDown();
    }
    if ($input.length === 0) {
      return $('#empty').slideDown();
    }

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: $dataToSendToServer
    }).then(loadTweets);

    let $resetCount = $(this).children().last().children().last();
    $resetCount.text(140);

    this.reset();

  });
  
});
