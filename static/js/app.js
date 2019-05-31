// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
//console.log(data);

// Refactor to use Arrow Functions!
// data.forEach((UFOReport) => {
//     var row = tbody.append("tr");
//     Object.entries(UFOReport).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });

  // Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
      
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);

      // remove any children from the list to
    tbody.html("");

    filteredData.forEach((UFOReport) => {
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

});