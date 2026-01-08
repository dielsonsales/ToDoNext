import Parse from "parse/node";

Parse.initialize(
    process.env.PARSE_APP_ID!,
    process.env.PARSE_JS_KEY!
);
Parse.serverURL = "https://parseapi.back4app.com";

export default Parse;
