//Q1
// function add(a, b){
//     return a+b;
// }

// console.log(add(3,5));


//Q2
// function is_prime(x){
//     if(x<2) return false;
//     else{
//         for(let i = 2; i<x; i++){
//             if(x%i==0){
//                 return false;
//             }
//         }
//         return true;
//     }
// }
// console.log(is_prime(7));


//Q3
// function reverse_str(str){
//     if(str!=""){
//         return str.split("").reverse().join("");
        
//     }

// }
// console.log(reverse_str("hello"));

//Q4
// function largest_num(n){
//     let largest=n[0];
    
//     for(let i=1; i<n.length; i++){
//         if(n[i]>largest){
//             largest=n[i];
//         }
//     }
//     return largest;
// }

// console.log(largest_num([1,3,7,2,4]));

//Q5
// function find_evens(n){
//     let arr=[];
//     for(let i=0; i<n.length; i++){
//         if(n[i]%2==0){
//             arr.push(n[i]);
//         }
//     }
//     return arr;
// }
// console.log(find_evens([1, 2, 3, 4, 5, 6]));

//Q6
// function reverse_str(str){
//     if(str!=""){
//         let reversed="";
//         for(let i=(str.length-1); i>=0; i--){
//             reversed+=str[i];
//         }
//         return reversed;
//     }
// }
// console.log(reverse_str("back"));

//Q7
// function calc_avg(n){
//     let sum=0, avg;

//     for(let i=0; i<n.length; i++){
//         sum+=n[i];
//     }
//     avg=sum/n.length;
//     return avg;
// }
// console.log(calc_avg([1, 2, 3, 4, 5]));

//Q8
// function char_counter(str){
//     let obj = {};
    
//     for(let i=0; i<str.length; i++){
//         let ch = str[i];

//         if(obj[ch]){
//             obj[ch]++;
//         }else{
//             obj[ch]=1;
//         }
//     }
//     return obj
// }
// console.log(char_counter("hello"));

//Q9
// function remove_falsey(value){
//     let truthy_values=[];
//     for(let i=0; i<value.length; i++){
//         if(value[i]){
//             truthy_values.push(value[i]);
//         }
//     }
//     return truthy_values;
// }
// console.log(remove_falsey([0, false, "Hello", "", null, undefined, NaN, 42]));

//Q10
// function check_anagrams(str1, str2){
//     if(str1.length!=str2.length){
//         return false;
//     }

//     let s1= str1.split("").sort().join("");
//     let s2=str2.split("").sort().join("");
//     if(s1==s2) return true;
//     else return false;

// }
// console.log(check_anagrams("listen", "silent"));