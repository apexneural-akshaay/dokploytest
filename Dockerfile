# ============================================
# Stage 1: Build the Vite React application
# ============================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package manifests
COPY package.json package-lock.json* ./

# Install dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build for production (output: dist/)
RUN npm run build

# ============================================
# Stage 2: Serve with Nginx
# ============================================
FROM nginx:alpine

# Remove default nginx config
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: non-root user (nginx alpine runs as nginx by default)
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

EXPOSE 80

# NO HEALTHCHECK - Let Docker Swarm handle it

CMD ["nginx", "-g", "daemon off;"]
