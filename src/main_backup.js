$(document).ready(() => {
  const $showData = $('#show-data');
  const $raw = $('pre');

  $('#get-data').on('click', (e) => {
    e.preventDefault();

    $showData.text('Loading the JSON file.');

    $.getJSON('https://api.cronoscan.com/api?module=account&action=txlist&address=0x9631945CF72b9C7c6B3f0790A4a79e82941beea9&startblock=1&endblock=99999999&sort=asc&apikey=G5M7R3YXI95C3J6UVI443X61B2RMHFUB4K', (data) => {
      const markup = data.result
        .map(item => `<li>${blockNumber}</li>`)
        .join('');

      const list = $('<ul />').html(markup);

      $showData.html(list);

      $raw.text(JSON.stringify(data, undefined, 2));
    });
  });
});