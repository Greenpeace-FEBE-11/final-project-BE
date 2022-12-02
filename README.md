# Final project BE

# API Spec

## Authentication

All API must use this authentication

Request :
- Header :
    - X-Api-Key : "your secret api key"
## Signup

Request :
- Method : POST
- Endpoint : `/signup`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :
```json 
{
    "username": "lisa",
    "email": "ilsa@gmail.com",
    "password": "123",
    "roles": ["user"]
}
```
- Response :

```json 
{
  "message": "User was registered successfully!"
}
```
## Signin

Request :
- Method : POST
- Endpoint : `/signin`
- Header :
multipart/form-data
    - Content-Type: application/json
    - Accept: application/json
- Body :
```json 
{
   
    "email": "ilsa@gmail.com",
    "password": "123"

}
```
- Response :

```json 
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2ExYmMwMmYwMjRkMDllMGQyODI5NiIsImlhdCI6MTY2ODk0NzQwNCwiZXhwIjoxNjY5MDMzODA0fQ.RW_hcMyi2_AUPGnwNYPOZvgWLJ1_Hu7C6ck1OCku18w",
  "username": "lisa",
  "email": "ilsa@gmail.com"
}
```
## Signout
Request :
- Method : POST
- Endpoint : `/signout`
- Header :
    - Accept: application/json
- Body :
```json 
{
   
    "email": "ilsa@gmail.com",
    "password": "123"

}
```
- Response :

```json 
{
  "message": "You've been signed out!"
}
```
## Create Pencegahan

Request :
- Method : POST
- Endpoint : `/pencegahan`
- Header :
    - Content-Type: multipart/form-data
    - Accept: application/json
- Body :
form-data
<table>
  <tr>
    <td>category</td>
    <td>pencegahan</td>
  </tr>
  <tr>
    <td>title</td>
    <td>Lorem ipsum</td>
  </tr>
  <tr>
    <td>content</td>
    <td>Lorem ipsum</td>
  </tr>
  <tr>
    <td>image</td>
    <td>/D:/Users/User/OneDrive/Pictures/pohon.PNG</td>
  </tr>
</table>

- Response :

```json 
{
    "success": true,
    "data": {
        "category": "pencegahan",
        "title": "Lorem ipsum",
        "content": "Lorem ipsum",
        "date": "2022-11-30T13:14:00.917Z",
        "image": "images\\1669814040783-pohon.PNG",
        "_id": "6387571834614065ee433ddd",
        "__v": 0
    },
    "message": "Prevention is created successfully"
}
```

## Get All Pencegahan

Request :
- Method : GET
- Endpoint : `/pencegahan`
- Header :
    - Accept: application/json

- Response :

```json 
{
    "success": true,
    "data": [
        {
            "_id": "6385fe3f1050edc72b3efaf1",
            "category": "penecegahan",
            "title": "lorem ipsum",
            "content": "lorem ipsum",
            "date": "2022-11-29T12:42:39.430Z",
            "image": "images\\1669731452242-cutnyak.png",
            "__v": 0
        },
        {
            "_id": "6386115fe17cbdbe3e3c081a",
            "category": "pencegahan",
            "title": "lorem ipsum4",
            "content": "lorem ipsum4",
            "image": "images\\1669731452242-ahnasution.png",
            "__v": 0,
            "date": "2022-11-30T12:58:07.272Z"
        }
    ],
    "message": "All Preventions are fetched successfully"
}
```
## Get Single Pencegahan

Request :
- Method : GET
- Endpoint : `/pencegahan/{id_pencegahan}`
- Header :
    - Accept: application/json

- Response :

```json 
{
    "success": true,
    "data": {
        "_id": "6385fe3f1050edc72b3efaf1",
        "category": "penecegahan",
        "title": "lorem ipsum",
        "content": "lorem ipsum",
        "date": "2022-11-29T12:42:39.430Z",
        "image": "images\\1669731452242-cutnyak.png",
        "__v": 0
    },
    "message": "Prevention is fetched successfully"
}
```
## Update Pencegahan

Request :
- Method : PUT
- Endpoint : `/pencegahan/{id_pencegahan}`
- Header :
    - Content-Type: multipart/form-data
    - Accept: application/json
