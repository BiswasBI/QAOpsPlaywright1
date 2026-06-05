FROM mcr.microsoft.com/playwright:v1.59.1-noble

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV CI=true

#CMD sh -c "npx playwright test --grep @web --shard=$SHARD"

# Install AWS CLI
RUN python3 -m pip install awscli
RUN aws --version

RUN aws --version
COPY upload-report.sh ./
RUN chmod +x upload-report.sh

#CMD ["sh", "upload-report.sh"]
CMD ["sh", "-c", "npx playwright test --grep '@web' --shard=$SHARD && ./upload-report.sh"]