# Individual Project

&nbsp;

## API

-[x] HaloDoc https://www.halodoc.com
-[x] Covid19 https://dekontaminasi.com/api/id/covid19/stats
-[x] HospitalIndonesiaAPI https://dekontaminasi.com/api/id/covid19/hospitals

## Fitur

-[x] Nodemailer https://nodemailer.com/about/
-[x] socket Io https://socket.io/

## NPM Package
- [x] express
- [x] pg
- [x] sequelize
- [x] jwt
- [x] bcrypt
- [x] google-auth-library (server side)
- [x] dotenv (dev dependency)
- [x] multer
- [x] cors
- [x] form-data
- [x] axios
- [x] socket.io
- [x] nodemailer
- [x] vue-socket.io-extended
- [x] vue-google-login https://www.npmjs.com/package/vue-google-login
- [x] vue-sweetalert2
- [x] vue-hacktiv8-footer


## Features

### Documentation
- [x] Write API Documentation

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

### GET /provinces

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
    "id": 1,
    "name": "Aceh"
  },
  {
    "id": 2,
    "name": "Bali"
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

### GET /medicines/categories

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

### GET /medicines/categories/:slug/page/:count

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

### GET /medicines/categories/:slug/page/:count

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

### GET /medicines/categories/:slug/page/:count

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

### GET /doctors/:slug

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
"EX URL" : "http://localhost:3000/doctor/dr-abdullah-basalamah-sp-og"
```

_Response (200)_

```
{
  "first_name": "Abdullah",
  "last_name": "Basalamah,",
  "full_name": "Abdullah Basalamah,",
  "pre_salutation": "dr.",
  "post_salutation": "Sp.OG",
  "external_id": "4322f18b-ec70-438b-a115-522b02d318ba",
  "canon_slug": "dr-abdullah-basalamah-sp-og",
  "type": null,
  "image_url": "https://d1ojs48v3n42tp.cloudfront.net/personnels/802194_23-2-2021_22-41-39.png",
  "profile_sections": [
    {
      "name": "start_year",
      "type": "experience",
      "value": "1994",
      "identifier": "5303e0a4-f952-483c-9ab9-63cfe61859f7",
      "display": true,
      "language": "na"
    },
    {
      "name": "start_month",
      "type": "experience",
      "value": "04",
      "identifier": "5303e0a4-f952-483c-9ab9-63cfe61859f7",
      "display": true,
      "language": "na"
    },
    {
      "name": "university_name",
      "type": "education",
      "value": "Universitas Indonesia",
      "identifier": "e42bac7d-59e0-4179-9d75-59da4bedf63c",
      "display": true,
      "language": "na"
    }
  ],
  "slug": "dr-abdullah-basalamah-sp-og",
  "status": "active",
  "speciality": null,
  "description": null,
  "meta_title": null,
  "meta_keywords": null,
  "meta_description": null,
  "appointment_url": null,
  "provider_locations": [
    {
      "medicine_delivery_flag": "0",
      "address_line": "Jl. Mustikajaya No.9, Mustika Jaya, Kec. Mustika Jaya, Kota Bks, Jawa Barat",
      "appointment_url": "",
      "appointment_flag": "2",
      "new_appointment_flag": true,
      "name": "RS Permata Bekasi",
      "external_id": "f5ed0d71-a5e5-4c1b-a6b6-6f7f8856c175",
      "slug": "rs-permata-bekasi",
      "image_url": "https://d1ojs48v3n42tp.cloudfront.net/provider_location_list/759884_27-2-2020_11-9-26.jpg",
      "time_zone": "Asia/Jakarta",
      "location": "-6.291081,107.03157",
      "other_images": [
        "https://d1ojs48v3n42tp.cloudfront.net/provider_location_banner/193_27-2-2020_11-9-33.jpg",
        "https://d1ojs48v3n42tp.cloudfront.net/provider_location_banner/67124_27-2-2020_11-9-42.jpg",
        "https://d1ojs48v3n42tp.cloudfront.net/provider_location_banner/618676_27-2-2020_11-9-49.jpg",
        "https://d1ojs48v3n42tp.cloudfront.net/provider_location_banner/319413_27-2-2020_11-9-56.jpg",
        "https://d1ojs48v3n42tp.cloudfront.net/provider_location_banner/437484_16-9-2020_13-25-39.jpeg"
      ],
      "coupon": null,
      "phone_numbers": [
        "0218251919"
      ],
      "departments": [
        {
          "name": "Poliklinik Kandungan dan Kebidanan",
          "description": "Spesialis Obstetri dan Ginekologi (Obgyn) adalah cabang ilmu kedokteran yang mempelajari tentang kehamilan dan proses persalinan",
          "external_id": "8e89ecbc-0368-4f67-8e90-b85eeffa0c15",
          "image_url": "https://halodoc-sumba.s3-ap-southeast-1.amazonaws.com/Bintan_Department/97e1d588-185b-4271-bbd2-38710c2d6ee5.png",
          "slug": "kandungan-dan-kebidanan"
        }
      ],
      "payment_config": {
        "payment_flag": true,
        "convenience_fee": null,
        "medical_service_fee": 230000,
        "consultation_fee_start_price": 230000,
        "consultation_fee_end_price": 230000
      },
      "city_id": "e58a56e5-7d02-469e-b34d-626126be1ebf",
      "district_id": "000ad05b-ab8d-4a65-89b7-1d813dbf8f79",
      "region_id": "2da0dca6-baee-4065-9847-de29cd8a7f65",
      "city": "Bekasi",
      "district": "Mustika Jaya",
      "region": "Jawa Barat"
    }
  ],
  "provider_location_departments": null,
  "specialities": [
    {
      "name": "Kebidanan Kandungan",
      "display_order": 0,
      "description": "Spesialis Kebidanan & Kandungan atau Spesialis Obstetri & Ginekologi (Obgyn) merupakan spesialis yang berfokus dalam menangani perawatan pada masa kehamilan dan proses persalinan, serta kesehatan sistem reproduksi wanita secara umum",
      "image_url": "https://d1ojs48v3n42tp.cloudfront.net/specialities/4f160c28-a82d-464c-be6f-fc5249cb85a4.png",
      "slug": "obstetrics-and-gynecologist",
      "meta_keywords": null,
      "thumbnail_url": "https://d1ojs48v3n42tp.cloudfront.net/specialities/356106_25-9-2019_18-48-9.png",
      "english_name": null,
      "bahasa_name": null
    }
  ],
  "images": [
    {
      "type": "thumbnail",
      "extension": null,
      "url": "https://d1ojs48v3n42tp.cloudfront.net/personnels/802194_23-2-2021_22-41-39.png"
    }
  ],
  "rich_text_description": "<html>\n              <head>\n                  <meta charset=\"UTF-8\">\n              </head>\n              <body>\n                <div style=\"font-family: Nunito-Regular, sans-serif;\">\n                <p>dr. Abdullah Basalamah, Sp.OG&nbsp;<span style=\"color: rgb(0, 0, 0);\">adalah seorang Dokter Spesialis Kebidanan Kandungan yang aktif melayani pasien di RS Permata Bekasi. dr. Abdullah Basalamah mendapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia, Depok.</span></p><p><span style=\"color: rgb(0, 0, 0);\">Beliau yang tergabung dalam Ikatan Dokter Indonesia (IDI) dan Perkumpulan Obstetri dan Ginekologi Indonesia (POGI) dapat memberikan layanan konsultasi seputar kebidanan kandungan.</span></p><p><strong style=\"color: rgb(0, 0, 0);\">Kebijakan Pembatalan &amp; Pengembalian Dana:</strong></p><ul><li>Pembatalan janji kunjungan dapat dilakukan melalui aplikasi Halodoc maksimal 24 jam sebelum waktu janji kunjungan anda</li><li>Pengembalian dana dari Gopay dan Halodoc Wallet membutuhkan waktu maksimal 3 hari kerja</li><li>Pengembalian dana dari kartu kredit/ debit membutuhkan waktu 3 hari kerja ditambah waktu proses dari pihak Bank selama maksimal 14 hari kerja</li><li>Jika pengembalian dana belum diterima sesuai batas waktu, silakan hubungi customer service kami melalui tlp 085574677403 atau 02131106999, atau melalui layanan \"chat dengan kami\" di menu bantuan Aplikasi Halodoc.</li></ul>\n                </div>\n              </body>\n            </html>",
  "mandatory_fields": []
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### GET /doctors

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
    "id": 1,
    "full_name": "Arika Husnayanti,",
    "slug": "dr-arika-husnayanti-sp-og",
    "images": "https://d1ojs48v3n42tp.cloudfront.net/personnels/617242_31-3-2021_15-3-45.jpeg",
    "city": "Kabupaten Pidie",
    "district": "Pidie",
    "provider_locations": "RS Citra Husada Pidie Aceh",
    "specialities": "Kebidanan Kandungan",
    "pre_salutation": "dr.",
    "post_salutation": "Sp.OG"
  },
  {
    "id": 2,
    "full_name": "Dian Febrina,",
    "slug": "dr-dian-febrina-sp-og",
    "images": "https://d1ojs48v3n42tp.cloudfront.net/personnels/181086_3-9-2020_18-18-12.png",
    "city": "Kota Pekanbaru",
    "district": "Tampan",
    "provider_locations": "RS Aulia Pekanbaru",
    "specialities": "Kebidanan Kandungan",
    "pre_salutation": "dr.",
    "post_salutation": "Sp.OG"
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

### GET /hospitals/:slug

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
"EX URL" : "http://localhost:3000/hospital/rsup-dr-sardjito"
```

_Response (200)_

```
{
  "name": "RSUP dr Sardjito",
  "external_id": "ff6b2fed-8813-486a-9a41-949233452910",
  "canon_slug": "rsup-dr-sardjito",
  "hospital_type": "Rumah Sakit Umum",
  "address": "No.1, Jl. Kesehatan, Senolowo, Sinduadi, Kec. Mlati, Kabupaten Sleman, Jogja",
  "city_name": "Kabupaten Sleman",
  "district_name": "Mlati",
  "region_name": "DI Yogyakarta",
  "main_image": "https://d1ojs48v3n42tp.cloudfront.net/provider_location_list/655477_3-2-2020_23-41-36.jpg",
  "other_images": [
    "https://d1ojs48v3n42tp.cloudfront.net/provider_location_banner/499304_3-2-2020_23-41-51.jpg"
  ],
  "phone_numbers": [
    "0274631190",
    "0274587333"
  ],
  "longitude": "110.37347420",
  "latitude": "-7.76861630",
  "about": "Rumah Sakit Umum Prof dr.Sardjito diresmikan pada tanggal 13 Juni 1974, terletak di daerah Yogyakarta, Kecamatan Mlati. Rumah Sakit Umum Prof dr.Sardjito memiliki Visi menjadi Rumah Sakit pendidikan yang berstandar internasional pada tahun 2019, dengan Misi memberikan pelayanan kesehatan yang prima berstandar internasional dan terjangkau oleh semua lapisan masyarakat, melaksanakan pendidikan dan pelatihan untuk menghasilkan SDM yang berkualitas, menyelenggarakan penelitian dan pengembangan IPTEK yang berwawasan global.",
  "meta_title": "",
  "meta_keywords": "Rumah Sakit Umum Dr Sardjito",
  "meta_description": "",
  "facilities": [
    "Unit Perawatan Intensif",
    "Instalasi Laboratorium",
    "Farmasi",
    "Instalasi Rawat Inap",
    "Instalasi Rawat Jalan"
  ],
  "services_available": {
    "medicine_delivery_flag": false,
    "appointment_flag": false
  },
  "appointment_url": "",
  "address_map_url_mobile": "https://d1ojs48v3n42tp.cloudfront.net/bintan/prod-provider-location-image/a3e5e2c9-b0d8-4e47-8758-def7474252f7.png",
  "address_map_url_desktop": "https://d1ojs48v3n42tp.cloudfront.net/bintan/prod-provider-location-image/33f6c832-7ce8-46eb-b88b-61a77686fae0.png",
  "time_zone": "Asia/Jakarta",
  "provider_id": "52fa7b19-2d9d-4006-8549-890349b5d9be",
  "bpjs": false,
  "new_appointment_flag": false
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### GET /api

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
    "name": "RS UMUM DAERAH  DR. ZAINOEL ABIDIN",
    "address": "JL. TGK DAUD BEUREUEH, NO. 108 B. ACEH",
    "region": "KOTA BANDA ACEH, ACEH",
    "phone": "(0651) 34565",
    "province": "Aceh"
  },
  {
    "name": "RS UMUM DAERAH CUT MEUTIA KAB. ACEH UTARA",
    "address": "JL. BANDA ACEH-MEDAN KM.6 BUKET RATA LHOKSEUMAWE",
    "region": "KOTA LHOKSEUMAWE, ACEH",
    "phone": "(0645) 46334",
    "province": "Aceh"
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

### GET /hospitals

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
    "id": 1,
    "name": "RS UMUM DAERAH  DR. ZAINOEL ABIDIN",
    "address": "JL. TGK DAUD BEUREUEH, NO. 108 B. ACEH",
    "region": "KOTA BANDA ACEH, ACEH",
    "province": "Aceh",
    "slug": "rsud-dr-zainoel-abidin-aceh",
    "images": "https://d1ojs48v3n42tp.cloudfront.net/provider_location_banner/606116_4-3-2020_18-38-54.jpg",
    "provinceId": 1
  },
  {
    "id": 2,
    "name": "RS CUT MEUTIA MEDIKA NUSANTARA",
    "address": "JL. GARUDA NO. 1 KEL. KEBON BARU KOTA LANGSA RT/RW 00 KOTA LANGSA , NANGGROE ACEH DARUSSALAM",
    "region": "KOTA LANGSA, ACEH",
    "province": "Aceh",
    "slug": "rs-cut-meutia-medika-nusantara",
    "images": "https://d1ojs48v3n42tp.cloudfront.net/provider_location_list/423261_16-3-2020_15-46-8.jpg",
    "provinceId": 1
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

### GET /covid19/stats

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
{
  "type": "country",
  "name": "Indonesia",
  "timestamp": 1632096000000,
  "numbers": {
    "infected": 4192695,
    "recovered": 3996125,
    "fatal": 140634
  },
  "regions": [
    {
      "type": "province",
      "name": "DKI Jakarta",
      "numbers": {
        "infected": 855119,
        "recovered": 838286,
        "fatal": 13465
      }
    },
    {
      "type": "province",
      "name": "Jawa Barat",
      "numbers": {
        "infected": 699185,
        "recovered": 678519,
        "fatal": 14491
      }
    },
    ...
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


