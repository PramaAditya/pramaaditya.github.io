# Overview
1. Chatting: [**HipChat**](http://hipchat.com/) ([link masuk room](https://www.hipchat.com/invite/359399/97b94aaff8cbceb9bfd9bfc667a47de2))
2. Menejemen Proyek: [**Trello**](https://trello.com/b/RtH95iLd/favor)
3. Sinkronisasi Lain-Lain: [**Bittorent Sync**](https://www.getsync.com/)([link folder lain-lain(sebelumnya *other-assets*)](https://link.getsync.com/#f=lain-lain&sz=16E7&t=2&s=DDVONTRXK475QL3AGTHFBQJIR54ZBLAA4LF3U4EONJHRPA65D73Q&i=CLZ6HYNAFPHBPYGWTYCBW5VGDN4N2VA4J&v=2.0))([link folder web-assets](https://link.getsync.com/#f=web-assets&sz=0&t=2&s=LU5ZZ7SJSSNBTK434QSRB4LREP3EVHSKMKP3P27N4KUMVIKWT4BQ&i=CM5PXDRVWAIJ4WZM325KRKVCNAEHKCWOH&e=1432189836&v=2.0))
4. Sinkronisasi Kode: [**Github**](http://https://github.com/ningenis/FAPOR)

## Aplikasi lain
- [Prepos](https://prepos.io) 
- [Pingendo](https://pingendo.com)

# Coding
## Struktur

```
├── README.md
├── WORKFLOW.md 
├── prepros.cfg		//File Konfigurasi Prepros
│
├── lain-lain
├── prototype
├── public
│   ├── template.html		//Template <head> untuk javascript, css dsb.
│   ├── custom-1.html 
│   ├── ... 
│   ├── custom-n.html
│   │
│   ├── css
│   │   ├── bootstrap-theme.css
│   │   ├── bootstrap-theme.css.map
│   │   ├── bootstrap.css 
│   │   ├── bootstrap.css.map
│   │   ├── pingendo-theme.css
│   │   └── pingendo-theme.css.map
│   ├── fonts
│	│   ├── glyphicons-halflings-regular.eot
│	│   ├── glyphicons-halflings-regular.svg
│	│   ├── glyphicons-halflings-regular.ttf
│	│   ├── glyphicons-halflings-regular.woff
│	│   └── glyphicons-halflings-regular.woff2
│   ├── js
│   │   ├── bootstrap.js
│   │   ├── bootstrap.min.js
│   │   ├── jasny-bootstrap.js
│   │   ├── jasny-bootstrap.min.js
│   │   └── jquery
│   └── web-assets
│
└── source
    ├── js
    │   ├── bootstrap
    │   └── jasny-bootstrap
    └── less
        ├── bootstrap
        ├── pingendo
        ├── jasny-bootstrap
        │
        ├── custom-bootstrap-variables.less
        ├── custom-jasny-bootstrap-variables.less
        ├── custom-jasny-navmenu.less
        ├── mixins.less
        ├── style.less 		//File LESS utama untuk @import .less yang lain		
        ├── variables.less
        │
		├── custom-1.less
		├── ...
		└── custom-n.less
```

1. `prepos.cfg`: File konfigurasi untuk [Prepos](https://prepros.io/) yang bakal nge-compile file .less jadi bootstrap.css, pingendo.css dan bootstrap-theme.css
2. ` template.html`: Template untuk memakai kode dari prototipe Pingendo

```
<!DOCTYPE html>
<html lang="en">

<head>
 <meta charset="utf-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <title>Title</title>
 <!-- Bootstrap -->
 <link href="css/bootstrap.css" rel="stylesheet">
 <!-- <link href="css/bootstrap-theme.css" rel="stylesheet"> -->
 <!-- Pingendo -->
 <link href="css/pingendo-theme.css" rel="stylesheet">
 <script type="text/javascript" src="js/jquery/dist/jquery.min.js"></script>
 
 <script type="text/javascript" src="js/bootstrap.js"></script>
 <script type="text/javascript" src="js/jasny-bootstrap.js"></script>
 <link href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
 <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
 <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
 <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
 <!-- Taroh kode diantara <body></body> dari Pingendo di sini -->
</body>

</html>
```
3. `style.less`: Kalo mau nambah file .less atau **.css** buat dipake, taroh di folder /source/less dan tambahin `@import custom-1.less` atau `@import custom-1.css` 
