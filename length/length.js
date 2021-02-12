document.getElementById("text").addEventListener("change", () => {
    input = document.getElementById('text')
    text = input.value
    document.getElementById("length").innerText = text.length
})