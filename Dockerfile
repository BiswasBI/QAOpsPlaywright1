FROM mcr.microsoft.com/playwright:v1.59.1-noble

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV CI=true

CMD sh -c "npx playwright test --config=playwright.config1.js --shard=$SHARD"