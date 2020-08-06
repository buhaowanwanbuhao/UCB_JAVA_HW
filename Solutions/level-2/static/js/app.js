// Getting dataset from Data.js 
var GetDataTable = data;

// get table references
var tbody = d3.select("tbody");

function DisplayTableData(data) {
  // Clearing Existing Data
  tbody.html("");
    //Fro Each  loop use for bind the data to the dable row and table column
  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    // Append Data to Table column
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
      cell.text(val);
    });
  });
}

// Filters Check
var filters = {};

function updateFilters() {

  // Update The data by usning filetering Value
  var changedElement = d3.select(this).select("input");
  var elementValue = changedElement.property("value");
  var filterId = changedElement.attr("id");

  // If a filter value was entered then add that filterId and value
 
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }

  DataFiltering();

}

function DataFiltering() {

  let filteredData = GetDataTable;

  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });
    //Build the filtering data 
  DisplayTableData(filteredData);
}

d3.selectAll(".filter").on("change", updateFilters);

// On Page Table Data Load
DisplayTableData(GetDataTable);
