/* This is a premade project from codeacademy. 
The Following steps were taken to enrich my knowledge of js modules:
1. These first four tasks will focus on rendering the <input> elements using the names of the companies and the different roles available in the collected salary data.

Open salaryData.js where you will find the collected data in the variable salaryData. Below are four functions for filtering down this data.

You need to:

Export the four functions from salaryData.js using ES6 named export syntax.
Export the salaryData array as the default export.
Note: In most web browsers, you can access the developer console to get some helpful errors by right-clicking anywhere on the page and selecting “Inspect.”
*/

const salaryData = [
    { role: 'CTO', company: 'Big Data Inc.', salary: 320000},
    { role: 'Technical Lead', company: 'Big Data Inc.', salary: 230000},
    { role: 'Software Engineer II', company: 'Big Data Inc.', salary: 180000},
    { role: 'Software Engineer I', company: 'Big Data Inc.', salary: 140000},
    { role: 'CTO', company: 'Medium Data Inc.', salary: 215000},
    { role: 'Technical Lead', company: 'Medium Data Inc.', salary: 165000},
    { role: 'Software Engineer II', company: 'Medium Data Inc.', salary: 140000},
    { role: 'Software Engineer I', company: 'Medium Data Inc.', salary: 115000},
    { role: 'CTO', company: 'Small Data Inc.', salary: 175000},
    { role: 'Technical Lead', company: 'Small Data Inc.', salary: 135000},
    { role: 'Software Engineer II', company: 'Small Data Inc.', salary: 115000},
    { role: 'Software Engineer I', company: 'Small Data Inc.', salary: 95000},
  ];
  
  const getRoles = () => {
    return ['CTO', 'Technical Lead', 'Software Engineer II', 'Software Engineer I'];
  }
  
  const getCompanies = () => {
    return ['Big Data Inc.', 'Medium Data Inc.', 'Small Data Inc.'];
  }
  
  const getDataByRole = role => {
    return salaryData.filter(obj => obj.role === role);
  }
  
  const getDataByCompany = company => {
    return salaryData.filter(obj => obj.company === company);
  }  

  export { getRoles, getCompanies, getDataByRole, getDataByCompany}
  export default salaryData;