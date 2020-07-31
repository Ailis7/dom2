const data = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

function byField(field, type = 'increase') {
  if (type === 'increase') return (a, b) => (a[field] > b[field] ? 1 : -1);
  return (a, b) => (a[field] > b[field] ? -1 : 1);
}

const arrow = ['\u2191', '\u2193'];
const status = ['id', 'increase'];
const table = document.querySelector('.main');

data.forEach((e) => {
  table.innerHTML += `<td>${e.id}</td>
  <td>${e.title}</td>
  <td>(${e.year})</td>
  <td>imdb: ${(e.imdb).toFixed(2)}</td>
</tr>`;
});

setInterval(() => {
  data.sort(byField(status[0], status[1]));
  table.innerHTML = `<tr>
  <th class="id">id</th>
  <th class="title">title</th>
  <th class="year">year</th>
  <th class="imdb">imdb</th>
</tr>`;

  if (status[1] === 'increase') {
    document.querySelector(`.${status[0]}`).textContent += arrow[1];
  } else {
    document.querySelector(`.${status[0]}`).textContent += arrow[0];
  }


  data.forEach((e) => {
    table.innerHTML += `<td>${e.id}</td>
    <td>${e.title}</td>
    <td>(${e.year})</td>
    <td>imdb: ${(e.imdb).toFixed(2)}</td>
</tr>`;
  });

  if (status[1] === 'increase') {
    status[1] = 'descrease';
  } else {
    const keysArr = Object.keys(data[0]);
    const index = keysArr.indexOf(status[0]) + 1;
    const next = (index < keysArr.length) ? index : 0;
    status[0] = keysArr[next];
    status[1] = 'increase';
  }
}, 2000);
