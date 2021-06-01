from pathlib import Path
import sys
for path in Path('src').rglob('*.ts'):

    file = open(path)
    
    if("//Tristan Brynildsen 1348237" in file.read()):
        continue
    else:
        print('0')
        sys.exit(0)


print("1")
sys.exit(0)