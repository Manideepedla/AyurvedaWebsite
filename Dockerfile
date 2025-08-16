# Use an official Node.js image as the base image
FROM node:22-slim as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a smaller image for the final stage
FROM node:22-slim

WORKDIR /app

# Copy built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public

# Ensure the public folder has the necessary permissions
RUN mkdir -p /app/public && chmod -R 777 /app/public

# Set environment variables for Next.js production
ENV NODE_ENV=production

COPY .env .env

# Expose the port the app runs on (based on start script in package.json)
EXPOSE 9040

# Command to run the application
CMD ["npm", "start"] 
