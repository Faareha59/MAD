/*let Cars = [
    { name: "Tesla", model: 145 },
    { name: "Honda", model: 678 },
    { name: "Suzuki",model: 735 }
];
let new_arr = Cars.map(print_data); 
function print_data(item) {
    console.log(item);
}*/
let Cars = [
    { name: "Tesla", model: 145 },
    { name: "Honda", model: 678 },
    { name: "Suzuki",model: 735 }
];
//let newarr=Cars.map(x => x.name);

let newarr=Cars.map((a)=>{console.log(a)});
