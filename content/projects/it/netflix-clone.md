---
title: Netflix Clone
lang: content/languages/italian.md
link: 'https://netflix-clone-d028e.web.app'
image: /public/static/video/nf-video.mp4
thumbnail: /static/images/netflix-thumbnail.webp
---

## Descrizione

Ho realizzato questa applicazione web basata sulla piattaforma di streaming Netflix. Al primo caricamento viene richiesta l'autenticazione tramite e-mail, che ho gestito con Firebase. Successivamente è necessaria la sottoscrizione ad un piano per l'accesso ai contenuti, in questo caso l'utente viene mandato alla pagina di checkout che implementato utilizzando l'estensione Stripe Firebase. Quando il pagamento va a buon fine l'utente viene rimandato alla homepage dove viene caricato il catalogo di film tramite la [TMDb API](https://developer.themoviedb.org/reference/intro/getting-started "TMDb APi").
