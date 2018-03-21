/* eslint-disable no-undef */
/* eslint-disable indent */
let data = {}
document.getElementById('getData').addEventListener('click', function () {
  let e = document.getElementById('selected-api')
  let selectedApi = e.options[e.selectedIndex].text
  /* $.ajax({
  // The 'type' property sets the HTTP method.
  // A value of 'PUT' or 'DELETE' will trigger a preflight request.
    type: 'GET',
    // The URL to make the request to.
    url: '/api/1/events.json?key=&from=1527811200&to=1533081600',
    // The 'contentType' property sets the 'Content-Type' header.
    // The JQuery default for this property is
    // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
    // a preflight. If you set this value to anything other than
    // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
    // you will trigger a preflight request.
    contentType: 'application/x-www-form-urlencoded',
    xhrFields: {
    // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
    // This can be used to set the 'withCredentials' property.
    // Set the value to 'true' if you'd like to pass cookies to the server.
    // If this is enabled, your server must respond with the header
    // 'Access-Control-Allow-Credentials: true'.
      withCredentials: false
    },
    headers: {
    // Set any custom headers here.
    // If you set any non-simple headers, your server must include these
    // headers in the 'Access-Control-Allow-Headers' response header.
    },
    success: function (res) {
    // Here's where you handle a successful response.
      console.log(data)
      $('pre').text(data)
    },
    error: function () {
    // Here's where you handle an error response.
    // Note that if the error was due to a CORS issue,
    // this function will still fire, but there won't be any additional
    // information about the error.
    }
  }) */
  const apiObject = {
    'PointofSale v1': 'pointofsale-api-v1',
    'PointofSale v2': 'pointofsale-api-v2',
    'Weezevent': 'weeevent-api',
    'Outbox': 'outbox-api'
  }
  $.ajax('dashboard/getData', {
    headers: {
      api: apiObject[selectedApi],
      from: '1527811200',
      to: '1533081600',
      eventgroup: '1540'
    },
    dataType: 'json',
    contentType: 'application/json; charset=utf-8',
    method: 'GET'
  }).done(function (res) {
    data = res
    console.log('Fetch Success!')
    jsonTable(data)
  }).fail(function () {
    alert('AJAX call failed')
  })
})

function jsonTable (data) {
  let columns = ['id', 'name']

  function tabulate (data, columns) {
    var table = d3.select('#dataTable')
    var thead = table.append('thead')
    var tbody = table.append('tbody')
    // append the header row
    thead.append('tr')
    .selectAll('th')
    .data(columns).enter()
    .append('th')
      .text(function (column) { return column.toUpperCase() })
    // create a row for each object in the data
    var rows = tbody.selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    // create a cell in each row for each column
    rows.selectAll('td')
    .data(function (row) {
      return columns.map(function (column) {
        return {column: column, value: row[column]}
      })
    })
    .enter()
    .append('td')
      .text(function (d) { return d.value })
    return table
}
	// render the table(s)
  tabulate(data, columns) // 2 column table
}
/*
data.forEach(el => {
  console.log(`ID:${el.id} => ${el.name}`)
})
*/
