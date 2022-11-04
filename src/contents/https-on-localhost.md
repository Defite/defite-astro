---
author: Nikita Makhov
datetime: 2022-11-04T18:23:00Z
title: Adding https to your localhost
slug: https-on-localhost
featured: false
draft: false
tags:
  - development
ogImage: ""
description: Short note on how to add ssl certificate for https on localhost
---

This is a short post primarily for myself not to forget how to do it.

First of all you need to install `mkcert` from [Homebrew](https://formulae.brew.sh/formula/mkcert):

```bash
brew install mkcert
```

Then you need to create new local CA (Certificate Authority) and create certificates for `localhost`:

```bash
mkcert -install

mkcert localhost
```

After that we need somehow to proxy all requests from https to http using the certificates. Install npm package for that:

```bash
npm install -g local-ssl-proxy
```

And start your local development:

```bash
local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem
```

Voila, your `https://localhost:3010` is ready for new challenges!
