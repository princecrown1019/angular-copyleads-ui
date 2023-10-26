# Use official nginx image as the base
FROM nginx:latest

# Remove the default configuration file that comes with the nginx image
RUN if [ -f /etc/nginx/conf.d/default.conf ]; then rm /etc/nginx/conf.d/default.conf; fi

# Copy the custom configuration file to the container
COPY nginx.conf /etc/nginx/conf.d/

# Copy the SSL certificate files to the container
COPY fullchain.pem /etc/ssl/certs/
COPY privkey.pem /etc/ssl/private/

# Expose port 80 and 443 for HTTP and HTTPS traffic respectively
EXPOSE 80 443

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
