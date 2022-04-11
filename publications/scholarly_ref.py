#%%
from scholarly import scholarly, ProxyGenerator
from os import path, getcwd, chdir
import markdown
import json

# %%
pg = ProxyGenerator()

scholarly.use_proxy(pg, pg)

# %%
# Define the path to the folder of the author, for whom we are filling in the publication info
chdir('..')
test_folder = path.join(getcwd(), 'people', 'marcel')

# %%
# Accessing an author for a query
md_path = path.join(test_folder, 'marcel.md')
md_parser = markdown.Markdown(extensions=['meta'])
with open(md_path, 'r') as md_file:
  text = md_file.read()
  md_parser.convert(text)
  # Retrieve the Metadata of the author
  author_name = md_parser.Meta['name'][0].replace('"', '')
  print(author_name)

# %%
author_query = scholarly.search_author(author_name)
# %%
print(author_query)
# %%
author = scholarly.fill(next(author_query))
#print(author)

# %%
# Show all keys from the author
print(author.keys())

# %%
# Print the titles of the author's publications
print([pub['bib']['title'] for pub in author['publications']])

# %%
# Fill in the first publication
pub = scholarly.fill(author['publications'][0])

# %%
# Get overview of the publication
print(pub)
print('--------------------------------')

# Get the dict structure of a publication
print(author['publications'][0].keys())
print('--------------------------------')

# Look at the structure of the BIB object
print(author['publications'][0]['bib'].keys())
print('--------------------------------')

# %%
# Collecting the info for all of the publications
publications = []
num_pubs = len(author['publications'])
print(f'start processing {num_pubs} publications')
for idx, pub_query in enumerate(author['publications']):
  if idx % 20 == 0:
    print(f'begin processing publication #{idx}')
  publications.append(scholarly.fill(pub_query))

# %%
# Saving the relevant information appropriately
with open('publications.json', 'w', encoding='utf-8') as f:
    json.dump(publications, f, ensure_ascii=False, indent=4)

  
# %%
