/* -------------------------------
   🦴 1. Skeleton Loader SIN retraso
---------------------------------*/
window.addEventListener("load", () => {
    document.getElementById("skeleton").classList.add("hidden");
    document.getElementById("productForm").classList.remove("hidden");
    document.getElementById("emptyState").classList.remove("hidden");
  });
  
  /* --------------------------------------
     ⭐ 2. Optimistic UI + Manejo de error
  -----------------------------------------*/
  const form = document.getElementById("productForm");
  const productList = document.getElementById("productList");
  const emptyState = document.getElementById("emptyState");
  const errorBox = document.getElementById("errorBox");
  const errorMsg = document.getElementById("errorMsg");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const product = {
      name: name.value,
      brand: brand.value,
      price: price.value,
    };
  
    // optimistic update
    const tempId = Date.now();
    const tempItem = document.createElement("div");
    tempItem.className = "p-4 rounded border bg-gray-50 dark:bg-gray-800 animate-pulse";
    tempItem.id = tempId;
    tempItem.textContent = "Guardando producto...";
    productList.appendChild(tempItem);
  
    emptyState.classList.add("hidden");
  
    // simulate server
    setTimeout(() => {
      const success = Math.random() > 0.5;
  
      if (success) {
        tempItem.classList.remove("animate-pulse");
        tempItem.classList.add("bg-white", "dark:bg-gray-700");
        tempItem.textContent =
          `${product.name} - ${product.brand} ($${product.price})`;
      } else {
        tempItem.remove();
        errorMsg.textContent = "No se pudo guardar el producto. Intenta de nuevo.";
        errorBox.classList.remove("hidden");
      }
    }, 2000);
  });
  
  /* --------------------------------------
     🔁 Retry
  -----------------------------------------*/
  document.getElementById("retryBtn").addEventListener("click", () => {
    errorBox.classList.add("hidden");
  });
  