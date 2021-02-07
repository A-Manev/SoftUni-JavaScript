function tickets(ticketsArray, orderProperty) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let order = {
        'destination': (x) => x.sort((a, b) => a.destination.localeCompare(b.destination)),
        'price': (x) => x.sort((a, b) => a.price - b.price),
        'status': (x) => x.sort((a, b) => a.status.localeCompare(b.status)),
    }

    let tickets = [];
    for (const element of ticketsArray) {
        let current = element.split('|');

        let destination = current[0];
        let price = Number(current[1]);
        let status = current[2];

        let ticket = new Ticket(destination, price, status);

        tickets.push(ticket);
    }

    return order[orderProperty](tickets);
}

console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));

console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
));