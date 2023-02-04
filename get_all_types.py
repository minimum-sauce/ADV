import os
from typing import List 
abs_path = '/home/felix/projUni/pkd_proj/'
gitignore_path = '.gitignore_new'


def getFilenames(path: str) -> List[str]:
    def not_empty(file):
        return file != ""

    def get_subfix(file: str) -> str:
        split_string = list(filter(not_empty, file.split('.')))
        if len(split_string) == 1:
            return ""
        else:
            sufix = split_string[-1]
            try: 
                int(sufix)
                return ""
            except:
                return str('*.' + sufix)

    dir_items: List[str]  = os.listdir(path)
    files: List[str] = list(filter(lambda item : os.path.isfile(path + item) ,dir_items))
    dirs: List[str] = list(filter(lambda item : os.path.isdir(path + item) ,dir_items))
    for dir in dirs:
        sub_dir_files = getFilenames(str(path + dir + '/'))
        for file in sub_dir_files:
            files.append(file)
    files = list(map(get_subfix, files))
    files = list(dict.fromkeys(files))
    files = list(filter(not_empty, files))
    return files




# creates the new gitignore file
types = getFilenames(abs_path)
path = abs_path + gitignore_path
gitignore = open(path, 'w')
gitignore.write(types[0] + '\n')
gitignore.close()
gitignore = open(path, 'a')
for file_type in types:
    gitignore.write(file_type + '\n')
gitignore.close()
