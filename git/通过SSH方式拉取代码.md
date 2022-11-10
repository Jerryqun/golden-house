cd ~/.ssh   //进入指定路径文件夹
ls           //查看文件夹下内容
如果没有则创建
ssh-keygen -t rsa -C "用户邮箱"
再cd ~/.ssh  查找公钥
cat ~/.ssh/id_rsa.pub
1
https://www.jianshu.com/p/1c3cadc68b4b



https://www.runoob.com/git/git-remote.html

显示所有远程仓库：
git remote -v

设置远程仓库地址
git remote set-url origin git@github.com:Jerryqun/react-antd-admin.git

