import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateTripPromptFromInput = ({ input }) =>
  `Me: I want to do a vacation but i am not sure where to and what to do. Can you help me?
    Travel Agent: Sure thing. What are your requirements?
    Me: ${input.replaceAll(".", ",")}. What do you propose?
    Travel Agent: I have the following suggestion.`;

const generateTitlePromptFromInput = (
  proposal
) => `Write a very short title for the following travel proposal.
Proposal: ${proposal}
Title:`;

const callOpenAI = async (request, response) => {
  console.log("Calling openAI");
  console.log(request.body);
  const tripPrompt = generateTripPromptFromInput(request.body);
  console.log(tripPrompt);

  const tripBaseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${tripPrompt}`,
    temperature: 0.83,
    max_tokens: 200,
  });

  const text = tripBaseCompletion.data.choices.pop();
  console.log("basePromptOutput", text);

  const titlePrompt = generateTitlePromptFromInput(text.text);

  const titleBaseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${titlePrompt}`,
    temperature: 0.7,
    max_tokens: 10,
  });
  let title = titleBaseCompletion.data.choices.pop();

  //Clean title
  title = title.replaceAll('"', "");
  title = title.replaceAll("!", "");

  const tripObject = {
    text: text.text,
    title: title.text,
    prompts: { titlePrompt, tripPrompt },
  };
  console.log(tripObject);
  response.status(200).json(tripObject);
};

const callOpenAIDev = (request, response) => {
  setTimeout(
    () =>
      response.status(200).json({
        output: {
          text: `Sample return text that is used here for development purposes. ${Math.random()}`,
        },
      }),
    1000
  );
};
export default callOpenAI;
