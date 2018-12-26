self.onmessage = e => {
  let decks = e.data.decks,
    cardsName = e.data.cardsName,
    cardsCode = e.data.cardsCode,
    cardsElixir = e.data.cardsElixir,
    contentToCopy,
    html = '<button title="Remove all" class="btnRemoveAll" onclick="deleteAll()">Remove all Decks</button><h2 class="elixir"></h2>';

  for (let i = 0; i < decks.length; i++) {
    contentToCopy = `${cardsCode[decks[i][0]]};${cardsCode[decks[i][1]]};${cardsCode[decks[i][2]]};${cardsCode[decks[i][3]]};${cardsCode[decks[i][4]]};${cardsCode[decks[i][5]]};${cardsCode[decks[i][6]]};${cardsCode[decks[i][7]]}`;
    html += `
      <section class="cardsContainerS">
        <div><img src="./images/cards/${cardsName[decks[i][0]]}_opt-min.png" alt=${cardsName[decks[i][0]]} title="${capitalize(cardsName[decks[i][0]])}" onclick="showInfo('${decks[i][0]}')"/></div>
        <div><img src="./images/cards/${cardsName[decks[i][1]]}_opt-min.png" alt=${cardsName[decks[i][1]]} title="${capitalize(cardsName[decks[i][1]])}" onclick="showInfo('${decks[i][1]}')"/></div>
        <div><img src="./images/cards/${cardsName[decks[i][2]]}_opt-min.png" alt=${cardsName[decks[i][2]]} title="${capitalize(cardsName[decks[i][2]])}" onclick="showInfo('${decks[i][2]}')"/></div>
        <div><img src="./images/cards/${cardsName[decks[i][3]]}_opt-min.png" alt=${cardsName[decks[i][3]]} title="${capitalize(cardsName[decks[i][3]])}" onclick="showInfo('${decks[i][3]}')"/></div>
        <div><img src="./images/cards/${cardsName[decks[i][4]]}_opt-min.png" alt=${cardsName[decks[i][4]]} title="${capitalize(cardsName[decks[i][4]])}" onclick="showInfo('${decks[i][4]}')"/></div>
        <div><img src="./images/cards/${cardsName[decks[i][5]]}_opt-min.png" alt=${cardsName[decks[i][5]]} title="${capitalize(cardsName[decks[i][5]])}" onclick="showInfo('${decks[i][5]}')"/></div>
        <div><img src="./images/cards/${cardsName[decks[i][6]]}_opt-min.png" alt=${cardsName[decks[i][6]]} title="${capitalize(cardsName[decks[i][6]])}" onclick="showInfo('${decks[i][6]}')"/></div>
        <div><img src="./images/cards/${cardsName[decks[i][7]]}_opt-min.png" alt=${cardsName[decks[i][7]]} title="${capitalize(cardsName[decks[i][7]])}" onclick="showInfo('${decks[i][7]}')"/></div>
      </section>

      <h1 class="elixir">Elixir average: ${((cardsElixir[decks[i][0]] + cardsElixir[decks[i][1]] + cardsElixir[decks[i][2]] + cardsElixir[decks[i][3]] + cardsElixir[decks[i][4]] + cardsElixir[decks[i][5]] + cardsElixir[decks[i][6]] + cardsElixir[decks[i][7]]) / 8).toFixed(1)}</h1>

      <section class="configContainerS" oncontextmenu="(event => event.preventDefault())(event)">
        <button class="btnCopiarS" title="Open Deck" ${e.data.screenSize < 1024 ? `onclick="copyDeckSaved('${contentToCopy}')"` : `onclick="openDeck('https://link.clashroyale.com/deck/pt?deck=${contentToCopy}')"`} oncontextmenu="copyDeckPhone('${contentToCopy}')">Open Deck</button>
        <button class="btnApagar" title="Remove Deck" onclick="deleteDeck([${decks[i].join(',')}])">Remove Deck</button>
        <button class="btnColarS" title="Paste Deck" onclick="pasteDeck('https://link.clashroyale.com/deck/pt?deck=${contentToCopy}')">Paste Deck</button>
      </section>
    `;
  }

  self.postMessage({"html": html, "amount": decks.length})
}

function capitalize(string) { return string.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') }