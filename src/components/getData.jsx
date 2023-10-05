const getData = async () => {
  // const url = "https://fakestoreapi.com/products/1";
  const url = "https://fakestoreapi.com/products?limit=3";

  const data = await fetch(url).then((res) => res.json());
  console.log(data);
  return data;
};

export default getData;
