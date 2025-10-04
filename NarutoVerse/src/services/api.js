const BASE_URL = "https://dattebayo-api.onrender.com";

export async function getCharacters(){
    const response  = await fetch(`${BASE_URL}/characters`);
    return response.json();
}

export async function getCharactersById(id){
    const response  = await fetch(`${BASE_URL}/characters/${id}`);
    return response.json();
}

export async function getTailedBeast(){
    const response  = await fetch(`${BASE_URL}/tailed-beasts`);
    return response.json();
}

export async function getAkatsuki(){
    const response = await fetch(`${BASE_URL}/akatsuki`);
    return response.json();
}
export async function getKekkeiGenkai(){
    const response = await fetch(`${BASE_URL}/kekkei-genkai`);
    return response.json();
}
