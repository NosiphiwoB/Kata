// create a function that checks if the total number Of workers is divisible by groupOne or groupTwo


//  Example 

//if the total number of workers is 8 and groupOne have 10 people and groupTwo have 4 people, 
// the answer is false because 8 is not divisible by 10 but is divisible by 4
//if total number of workers is 10 and groupOne have 5 people and groupTwo have 2 people the answer is true because 10 
//is divisible by 5 and 2;



const isTotalNumberOfworkersDivisible = (number, groupOne, groupTwo) => {
    if (number % groupOne === 0 && number % groupTwo === 0) {
        return true;
      } else {
       return false;
      }
    }
        // if (number / groupOne) {
        //     return false;
        // } else if (number / groupTwo) {
        //         return true;
        //     }
        // }
                                                                                                                                                                                                                                                                                        




        console.log(isTotalNumberOfworkersDivisible (8, 10, 4))
        console.log(isTotalNumberOfworkersDivisible (10, 5, 2))

//Don't forget to call your function

// Duration: 10am 2022 03 03
