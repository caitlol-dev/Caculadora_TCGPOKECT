print("Calculadora de pontos para cartas TCG POCKET")
meta = 500
ganho_diario = 10
saldo_atual = int(input("Digite a quantidade atual de pontos no booster: "))
falta_pontos = meta - saldo_atual
dias_restantes = falta_pontos // ganho_diario

if saldo_atual < meta:
    print("Ainda falta:",falta_pontos,"pontos e",dias_restantes, "dias")
else:
    print("Já atingiu os pontos necessarios!")