// console.log("Ticket 1.....")
// console.log("Ticket 2.....")
// function ticket(){
//     console.log("Ticket 3.....")
// }
// setTimeout(ticket,5000);
// console.log("Ticket 4.....")
// console.log("Ticket 5.....")
console.log("Ticket 1.....")
console.log("Ticket 2.....")
let ticket = ()=>{
    console.log("Ticket 3.....")
}
var intervalid = setTimeout(ticket,1000)
console.log('id =' + intervalid);
console.log("Ticket 4.....")
console.log("Ticket 5.....")
