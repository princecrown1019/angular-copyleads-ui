<p align="center">
    <img src="https://i.ibb.co/W5fmnd0/copyleads-ai-1.png" alt="copyleads-ai-logos-white">
</p>

<p align="center">
    <a href="https://www.linkedin.com/in/janak-life/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
    <a href="https://swarnimtech.com">
        <img src="https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white">
    </a>
</p>


# Getting Started

## Prerequisites
- Node Js must be installed on your system

## Installation
1. Clone the repository

```sh 
eval "$(ssh-agent -s)"
ssh-add /path/to/ssh_key_file
git clone git@github.com:copyleads-ai/copyleads_ui.git
```
2. Install Dependencies

```sh 
npm install
```
2. Run the project

```sh 
npm run dev
```
```sh
sudo docker network create UI_NETWORK    
sudo docker network ls

sudo docker build -t copyleads_ui .
sudo docker run --name COPYLEADS_UI -p 0.0.0.0:3000:3000 -d --restart=unless-stopped --network UI_NETWORK copyleads_ui
sudo docker stop $(sudo docker ps -aq)
sudo docker ps -a
sudo docker rm <container_id>
```

## SSL Certificate
```sh
sudo apt update
sudo apt install certbot
sudo add-apt-repository ppa:certbot/certbot
sudo apt install python3-certbot-nginx
sudo certbot plugins
sudo certbot certonly --nginx -d yourdomain.com
```
## Nginx Reverse Proxy
```sh
sudo systemctl start nginx
sudo systemctl status nginx
sudo cp myapp.conf /etc/nginx/sites-available/myapp.conf

sudo ln -s /etc/nginx/sites-available/myapp.conf /etc/nginx/sites-enabled/
sudo unlink /etc/nginx/sites-enabled/myapp.conf

sudo nginx -t
sudo systemctl reload nginx
---- UnLink -----
cd /etc/nginx/sites-enabled
sudo unlink myapp.conf
```
## Built With
<p>
<a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white">
</a>
<a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">
</a>
<a href="https://react-hook-form.com/">
    <img src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white">
</a>
<a href="https://fontawesome.com/">
    <img src="https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white">
</a>
</p>

## References
- 🔗 https://home.aveek.io/GitHub-Profile-Badges/
- 🔗 https://github.com/Ileriayo/markdown-badges