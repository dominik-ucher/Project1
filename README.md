## How to use VPS
1. Update website
- Commit changes to main on GIT. Go onto VPS and "git pull origin main"
- npx yarn build in client
- rm -rf /var/www/raindropcoding/client/index.html && rm -rf /var/www/raindropcoding/client/assets
- cp -r dist/* /var/www/raindropcoding/client
- systemctl reload nginx

Ting å få gjort:
- Epost skjema, få med laste knapp, ingen null verdier og bedre mld tilbake
- Fikse SEO og Google Search + Adresse
- Få tak i "Produkter". Med nettside for idrettslag og bedrifter. Men også for produkter osv.