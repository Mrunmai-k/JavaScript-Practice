var arr = [1, 2, 3, 4, 5, 6, 7];

// for loop
for (var i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}

// better way to iterate array
arr.forEach(function (element) {
    console.log(element);
});

// while loop
let j = 0;
while(j<arr.length)
{
    console.log(arr[j]);
    j++;
}

// do-while loop
do {
    console.log(arr[j]);
    j++;
} while (j < arr.length);

// break statement
for (var i = 0; i < arr.length; i++)
{
    if(i==2){
        break;
    }
    console.log(arr[i]);
}

// continue statement
for (var i = 0; i < arr.length; i++)
{
    if(i==2){
        continue;
    }
    console.log(arr[i]);
}

// const ac = 46;  // ac is constant, cannot be changed, can be used when you don't wanna change the value of variable 