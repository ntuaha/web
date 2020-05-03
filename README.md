# 銀行官網重建計劃

[自建狀況](https://ntuaha.github.io/web/src)

## 測試網域
http://localhost:3002



## 緣起
希望透過簡單的現代工具，自己重建一套大型銀行網站．參考網站 [玉山官網](https://www.esunbank.com.tw/bank/personal)

- docker
- git
- React
- github & git flow
- nodejs 12.8
- npm 6.14.1


## branch
- master 呈現主要完成網頁
- dev 開發中確認狀況，並為主要測試區，完成確認之後，再回送到 master 可以透過 localhost 進行測試

## 主要工作事項
1. 確認影像、照片資源存放方式，並用 proxy 另外倒轉到正式官網的資源去
2. 拉開 GA 等不需要的元件
3. 重構整個網站系統架構，符合大型網頁站架構
4. 透過 React 重構網頁架構，並透過適當的 DB 保存必要資料


