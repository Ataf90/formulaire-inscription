console.log("Bien chargé mon js script !");
//------------------------API--------------------
let url = "https://geo.api.gouv.fr/communes?codePostal=13013&field=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=son&geometry=centre";

 let datasAxios = await axiosTest();
console.log("Datas type via Axios : ", datasAxios);
async function axiosTest(){
    const response = await axios.get("https://api-adresse.data.gouv.fr/search/?q=54+boulevard");
    return response.data;
}
console.log("city ",datasAxios.features.properties);

// document.querySelector("#codePostal").addEventListener("input", function () {
//     if (this.value.length == 5) {
//         let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&field=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=son&geometry=centre`;
//         fetch(url).then(response => response.json().then(data => {
            
//             console.log(data);
//             let affichage = '<ul>';
//             for (let code  of data) {
//                 affichage += `<li>${code.nom}</li>`
                
//             }
//             affichage += '<ul>';
            
//         })
//         );
//     }
// })
// document.querySelector("#ville").addEventListener("input", function(){
//     if(this.value.length == 5){
//         fetch(url).then(response => response.json().then(data =>{
//             console.log(data);
//             let affichageVille = '<ul>';
//             for (let ville of object) {
                
//             }
//         }))
//     }
// })

document.querySelector("#rue").addEventListener("input",function(){
    let recuperData = document.querySelector("#rue").value;
    for (const adress of datasAxios) {
        let select = document.createElement("select")
        adress = datasAxios.city;
    }
})