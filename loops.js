function forLoop(array)
{
  for(var i = 0; i < 25; i++)
  {
      array[i]= `I am a ${i} strange loop${i===0?'':'s'}.`;
  }
  return array;
}
function whileLoop(n)
{
  while(n > 0)
  {
    console.log(--n);
  }
  return 'done';
}
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array)
{
  do{
    console.log("1 2 3 Test");
  }
  while(maybeTrue() && array.length > 0)
  {
    array.pop();
  }
  return array;
}
