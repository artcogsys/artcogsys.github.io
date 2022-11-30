from scholarly import scholarly, ProxyGenerator
from os import path, getcwd, chdir, listdir
import markdown
import json
from argparse import ArgumentParser

if __name__ == "__main__":
    # Read the StdIn arguments for the script
    parser = ArgumentParser()
    parser.add_argument("-path", "--path", dest="member_path",
                        help="specify path to the folder of the member to scrape data for")
    
    args = parser.parse_args()
    
    # The name of the meta tags, which store the necessary information about the team member for the search query.
    meta_name_att = 'name'
    meta_affiliation_att = 'affiliation'
    
    # Instantiate a proxy for Scholarly
    pg = ProxyGenerator()
    scholarly.use_proxy(pg, pg)
    
    # Set up a Markdown parser
    md_parser = markdown.Markdown(extensions=['meta'])
    
    # Build the path to the Markdown file in the current subfolder
    md_path = path.join(getcwd(), args.member_path, [filename for filename in listdir(path.join(getcwd(), args.member_path)) if '.md' in filename ][0])
    
    # Read in the Markdown file
    with open(md_path, 'r') as md_file:
        text = md_file.read()
        # Make use of the Markdown Parser to access the Meta information that is stored in the file
        md_parser.convert(text)
        # Retrieve the Metadata of the author
        author_name = md_parser.Meta[meta_name_att][0].replace('"', '')
        author_affiliation = md_parser.Meta[meta_affiliation_att][0].replace('"', '')
        print(author_name)

    # Use scholarly to build up a search query for the team member
    author_query = scholarly.search_author(' '.join([author_name, author_affiliation]))
    
    # Execute the search query to fill up information about the team member
    try:
        author = scholarly.fill(next(author_query))
        
        # Collect information of all publications of the team member
        publications = []
        num_pubs = len(author['publications'])
        print(f'start processing {num_pubs} publications')
        # Iterate over each entry in the publication list
        # NOTE: The entries here are not filled up yet by scholarly, but simple placeholders containing some meta info
        # that can be used for further querying
        for idx, pub_query in enumerate(author['publications']):
            if idx % 10 == 0:
                print(f'begin processing publication #{idx}')
            # use the placeholder query to retrieve the actual publication info from Google Scholar
            publications.append(scholarly.fill(pub_query))
        
        # Save the collected publication info appropriately
        with open(path.join(getcwd(), args.member_path, 'publications.json'), 'w', encoding='utf-8') as f:
            json.dump(publications, f, ensure_ascii=False, indent=4)
            
    except StopIteration:
        print('no information found for the author')