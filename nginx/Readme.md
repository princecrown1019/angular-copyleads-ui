# copy SSL certificate
```shell
sudo cp /etc/letsencrypt/live/app.copyleads.ai/fullchain.pem fullchain.pem
sudo cp /etc/letsencrypt/live/app.copyleads.ai/privkey.pem privkey.pem
```

# run docker
```shell
sudo docker build -t nginx .
sudo docker run --name NGINX -p 80:80 -p 443:443 -d --restart=unless-stopped --network UI_NETWORK nginx
```