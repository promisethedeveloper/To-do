const input = document.querySelector("#fname")

const addButton = document.querySelector("button")
addButton.addEventListener("click", function() {
  const ol = document.querySelector("ol")
  const li = document.createElement("li");
  const inputFieldData = input.value;
  const removeButton = document.createElement('button');
  removeButton.classList.add('button_style');
  removeButton.textContent = "completed";
  li.textContent = inputFieldData;
  li.append(removeButton)
  ol.append(li)
  input.value = ""

  removeButton.addEventListener("click", function() {
    li.remove();
  })

})


