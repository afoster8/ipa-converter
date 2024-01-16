/* Error Classes for passing informative strings to user */
class WordNotFoundError extends Error {
  constructor(word) {
    super(`Word "${word}" not found in mapping.`);
    this.name = "WordNotFoundError";
    this.word = word;
  }
}

class ConversionTableNotFoundError extends Error {
  constructor() {
    super("Conversion table not found, could not convert.");
    this.name = "ConversionTableNotFoundError";
  }
}

export function convertToIpa(conversionObject) {
  if (!conversionObject) {
    throw new ConversionTableNotFoundError();
  }

  try {
    const input = document.getElementById("input-english").value;
    const inputWords = input.trim().split(/\s+/);

    if (inputWords) {
      const result = conversionObject.data;
      const matchingWords = [];

      inputWords.forEach((word) => {
        const strippedWord = word.replace(/[.,/'#!$%^&*;:{}=\-_`~()]/g, "");
        const matchingRows = result.filter(row => row[0] === strippedWord.toUpperCase());

        if (matchingRows.length > 0) {
          const uniqueMatchingRows = [];

          matchingRows.forEach((row) => {
            const isUnique = !uniqueMatchingRows.some((uniqueRow) => uniqueRow[3] === row[3]);

            if (isUnique) {
              uniqueMatchingRows.push(row)
            }
          });

          matchingWords.push("(" + uniqueMatchingRows.map(row => row[3].toLowerCase()) + ") ");

        } else {
          throw new WordNotFoundError(word)
        }
      });

      return matchingWords.join("");

    } else {
      throw new Error("No input found");
    }

  } catch (error) {
    console.log(error);
    throw error;
  }
};


export function convertToEnglish(conversionObject) {

  if (!conversionObject) {
    throw new ConversionTableNotFoundError();
  }

  try {
    const input = document.getElementById("input-ipa").value;
    const inputWords = input.trim().split(/\s+/);

    if (inputWords) {
      const result = conversionObject.data;
      const matchingWords = [];
    
      inputWords.forEach((word) => {
        const strippedWord = word.replace(/[.,/'#!$%^&*;:{}=\-_`~()]/g, "");
        const matchingRows = result.filter(row => row[3] === strippedWord);
    
        if (matchingRows.length > 0) {
          const uniqueMatchingRows = [];
    
          matchingRows.forEach((row) => {
            const isUnique = !uniqueMatchingRows.some((uniqueRow) => uniqueRow[0] === row[0]);
            if (isUnique) {
              uniqueMatchingRows.push(row);
            }
          });
    
          matchingWords.push("(" + uniqueMatchingRows.map(row => row[0].toLowerCase()).join(", ") + ") ");

        } else {
          throw new WordNotFoundError(word);
        }
      });
    
      return matchingWords.join("");

    } else {
      throw new Error("No input found");
    }

  } catch (error) {
    console.log(error);
    throw error;
  }
};
