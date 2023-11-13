console.log("Bien chargé mon js script !");
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


