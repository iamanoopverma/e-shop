const BASE_URL = "https://eshop-server-c11u.onrender.com/api/products";

export async function getProducts(){
    const res = await fetch(BASE_URL);
    if(!res.ok) throw new Error("Failed to load products");  
    return res.json();
}

export async function getProductId(id){
    const res = await fetch(`${BASE_URL}/${id}`);
    if(!res.ok) throw new Error("Failed to load Product Details");
    return res.json();
}