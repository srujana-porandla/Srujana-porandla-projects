let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    const newArr=arr.map(employee=>{
      if(employee.profession ==="developer"){
        console.log(employee);
        
      }
      
    });
   // console.log(newArr);
    
  //Write your code here , just console.log
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let filteredArr = arr.filter(employee => employee.profession !== "admin");
  console.log(filteredArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 4, name: "David", age: "22", profession: "developer" },
    { id: 5, name: "Siri", age: "23", profession: "designer" },
    { id: 6, name: "Alexa", age: "24", profession: "manager" },
  ];
  let concatenatedArr = arr.concat(newArr);
  console.log(concatenatedArr);

}

PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
concatenateArray();
