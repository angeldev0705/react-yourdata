/*
    Nginx vhost generator
 */

const fs = require('fs');

exports.generateHost = async (uuid, domain, subfolder, folder) => {
    let serverName = domain
    let wwwRedirect = ""
    if (domain.includes("www.")) {
        serverName += " " + domain.replace("www.", "")
        wwwRedirect= `if ($request_uri ~ /.www./) {
    return 301 https://${domain}$request_uri;
}`
    }
    fs.mkdirSync(`sites/config/domain`, { recursive: true });
    fs.mkdirSync(`sites/config/subfolder`, { recursive: true });

    const domainNginx =
`map $sent_http_content_type $expires {
    "text/html"                 epoch;
    "text/html; charset=utf-8"  epoch;
    default                     off;
}
server {
    server_name ${serverName};
    root  ${__dirname}/${folder}/public;
    if ($scheme != "https") {
        return 301 https://${domain}$request_uri;
    }
    ${wwwRedirect}
    index index.html;
    server_tokens off;
    access_log /var/log/nginx/${domain}.log;
    error_log /var/log/nginx/${domain}-error.log;
    gzip on;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/x-javascript application/xml
    gzip_proxied    no-cache no-store private expired auth;
    gzip_min_length 1000;
    location / {
        proxy_set_header        Host $host;
        try_files $uri $uri/ /index.html =404;
        autoindex on;
    }
    location ~* \.(jpg|jpeg|gif|png|webp|svg|woff|woff2|ttf|css|js|ico|xml)$ {
        access_log        off;
        log_not_found     off;
        expires           365d;
    }
    include /etc/nginx/includes/${domain}.*.conf;
    location ~ /\.ht {
        access_log off;
        log_not_found off;
        deny all;
    }
    listen 80;
    listen [::]:80;
}`

    const subfolderNginx =
        `location ^~ ${subfolder} {
    alias ${__dirname}/${folder}/public;
    index index.html;
    try_files $uri $uri/ $uri.html =404;
    autoindex on;
    allow all;
    break;
}`

    if (!fs.existsSync(`sites/config/domain/${domain}.conf`) || subfolder === "/") {
        fs.writeFile(`sites/config/domain/${domain}.conf`, domainNginx, { flag: 'w' }, function (err, data) {
            if (err) {
                return console.error(err)
            }
        })
    }
    if (subfolder !== "/") {
        fs.writeFile(`sites/config/subfolder/${domain}.${uuid}.conf`, subfolderNginx, { flag: 'w' }, function (err, data) {
            if (err) {
                return console.error(err)
            }
        })
    }
}

