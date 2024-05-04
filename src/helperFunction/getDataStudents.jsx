export const getDataStudents = async () => {
  const response = await fetch("http://localhost:3001/api/testDeploy");
  const result = await response.json();

  return result.students;
};
