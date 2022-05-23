# Card Maker Project

1. 로그인 페이지 만들기

- firebase 설치하기

  > yarn add firebase

- firebase에서 필요한 setUp 하기
  - firebase에서 받아온 firebase SDK 추가하기
  - src > service > firebase.js 파일을 만들고
  - firebase에서 받아온 코드 내용 복사/붙여넣기
  - 하지만, 이 상태로 git에 업로드해서는 안됨.
  - 제일 상위에서 .env파일 만들고 그 파일에서 가져오는 방법 사용함.
  - env파일에 내용 작성하고 git ignore에 내용추가.
