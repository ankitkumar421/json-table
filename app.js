let tableData = `
[
    {
        "name": "Auto Welding Machine",
        "machine_id": "machine001",
        "energy_consumed": {
            "title": "Energy Consumed",
            "child": {
                "Today": 0,
                "MTD": 0,
                "YTD": 0
            }
        },
        "active_power": 0,
        "apparent_power": 0,
        "reactive_power": 0,
        "current": 0,
        "voltage": 0,
        "power_factor": 0,
        "ideal_time": {
            "title": "Ideal Time",
            "child": {
                "Today": 0,
                "MTD": 0,
                "YTD": 0
            }
        }
    },
    {
        "name": "Boiler Machine",
        "machine_id": "machine002",
        "energy_consumed": {
            "title": "Energy Consumed",
            "child": {
                "Today": 0,
                "MTD": 0,
                "YTD": 0
            }
        },
        "active_power": 0,
        "apparent_power": 0,
        "reactive_power": 0,
        "current": 0,
        "voltage": 0,
        "power_factor": 0,
        "ideal_time": {
            "title": "Ideal Time",
            "child": {
                "Today": 0,
                "MTD": 0,
                "YTD": 0
            }
        }
    }
]
`;

var json_data = JSON.parse(tableData);

let tableBody = document.createElement("tbody");
Object.entries(json_data).forEach(([key, value]) => {
        let tableRow = document.createElement('tr');
        Object.keys(value).forEach((dataObject) => {
            // console.log(value[dataObject]);
            if(typeof value[dataObject] === 'object') {
                // debugger;
                Object.values(value[dataObject]["child"]).forEach((subData) => {
                    let subTableData = document.createElement("td");
                    subTableData.innerHTML = subData;
                    tableRow.appendChild(subTableData);
                    // console.log(subData)
                });
            } else {
                let tableData = document.createElement("td");
                tableData.innerHTML = value[dataObject];
                tableRow.appendChild(tableData);
            }
        });
        tableBody.appendChild(tableRow);
});
document.getElementById("equipment-data-table").appendChild(tableBody);