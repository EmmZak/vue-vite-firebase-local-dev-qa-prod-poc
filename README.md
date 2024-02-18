# Envs

## Local 

for local dev, localhost

## dev

vue-vite-firebase-poc-dev

## qa

vue-vite-firebase-poc-qa

## prod

vue-vite-firebase-poc-prod

# CI

## Generate Firebase account token
```bash
firebase login:ci
```
To be added to GitHub secrets

## Deploy

### Envs

Envs are defined in .firebaserc 

```bash
firebase deploy -P ( dev | qa | prod ) 
```

# Developement

## Docker

# build
```bash
docker-compose build
```

# run
```bash
docker-compose up
```

## Only for init

# Node & npm

```bash
node -v # v20.11.1
npm -v  # 10.4.0
```

# Creation cmds

```bash
npm create vite@latest
```

# install & run

```bash
npm install
npm run dev
```