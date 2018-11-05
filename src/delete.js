self.onmessage = e => {
  const decksCurrent = e.data.deckList,
    deck = e.data.deck;
  let newDecksCurrent = '[';
  
  for (let i = 0; i < decksCurrent.length; i++)
    if (compareArrays(decksCurrent[i], deck)) {
      if (i === decksCurrent.length - 1)
        newDecksCurrent = `${newDecksCurrent.substring(0, newDecksCurrent.length - 1)}${decksCurrent.length === 1 ? 'empty' : ']'}`;
    }
    else newDecksCurrent += `[${decksCurrent[i]}]${i === decksCurrent.length - 1 ? ']' : ','}`;

  self.postMessage(newDecksCurrent);
}

function compareArrays(array1, array2) {
  let qtd = 0;
  if (array1.length === array2.length)
    for (let i = 0; i < array1.length; i++)
      if (array1[i] === array2[i])
        qtd++;

  return array1.length === qtd;
}