<?php
$data = [
  [
    'nama' => 'Dliyaulhaq',
    'phone' => [
      [
        'number' => '08989283',
      ],
      [
        'number' => '0819837',
      ]
    ]
  ],
  [
    'nama' => 'Mufliansyah',
    'phone' => [
      [
        'number' => '08989283',
      ],
      [
        'number' => '0819837',
      ]
    ]
  ]
];

foreach ($data as $d) {
  echo $d['nama'];
  echo '<br>';
  foreach ($d['phone'] as $p) {
    echo $p['number'];
    echo '<br>';
  }
  echo '<br>';
}