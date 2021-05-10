### Diali 主题 For XYCMS

```sh
docker run -d \
    --name Diali \
    -p 80:80 \
    --restart=always \
    -v "$(pwd)"/wwwroot:/app/wwwroot \
    -e XYCMS_SECURITY_KEY=e2a3d303-ac9b-41ff-9154-930710af0845 \
    -e XYCMS_DATABASE_TYPE=SQLite \
    xueynet/xycms:latest
```


```sh
docker run -d --name Diali -p 80:80 --restart=always -v /c/Users/1/source/repos/xueynet/XYS/themes/T_Diali/wwwroot:/app/wwwroot -e XYCMS_SECURITY_KEY=e2a3d303-ac9b-41ff-9154-930710af0845 -e XYCMS_DATABASE_TYPE=SQLite xueynet/xycms:latest
```


```sh for wxr
docker run -d --name Diali -p 80:80 --restart=always -v /d/Work/themes/Diali/T_Diali/wwwroot:/app/wwwroot -e XYCMS_SECURITY_KEY=e2a3d303-ac9b-41ff-9154-930710af0845 -e XYCMS_DATABASE_TYPE=SQLite xueynet/xycms:7.0.12
```


::: tip
/c/Users/1/source/repos/xueynet/XYS/themes/T_Diali 为您需要挂载的目录，即前端项目文件夹
:::

