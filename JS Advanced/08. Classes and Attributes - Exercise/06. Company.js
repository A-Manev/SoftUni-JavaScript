class Company {
    constructor() {
        this.departments = [];
    }
 
    addEmployee(username, salary, position, department) {
        if ([...arguments].some(a => a === null || a === undefined || a === '') || salary < 0) {
            throw new Error('Invalid input!');
        } else {
            const newEmployee = {
                username: username,
                salary: salary,
                position: position,
                department: department,
            };
            if (this.departments.filter(function (e) {return e.name === department;}).length > 0) {
                for (let existingDepartment of this.departments) {
                    if (existingDepartment.name === department) {
                        existingDepartment.users.push(newEmployee);
                        existingDepartment.totalSalary += salary;
                    }
                }
            } else {
                let newDepartment = {
                    name: department,
                    users: [newEmployee],
                    totalSalary: salary,
                    averageSalary() {
                        return this.totalSalary / this.users.length;
                    },
                };
                this.departments.push(newDepartment);
            }
            return `New employee is hired. Name: ${username}. Position: ${position}`;
        }
    }
 
    bestDepartment() {
        let bestDepartment = this.departments.sort((a, b) => a.averageSalary - b.averageSalary)[0];
        bestDepartment.users = bestDepartment.users.sort(function (a, b) {
            if (a.username === b.username) {
                return b.username - a.username;
            }
            return a.salary < b.salary ? 1 : -1;
        });
        let result = `Best Department is: ${bestDepartment.name}\nAverage salary: ${bestDepartment.averageSalary().toFixed(2)}`;
        for (let user of bestDepartment.users) {
            result += `\n${user.username} ${user.salary} ${user.position}`;
        }
        return result;
    }
}