export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const capitalizeFirstLetterPhrase = (string: string) => {
  const splitStringArray = string.split(" ");
  const splitStringArrayCapitalize = splitStringArray.map((s) =>
    capitalizeFirstLetter(s)
  );

  return splitStringArrayCapitalize.join(" ");
};
