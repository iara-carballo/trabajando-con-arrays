 
    // Array extraño
    const strangeArray = [
      "Zero",
      function () { alert("Hola soy una función en un array"); },
      22,
      null,
      "Go lang",
      undefined,
      "Cobol",
      "I'm programmer",
      -2000,
      "Hello world",
      `One is ${1}`,
      { name: "Info", lastname: "last info" },
      () => true,
      function showNumbers() { return "1, 2, 3, 4"; },
      "Another String",
      ["Hola mundo!"],
      "b is a letter",
      "JavaScript",
    ];

    // Escribo mi función aquí

    //Funcion solo para mostrar strings ordenados
    function showList(array) {
      const container = document.getElementById("list");
      container.innerHTML = "";

      // Filtro solo strings
      const stringArray = array.filter(el => typeof el === "string");

      // Ordeno alfabéticamente ignorando mayúsculas/minúsculas
      stringArray.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      // Muestro cada string en la lista
      stringArray.forEach(el => {
        const li = document.createElement("li");
        li.textContent = el;
        container.appendChild(li);
      });
    }

    // Ejecuto al cargar el DOM
    document.addEventListener("DOMContentLoaded", () => {
      showList(strangeArray);
    });
