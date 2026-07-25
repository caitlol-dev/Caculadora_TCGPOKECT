function mostrarResultado(tipo, html) {
  const resultado = document.getElementById('resultado');
  resultado.className = `show ${tipo}`;
  resultado.innerHTML = html;
}

function calcular() {
  const numeroMaximo = 2500;
  const ganhoDiario = 10;

  const meta = Number(document.getElementById('meta').value);
  const saldoAtual = Number(document.getElementById('saldo').value);

  // Validação da meta
  if (!Number.isInteger(meta) || meta <= 0) {
    mostrarResultado(
      'error',
      '⚠️ Digite uma meta válida maior que 0.'
    );
    return;
  }

  if (meta > numeroMaximo) {
    mostrarResultado(
      'error',
      `⚠️ A meta de pontos não pode ser maior que ${numeroMaximo}!`
    );
    return;
  }

  // Validação do saldo
  if (!Number.isInteger(saldoAtual) || saldoAtual < 0) {
    mostrarResultado(
      'error',
      '⚠️ Digite uma quantidade atual de pontos válida.'
    );
    return;
  }

  const faltaPontos = meta - saldoAtual;
  const diasRestantes = Math.floor(faltaPontos / ganhoDiario);

  // Mesmo comportamento do seu Python
  if (saldoAtual < meta) {
    mostrarResultado(
      'info',
      `
        <div class="result-line">🎯 <strong>Meta:</strong> ${meta} pontos</div>
        <div class="result-line">📦 <strong>Faltam:</strong> ${faltaPontos} pontos</div>
        <div class="result-line">📅 <strong>Dias restantes:</strong> ${diasRestantes} dias</div>
      `
    );
  } else {
    mostrarResultado(
      'success',
      '🎉 <strong>Já atingiu os pontos necessários!</strong>'
    );
  }
}