- Body :
form-data
<table>
  <tr>
    <td>category</td>
    <td>pencegahan</td>
  </tr>
  <tr>
    <td>title</td>
    <td>Lorem ipsum</td>
  </tr>
  <tr>
    <td>content</td>
    <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</td>
  </tr>
  <tr>
    <td>image</td>
    <td>/D:/Users/User/OneDrive/Pictures/pohon2.PNG</td>
  </tr>
</table>
```

Response :

```json 
{
    "success": true,
    "data": {
        "_id": "6387571834614065ee433ddd",
        "category": "pencegahan",
        "title": "Lorem ipsum",
        "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
        "image": "images\\1669860672436-pohon2.PNG",
        "__v": 0
    },
    "message": "Prevention is updated successfully"
}
```

## Delete Pencegahan

Request :
- Method : DELETE
- Endpoint : `/pencegahan/{id_pencegahan}`
- Header :
    - Accept: application/json

Response :

```json 
{
    "success": true,
    "message": "Prevention is deleted successfully"
}
```
## Create Dampak

Request :
- Method : POST
- Endpoint : `/dampak`
- Header :
    - Content-Type: multipart/form-data
    - Accept: application/json
- Body :
form-data
<table>
  <tr>
    <td>category</td>
    <td>dampak</td>
  </tr>
  <tr>
    <td>title</td>
    <td>Lorem ipsum</td>
  </tr>
  <tr>
    <td>content</td>
    <td>Lorem ipsum</td>
  </tr>
  <tr>
    <td>image</td>
    <td>/D:/Users/User/OneDrive/Pictures/pohon.PNG</td>
  </tr>
</table>

Response :

```json 
{
    "success": true,
    "data": {
        "category": "dampak",
        "title": "Lorem ipsum",
        "content": "Lorem ipsum",
        "date": "2022-11-30T13:17:00.917Z",
        "image": "images\\1669814040783-pohon.PNG",
        "_id": "6387571834614065ee433ddd",
        "__v": 0
    },
    "message": "Dampak is created successfully"
}
```

## Get All Dampak

Request :
- Method : GET
- Endpoint : `/dampak`
- Header :
    - Accept: application/json

Response :

```json 
{
    "success": true,
    "data": [
        {
            "_id": "6385fe3f1050edc72b3efaf1",
            "category": "dampak",
            "title": "lorem ipsum",
            "content": "lorem ipsum",
            "date": "2022-11-29T12:42:39.430Z",
            "image": "images\\1669731452242-cutnyak.png",
            "__v": 0
        },
        {
            "_id": "6386115fe17cbdbe3e3c081a",
            "category": "dampak",
            "title": "lorem ipsum4",
            "content": "lorem ipsum4",
            "image": "images\\1669731452242-ahnasution.png",
            "__v": 0,
            "date": "2022-11-30T12:58:07.272Z"
        }
    ],
    "message": "All Dampak are fetched successfully"
}
```
## Get Single Dampak

Request :
- Method : GET
- Endpoint : `/dampak/{id_dampak}`
- Header :
    - Accept: application/json
Response :

```json 
{
    "success": true,
    "data": {
        "_id": "6385fe3f1050edc72b3efaf1",
        "category": "dampak",
        "title": "lorem ipsum",
        "content": "lorem ipsum",
        "date": "2022-11-29T12:42:39.430Z",
        "image": "images\\1669731452242-cutnyak.png",
        "__v": 0
    },
    "message": "Dampak is fetched successfully"
}
```
## Update Dampak

Request :
- Method : PUT
- Endpoint : `/dampak/{id_dampak}`
- Header :
    - Content-Type: multipart/form-data
    - Accept: application/json
- Body :
form-data
<table>
   <tr>
    <td>category</td>
    <td>dampak</td>
  </tr>
  <tr>
    <td>title</td>
    <td>Lorem ipsum</td>
  </tr>
  <tr>
    <td>content</td>
    <td>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</td>
  </tr>
  <tr>
    <td>image</td>
    <td>/D:/Users/User/OneDrive/Pictures/pohon2.PNG</td>
  </tr>
</table>
```

Response :

```json 
{
    "success": true,
    "data": {
        "_id": "6385fe3f1050edc72b3efaf1",
        "pencegahan": "dampak",
        "title": "Lorem ipsum",
        "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
        "image": "images\\1669860672436-pohon2.PNG",
        "__v": 0
    },
    "message": "Prevention is updated successfully"
}
```

