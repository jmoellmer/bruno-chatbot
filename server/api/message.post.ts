import { client } from "../utilities/openai";
import { getLatestMessages } from "../utilities/get-message";

export default defineEventHandler(async (event) => {
    const threadID = getCookie(event, "thread-id");
    const runID = getCookie(event, "run-id");

    if (!threadID || !runID) {
        return;
    }

    const queryParams = getQuery(event);
    await client.beta.threads.messages.create(threadID, {
        role: "user",
        content: queryParams.message?.toString() ?? "",
    });

    return await getLatestMessages(threadID, runID);
});