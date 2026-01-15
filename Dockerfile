FROM node:20

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies (simple and familiar)
RUN npm install

# Copy rest of the source code
COPY . .

# Expose port if your app uses it (safe even if unused)
EXPOSE 3000

# Start the cron process
CMD ["node", "cron.js"]
