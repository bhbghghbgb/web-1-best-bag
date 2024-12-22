import json
from pathlib import Path


text = Path("./nguoi-dung.json").read_text(encoding="utf-8")

users: list[dict[str, str | bool]] = json.loads(text)

file = Path("../tai-khoan-tren-he-thong.txt").open("w", encoding="utf-8")
for user in users:
    file.write(f"{user['username']}\t{user["password"]}\n")
    file.write(f"{user['email']}\t{user["password"]}\n")
