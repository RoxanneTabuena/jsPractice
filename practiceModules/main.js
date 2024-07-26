/* This is a premade project from codecademy.
 The following steps were taken to enhance my knowledge of js modules:

 2. Open up main.js and take a look at the function renderInputButtons(). 
    This function accepts an array of labels that are used to create individual radio-style <input> elements. 
    The function also accepts a string that is used as the name for that input group.

    Currently, this function is being called twice with the variables companies and roles as the first arguments. 
    However, each of these variables are assigned empty arrays.

    Instead, you will use the getRoles() and getCompanies() functions from salaryData.js to initialize these variables.

    First, at the top of main.js, use ES6 named import syntax to import getRoles and getCompanies from salaryData.js.
    Check the file system to determine the relative path from main.js.

    NOTE: After completing this task, some of the columns in the mini browser may stop rendering. Don’t worry though, we’ll fix this in a later step!

3.  Now, replace the empty arrays assigned to companies and roles with function calls to getCompanies() and getRoles(), respectively.

8.  We are all set up now to use the functions defined in workAroundModule.js to calculate and render the data based on the user’s input selections.
    In main.js, import the four functions from workAroundModule.js.


9. And finally, take a look at updateResults(). This function is called any time the user selects one of the radio input elements.
    At the top of the definition of updateResults(), the company and role selected by the user are extracted from the <input> elements. 
    These values can be used in combination with the imported functions from workAroundModule.js to calculate the four variables below:

    const averageSalaryByRole = 0;
    const averageSalaryByCompany = 0;
    const salary = 0;
    const industryAverageSalary = 0;

    As you can see, they are all assigned to 0 rather than the appropriate calculated data. 
    Replace each 0 with a call to the appropriate imported function from workAroundModule.js 
    using either (or both) company and role as arguments
 */

// TODO: Add your import statements here.
import {  getRoles, getCompanies } from './modules/salaryData.js';
import { getAverageSalaryByRole, getSalaryAtCompany, getAverageSalaryByCompany, getIndustryAverageSalary } from './modules/workAroundModule.js'
import { formatNumbers } from './modules/utilities.js';
// TODO: Get the companies and roles using the salaryData module.
const companies = getCompanies();
const roles = getRoles();

// Create input buttons for every company and role represented in the data.
renderInputButtons(companies, 'company');
renderInputButtons(roles, 'role');

// This function will create a new <section> with radio
// inputs based on the data provided in the labels array.
function renderInputButtons(labels, groupName) {
  const container = document.createElement('section');
  container.setAttribute('id', `${groupName}Inputs`);

  let header = document.createElement('h3');
  header.innerText = `Select a ${groupName}`;
  container.appendChild(header);

  labels.forEach(label => { // For each label...
    // Create the radio input element.
    let divElement = document.createElement('div');
    divElement.setAttribute('class', 'option');

    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'radio');
    inputElement.setAttribute('name', groupName);
    inputElement.setAttribute('value', label);
    divElement.appendChild(inputElement);

    // Create a label for that radio input element.
    let labelElement = document.createElement('label');
    labelElement.setAttribute('for', label);
    labelElement.innerText = label;
    divElement.appendChild(labelElement);

    // Update the results when the input is selected.
    inputElement.addEventListener('click', updateResults);

    container.appendChild(divElement);
  });

  document.querySelector('main').prepend(container);
}

function updateResults(){
  // Get the current selected company and role from the radio button inputs.
  const company = document.querySelector("input[name='company']:checked").value;
  const role = document.querySelector("input[name='role']:checked").value;

  // If either the company or role is unselected, return.
  if (!company || !role) { 
    document.getElementById('salarySelected').innerText = `no role, no dinner`;
    return; }

  // TODO: Use the workAroundModule functions to calculate the needed data.
  const [averageSalaryByRole, averageSalaryByCompany, salary, industryAverageSalary] = formatNumbers(
    getAverageSalaryByRole(role),
    getAverageSalaryByCompany(company),
    getSalaryAtCompany(role, company),
    getIndustryAverageSalary()
  );

  // Render them to the screen.
  document.getElementById('salarySelected').innerText = `The salary for ${role}s at ${company} is \$${salary}`;
  document.getElementById('salaryAverageByRole').innerText = `The industry average salary for ${role} positions is \$${averageSalaryByRole}`;
  document.getElementById('salaryAverageByCompany').innerText = `The average salary at ${company} is \$${averageSalaryByCompany}`;
  document.getElementById('salaryAverageIndustry').innerText = `The average salary in the Tech industry is \$${industryAverageSalary}`;
}



