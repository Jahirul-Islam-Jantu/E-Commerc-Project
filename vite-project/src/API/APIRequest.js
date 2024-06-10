import axios from "axios";
const baseUrl = "https://cart-api.teamrabbil.com/api";

export async function listOfProduct() {
  let res = await axios.get(baseUrl + "/product-list");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}

export async function createCart(id) {
  let res = await axios.get(baseUrl + "/create-cart" + id);
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}

export async function removeCart(id) {
  let res = await axios.get(baseUrl + "/remove-cart" + id);
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}

export async function cartList() {
  let res = await axios.get(baseUrl + "/cart-list");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}
