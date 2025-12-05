# Stage 1: Install dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Build the app
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Stage 3: Run the app
FROM node:18 AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4001

# Copy built files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 4001

# Start the app on 0.0.0.0 to allow external access
CMD ["npx", "next", "start", "-p", "4001", "-H", "0.0.0.0"]