## Delete Dampak

Request :
- Method : DELETE
- Endpoint : `/dampak/{id_dampak}`
- Header :
    - Accept: application/json
Response :

```json 
{
    "success": true,
    "message": "Dampak is deleted successfully"
}
```
## Create informasi at user page

Request :
- Method : POST
- Endpoint : `/userpage`
- Header :
    - Content-Type: multipart/form-data
    - Accept: application/json
- Body :
form-data
<table>
  <tr>
    <td>title</td>
    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
  </tr>
  <tr>
    <td>content</td>
    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Fames ac turpis egestas sed tempus. Eleifend mi in nulla posuere. Tempus quam pellentesque nec nam aliquam sem et. Curabitur vitae nunc sed velit dignissim sodales. Augue lacus viverra vitae congue eu consequat. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Sed tempus urna et pharetra. Justo donec enim diam vulputate ut pharetra sit. Arcu ac tortor dignissim convallis aenean et. Auctor eu augue ut lectus arcu bibendum.</td>
  </tr>
  <tr>
    <td>image</td>
    <td>/D:/Users/User/OneDrive/Pictures/informasi.PNG</td>
    </tr>
  <tr>
    <td>alamat</td>
    <td>cianjur</td>
  </tr>
</table>

Response :

```json 
{
{
  "message": "succes add data",
  "data": {
    "_id": "637a21612f024d09e0d2829f",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Fames ac turpis egestas sed tempus. Eleifend mi in nulla posuere. Tempus quam pellentesque nec nam aliquam sem et. Curabitur vitae nunc sed velit dignissim sodales. Augue lacus viverra vitae congue eu consequat. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Sed tempus urna et pharetra. Justo donec enim diam vulputate ut pharetra sit. Arcu ac tortor dignissim convallis aenean et. Auctor eu augue ut lectus arcu bibendum.",
    "alamat": "cianjur",
    "image": "images\\1669860672436-informasi.PNG",
    "postedBy": "6388da69a331408205d4086b",
    "createdAt": "2022-12-01T23:18:35.489Z",
    "updateAt": "2022-12-01T23:18:35.489Z",
    "__v": 0
  }
}
}
```
## Update informasi at user page

Request :
- Method : PUT
- Endpoint : `/userpage/{id_userpage}`
- Header :
    - Content-Type: multipart/form-data
    - Accept: application/json
- Body :
form-data
<table>
  <tr>
    <td>title</td>
    <td>Lorem ipsum</td>
  </tr>
  <tr>
    <td>content</td>
    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Fames ac turpis egestas sed tempus. Eleifend mi in nulla posuere. Tempus quam pellentesque nec nam aliquam sem et.</td>
  </tr>
  <tr>
    <td>alamat</td>
    <td>cianjur</td>
  </tr>
  <tr>
    <td>image</td>
    <td>/D:/Users/User/OneDrive/Pictures/informasi.PNG</td>
  </tr>
</table>

Response :

```json 
{
    "message": "update information successfuly",
    "data": {
        "_id": "63893660652156c6db41f88b",
        "title": "ini title",
        "content": "lorem ipsum",
        "alamat": "bandung",
        "image": "images\\1669943505386-9longsor-purwrejo.jpg",
        "postedBy": "6388da69a331408205d4086b",
        "createdAt": "2022-12-01T23:18:35.489Z",
        "updateAt": "2022-12-01T23:18:35.489Z",
        "__v": 0
    }
}
```
## Get informasi at user page

Request :
- Method : GET
- Endpoint : `/userpage`
- Header :
    - Accept: application/json
- Response :

```json 
{
    "message": "succes get data",
    "data": [
        {
            "_id": "63893660652156c6db41f88b",
            "title": "ini title",
            "content": "lorem ipsum",
            "alamat": "bandung",
            "image": "images\\1669943505386-9longsor-purwrejo.jpg",
            "postedBy": "6388da69a331408205d4086b",
            "createdAt": "2022-12-01T23:18:35.489Z",
            "updateAt": "2022-12-01T23:18:35.489Z",
            "__v": 0
        }
    ]
}
```
## Delete Informasi at user page

Request :
- Method : DELETE
- Endpoint : `/userpage/{id_userpage}`
- Header :
    - Accept: application/json
