const placeholcers = [
  "5 days on a budget from Munich, I like to surf and hike",
  "Hiking, dining, ancient ruins. Somewhere warm",
  "Roadtrip through the mountains",
  "Skiing in the summer in europe",
];

const getRandomPlaceholder = (request, response) =>
  response.status(200).json({
    placeholder: placeholcers[Math.floor(Math.random() * placeholcers.length)],
  });

export default getRandomPlaceholder;
