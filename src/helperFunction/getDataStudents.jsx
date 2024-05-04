export const getDataStudents = async () => {
  const response = await fetch("/api/testDeploy");
  const result = await response.json();

  return result.students;
};


