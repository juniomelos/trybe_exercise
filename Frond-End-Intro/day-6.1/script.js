const estadosBr = document.getElementById('estados');

function createStates() {
  const states = [
    { AC: 'Acre' },
    { AL: 'Alagoas' },
    { AP: 'Amapá' },
    { AM: 'Amazonas' },
    { BA: 'Bahia' },
    { CE: 'Ceará' },
    { DF: 'Distrito Federal' },
    { ES: 'Espírito Santo' },
    { GO: 'Goías' },
    { MA: 'Maranhão' },
    { MT: 'Mato Grosso' },
    { MS: 'Mato Grosso do Sul' },
    { MG: 'Minas Gerais' },
    { PA: 'Pará' },
    { PB: 'Paraíba' },
    { PR: 'Paraná' },
    { PE: 'Pernambuco' },
    { PI: 'Piauí' },
    { RJ: 'Rio de Janeiro' },
    { RN: 'Rio Grande do Norte' },
    { RS: 'Rio Grande do Sul' },
    { RO: 'Rondônia' },
    { RR: 'Roraíma' },
    { SC: 'Santa Catarina' },
    { SP: 'São Paulo' },
    { SE: 'Sergipe' },
    { TO: 'Tocantins' },
  ];
  for (i = 0; i < states.length; i += 1) {
    const createOption = document.createElement('option');
    createOption.value = Object.keys(states[i])[0];
    createOption.innerHTML = Object.values(states[i])[0];
    estadosBr.appendChild(createOption);
  }
}
createStates();

const forms = document.getElementById('forms');

forms.addEventListener('submit', function (event) {
  event.preventDefault();
});

const salvarDiv = document.getElementById('enviar');

salvarDiv.addEventListener('click', function () {
  let div = document.createElement('div');
  let section = document.querySelector('section');
  section.appendChild(div);
  const div1 = document.querySelector('div');

  for (let i = 0; i < forms.length; i += 1) {
    const dados = document.createElement('p');
    dados.innerHTML = forms[i].value;
    div1.appendChild(dados);
  }
});

const clearAll = document.getElementById('limpar');
clearAll.addEventListener('click', function () {
  forms.reset();
  let section = document.querySelector('section');
  section.removeChild(section.children[0]);
});
