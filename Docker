# Use official Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your project files
COPY . .

# Build TypeScript files
RUN npm run build

# Expose the app port (e.g., 3000)
EXPOSE 3000

# Start the app
CMD ["node", "dist/server.js"]
