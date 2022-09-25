let body =document.querySelector('body');
let div=document.createElement('div');
let div1=document.createElement('div1')
div1.innerHTML=`<div class="container mt-5 ">
<div class="row">
  <div class="col-md-6 m-auto">
    
      <h1 class="kkk"> MY API IS: Nationalize API</h1>
    </div>
  
  

</div>
</div>`
div.innerHTML=`<div class="container border 1px m-4 p-3 bg-light shadow">
<div class="row ">
    <div class="col-md-6">
      <div class="col-md-12">
        <input type="text" class="form-control mt-5 mx-auto" id="exampleInputPassword1" placeholder="enter your name">
    </div>
  </div>
    <div class="col-md-6">
      <div class="col-md-12">
        <button type="submit" class="btn btn-primary mt-5 submit" onclick="hhh()">Submit</button>
      </div>
    </div>

</div>

<div class=" co1-md-6"container-fluid grid div2 " id="division2">

</div>

</div>`



body.append(div1);
body.append(div);

async function hhh(){
  try{
    let id= document.getElementById('exampleInputPassword1').value;
   // console.log(id)
    let value=await fetch(`https://api.nationalize.io/?name[]=${id}`)
    //console.log(value)
    let api=await value.json()
   // console.log(api);
    //console.log(api[0].country[0].country_id)
   


let div2=document.getElementById('division2')
div2.innerHTML=`<div class="card m-auto border bg-light shadow" style="width: 18rem;">
<img src="https://rapidlab.io/wp-content/uploads/2020/05/People-Counter_photo-header.png" class="card-img-top" alt="...">
<div class="card-body">
<p class="card-text">countryname:<mark class="mark1">${id}</mark></p>
  <p class="card-text">countryname1:${api[0].country[0].country_id}</p>
  <p class="card-text">countryname2:${api[0].country[1].country_id}</p>
  <p class="card-text">probability value1:${api[0].country[0].probability}</p>
  <p class="card-text">probability value2:${api[0].country[1].probability}</p>
  
</div>
</div>`
  }
  catch(err){
console.log(error)
  }
}