rm -rf out

yarn build
yarn next export

pushd out
git init
git checkout -b gh-pages
git add *
git add .*
git commit -a -m "gh-pages"

git remote add github git@github.com:steelthreads/end-to-end
git push github :gh-pages
git push github gh-pages:gh-pages -f

popd
