self.onmessage = e => {
  let exists = false,
    decks = e.data.decks,
    currentDeck = e.data.currentDeck,
    deck = null;

  for (let i = 0; i < (decks === null ? 0 : decks.deckList.length); i++) {
    let qtd = 0;
    for (let j = 0; j < currentDeck.length; j++)
      for (let k = 0; k < currentDeck.length; k++)
        if (currentDeck[j] === decks.deckList[i][k])
          qtd++;

    if (qtd === 8) {
      exists = true;
      break;
    }
  }

  if (!exists)
    deck = `{"deckList": [${decks !== null ? `[${decks.deckList.join('],[')}],[${currentDeck.join(',')}]` : `[${currentDeck.join(',')}]`}]}`;

  self.postMessage({ "exists": exists, "deck": deck });
}