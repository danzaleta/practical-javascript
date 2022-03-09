const colombian_salaries = colombia.map(
    (function(element) {
        return element.salary;
}));

const sorted_salaries = colombian_salaries.sort((a,b)=>a-b);

console.log(colombia);
console.log(colombian_salaries);
console.log(sorted_salaries);

function Mean(list) {
    const sum = list.reduce((value=0, current)=> value+current);
    const total = sum/list.length;
    
    console.log(total);
    return total;
}

function Median(newList) {
    const list = newList;
    console.log(list);

    const midList = parseInt(list.length/2);
    let median = 0;
    
    const isPair = num => num%2 === 0;

    if (isPair(list.length)) {
        const left = list[midList-1];
        const right = list[midList];

        median = Mean([left,right]);
    }
    else
    {
        median = list[midList];
    }

    console.log(median);
}

const new_median = Median(sorted_salaries);


const spliceStart = (sorted_salaries.length*90)/100;
const spliceCount = sorted_salaries.length - spliceStart;

const top_salaries = sorted_salaries.splice(spliceStart, spliceCount);
const top_median = Median(top_salaries);
console.log(top_salaries);





