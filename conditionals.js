let name1 = "Shiretha";
let name2 = "Marvin";
let name3 = "Sade";
console.log(name1.length);
console.log (name2.length);
console.log(name3.length);

if (name1 > name2){
    console.log ("Shiretha has the longest name");
}else if (name1 > name3){
    console.log ("Shiretha has the longest name");
}else if (name2 > name3){
    console.log ("Marvin has the longest name");
}else if (name1 === name2){
    console.log ("Shiretha and Marvin tie for the longest name");
}else if (name2 === name3) {
    console.log ("Marvin and Sade tie for the longest name");
}else if (name1 === name3) {
    console.log("Shiretha and Sade tie for the longest name");
}else if ( name1 === name2 && name1=== name3 && name2 === name3) {
    console.log("All three names, Shiretha, Marvin, and Sade are the same length");
}