- Response :

```json 
{
    "message": "item successfuly deleted"
}
```
## Delete user

Request :
- Method : DELETE
- Endpoint : `/admin/{id}`
- Header :
    - Accept: application/json
Response :

```json 
{
    "message": "item successfuly deleted"
}
```
## Get user

Request :
- Method : GET
- Endpoint : `/admin`
- Header :
    - Accept: application/json
- Response :

```json 
{
    "message": "success get data",
    "data": [
        {
            "_id": "6387735c2b0ac0b6e184846f",
            "username": "febe11",
            "email": "febe11@gmail.com",
            "password": "$2a$08$xyjqQr5mPrJ0boat0IX69.DZKZgXtrC9L7zr/bCoiWvSZj7Z3x7Qi",
            "roles": [
                "63876e9ff672199d9a7a61e6"
            ],
            "posts": [],
            "__v": 1
        },
        {
            "_id": "63877e9a28806ac201281e76",
            "username": "vania",
            "email": "vania@gmail.com",
            "password": "$2a$08$3wys6Sw5PKokZ3tnLe05k.UN27hIg8dAAGKIk0HwD3m1IGadKeaZK",
            "roles": [
                "63876e9ff672199d9a7a61e5"
            ],
            "posts": [],
            "__v": 1
        },
        {
            "_id": "638828fcecd7e967276f4271",
            "username": "ilham",
            "email": "ilham@gmail.com",
            "password": "$2a$08$cxP3wPGm8LNRz8ma1n/GyuZx5dKLn2UEXslDPnLDWsvuujdkyGKgK",
            "roles": [
                "63876e9ff672199d9a7a61e5"
            ],
            "posts": [],
            "__v": 1
        },
        {
            "_id": "6388344cbe24c583e17949e0",
            "username": "firdaus",
            "email": "firdaus@gmail.com",
            "password": "$2a$08$OBWMgBSAcQfWI6KF3MvloO6gcgcoRGOFfAgA1p1xAkKgXhr21/OMu",
            "roles": [
                "63876e9ff672199d9a7a61e5"
            ],
            "posts": [],
            "__v": 1
        },
        {
            "_id": "6388da69a331408205d4086b",
            "username": "febrianto",
            "email": "febrianto@gmail.com",
            "password": "$2a$08$QMmytK8NrvJQT.hASMqb8ujfBBdambvGZxqduUysY2rhVMHCzfrDu",
            "roles": [
                "63876e9ff672199d9a7a61e5"
            ],
            "__v": 1
        },
        {
            "_id": "6389237ba8978db17c751e5b",
            "username": "rosyk",
            "email": "rosyk@gmail.com",
            "password": "$2a$08$trzP55uvwBc.PHF1Y1I2d.UPntAdxfLkvMIJjRdxH4lUVPQcQ1sCW",
            "roles": [
                "63876e9ff672199d9a7a61e6"
            ],
            "__v": 1
        }
    ]
}
```
## Get single user

Request :
- Method : GET
- Endpoint : `/admin/{id}`
- Header :
    - Accept: application/json
- Response :

```json 
{
    "message": "get user detail successfuly",
    "data": {
        "_id": "6387735c2b0ac0b6e184846f",
        "username": "febe11",
        "email": "febe11@gmail.com",
        "password": "$2a$08$xyjqQr5mPrJ0boat0IX69.DZKZgXtrC9L7zr/bCoiWvSZj7Z3x7Qi",
        "roles": [
            "63876e9ff672199d9a7a61e6"
        ],
        "posts": [],
        "__v": 1
    }
}
```
## Update user

Request :
- Method : PUT
- Endpoint : `/admin/{id}`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :
```json 
{
    "username": "febe11",
    "email": "febe11@gmail.com",
    "password": "12345"
}
```
- Response :

```json 
{
    "message": "update user successfuly",
    "data": {
        "_id": "6387735c2b0ac0b6e184846f",
        "username": "febe11",
        "email": "febe11@gmail.com",
        "password": "$2a$08$xyjqQr5mPrJ0boat0IX69.DZKZgXtrC9L7zr/bCoiWvSZj7Z3x7Qi",
        "roles": [
            "63876e9ff672199d9a7a61e6"
        ],
        "posts": [],
        "__v": 1
    }
}
```
