#!/bin/bash

# ASD Technology Deployment Script for Hostinger VPS
# This script will NOT affect your existing sarjworldwide project

echo "🚀 Starting ASD Technology Deployment..."

# Set variables
PROJECT_NAME="asdtechnology"
GITHUB_REPO="https://github.com/Hammax23/asdTechnology.git"
DEPLOY_PATH="/var/www/$PROJECT_NAME"
BACKUP_PATH="/var/backups/$PROJECT_NAME"

# Create backup of existing deployment (if exists)
if [ -d "$DEPLOY_PATH" ]; then
    echo "📦 Creating backup of existing deployment..."
    sudo mkdir -p /var/backups
    sudo cp -r $DEPLOY_PATH $BACKUP_PATH-$(date +%Y%m%d_%H%M%S)
fi

# Clone or pull latest code
if [ ! -d "$DEPLOY_PATH" ]; then
    echo "📥 Cloning repository..."
    sudo git clone $GITHUB_REPO $DEPLOY_PATH
else
    echo "🔄 Updating existing repository..."
    cd $DEPLOY_PATH
    sudo git fetch origin
    sudo git reset --hard origin/main
fi

# Change to project directory
cd $DEPLOY_PATH

# Install dependencies
echo "📦 Installing dependencies..."
sudo npm install --production

# Build the project
echo "🏗️ Building project..."
sudo npm run build

# Set proper permissions
echo "🔐 Setting permissions..."
sudo chown -R www-data:www-data $DEPLOY_PATH
sudo chmod -R 755 $DEPLOY_PATH

# Install PM2 globally if not installed
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    sudo npm install -g pm2
fi

# Stop existing PM2 process (if running)
sudo pm2 stop $PROJECT_NAME 2>/dev/null || true
sudo pm2 delete $PROJECT_NAME 2>/dev/null || true

# Start the application with PM2
echo "🚀 Starting application with PM2..."
sudo pm2 start ecosystem.config.js --env production

# Save PM2 configuration
sudo pm2 save
sudo pm2 startup

echo "✅ Deployment completed successfully!"
echo "📊 Check application status: sudo pm2 status"
echo "📝 View logs: sudo pm2 logs $PROJECT_NAME"
