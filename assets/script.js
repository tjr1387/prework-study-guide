var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];      // 'let' or 'const'?? isn't 'var' dated? perhaps I'm ahead of myself

/*
for (topic of topics) {     // for-of is soooo much prettier here!
    console.log(topic);     // but I'll stick to what I'm 'supposed' to do.. FOR (pun!) now
}
*/

for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
   }
   
/*
if (topic === 'HTML') {
console.log("Let's study HTML!");
} else if (topic === 'CSS') {
console.log("Let's study CSS!");
} else if (topic === 'Git') {
console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
console.log("Let's study JavaScript!");
} else {
console.log('Please try again!');
}
*/

