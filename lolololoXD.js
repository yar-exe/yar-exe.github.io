class LolXD {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "LolXD",
            "name": "LololololololXD",
            "blocks": [
                        {
                            "opcode": "Peter",
                            "blockType": "reporter",
                            "text": "Show a rabit peter"
                            }
                        },
                        {
                            "opcode": "jsonExtract",
                            "blockType": "reporter",
                            "text": "2+2=[option]",
                            "arguments": {
                                "option": {
                                    "type": "string",
                                    "defaultValue": "2+2=4!"
                                }
                            }
                        },
                ],
        };
    }
    
    fetchURL({url}) {
        return fetch(url).then(response => response.text())
    }
    
    jsonExtract({name,data}) {
        var parsed = JSON.parse(data)
        if (name in parsed) {
            var out = parsed[name]
            var t = typeof(out)
            if (t == "string" || t == "number")
                return out
            if (t == "boolean")
                return t ? 1 : 0
            return JSON.stringify(out)
        }
        else {
            return ""
        }
    }
}

Scratch.extensions.register(new LolXD())