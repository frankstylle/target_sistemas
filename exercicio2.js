//  items da sequencia Fibonacci -  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
n1 = 0
n2 = 1
n3 = 0
let valor = 89
while (valor > n3) {
    n3 = n1 + n2
    n1 = n2
    n2 = n3

}
if (valor == 0 || valor == 1 || valor == n3) {
    console.log('O número faz parte da sequência de Fibonacci.')
} else {
    console.log('O número digitado não faz parte da sequência de Fibonacci.')
}
