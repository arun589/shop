function savetolocalStorage(event){
    event.preventDefault();
    const exp=event.target.expense.value;
    const des=event.target.description.value;
    const cat=event.target.category.value;
    const obj={
        exp,
        des,
        cat
    }
    axios.post("https://crudcrud.com/api/0ae55aaaf10447d9b6ee81249e2b1f66/shopData",obj)
    .then(res=>console.log(res))
    .then(err=>console.log(err));
    screen(obj);
  }
  function screen(obj){
    var parentele=document.getElementById(obj.cat);
    var child=document.createElement("li");
    child.textContent=obj.exp +" - "+obj.des +" - "+obj.cat;
    const delbtn=document.createElement("input");
    delbtn.type="button";
    delbtn.value="Delete";
    delbtn.onclick=()=>{
        const data=obj._id;
        axios.delete(`https://crudcrud.com/api/0ae55aaaf10447d9b6ee81249e2b1f66/shopData/${data}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
        parentele.removeChild(child);
    }
   
    child.appendChild(delbtn);
    parentele.appendChild(child);
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/0ae55aaaf10447d9b6ee81249e2b1f66/shopData")
        .then((res)=>{
            for(let i=0;i<res.data.length;i++)
            {
                screen(res.data[i]);
            }
        })
        .catch((err)=>console.log(err));
})