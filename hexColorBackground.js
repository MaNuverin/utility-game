(function(){
    button.addEventListener('click', changeHex)
    const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 'A', 'B', 'C', 'D', 'E', 'F']

    function changeHex(){
        let hex = '#';
        for(let i = 0; i < 6; i++){
            const index = Math.floor(Math.random()* hexValues.length);
            hex += hexValues[index]
        };
        ChildDiv.textContent = hex;
        document.body.style.backgroundColor = hex
    }
})()
