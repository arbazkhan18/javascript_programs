function pow(x,n){

     if(n == 1)
         return x 

     else if(n == 0)
         return 1

     else if(n > 0)
         return x * pow(x, n-1)

     else 
     return "!!!!!please provide the postitive integer"

}

console.log(pow(2, -1))