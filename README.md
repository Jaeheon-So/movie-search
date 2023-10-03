# 📌 OMDb API를 활용한 영화 검색 사이트

## 🎥 결과물

- 배포 사이트: [https://jhoney-movie-search.netlify.app](https://jhoney-movie-search.netlify.app)
- 참고한 사이트
  - [https://grep.app/](https://grep.app/)
    <br/>

## 🔨 기술 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/context api-000?style=for-the-badge&logo=react&logoColor=white">
<br/>

## 🎈 기능 구현

### 메인페이지

- 영화 제목으로 검색 가능하고 년도, 영화타입(Movie, Series, Episode) 지정 가능
- 3글자 이상이 입력되면 검색페이지로 이동

### 영화검색 페이지

- 검색어, 년도, 영화타입의 조건으로 나온 결과물을 보여줌
- 위 조견들을 쿼리 스트링으로 활용
- 조건들을 바꾸면 바로 바뀐 결과물을 보여줌
- 결과물 로딩 중에는 스켈레톤 ui를 보여줌
- 페이지네이션을 통해 페이지 이동 가능
- 관심영화 등록 및 해제 가능

### 영화상세 페이지

- 영화 포스터가 없을 경우 대체 이미지를 출력
- 영화의 상세정보(제목, 개봉연도, 평점, 장르, 감독, 배우, 줄거리, 포스터 등)를 보여줌
- 영화 상세정보 로딩 중에는 스켈레톤 ui를 보여줌
- 관심영화 등록 및 해제 가능

### 관심영화 페이지

- 관심영화로 등록된 영화들을 보여줌
- 관심영화 등록 및 해제 가능

## 💡 아쉬운 점 / 어려웠던 점

- 뒤로가기를 했을 때 뭔가 제대로 동작을 하지 않아서 그 부분을 고치느라 애를 먹었다.
- 검색어 변경 시 api 호출 횟수를 줄이기 위해 디바운싱을 걸었는데 이 부분이 조금 어려웠다.
- 쿼리에 직접 이상한 값을 넣거나 없애는 경우는 에러 처리를 하지 못했는데 이럴 때는 어떻게 에러 처리를 하는지 궁금하다.
