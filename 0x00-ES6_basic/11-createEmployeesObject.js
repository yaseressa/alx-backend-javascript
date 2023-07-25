export default function createEmployeesObject(departmentName, employees) {
  const depart = {};
  depart[departmentName] = [...employees];
  return depart;
}
