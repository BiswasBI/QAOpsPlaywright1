FROM mcr.microsoft.com/playwright:v1.59.1-noble

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV CI=true

CMD sh -c "npx playwright test --grep @web --shard=$SHARD"

# Install AWS CLI
RUN apt-get update && apt-get install -y awscli
COPY upload-report.sh ./
RUN chmod +x upload-report.sh

CMD ["sh", "upload-report.sh"]