// use local storage to manage cart data
const addToDb = (id) => {
  let blogQuantity = getBlogQuantity();
  // add quantity
  const quantity = blogQuantity[id];
  if (!quantity) {
    blogQuantity[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    blogQuantity[id] = newQuantity;
  }
  localStorage.setItem("blog-quantity", JSON.stringify(blogQuantity));
};

const removeFromDb = (id) => {
  const blogQuantity = getBlogQuantity();
  if (id in blogQuantity) {
    delete blogQuantity[id];
    localStorage.setItem("blog-quantity", JSON.stringify(blogQuantity));
  }
};

const getBlogQuantity = () => {
  let blogQuantity = {};

  //get the blog Quantity from local storage
  const storedQuantity = localStorage.getItem("blog-quantity");
  if (storedQuantity) {
    blogQuantity = JSON.parse(storedQuantity);
  }
  return blogQuantity;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("blog-quantity");
};

export { addToDb, removeFromDb, getBlogQuantity, deleteShoppingCart };
