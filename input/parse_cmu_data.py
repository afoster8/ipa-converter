import pandas as pd

# make mapping between ipa and arpabet
with open("./ipa.txt", "r", encoding="utf-8") as file: 
  ipa = [line.strip() for line in file]
  
with open("./arpabet.txt", "r", encoding="utf-8") as file:
  arpabet = [line.strip() for line in file]

# send mapping off to a csv
mapping = dict(zip(arpabet, ipa))
mapping_df = pd.DataFrame(list(mapping.items()), columns=['arpabet', 'ipa'])
mapping_df.to_csv("./ipa-arpabet-mapping.csv", header=False, index=False)
mapping_df.to_json("./ipa-arpabet-mapping.json", orient="split", force_ascii=False, index=False)

# temporary holding series
word = []
pronunciation = []

# open file
dictionary = open("./cmudict-0.7b")

def parse_dictionary(dict):
  # split into lines
  lines = [line.rstrip("\n") for line in dict]
  
  # split into word and pronunciation
  for line in lines:
    line = line.split(" ")
    word.append(line[0])
    pronunciation.append(" ".join(line[1:]))

# parse the dictionary
parse_dictionary(dictionary)

# make dictionary by smashing two series together
result = pd.DataFrame({"word": word})
result["arpabet"] = pronunciation 

# filter out the punctuation and CMU copyright 
data = result[result["word"].str[0].str.isalpha()].reset_index(drop=True)

# filter out numbers (we lose some specificity but it's prettier)
data["word"] = data["word"].replace(r'[^a-zA-Z]', '', regex=True)

print(data["word"])

columns_to_strip = ['word', 'arpabet']
data[columns_to_strip] = data[columns_to_strip].apply(lambda x: x.str.lstrip())

# map arpabet to IPA
data["ipa"] = data["arpabet"].replace(mapping, regex=True)
data["ipa"] = data["ipa"].str.replace(r"\s|0|2", "", regex=True)
data["ipa_no_stress"] = data["ipa"].str.replace(r"'", "", regex=True)
data['arpabet_no_stress'] = data['arpabet'].replace('\d', '', regex=True)

# trim leading spaces
columns_to_strip = ['word', 'ipa', 'arpabet', 'arpabet_no_stress', 'ipa_no_stress']
data[columns_to_strip] = data[columns_to_strip].apply(lambda x: x.str.lstrip())

# send to a csv
data.to_csv("./cmudict.csv", header=True)
# send to json 
data.to_json("../src/conversion_table.json", orient="split", force_ascii=False, index=False)