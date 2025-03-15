export let assistantId = ""; // asst_G3YhFH5MCu6PKOhGHVefg4Qk

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
