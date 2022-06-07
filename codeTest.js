var nodeData = {​
  name: "India",
  items: [
      {​
          name: "Telangana",
          items: [
              {​
                  name: "Hyderabad",
              }​,
              {​
                  name: "Nirmal",
                  items: [
                      {​
                          name: "Soan"
                      }​,
                      {​
                          name: "Armoor"
                      }​
                  ]
              }​
          ]
      }​,
      {​
          name: "Rajasthan",
          items: [
              {​
                  name: "Jhunjhunu",
                  items: [
                      {​
                          name: "Pilani"
                      }​,
                      {​
                          name: "Sikar"
                      }​
                  ]
              }​,
              {​
                  name: "Jaipur",
              }​
          ]
      }​
  ]
}​

function printNodeData(val) {
    let concatName = "";
    if(val.prevName) {
        concatName = val.prevName + ' | '+ val.name;
    } else {
        concatName = val.name;
    }
    console.log(concatName);

    if(val.items && val.items.length>0) {
        val.items.forEach(item => {
            item.prevName = concatName;
            printNodeData(item);
        })
    }
}

printNodeData(nodeData)