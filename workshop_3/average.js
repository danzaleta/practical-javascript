const prices = [
    100,
    200,
    400,
    900,
    122,
    300,
];

function Mean(list) {
    const sum = list.reduce((value=0, current)=> value+current);
    const total = sum/list.length;
    
    console.log(total);
    return total;
}
//Mean(prices);

function Median(newList) {
    const list = newList.sort((a,b)=>a-b);
    console.log(list);

    const midList = parseInt(list.length/2);
    let median = 0;
    
    function isPair(num) {
        if (num%2 === 0) {
            return true;
        }
        else
        {
            return false;
        }
    }

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
Median(prices);

function Mode(list) {
    
    const listCount = {};

    list.map(function(element) {
        if (listCount[element]) {
            listCount[element]++;
        }
        else
        {
            listCount[element] = 1;
        }
    });

    console.log(listCount);

    const listedArray = Object.entries(listCount).sort((a,b)=>a[1]-b[1]);
    console.log(listedArray[listedArray.length-1]);
}
Mode([1,1,4,3,6,6,4,1]);