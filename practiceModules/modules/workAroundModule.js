/* This is a premade project from codecademy.
 The following steps were taken to enhance my knowledge of js modules:
5.Great job! You now have radio-style <input> elements for the different companies and roles represented in the salary dataset. 
  Try selecting a combination of company and role and you’ll see that the data isn’t being calculated. 
  Instead, all four values are showing up as $0.
    Open up workAroundModule.js where you will find four functions that each calculate a different data value 
    that we want to display. They are currently incomplete.

    To complete these four functions, you will need some data from salaryData.js.

    Import the functions getDataByRole() and getDataByCompany() from salaryData.js using named import syntax.
    Import salaryData from salaryData.js using the default import syntax.
    Note: The reason these functions are in a separate module from salaryData.js is to achieve separation of concerns. 
    salaryData.js is concerned only with providing access to raw data while workAroundModule.js is 
    concerned with digging into the data to find precise values.

6.Each of the incomplete functions in workAroundModule.js contains an empty array ([]) that needs to be replaced.
  You will need to use the appropriate imported data/functions from the salaryData.js module to replace these arrays.

7. As a final step, to make these functions available to main.js, export the four functions using named export syntax.
 */
// Add your imports here.
import { getDataByRole, getDataByCompany } from './salaryData.js'
import salaryData from './salaryData.js';
// Replace the empty array with the appropriate imported function/value
const getAverageSalaryByRole = role => {
    const roleData = getDataByRole(role);
    const salariesOfRole = roleData.map(obj => obj.salary);
    return calculateAverage(salariesOfRole);
  }
  
  // Replace the empty array with the appropriate imported function/value
  const getAverageSalaryByCompany = company => {
    const companyData = getDataByCompany(company);
    const salariesAtCompany = companyData.map(obj => obj.salary);
    return calculateAverage(salariesAtCompany);
  }
  
  // Replace the empty array with the appropriate imported function/value
  const getSalaryAtCompany = (role, company) => {
    const companyData = getDataByCompany(company);
    const roleAtCompany = companyData.find(obj => obj.role === role);
    return roleAtCompany.salary;
  }
  
  // Replace the empty array with the appropriate imported function/value
  const getIndustryAverageSalary = () => {
    const allSalaries = salaryData.map(obj => obj.salary);
    return calculateAverage(allSalaries);
  }
  
  
  // Helper Function. Do not edit.
  // Note: This function does not need to be exported since it is only used by the functions contained within this module.
  function calculateAverage(arrayOfNumbers) {
    let total = 0;
    arrayOfNumbers.forEach(number => total += number);
    return (total / arrayOfNumbers.length).toFixed(2);
  }
  
  export { getAverageSalaryByRole, getSalaryAtCompany, getAverageSalaryByCompany, getIndustryAverageSalary};