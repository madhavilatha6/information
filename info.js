async function fetchData(url){
    const response = await fetch(url);
    const jsonData = await response.json()
    return jsonData
    }
let result = []; 
let data = document.querySelector(".data");    
    
async function searchData (){
    data.innerHTML="Loading......"
    let search = document.querySelector(".search").value;
    
    let response = await fetchData(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}Hu&apikey=3ad548118680d3dad3f194ff9e289c93&hash=2bf68c80955bd4f084b8fe653c6683a0&ts=1685222640625`);
    console.log(response);
   
    
    let usersdata = response["items"]
    data.innerHTML="";
result = response["items"];
    
    data.innerHTML="";
    if(usersdata!= 0){
        for(let i=0; i<usersdata; i++){
            let div=document.createElement("div");
            div.setAttribute("class", "card")
            
            
            let id= document.createElement("div");
            id.innerText = usersdata[i].id;
            
            let name= document.createElement("div");
            name.innerText = usersdata[i].name;

            // let visibility = document.createElement("div");
            // id.innerText = usersdata[i].visibility;

            // let description= document.createElement("div");
            //  id.innerText = usersdata[i].description;
            
            //  div.setAttribute("onclick", `displayCard(${i})`);
           
            div.append(id,name);
            data.append(div);
        
        }
//     }else{
//         let div=document.createElement("div");
//         let avatar = document.createElement("img");
//         avatar.setAttribute("src", "../NotFound.gif");
//         avatar.style.width = "500px";
//         avatar.style.height = "500px";
        
//         div.append(avatar);
        
//         data.append(div);
//     }
// }
// function displayCard(index){
//       localStorage.setItem("repositaryData", JSON.stringify(result[index]))
//        console.log(result[index]);
      
//        window.location.href="../repositary_next_page/repositary_next.html"
  }   
}                                    
                                         
                                         
                                         
                                         
                                         
    