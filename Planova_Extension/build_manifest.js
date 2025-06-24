const fs = require("fs");
const path = require("path");

// .env 로드
const dotenv = require("dotenv");
dotenv.config({ path: path.resolve(__dirname, ".env") });

const templatePath = path.resolve(__dirname, "manifest.temp.json");
const outputPath = path.resolve(__dirname, "manifest.json");

const template = fs.readFileSync(templatePath, "utf-8");

// 치환
const finalManifest = template.replace(/__CLIENT_ID__/g, process.env.CLIENT_ID);

// 저장
fs.writeFileSync(outputPath, finalManifest, "utf-8");

console.log("✅ manifest.json 생성 완료!");
