let num=11;
let count=2;
for(let i=1;i<=num;i++)
  {
    if(num%i==0)
    {
      count++
    }
  }
if(count==2)
{
  console.log("prime no");
}
else{
  console.log("not prime");
}