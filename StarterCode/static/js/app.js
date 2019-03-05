// from data.js
//var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select(tbody);

data.forEach(function(UFOReport) {
    console.log(UFOReport);
 });

 data.forEach(function(UFOReport) {
    console.log(UFOReport);
    var row = tbody.append("tr");
 });

 data.forEach(function(UFOReport) {
    console.log(UFOReport);
    var row = tbody.append("tr");
  
    Object.entries(UFOReport).forEach(function([key, value]) {
      console.log(key, value);
    });
  });

  data.forEach(function(UFOReport) {
    console.log(UFOReport);
    var row = tbody.append("tr");
  
    Object.entries(UFOReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = tbody.append("td");
    });
  });

  data.forEach(function(UFOReport) {
    console.log(UFOReport);
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
  