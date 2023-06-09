const capitalizeFirstLetter = (string: string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + (string?.[1] ? string.slice(1).toLocaleLowerCase() : '');
};

export const StringUtils = {
  capitalizeFirstLetter,
};
