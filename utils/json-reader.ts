import fs from "node:fs";

export class JsonUtils {
    public static getJsonValue(key?: string) {
        const jsonObj = JSON.parse(fs.readFileSync("test-data/data.json", "utf-8"));

        if (typeof key === "undefined") {
            return jsonObj;
        }
        return jsonObj[key];
    }
}