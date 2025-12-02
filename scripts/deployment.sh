#!/bin/bash

# deployment.sh - AWS CodeDeploy AfterInstall Hook Script
# This script runs after files are copied to the EC2 instance

set -e  # Exit on any error

LOG_FILE="/home/ec2-user/deployment.log"
echo "$(date): Starting deployment script..." | tee -a $LOG_FILE

# Function to log messages
log() {
    echo "$(date): $1" | tee -a $LOG_FILE
}

# Function to handle errors
handle_error() {
    log "ERROR: $1"
    exit 1
}

# Change to application directory
APP_DIR="/home/ec2-user"
log "Changing to application directory: $APP_DIR"
cd $APP_DIR || handle_error "Failed to change to application directory"

# Set ownership and permissions for all deployed artifacts
log "Setting ownership of all deployed files to ec2-user..."
chown -R ec2-user:ec2-user $APP_DIR || handle_error "Failed to change ownership to ec2-user"

log "Setting execute permissions for all deployed artifacts..."
# Set directory permissions to 755 (rwxr-xr-x)
find $APP_DIR -type d -exec chmod 755 {} \; || handle_error "Failed to set directory permissions"

# Set execute permissions for ALL files as requested
find $APP_DIR -type f -exec chmod +x {} \; || handle_error "Failed to set execute permissions for all files"

log "✅ Ownership and permissions set successfully for all deployed artifacts"

# Create logs directory if it doesn't exist
log "Creating logs directory..."
mkdir -p logs

#cleanup package.lock and .next file
rm -rf node_modules package-lock.json
npm install

# Install PM2 globally if not already installed
log "Checking if PM2 is installed..."
if ! command -v pm2 &> /dev/null; then
    log "PM2 not found. Installing PM2 globally..."
    npm install -g pm2 || handle_error "Failed to install PM2"
    log "✅ PM2 installed successfully"
else
    log "PM2 is already installed"
    pm2 --version
fi

# Stop existing PM2 process if any
log "Stopping existing PM2 processes..."
pm2 delete fyers_marcom || log "No existing PM2 process found"

# Start Next.js with PM2 (Zero Downtime Deployment)
log "Starting Next.js app with PM2..."
pm2 start "node_modules/.bin/next" \
 --name "fyers_marcom" \
 --cwd "$APP_DIR" \
 -- start -p 3000 || handle_error "Failed to start application with PM2"


# Save PM2 process list
log "Saving PM2 process list..."
pm2 save || handle_error "Failed to save PM2 process list"

# Wait a moment for the process to start
sleep 3

# Verify deployment
log "Verifying deployment..."
if pm2 describe fyers_marcom | grep -q 'online'; then
    log "✅ PM2 process is running successfully"
else
    log "❌ PM2 process is not running"
    pm2 logs fyers_marcom --lines 10
    handle_error "Deployment verification failed"
fi

# Show deployment info
log "Deployment Summary:"
pm2 status fyers_marcom
echo ""
log "Recent logs:"
pm2 logs fyers_marcom --lines 5 --nostream || true

log "✅ Deployment.sh completed successfully!"


exit 0
