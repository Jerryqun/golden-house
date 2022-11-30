git pull = git fetch + git merge

fetch同pull的区别在于：
git fetch:是从远程获取最新版本到本地，不会自动merge.
而git pull是从远程获取最新版本并merge到本地仓库.
从安全角度出发，git fetch比git pull更安全，因为我们可以先比较本地与远程的区别后，选择性的合并。
git push 默认推送到master，如果有多个分支，则多个分支一起推送到远程.