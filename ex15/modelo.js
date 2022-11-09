function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 14) {
                // Criança
                img.setAttribute('src', 'meninobb.png')
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'velhohomem.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 14) {
                // Criança
                img.setAttribute('src', 'meninabb.png')
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'velhamulher.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}