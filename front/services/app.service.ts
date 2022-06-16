const apiUrl = "http://localhost:4000";
const AppService = {
  getCart: (id: number) => {
    return fetch(apiUrl + `/cart/` + id.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json());
  },
  createCart: () => {
    return fetch(apiUrl + `/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json());
  },
  addToCart: (id: number, products: any[]) => {
    return fetch(apiUrl + `/cart/` + id.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ items: products }),
    }).then((res) => res.json());
  },
};

export default AppService;
