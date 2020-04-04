# 고독한 취준봇 소개페이지 
자세한 설명은 소개페이지 참조.

https://godokbot.web.app/?from=github

## 개발하기 
### 개발 환경 세팅 
1. yarn 을 설치합니다.
2. project directory 에서 `yarn install` 을 실행합니다. 
3. 끝!  

(WebStorm 사용을 권장.)

### 개발 서버 실행
```bash
$ yarn run start
```

### 배포하기
```bash
$ yarn run deploy 
```

Firebase CLI  & Firebase Hosting 이용합니다.


## 프로젝트 구성 

React 와 TypeScript 로 구성되어있습니다. CRA (Create React App) 을 이용해 프로젝트가 구성되었습니다.

React 튜토리얼 :  https://ko.reactjs.org/docs/hello-world.html

- `src` : 프로젝트 소스코드. 이곳을 수정하시면 됩니다.
- `public` : `index.html` 과, `index.html` 이 의존하는 static file 들을 저장. 
- `deploy` : firebase 에 업로드될 빌드 결과물. firebase 설정파일도 포함되어있음.

![readme-image](Readme-img.jpeg)



## Open Source

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
