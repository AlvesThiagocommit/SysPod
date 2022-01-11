#!/bin/bash
rm -rf .git
composer install
npm install
cp .env.example .env
sed -i '' "s,APP_ENV=local,APP_ENV=production,g" .env
sed -i '' "s,APP_DEBUG=true,APP_DEBUG=false,g" .env
npm run production
echo "Package is ready 🔥"