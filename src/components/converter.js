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

    console.log(inputWords);

    if (inputWords) {
      const result = conversionObject.data;
      const matchingWords = [];

      inputWords.forEach((word) => {
        const matchingRow = result.find(row => row[0] === word.toUpperCase());
        console.log(matchingRow);

        if (matchingRow) {
          matchingWords.push(matchingRow[3].toLowerCase());
        } else {
          throw new WordNotFoundError(word)
        }
      });

      console.log(matchingWords);
      return matchingWords.join(" ");

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
        const matchingRows = result.filter(row => row[3] === word);
    
        if (matchingRows.length > 0) {
          const uniqueMatchingRows = [];
    
          matchingRows.forEach((row) => {
            const isUnique = !uniqueMatchingRows.some((uniqueRow) => uniqueRow[0] === row[0]);
            if (isUnique) {
              uniqueMatchingRows.push(row);
            }
          });
    
          matchingWords.push("(" + uniqueMatchingRows.map(row => row[0].toLowerCase()) + ")");
        } else {
          throw new WordNotFoundError(word);
        }
      });
    
      console.log(matchingWords);
      return matchingWords.join(" ");

    } else {
      throw new Error("No input found");
    }

  } catch (error) {
    console.log(error);
    throw error;
  }
};
