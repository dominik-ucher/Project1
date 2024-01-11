## How to use VPS
1. Update website
- Commit changes to main on GIT. Go onto VPS and "git pull origin main"
- npx yarn build in client
- rm -rf /var/www/raindropcoding/client/index.html && rm -rf /var/www/raindropcoding/client/assets
- cp -r dist/* /var/www/raindropcoding/client
- systemctl reload nginx