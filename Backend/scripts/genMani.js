const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../Extension/.env") });

const manifest = {
    manifest_version: 3,
    name: "Planova Extension",
    version: "1.0.0",
    description: "Planova 일정 관리 확장프로그램",
    icons: {
        "16": "assets/icon16.png",
        "48": "assets/icon48.png",
        "128": "assets/icon128.png"
    },
    chrome_url_overrides: {
    newtab: "index.html"
    },
    background: {
        "service_worker": "background.js"
    },
    permissions: [
        "identity",
        "storage",
        "activeTab",
        "scripting"
    ],
    host_permissions: [
        "<all_urls>"
    ],
    oauth2: {
        client_id: process.env.CLIENT_ID,
        scopes: [
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
        "openid"
        ]
    }
};

if (process.env.EXTENSION_KEY) {
    manifest.key = process.env.EXTENSION_KEY;
}

const outputPath = path.join(__dirname, "../../Extension/manifest.json");
fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));
console.log("✅ manifest.json 생성 완료:", outputPath);