type Admin = { name: string; privileges: string };

type Employee = { name: string; startDate: Date };

type AdminEmployee = Admin & Employee;

const myEmployee: AdminEmployee = {
  name: "Leni",
  privileges: "Linda",
  startDate: new Date(),
};

console.log(myEmployee);
