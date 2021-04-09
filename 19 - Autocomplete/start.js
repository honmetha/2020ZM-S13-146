(() => {
  // เริ่มเขียนโค้ด
  const carBrands = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroën",
    "Dacia",
    "Daewoo",
    "Daihatsu",
    "Dodge",
    "Donkervoort",
    "DS",
    "Ferrari",
    "Fiat",
    "Fisker",
    "Ford",
    "Honda",
    "Hummer",
    "Hyundai",
    "Infiniti",
    "Iveco",
    "Jaguar",
    "Jeep",
    "Kia",
    "KTM",
    "Lada",
    "Lamborghini",
    "Lancia",
    "Land Rover",
    "Landwind",
    "Lexus",
    "Lotus",
    "Maserati",
    "Maybach",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "MG",
    "Mini",
    "Mitsubishi",
    "Morgan",
    "Nissan",
    "Opel",
    "Peugeot",
    "Porsche",
    "Renault",
    "Rolls-Royce",
    "Rover",
    "Saab",
    "Seat",
    "Skoda",
    "Smart",
    "SsangYong",
    "Subaru",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
  ];

  const searchElem = document.querySelector(".search");

  function clearResults() {
    const ulElem = document.querySelector(".results");
    if (ulElem) {
      document.body.removeChild(ulElem);
    }
  }

  function selectCarBrand(event) {
    searchElem.value = event.target.innerText;
    clearResults();
  }

  function onInput(event) {
    const inputText = event.target.value.toLowerCase();

    const matchedCarBrands = carBrands.filter((carBrand) =>
      carBrand.toLowerCase().startsWith(inputText)
    );

    clearResults();
    const ulElem = document.createElement("ul");
    ulElem.classList.add("results");

    matchedCarBrands.forEach((carBrand) => {
      const liElem = document.createElement("li");
      liElem.innerText = carBrand;
      liElem.onclick = selectCarBrand;
      ulElem.appendChild(liElem);
    });
    document.body.appendChild(ulElem);
  }

  function run() {
    searchElem.addEventListener("input", onInput);
    document.addEventListener("click", clearResults);
  }

  run();
})();
