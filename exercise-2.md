# BASIC PROGRAMMING EXERCISES


### Prerequisites 
- Data Types (strings, numbers, boolean, arrays)
- Objects
- Functions
- Conditionals (if-else)
- Loops (For loop)


### 1. PH calculator

```
Write a function that takes a ph value and 
returns whether the value is acidic, neutral or alkaline. 
(PH value < 7 is acidic, 7 is neutral, > 7 alkaline)
```


### 2. Discount calculator

	Write a function that takes price and discount percentage as parameters and 
    calculates the discounted price. 
	The function should give an error message if the price or percentage are < 0. 
    (e.g. If price = 30€, discount = 50%, new price should be 15€)
    
	15 = 30 - (30 * (50 / 100));


### 3. Shipping cost

	You want to buy something from an online shop. 
    The seller charges different prices for shipping cost based on location. 
	The shipping cost is 5€ for EU,  15€ for US & Canada, 20€ else where. 
	Write a function that takes the cost of the product and location. 
	It should print the amount of money you have to pay as:
	"You have to pay a total of 35€, 30€ for the product and 5€ for shipping"



### 4. The little one said roll over

	Write a function that prints this version of children's song
	"10 in the bed, the little one said rollover, 1 fell off" 
	"9 in the bed.."
	"8 in the bed.."
	...
	"1 in the bed, the little on said I am lonely!"

	"The little one said, Everybody back on the bed!"


### 5. Area of a Triangle

	Write a function that calculates the area of a triangle 

### 6. Gauss's Sum

	Create a program that:
	Calculates the sum of 1+2+3+4...+98+99
	Prints the sum of 1+2+3+4...+98+99
	Output: "The sum is 4950"

### 7. Gauss's Odd Sum

	Calculates the sum of 1+3+5+7...+99+101
	Prints the sum of 1+3+5+7...+99+101
	Output: "The sum is 2601"
	(Source: https://github.com/py-study-group/beginner-friendly-programming-exercises/blob/master/exercises.md)

### 8. Calculator

	Write a simple calculator program that calculates 
    the difference, sum or product of two numbers. 
    
	The function takes as a parameter, the type of calculation to perform and two numbers.
    
	Then based on the type of calculation given 
    (addition, subtraction, multiplication, division), 
    it performs the calculation and returns the result. 


### 9. Max/Min

	Write a function that takes three numbers and write two more functions 
    which calculate and return the largest and smallest of these numbers.
	The first function should print what is returned from 
    the functions largest and smallest.
	

### 10. Leap year calculator. Write a function that takes a year and determines if it is a leap year or not

	How to determine whether a year is a leap year 
	To determine whether a year is a leap year, follow these steps:
    1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
    2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
    3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
    4. The year is a leap year (it has 366 days).
    5. The year is not a leap year (it has 365 days).
	(Source: https://docs.microsoft.com/en-us/office/troubleshoot/excel/determine-a-leap-year)


### 11. Sum of working hours
	
	Write a function that takes a parameter array of working hours 
    (e.g. [4, 5, 7.5, 8.5, 9, 6]), 
    the function should return the sum of the working hours.


### 12. RNA Transcriber

	(The science of this might not be accurate)
	Write a function that takes DNA strand as a parameter. 
    The four nucleotides found in DNA are 
    adenine (A), cytosine (C), guanine (G) and thymine (T).
	So, the function should accept any sequence of A, C, G, & T, in any order. 
    A matches with T, G matches with C. 
    
	Your function should return the complement of the given strand. 
    
    e.g. if given G, A, T, C the output should be C, T, A, G
    
	(inspired by: 	https://exercism.org/tracks/javascript/exercises/rna-transcription)


### 13. Area of a shape 

	Write a function that takes a shape as a param and returns the area of the shape.
	Pass shape as an object, 
    e.g. {type: "rectangle", sides: { width: 5, height: 6} }
    
	calculate area based on shape.type and shape.sides or the attribute you define.
    Implement the area calculation for a triangle, circle and a square.

### 14. Stock checker

	Let's write a program that filters out products that are out of stock.
	Write a function that takes an array of products as a parameter. 
    The product should be an object with name, price, and stockAmount. 
    Add multiple products to the array, with varying stock amount, 
    where some of the products have stock amount 0. 
    
    Return the total sum of all the items in stock. 
    
    e.g. if prod-1 has 4 items, prod-2 has 6, prod-3 has 5 => 
    total should be 4+6+5=15



### 15. Stock checker - 2 

	Use the array of products from the previous exercise. 
    Write a function that returns the products that are available in stock. 

### 16. Stock checker - 3 

	Use the array of products from exercise-14. 
    Write a function that takes the products and a product name.
		The function then should return true/false if that product name exists
		in the products array.

### 17. Stock checker - 4 

	Use the array of products from exercise-14. 
    Write a function that takes the products and a product name.
		The function then return a product array that doesn't include 
		the product with the given name. 
		(The function deletes the given product name if it exists)

