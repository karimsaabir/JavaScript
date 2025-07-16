function tijaabo() {
  return new Promise((guul, guuldaro) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        guul({ id: 1, name: "Sabir", age: 25 });
      } else {
        guuldaro("Error ayaa kuheesto");
      }
    }, 3000);
  });
}

tijaabo()
  .then((data) => console.log("Xog:", data))
  .catch((data) => console.log("Error:", data));



 