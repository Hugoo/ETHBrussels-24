export const getEnsAddress = async (name: string): Promise<string> => {
  const response = await fetch(`https://enstate.rs/n/${name}`);

  if (!response.ok) {
    throw new Error("Failed to fetch ENS address");
  }

  const data = await response.json();
  return data.address;
};
