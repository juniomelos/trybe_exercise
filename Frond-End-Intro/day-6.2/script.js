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

const clearAll = document.getElementById('limpar');
clearAll.addEventListener('click', function () {
  forms.reset();
});

var picker = new Pikaday({ field: document.getElementById('datepicker') });

/* forms.addEventListener('submit', function (event) {
  event.preventDefault();
}); */
