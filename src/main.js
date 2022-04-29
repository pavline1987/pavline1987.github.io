$(document).ready(() => {
  const $showData = $('#show-data');
  const $raw = $('pre');

  $('#get-data').on('click', (e) => {
    e.preventDefault();

    $showData.text('Loading the JSON file.');

    $.getJSON('api.json', (data) => {
      const markup = data.result
        .map(item => `<li>${blockNumber}</li>`)
        .join('');

      const list = $('<ul />').html(markup);

      $showData.html(list);

      $raw.text(JSON.stringify(data, undefined, 2));
    });
  });
});