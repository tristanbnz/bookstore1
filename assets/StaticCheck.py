from pathlib import Path
import sys
for path in Path('src').rglob('*.ts'):
    if path.name == 'config.ts' :
        printf('1')
        sys.exit(0)
printf('0')
sys.exit(0)