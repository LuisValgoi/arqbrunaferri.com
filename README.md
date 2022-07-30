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

- Frontend: `yarn dev` (http://localhost:3001/).
- PlanetScale: `pscale connect arqbrunaferri shadow --port 3309` (https://app.planetscale.com/luisvalgoi).
- Prisma Studio: `npx prisma studio` (http://localhost:5555/).

# Pre-Commit

- It runs `yarn prettier:fix`.

# PlanetScale Commands

- `pscale auth login`: to login.
- `pscale branch create arqbrunaferri shadow`: to create a database env.
- `pscale connect arqbrunaferri shadow --port 3310`: to connect @ 3310 to the shadow db.
- `pscale connect arqbrunaferri main --port 3310`: to connect @ 3310 to the main db.
- `pscale deploy-request create arqbrunaferri shadow`: to start promoting SHADOW changes to PROD.

# Prisma Commands

- `npx prisma init`: to initiate the prisma project.
- `npx prisma migrate dev`: to start a new migration.
- `npx prisma migrate reset`: to reset the migrations done so far.
- `npx prisma generate`: to generate the types from the model.
- `npx prisma studio`: to open locally the database client.

# Local Env

```
    SHADOW_DATABASE_URL="mysql://root@127.0.0.1:3309/arqbrunaferri"
    DATABASE_URL="mysql://root@127.0.0.1:3310/arqbrunaferri"
```

# Links

- [Figma](https://www.figma.com/file/Ab0tkdQ6lU1CRIi4HLRxP8/ARQBRUNAFERRI?node-id=0%3A1)

- [Notion](https://www.notion.so/ARQBRUNAFERRI-SECRETS-4a94212eb353418ab42307d0d38baf4b)
