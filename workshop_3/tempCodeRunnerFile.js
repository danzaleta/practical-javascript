
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