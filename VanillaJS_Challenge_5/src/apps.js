import "./styles.css";
const selector = document.querySelector("select");


function loadCountries() {
    localStorage.setItem("country", selector.value)
}

selector.value = localStorage.getItem("country")
selector.addEventListener("input", loadCountries)