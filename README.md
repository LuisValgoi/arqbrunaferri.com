# Description

"Link na Bio" website created for the [@arqbrunaferri](https://www.instagram.com/arqbrunaferri/).

# Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/4a8cbc9a-5f34-458e-9890-b4dc6e74b82f/deploy-status)](https://app.netlify.com/sites/arqbrunaferri/deploys)

# Stack

- NextJS.

- Typescript.

- Emotion.

- ChakraUI.

- Husky.

- Prisma.

- PlanetScale.

- Formik.

# Get Started

- Development: `yarn dev` (it runs @ [localhost:3001](http://localhost:3001/)).

# Pre-Commit

- It runs `yarn prettier:fix`.

<!--
# Instructions

brew install planetscale/tap/pscale

pscale auth login -> confirm the code

pscale connect arqbrunaferri main --port 3309

pscale branch create arqbrunaferri shadow

pscale connect arqbrunaferri shadow --port 3310

DATABASE_URL="mysql://root@127.0.0.1:3309/arqbrunaferri"

SHADOW_DATABASE_URL="mysql://root@127.0.0.1:3310/arqbrunaferri"

yarn add prisma @prisma/client

npx prisma init -> create models

npx prisma migrate dev -> connected to the main -> init (migration name)

npx prisma migrate reset -> y (if necessary)

npx prisma studio -> http://localhost:5555/

npx prisma generate -> implemente the /api/...

check @ http://localhost:3001/api/...

 -->
