import json
text = open("slack.json", "r")
j = json.loads(text.read())

id = {}

for member in j["members"]:
    if (not member["deleted"]) and (not member["is_bot"]) and (not member["id"] == "USLACKBOT"):
        id[member["real_name"]] = member["id"]

text.close()

print(id)

with open("id.json", "w") as idFile:
    idFile.write(json.dumps(id))