export const useGetDataFetcher = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const json = await response.json();
		
    return json;
  } catch (error) {
    console.log("error");
  }
};
