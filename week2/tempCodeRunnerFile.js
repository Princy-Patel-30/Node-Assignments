// Create simple program that will print 1 to n at the interval of 1 second using setTimeout
n=3;
for( let i = 1 ; i<= n ; i++){
     setTimeout(function(){
        console.log(i);
     } ,1000);
};