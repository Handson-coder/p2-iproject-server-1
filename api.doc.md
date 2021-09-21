# My Movie App Server

My Movie App is an application to show movies. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

### Post /register

_Request Header_

```
not needed
```

_Request Params_

```
not needed
```

_Request Body_

```
{
  "username": "<string not required>",
  "email": "<string required>",
  "password": "<string required>",
  "phoneNumber": "<string not required>",
  "address": "<string not required>"
}
```

_Response (201 - created)_

```
{
  "id": 1,
  "email": "hansen@mail.com"
}
```

_Response (400 - Bad Request)_

```
{
  "message": [
    "hansen@mail.com already registered",
    "Must be email format",
    "Email is required",
    "Password is required",
    "Min Length of Password is 5 or Max Length of Password is 30"
  ]
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### Post /login

_Request Header_

```
not needed
```

_Request Params_

```
not needed
```

_Request Body_

```
{
  "email": "<string>",
  "password": "<string>"
}
```

_Response (200 - success)_

```
{
  "id": 1,
  "username": "Handson",
  "email": "hansen@mail.com",
  "role": "admin",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJoYW5zZW5AbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MzEwMTQyMzl9.H1Fg3tEpj5SXKFNpBTHLBKm2ToGjHE6Upm_bskQyfjk"
}
```

_Response (401 - Unauthorized)_

```
{
  "message": "Email/Password is wrong"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### Post /auth/google

_Request Header_

```
not needed
```

_Request Params_

```
not needed
```

_Request Body_

```
{
  "idToken": "<access_token>"
}
```

_Response (200 - success)_

```
{
  "id": 23,
  "username": "Handson Panggabean",
  "role": "staff",
  "email": "handsonpanggabean8@gmail.com",
  "access_token": "<access_token>"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### GET /medicine/categories

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Request Params_

```
not needed
```


_Response (200)_

```
[
  {
    "external_id": "134d1526-05a9-438f-9b3e-98e67676342d",
    "slug": "covid-19",
    "canon_slug": null,
    "image_url": "https://d2qjkwm11akmwu.cloudfront.net/categories/233906_3-3-2020_14-41-34.png",
    "attributes": {
      "meta_description": "Temukan berbagai macam jenis obat dan vitamin berdasarkan Kategori Cegah Corona. Ketahui juga manfaat, dosis, cara konsumsi, aturan pakai dan efek samping obat dan vitamin di Halodoc.",
      "seo_url": "https://halodoc-sumba.s3.ap-southeast-1.amazonaws.com/product-category-seo-information/product_category_seo_information_covid_19.html",
      "meta_title": "Daftar Informasi obat dan vitamin - Halodoc - Kategori Cegah Corona",
      "name": "COVID-19",
      "meta_keywords": "Kategori Cegah Corona"
    },
    "images_map": {
      "image_url": [
        {
          "extension": "png",
          "url": "https://d2qjkwm11akmwu.cloudfront.net/categories/233906_3-3-2020_14-41-34.png"
        },
        {
          "extension": "webp",
          "url": "https://d2qjkwm11akmwu.cloudfront.net/categories/134d1526-05a9-438f-9b3e-98e67676342d_product_image_url.webp"
        }
      ]
    }
  },
  ...
]
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---


### GET /medicine/categories/:slug/page/:count

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Request Params_

```
"EX URL" : "http://localhost:3000/medicine/detail/Hi-D-5000-Vitamin-D3-6-Tablet"
```


_Response (200)_

```
{
  "external_id": "e688dc33-fdca-49b2-9903-6f6249b6247a",
  "canon_slug": "hi-d-5000-vitamin-d3-6-tablet",
  "general_indication": "INFORMASI OBAT INI HANYA UNTUK KALANGAN MEDIS. \nMeningkatkan kadar vitamin D pada pasien dengan kekurangan vitamin D.",
  "description": "HI-D 5000 IU mengandung cholecalciferol 5000 IU setara dengan Vitamin D3 125 mikrogram. Obat ini termasuk golongan vitamin D dan analog. HI-D 5000 digunakan untuk menaikkan kadar vitamin D pada pasien yang kekurangan vitamin D. Produk ini bekerja dengan menstimulus penyerapan kalsium dan fosfat dari usus halus, menstimulus reabsopsi fosfat pada tubulus renal, dan menstimulasi sekresi kalsium dari tulang menuju peredaran darah. Dalam penggunaan obat ini harus SESUAI DENGAN PETUNJUK DOKTER.",
  "composition": "Cholecalciferol 5000 IU setara dengan Vitamin D3 125 mikrogram",
  "dosage": "PENGGUNAAN OBAT INI HARUS SESUAI DENGAN PETUNJUK DOKTER. \nDewasa dan anak usia lebih dari 12 tahun : 1 tablet kunyah, 1 kali sehari. ",
  "how_to_use": "Sebelum atau sesudah makan",
  "packaging": "Dus, 5 strip @ 6 tablet kunyah",
  "side_effects": "Pemakaian obat umumnya memiliki efek samping tertentu dan sesuai dengan masing-masing individu. \nJika terjadi efek samping yang berlebih dan berbahaya, harap konsultasikan kepada tenaga medis.\nEfek samping yang mungkin terjadi dalam penggunaan obat adalah: \nSupresi adrenal, perubahan metabolisme glukosa, katabolisme protein, aktivasi tukak lambung.",
  "contraindication": "Infeksi bakteri atau jamur pada mulut dan tenggorokan. \nLesi herpetik karena virus atau lesi intraoral.",
  "warning": "*Jumlah Stock untuk Produk ini terbatas. Jika tidak tersedia (not available), dapat diorder kembali tanpa dikombinasikan dengan produk lain.\n\n\nHARUS DENGAN RESEP DOKTER. \nCek kadar vitamin D terlebih dahulu sebelum menggunakan vitamin D dengan dosis tinggi.\nBelum terdapat data keamanan terkait penggunaan obat ini pada wanita hamil dan/atau menyusui. \nKonsultasikan kepada dokter apabila Anda sedang hamil dan/atau menyusui.",
  "segmentation": "Red",
  "manufacturer_name": "Imedco Djaja",
  "meta_keywords": "20210317, Vitamin D, dosis tinggi ||T3K ||M4I ||T3RX ||T0.3K ||Suplemen-and-Herbal-for-Mental-Health",
  "image_url": "https://d2qjkwm11akmwu.cloudfront.net/products/742890_22-6-2020_17-2-26.jpeg",
  "thumbnail_url": "https://d2qjkwm11akmwu.cloudfront.net/thumbnails/373106_22-6-2020_17-2-34.jpeg",
  "name": "Hi-D 5000 Vitamin D3 6 Tablet",
  "bpom_number": "BPOM: DKL1909504363B1",
  "min_price": 22900,
  "base_price": 33000,
  "selling_unit": "Per Strip",
  "prescription_required": true,
  "controlled_substance_type": "not_controlled_substance",
  "visual_cues": [
    "prescription_required",
    "sponsored_product"
  ],
  "images_map": {
    "image_url": [
      {
        "extension": "webp",
        "url": "https://d2qjkwm11akmwu.cloudfront.net/products/e688dc33-fdca-49b2-9903-6f6249b6247a_product_image_url.webp"
      },
      {
        "extension": "jpeg",
        "url": "https://d2qjkwm11akmwu.cloudfront.net/products/742890_22-6-2020_17-2-26.jpeg"
      }
    ],
    "thumbnail_url": [
        {
          "extension": "webp",
          "url": "https://d2qjkwm11akmwu.cloudfront.net/thumbnails/e688dc33-fdca-49b2-9903-6f6249b6247a_product_thumbnail_url.webp"
        },
        {
          "extension": "jpeg",
          "url": "https://d2qjkwm11akmwu.cloudfront.net/thumbnails/373106_22-6-2020_17-2-34.jpeg"
        }
    ]
  },
  "categories": [
    {
      "external_id": "10289f10-5e73-4de8-ac71-fdef9d4efefa",
      "slug": "otot-tulang-dan-sendi",
      "canon_slug": null,
      "name": "Otot, Tulang dan Sendi"
    },
    {
      "external_id": "d01e4664-18f2-4853-9924-bdf79bdce9b0",
      "slug": "vitamin-dan-suplemen",
      "canon_slug": null,
      "name": "Vitamin & Suplemen"
    },
    {
      "external_id": "134d1526-05a9-438f-9b3e-98e67676342d",
      "slug": "covid-19",
      "canon_slug": null,
      "name": "COVID-19"
    }
  ]
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### GET /medicine/categories/:slug/page/:count

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Request Params_

```
"EX URL" : "http://localhost:3000/medicine/categories/produk-susu/page/1"
```


_Response (200)_

```
[
  {
    "external_id": "062cf506-b852-4e2b-9c5d-140b636ea67d",
    "slug": "nutrilon-royal-3-vanila-susu-pertumbuhan-bubuk-800-gr",
    "canon_slug": null,
    "name": "Nutrilon Royal 3 Vanila Susu Pertumbuhan Bubuk 800 gr",
    "image_url": "https://d2qjkwm11akmwu.cloudfront.net/products/319719_11-8-2020_18-46-46.jpeg",
    "thumbnail_url": "https://d2qjkwm11akmwu.cloudfront.net/thumbnails/508225_11-8-2020_18-48-39.jpeg",
    "min_price": 142100,
    "base_price": 229400,
    "selling_unit": "Per Kaleng",
    "prescription_required": false,
    "controlled_substance_type": "not_controlled_substance",
    "visual_cues": [
      "sponsored_product",
      "sponsored_product",
      "in_stock"
    ],
    "images_map": {
      "image_url": [
        {
          "extension": "webp",
          "url": "https://d2qjkwm11akmwu.cloudfront.net/products/062cf506-b852-4e2b-9c5d-140b636ea67d_product_image_url.webp"
        },
        {
          "extension": "jpeg",
          "url": "https://d2qjkwm11akmwu.cloudfront.net/products/319719_11-8-2020_18-46-46.jpeg"
        }
      ],
      "thumbnail_url": [
          {
            "extension": "jpeg",
            "url": "https://d2qjkwm11akmwu.cloudfront.net/thumbnails/508225_11-8-2020_18-48-39.jpeg"
          },
          {
            "extension": "webp",
            "url": "https://d2qjkwm11akmwu.cloudfront.net/thumbnails/062cf506-b852-4e2b-9c5d-140b636ea67d_product_thumbnail_url.webp"
          }
      ]
    },
    "general_indication": null
  },
  ...
]
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### GET /medicine/categories/:slug/page/:count

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Request Params_

```
"EX URL" : "http://localhost:3000/medicine/similar/nutrilon-royal-3-madu-susu-pertumbuhan-bubuk-400-gr"
```


_Response (200)_

```
[
  {
    "external_id": "062cf506-b852-4e2b-9c5d-140b636ea67d",
    "slug": "nutrilon-royal-3-vanila-susu-pertumbuhan-bubuk-800-gr",
    "canon_slug": null,
    "name": "Nutrilon Royal 3 Vanila Susu Pertumbuhan Bubuk 800 gr",
    "image_url": "https://d2qjkwm11akmwu.cloudfront.net/products/319719_11-8-2020_18-46-46.jpeg",
    "thumbnail_url": "https://d2qjkwm11akmwu.cloudfront.net/thumbnails/508225_11-8-2020_18-48-39.jpeg",
    "min_price": 142100,
    "base_price": 229400,
    "selling_unit": "Per Kaleng",
    "prescription_required": false,
    "controlled_substance_type": "not_controlled_substance",
    "visual_cues": [
      "sponsored_product",
      "sponsored_product",
      "in_stock"
    ],
    "images_map": {
      "image_url": [
        {
          "extension": "webp",
          "url": "https://d2qjkwm11akmwu.cloudfront.net/products/062cf506-b852-4e2b-9c5d-140b636ea67d_product_image_url.webp"
        },
        {
          "extension": "jpeg",
          "url": "https://d2qjkwm11akmwu.cloudfront.net/products/319719_11-8-2020_18-46-46.jpeg"
        }
      ],
      "thumbnail_url": [
        {
          "extension": "jpeg",
          "url": "https://d2qjkwm11akmwu.cloudfront.net/thumbnails/508225_11-8-2020_18-48-39.jpeg"
        },
        {
          "extension": "webp",
          "url": "https://d2qjkwm11akmwu.cloudfront.net/thumbnails/062cf506-b852-4e2b-9c5d-140b636ea67d_product_thumbnail_url.webp"
        }
      ]
    },
    "general_indication": "Susu pertumbuhan untuk anak usia 1-3 tahun."
  },
  ...
]
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---