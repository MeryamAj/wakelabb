const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: { "Content-Type": "application/json" },
});

const chargerActivites = async () => {
  try {
    const response = await api.get("/activites");
    return response.data;
    
  } catch (error) {
    console.error(error.response?.data?.message ?? "API inaccessible");
    return [];
  }
};
chargerActivites().then((data) => {
  console.log(data);
  affichache(data);
  name_user(data);
});


function affichache(array)
{
    const countainer = document.getElementById("countainer");
    array.forEach(element => {
        const card = document.createElement("div");
        card.classList.add("card");

        const titre = document.createElement("h3");
        titre.textContent = element.titre;

        const description = document.createElement("p");
        description.textContent = element.description;

        const Theme = document.createElement("p");
        Theme.textContent = "Them : " + element.theme;

        const Duree = document.createElement("p");
        Duree.textContent = "Durée : " + element.duree;

        const objectifs = document.createElement("p");
        objectifs.textContent = "Objectifs : " + element.objectifs;

        const Auteur = document.createElement("p");
        Auteur.textContent = "Auteur : " + element.auteur;

        card.appendChild(titre);
        card.appendChild(description);
        card.appendChild(Theme);
        card.appendChild(Duree);
        card.appendChild(objectifs);
        card.appendChild(Auteur);

        countainer.appendChild(card);
        
    });

}

function name_user(){
    const name = document.getElementById("nom_u");
   
    name.addEventListener("input", (event) =>{
        event.preventDefault();
        let input = name.value;
        console.log(input);




    })
    // localStorage.setItem()




}
