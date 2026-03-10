#!/bin/bash
# iOS Build & Deploy Pipeline — Template
# Builds on remote Mac via SSH, deploys to physical device

REMOTE_HOST="macmini"  # SSH alias
KEYCHAIN_PASS="YOUR_KEYCHAIN_PASSWORD"
DEVICE_ID="YOUR_DEVICE_ID"
PROJECT_DIR="~/Projects/YOUR_APP"
SCHEME="YOUR_SCHEME"

echo "🔓 Unlocking keychain..."
ssh $REMOTE_HOST "security unlock-keychain -p '$KEYCHAIN_PASS' ~/Library/Keychains/login.keychain-db"

echo "🔨 Building..."
ssh $REMOTE_HOST "cd $PROJECT_DIR && xcodebuild -scheme $SCHEME -destination 'id=$DEVICE_ID' -allowProvisioningUpdates"

echo "📱 Installing on device..."
APP_PATH=$(ssh $REMOTE_HOST "find ~/Library/Developer/Xcode/DerivedData/${SCHEME}-*/Build/Products/Debug-iphoneos/${SCHEME}.app -maxdepth 0 2>/dev/null")
ssh $REMOTE_HOST "xcrun devicectl device install app --device $DEVICE_ID $APP_PATH"

echo "✅ Done!"
