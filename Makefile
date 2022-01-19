SHELL    := bash -ex
YARN     := yarn
DIRS     := pages public styles components
FILES    := $(shell find $(DIRS) -type f)
DOTNEXT   = .next
BUILD_ID := $(DOTNEXT)/BUILD_ID
OUT      := out

$(BUILD_ID): $(FILES)
	$(YARN) build

build: $(BUILD_ID)

out: build
	$(YARN) next export

export: $(OUT)

publish: $(OUT)
	cd $(OUT) && git init
	cd $(OUT) && git checkout -b gh-pages
	cd $(OUT) && git add *
	cd $(OUT) && git add .nojekyll
	cd $(OUT) && git commit -a -m "gh-pages"
	cd $(OUT) && git remote add github git@github.com:steelthreads/end-to-end
	cd $(OUT) && git push github :gh-pages
	cd $(OUT) && git push github gh-pages:gh-pages -f
