export default async function fetchApi(e) {
  e.preventDefault();
  
  const response = await axios.get("https://fakestoreapi.com/products");
  const data = response.data;
  console.log(data);
}
return <div>api</div>;

//Get all products - https://fakestoreapi.com/products
// Get product detail - https://fakestoreapi.com/products/1
