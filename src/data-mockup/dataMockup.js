export const contacts = [
  {
    id: 1,
    first_name: 'ezio',
    last_name: 'escalona',
    details:
      'San Antonio de los Altos es un pueblo venezolano ubicado en el centro-norte de Venezuela, en el Municipio Los Salias, del Estado Miranda.',
    email: 'ezioeg@gmail.com',
    phone: { number: '4163039355', area_code: '+58' },
    addresses: [
      {
        state_id: 22,
        city_id: 22,
        line_1: 'Calle Pomarrosa',
        line_2: 'Mirabosques',
        zip_code: '1204',
      },
    ],
  },
  {
    id: 2,
    first_name: 'rafael',
    last_name: 'giordanelli',
    details:
      'Valencia es un pueblo venezolano ubicado en el centro-norte de Venezuela, en el Municipio Lomas del Este, del Estado Carabobo.',
    email: 'rafaelg@gmail.com',
    phone: { number: '4163249312', area_code: '+58' },
    addresses: [
      {
        state_id: 33,
        city_id: 33,
        line_1: 'Calle Veldevere',
        line_2: 'MontBlanc',
        zip_code: '1004',
      },
    ],
  },
  {
    id: 3,
    first_name: 'jose',
    last_name: 'fernandez',
    details:
      'Maracay es un pueblo venezolano ubicado en el centro-norte de Venezuela, en el Municipio Araya, del Estado Aragua.',
    email: 'josef@gmail.com',
    phone: { number: '4142456789', area_code: '+58' },
    addresses: [
      {
        state_id: 44,
        city_id: 44,
        line_1: 'Calle Perimetral',
        line_2: 'Orinoco',
        zip_code: '1137',
      },
    ],
  },
]

export const states = [
  { id: 22, name: 'miranda' },
  { id: 33, name: 'carabobo' },
  { id: 44, name: 'aragua' },
]
export const cities = [
  { id: 22, name: 'san antonio' },
  { id: 33, name: 'valencia' },
  { id: 44, name: 'maracay' },
]
