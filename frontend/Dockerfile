FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Компилируем TypeScript с нужными флагами совместимости
RUN npx tsc frontend.ts --target es2022 --module commonjs --esModuleInterop --skipLibCheck --lib es2022,dom

EXPOSE 3000

CMD ["node", "frontend.js"]
