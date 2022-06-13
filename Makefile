install:
	npm ci

lint:
	npx eslint

test:
	npx jest
	
gendiff-rel:
	gendiff __fixtures__/file1.json __fixtures__/file2.json

gendiff-abs:
	gendiff /home/arkady/workdir/frontend-project-lvl2/__fixtures__/file1.json /home/arkady/workdir/frontend-project-lvl2/__fixtures__/file2.json

gendiff-var:
	gendiff __fixtures__/file1.json /home/arkady/workdir/frontend-project-lvl2/__fixtures__/file2.json