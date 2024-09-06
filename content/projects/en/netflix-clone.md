---
title: Netflix Clone
lang: content/languages/english.md
link: 'https://netflix-clone-d028e.web.app'
image: /public/static/video/nf-video.mp4
thumbnail: /static/images/netflix-thumbnail.webp
---

## Description

I created this web application based on the Netflix streaming platform. The first time you load it requires email authentication, which I handled with Firebase. Subsequently, you need to subscribe to a plan to access the content, in this case the user is sent to the checkout page which is implemented using the Stripe Firebase extension. When the payment is successful the user is sent back to the homepage where the movie catalog is loaded via the [TMDb API]().
