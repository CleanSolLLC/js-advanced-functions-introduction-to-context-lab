 function createEmployeeRecord(array) {
 	debugger;
 	const employee = {};
	  employee["firstName"] = array[0];
	  employee["familyName"] = array[1];
	  employee["title"] = array[2];
	  employee["payPerHour"] = array[3];
	  employee["timeInEvents"] = [];
	  employee["timeOutEvents"] = [];

	  return employee;
 }

function createEmployeeRecords(rows) {
  let employeeRecord = rows.map(createEmployeeRecord);
  return employeeRecord;
}

function createTimeInEvent(employee, date) {
  let eeTimeData = {};
  eeTimeData["type"] = "TimeIn";
  eeTimeData["hour"] = parseInt(date.split(" ")[1]);
  eeTimeData["date"] = date.split(" ")[0];

  employee.timeInEvents.push(eeTimeData);
  return employee;
}

function createTimeOutEvent(employee, date) {
  let eeTimeData = {};
  eeTimeData["type"] = "TimeOut";
  eeTimeData["hour"] = parseInt(date.split(" ")[1]);
  eeTimeData["date"] = date.split(" ")[0];

  employee.timeOutEvents.push(eeTimeData);
  return employee;
}

function hoursWorkedOnDate(employee, date) {

 let timeOut = employee.timeOutEvents.find(function(e){
   e.date === date;
   return e.hour;
 });

  let timeIn = employee.timeInEvents.find(function(e){
   e.date === date;
   return e.hour;
 });

  let diff = (timeOut.hour - timeIn.hour) / 100;
  return diff;
}

function wagesEarnedOnDate(employee, date) {
  let hours = hoursWorkedOnDate(employee, date);
  return employee["payPerHour"] * hours;
}

function allWagesFor(employee) {
let wageArray = [];
  for (const timeIn of employee.timeInEvents) {
    debugger;
    //console.log(employee);
     let date = timeIn.date;
     let wage = wagesEarnedOnDate();
     console.log(wage);
   }
    //console.log(wageArray);
}