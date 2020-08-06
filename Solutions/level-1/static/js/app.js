// Getting dataset from Data.js 
const GetData = data;


const tbody = d3.select("tbody");

function Click_Event() {

  //Date time get values
  const date = d3.select("#datetime").property("value");
  let DataFiltering = GetData;

  if (date) {
  
    DataFiltering = DataFiltering.filter(row => row.datetime === date);
  }
  TableData(DataFiltering);
}

//On Click function Event
d3.selectAll("#filter-btn").on("click", Click_Event);

// Refresh the table Data 
TableData(GetData);


function TableData(data) {
    // Searching for data 
    tbody.html("");

   
    data.forEach((dataRow) => {
        // Data Binding to the table Row
        const row = tbody.append("tr");

       //Data binding to the Table column
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
        );
    });
}