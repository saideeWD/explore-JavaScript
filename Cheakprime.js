
 function isprime(n){
    for(i = 2; i < n; i++){

        // console.log(i, n % i);
        if(n%i== 0){
        return  'not prime number'
        
    
        }
        return 'your number is prime number';
      
    
        
    
     }
    
    
 }
 var result = isprime(139);
 console.log(result);
 

