const cpfsList = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
  return elements.map( element => element.innerText);
}

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, '');
}

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,'$1.$2.$3-$4');
}

const listaDeCpfs = elementsInnerText(cpfsList);

const formatarCPFS = (cpfs) => {
  const cpfsLimpos = cpfs.map(e => limparCPF(e));
  return cpfsLimpos.map(e => construirCPF(e));
}

const substituirCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCPFS(cpfs);

  cpfsElements.forEach((element,index) => {
    element.innerText = cpfsFormatados[index];
  })
}

substituirCPFS(cpfsList);
