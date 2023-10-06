const getData = async () => {
  // const url = "https://fakestoreapi.com/products/1";
  const url = "https://fakestoreapi.com/products?limit=20";

  const data = await fetch(url).then((res) => res.json());
  return data;
};

export default getData;
