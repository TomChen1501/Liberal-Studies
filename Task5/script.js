
//inputs
var property_value = Math.PI
var one = 10
var two = 3
//functions
function add(a,b)
{
 sum = a + b
 return sum
};


function greater(a,b)
{
 if (a > b)
 {
 return a
 }
 else
 {
 return b
 }
};


function one_to_ten()
{
 counter = 1
 sum = 0
 while (counter < 11)
 {
 sum = sum + counter
 counter = counter + 1
 };
 return sum
};

function circle_area(r)
{
area = 2 * property_value * (r**2)
return area
};

function fact(n)
{
  count = 1
  sum = 1
  while (count < (n+1))
  {
    sum = sum * count
    count = count + 1
  }
  return sum
};

function odd_or_even(n)
{
  if (1 == n%2)
  {
    return 'odd'
  }
  else
  {
    return 'even'
  }
};

function division_with_remainder(x,y)
{
  
  return ([~~(x/y),x%y])

}

//Calculations
answer = division_with_remainder(1,2);
// Put the answer on the page
ans = document.getElementById("answer")
ans.innerHTML = answer
