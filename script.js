function mincost(arr)
{ 
//write your code here
// return the min cost
	let n=arr.length;
  arr.sort(function(a,b){
		return a-b;
	});
	let x=[];
	let sum=0;
  let sum1=0;
	
    for(let i=0;i<n-1;i++){
      sum1=arr[0]+arr[1];
    x.push(sum1);
    arr.splice(0,2,sum1);
		arr.sort(function(a,b){
		return a-b;
	});
}
let res=x.map(function(e){
  sum+=e;
  return sum;
});
	}
  
	return sum;
}

module.exports=mincost;
