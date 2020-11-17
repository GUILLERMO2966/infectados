let Contagios = 0
let Suceptibles = 90000
let Infectados = 10000
let Recuperados = 0
let Tasa_Interaccion = 2
let Probabilidad_Contagio = 0.1
basic.forever(function () {
    basic.showString("INT")
    basic.showNumber(0)
    Contagios = Infectados * (Tasa_Interaccion * (Suceptibles / (Infectados + (Suceptibles + Recuperados * Probabilidad_Contagio))))
    basic.showString("CONTAGIOS")
    basic.showNumber(Contagios)
})
