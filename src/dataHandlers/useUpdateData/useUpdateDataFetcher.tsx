type TAnswers = {
	[key: string]: boolean
}

export const useUpdateDataFetcher = async (answers: TAnswers) => {
  const mockAPI = async () =>
    new Promise((resolve, reject) => {
      if (answers) {
        resolve(JSON.stringify(answers));
      } else {
        reject("Something has gone wrong");
      }
    });

  try {
    const results = await mockAPI();

    const parsed = JSON.parse(results as string);

    console.log(parsed);

    return parsed;
  } catch (e) {
    console.log(e);
  }
};
