FROM mcr.microsoft.com/playwright:v1.56.1-jammy
WORKDIR /app

COPY . .

RUN npm ci

CMD ["npm", "test"]