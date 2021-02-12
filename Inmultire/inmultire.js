for (let j = 1; j < 100; j++) {
    document.write("<div class='coloana'>");
    for (let i = 1; i < 100; i++) {
        let produs = i * j
        document.write(i+" " + "x "+ j +" = " + produs + "<br>")
    }
    document.write('</div>')
}
