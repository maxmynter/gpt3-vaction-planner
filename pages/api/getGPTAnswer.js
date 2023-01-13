import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generatePromptFromInput = ({ input }) =>
  `Me: I want to do a vacation but i am not sure where to and what to do. Can you help me?
    Travel Agent: Sure thing. What are your requirements?
    Me: ${input.replaceAll(".", ",")}. What do you propose?
    Travel Agent:`;

const callOpenAI = async (request, response) => {
  console.log("Calling openAI");
  console.log(request.body);
  const prompt = generatePromptFromInput(request.body);
  console.log(prompt);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}`,
    temperature: 0.83,
    max_tokens: 200,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();
  console.log("basePromptOutput", basePromptOutput);

  response.status(200).json({ output: basePromptOutput });
};

const callOpenAIDev = (request, response) => {
  response.status(200).json({
    output: {
      text: "Sample return text that is used here for development purposes. ",
    },
  });
};
export default callOpenAI;
