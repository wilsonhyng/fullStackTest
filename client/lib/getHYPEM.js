var searchHYPEM = ({username, page = 1, count = 10}, callback) => {
  $.get('https://api.hypem.com/v2/', {
    username: username,
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};


export default searchHYPEM;