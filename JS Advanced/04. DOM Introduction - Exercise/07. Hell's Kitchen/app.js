function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const inputRestaurants = document.querySelector('#inputs > textarea').value;
      const allRestaurantsWithTheirEmployees = JSON.parse(inputRestaurants);

      const restaurants = {};

      allRestaurantsWithTheirEmployees.map(x => {
         let [name, workers] = x.split(' - ');
         if (!restaurants[name]) {
            restaurants[name] = { employees: [], averageSalary: 0, bestSalary: 0, };
         }

         workers = workers.split(', ').map(x => {
            let [name, salary] = x.split(' ');

            return {
               name, salary: Number(salary),
            }
         });

         restaurants[name].employees.push(...workers);
         restaurants[name].averageSalary = restaurants[name].employees.reduce((a, e) => a + (e.salary / restaurants[name].employees.length), 0);
         restaurants[name].bestSalary = restaurants[name].employees.sort((a, b) => b.salary - a.salary)[0].salary;
      });

      let bestRestaurantName = '';
      let bestAverageSalary = -1;
      let bestSalary = -1;

      for (const restaurantName in restaurants) {
         if (restaurants[restaurantName].averageSalary > bestAverageSalary) {
            bestRestaurantName = restaurantName;
            bestSalary = restaurants[restaurantName].bestSalary;
            bestAverageSalary = restaurants[restaurantName].averageSalary;
         }
      }

      document.querySelector('#bestRestaurant > p').textContent = `Name: ${bestRestaurantName} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
      document.querySelector('#workers > p').textContent = restaurants[bestRestaurantName].employees.sort((a, b) => b.salary - a.salary).map(x => `Name: ${x.name} With Salary: ${x.salary}`).join(' ');
   }
}