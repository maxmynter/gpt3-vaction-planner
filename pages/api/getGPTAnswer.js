import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateTripPromptFromInput = ({ input }) =>
  `Task: Give me a travel iternary with locations and activities for travel according to the following specifications.
  Specifications: ${input.replaceAll(".", ",")}.
  Iternary:`;

const generateTitlePromptFromInput = (
  proposal
) => `Write a very short title for the following travel iternary.
Proposal: ${proposal}
Title:`;

const callOpenAI = async (request, response) => {
  const tripPrompt = generateTripPromptFromInput(request.body);

  const tripBaseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${tripPrompt}`,
    temperature: 0.83,
    max_tokens: 200,
  });

  const text = tripBaseCompletion.data.choices.pop().text;

  const titlePrompt = generateTitlePromptFromInput(text);

  const titleBaseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${titlePrompt}`,
    temperature: 0.7,
    max_tokens: 10,
  });
  let title = titleBaseCompletion.data.choices.pop().text;

  //Clean title
  title = title.replaceAll('"', "");
  title = title.replaceAll("!", "");

  const tripObject = {
    text: text,
    title: title,
    prompts: { titlePrompt, tripPrompt },
  };
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
