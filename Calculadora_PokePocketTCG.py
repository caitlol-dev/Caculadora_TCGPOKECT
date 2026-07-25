print("Calculadora de pontos para cartas TCG POCKET")
meta = int(input("Digite a meta de pontos que deseja atingir: "))
numero_maximo = 2500

if meta > numero_maximo:
    print("A meta de pontos não pode ser maior que 2500!")
    exit()


ganho_diario = 10
saldo_atual = int(input("Digite a quantidade atual de pontos no booster: "))
falta_pontos = meta - saldo_atual
dias_restantes = falta_pontos // ganho_diario


if saldo_atual < meta:
    print("Ainda falta:",falta_pontos,"pontos e",dias_restantes, "dias")
else:
    print("Já atingiu os pontos necessarios!")
