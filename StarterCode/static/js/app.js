// from data.js
var tableData = data;

// YOUR CODE HERE!
  
  var tbody= d3.select("tbody");
  var filtButton = d3.select("#filter-btn");
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape");


  console.log(data);
  
  function loadTable(data) {
    tbody.html("");
    data.forEach((ufo)=> {
     var row= tbody.append("tr");
     Object.entries(ufo).forEach(([key, value]) => {
         var cell= tbody.append("td");
         cell.text(value);
     });
    });
  };

  loadTable(tableData);

  filtButton.on("click", function() {
    
    d3.event.preventDefault();

    var dateValue = inputDate.property("value");
    var cityValue = inputCity.property("value");
    var stateValue = inputState.property("value");
    var countryValue = inputCountry.property("value");
    var shapeValue = inputShape.property("value");
    console.log(cityValue);
    console.log(dateValue);

    var filtData = tableData.filter(fData => (fData.datetime == dateValue) || (fData.city == cityValue) || (fData.state == stateValue) || (fData.country == countryValue) || (fData.shape == shapeValue));
    console.log(filtData);
    loadTable(filtData);
  });