// function x(){
//     var a=7;

//     function y(){
//         console.log(a);
//     }
//     return y;  
// }
// var z= x();
// console.log(z);
// console.log(typeof z);
// z();
// console.log(z()); //doubt


function z(){
    var b=45;
    function x(){
        var a=7;
    
        function y(){
            console.log(a,b);
        }
        return y;  
    }
    return x;
}
var w= z();
console.log(w);
console.log(w());
var u=w();
u();

