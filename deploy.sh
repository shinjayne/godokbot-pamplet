yarn run build
yes | cp -rf ./build/* ./deploy/public
cd ./deploy
firebase deploy
