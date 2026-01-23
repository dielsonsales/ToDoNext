import Parse from "parse/node";

// Ensures Parse is only initialized once
if (!Parse.applicationId) {
  Parse.initialize(process.env.PARSE_APP_ID!, process.env.PARSE_JS_KEY!);
  Parse.serverURL = "https://parseapi.back4app.com";
}

export async function getParseUser(token: string): Promise<any | null> {
  try {
    const query = new Parse.Query(Parse.User);
    const user = await query.first({ sessionToken: token });

    if (!user) return null;

    const userJSON = user.toJSON();
    delete userJSON.sessionToken;
    return userJSON;
  } catch (error) {
    console.error("Parse Auth error:", error);
    return null;
  }
}

export default Parse;
