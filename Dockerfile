FROM mcr.microsoft.com/playwright:v1.59.1-noble

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV CI=true

#CMD sh -c "npx playwright test --grep @web --shard=$SHARD"

# Install AWS CLI
RUN apt-get update && \
    apt-get install -y curl unzip && \
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
    ./aws/install && \
    rm -rf aws awscliv2.zip

RUN aws --version

COPY upload-report.sh ./
RUN chmod +x upload-report.sh

#CMD ["sh", "upload-report.sh"]
CMD ["sh", "-c", "npx playwright test --grep @web --shard=$SHARD && ./upload-report.sh"]