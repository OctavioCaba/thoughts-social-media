const newThoughtFormOpener = document.getElementById('newthought-form-opener');
const newThoughtSection = document.getElementById('new-thought-section');
const newPonderSection = document.getElementById('new-ponder-section');
const likeButton = document.getElementById('fa-heart');

if (likeButton) {
  likeButton.addEventListener('click', () => {
    if (likeButton.classList.contains('fas')) {
      // DISLIKE
      likeButton.classList.remove('fas');
      likeButton.classList.add('far');

      axios.post(`/${likeButton.attributes['data-page-name'].nodeValue}/${likeButton.attributes['data-thought-id'].nodeValue}/likes/${likeButton.attributes['data-like-id'].nodeValue}?_method=DELETE`, {})
      .then(function (response) {
        if (response.status === 200) {
          window.location.replace(`/${likeButton.attributes['data-page-name'].nodeValue}/${likeButton.attributes['data-thought-id'].nodeValue}`);
        }
      })
      .catch(err => console.log(err));
    } else {
      // LIKE
      likeButton.classList.remove('far');
      likeButton.classList.add('fas');

      axios.post(`/${likeButton.attributes['data-page-name'].nodeValue}/${likeButton.attributes['data-thought-id'].nodeValue}/likes`, {})
      .then(function (response) {
        if (response.status === 200) {
          window.location.replace(`/${likeButton.attributes['data-page-name'].nodeValue}/${likeButton.attributes['data-thought-id'].nodeValue}`);
        }
      })
      .catch(err => console.log(err));
    }
  });
}

if (newThoughtFormOpener) {
  newThoughtFormOpener.addEventListener('click', e => {
    newThoughtSection.classList.toggle('no-show');

    if (e.target.innerText === 'New thought') {
      e.target.innerHTML = '<strong>&#9747;</strong>';
    } else {
      e.target.innerText = 'New thought';
    }
  });
}

if (newThoughtFormOpener) {
  newThoughtFormOpener.addEventListener('click', e => {
    newPonderSection.classList.toggle('no-show');

    if (e.target.innerText === 'New ponder') {
      e.target.innerHTML = '<strong>&#9747;</strong>';
    } else {
      e.target.innerText = 'New ponder';
    }
  });
}
