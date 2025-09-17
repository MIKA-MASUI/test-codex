document.addEventListener('DOMContentLoaded', () => {
  const exchangeFilter = document.getElementById('exchange-filter');
  const exchangeCards = document.querySelectorAll('#exchange-cards .card');
  const coinSearch = document.getElementById('coin-search');
  const coinTiles = document.querySelectorAll('#coin-grid .tile');

  if (exchangeFilter) {
    exchangeFilter.addEventListener('change', () => {
      const value = exchangeFilter.value;
      exchangeCards.forEach((card) => {
        if (value === 'all') {
          card.classList.remove('is-hidden');
          return;
        }
        const tags = card.dataset.tags?.split(' ') ?? [];
        card.classList.toggle('is-hidden', !tags.includes(value));
      });
    });
  }

  if (coinSearch) {
    coinSearch.addEventListener('input', () => {
      const keyword = coinSearch.value.trim().toLowerCase();
      coinTiles.forEach((tile) => {
        const name = tile.dataset.name ?? '';
        const tags = tile.dataset.tags ?? '';
        const text = `${name} ${tags}`.toLowerCase();
        tile.classList.toggle('is-hidden', keyword && !text.includes(keyword));
      });
    });
  }
});
