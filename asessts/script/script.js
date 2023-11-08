console.log("Bien chargé mon js script !");

    
//     let ul = document.querySelector("ul");


// axiosTest().then(datasAxios=>{
//     console.log("Data type via Axios" , datasAxios);



// document.querySelector("#rue").addEventListener("input", function(){ 
//     ul.innerHTML = ""
//     let inputRue =  document.querySelector("#rue");
//     inputRue = this.value.toLowerCase().split(" ").join("+");
//     console.log("Par Rue is ", inputRue);

//     for (let index = 0; index < datasAxios.features.length; index++) {
//         let optionText = datasAxios.features[index].properties.label.toLowerCase();

//         if(optionText.includes(inputRue)){
//             let li = document.createElement("li");
//                 li.textContent = datasAxios.features[index].properties.label;
//                 li.style.listStyleType="none"
//                 console.log(li.textContent);
//                 ul.appendChild(li);   
//         }  
//     }
// });

// document.querySelector("#ville").addEventListener("input",function(){
//     ul.innerHTML =""
//     let inputVille= document.querySelector("#ville");
//         inputVille = this.value.toLowerCase().split(" ").join("+");
//         console.log("Par ville",inputVille);
//     for (let index = 0; index < datasAxios.features.length; index++) {
//         let optionText = datasAxios.features[index].properties.city.toLowerCase();

//         if(optionText.includes(inputVille)){
//             let li = document.createElement("li");
//                 li.textContent = datasAxios.features[index].properties.city;
//                 li.style.listStyleType="none"
//                 console.log(li.textContent);
//                 ul.appendChild(li);  
//         }
        
//     }    
// })
// document.querySelector("#codePostal").addEventListener("input",function(){
//     ul.innerHTML="";
//     let inputCodePostal = document.querySelector("#codePostal");
//         inputCodePostal = this.value;
//         console.log("Par Code postal ",inputCodePostal);
//     for (let index = 0; index < datasAxios.features.length; index++) {
//        let  optionText = datasAxios.features[index].properties.postcode;
//         if(optionText.includes(inputCodePostal)){
//             let li = document.createElement("li");
//             li.textContent = datasAxios.features[index].properties.postcode;
//             li.style.listStyleType="none"
//             console.log(li.textContent);
//             ul.appendChild(li);  
//         } 
        
//     }    
// })
// }).catch(error =>{
//     console.log("Error fetching data", error);
// })

// let url = "https://api-adresse.data.gouv.fr/search/?q="
// let datasAxios = await axiosTest();
// console.log("Datas type via Axios : ", datasAxios);
// async function axiosTest(){
//     const response = await axios.get(url);
//     return response.data;
// })
// let datasAxios = await axiosTest();


let urlRecherche;// url+change
let result;
let adressChoix= "";

    let urlApi = `https://api-adresse.data.gouv.fr/search/?q=` ;
    const datasFetch = async () => {
        const res = await fetch(urlRecherche);
        result = await res.json();
        console.log("result : ", result);
    }


    let listAdress = document.querySelector("ul");
    let inputRue = document.getElementById("rue");
  
   

        inputRue.addEventListener("input", (event) => {
            listAdress.innerHTML ="";
            let inputRueValue = event.target.value;// recuprer le data de utlisateur
            console.log(inputRueValue);
            let  change = inputRueValue.toLowerCase().split(" ").join("+");
             urlRecherche = urlApi + change;
            console.log(urlRecherche);
            if(change.length > 4){
              datasFetch()   // appele fonction de data fetch 
            }
            for (let index = 0; index < result.features.length; index++) {
                console.log("mon resulatat : ",result.features[index].properties.label);
                let listParElement = document.createElement("li")
                    listParElement.classList.add("list-rue");
                    listParElement.style.listStyleType= "none"
                    listAdress.style.cursor ="pointer"
                    listParElement.textContent = result.features[index].properties.label;
                    listAdress.appendChild(listParElement);
            }
            listAdress.addEventListener("click",(eventClick)=>{
                    listAdress.innerHTML=""
               adressChoix =  eventClick.target.innerText;
               for (let index = 0; index < result.features.length; index++) {
                if(adressChoix == result.features[index].properties.label){
                    document.querySelector("#ville").value = result.features[index].properties.city;
                    document.querySelector("#codePostal").value = result.features[index].properties.postcode;
                    document.querySelector("#rue2").value = result.features[index].properties.name;
                    document.querySelector("#ville2").value = result.features[index].properties.city;
                    document.querySelector("#codePostal2").value = result.features[index].properties.postcode;
                }
                
               }

            })
            
          
    })


