git add .
echo "enter comment"
read comment
git commit -m "$comment"
echo "want to change branch y/n"
read res
if [["$res" == [yY]] ];then
    echo "enter branch name"
    read branch
    git checkout -b $branch
elif [["$res" == [nN]]]; then
    git push
