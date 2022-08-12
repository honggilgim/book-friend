# book-friend

## 프로젝트 Description

프로젝트 명 : book-friend
프로젝트 기간 : 1.17 ~ 2.23
본 프로젝트는, 사용자들 간에 책을 빌려주고 빌릴 수 있는 프로젝트입니다.

사용자들은, 각자 자신의 포인트를 사용하여 책을 빌려볼 수 있습니다.

포인트를 얻는 방법은, 사용자가 책을 빌려주고 다른 사용자가 책을 받을 시 포인트를 받을 수 있습니다. 포인트를 얻기 위해서는 책을 빌려주고 빌려본 사람 모두가 설문조사에 참여하여야 합니다.

설문조사에서 얻는 정보는, 책을 빌려본 사람과 빌린 사람 모두의 점수 산정에 이용됩니다. 점수는 사용자들간의 신뢰를 위한 척도가 될 것입니다.

프로젝트 디렉토리 구조 :

back-end : 백엔드 파일들이 들어가 있습니다.
front-end : 프론트 엔드 파일들이 들어가 있습니다.


## 프로젝트 정보

백엔드 : ![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)

스프링에서 데이터베이스와의 통신을 위해서 mybatis, jpa를 혼용하여 사용하고,
개발에 lombok, devtools, jdbc, dbcp2,
보안에 spring security, jjwt토큰 을 사용했습니다.

프론트 엔드 : ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

통신을 위해서 axios, 개발에는 react-router-dom을 이용했습니다.

데이터베이스 : ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

## 프로젝트 결과물

메인 화면 

![bf](https://user-images.githubusercontent.com/48556879/178515964-d7860e5e-40f6-40dc-a20f-0e34a9f949d2.jpg)

회원가입, 로그인 페이지

<img width="400" alt="회원가입" src="https://user-images.githubusercontent.com/48556879/184273637-ebb186c1-dff0-40b1-87fe-386daddf2c54.png"> <img width="400" alt="로그인" src="https://user-images.githubusercontent.com/48556879/184273638-46f10f48-fee9-484a-a013-cd68769d3c0f.png">

책 상세, 책 리스트 페이지

<img width="400" alt="책 상세" src="https://user-images.githubusercontent.com/48556879/184273681-9e7fba4d-18ee-44ba-9039-4b225baa573f.png"> <img width="400" alt="책리스트" src="https://user-images.githubusercontent.com/48556879/184273722-82e9678c-20ee-467e-b740-5c8912ee0f17.png">


마이페이지, 대여요청페이지
<img width="400" alt="대여요청페이지" src="https://user-images.githubusercontent.com/48556879/184273730-a3924d4f-e376-4354-a634-7d8ff853489d.png"> <img width="400" alt="마이페이지" src="https://user-images.githubusercontent.com/48556879/184273732-ae73f781-6bd8-4c90-a1a0-d176e6b6a76e.png">

### 간단 코드설명

+ MYBATIS - JPA 혼용 : MYBATIS와 JPA는 각자의 특징을 가지고 있습니다. 각각의 장점을 살려주기 위해서, 저희는 프로젝트 코드에 이 두가지를 혼용해서 사용합니다. 이러한 코드를 이용하여, JPA와 MYBATIS를 동시에 사용할 수 있습니다. 분류는, Data의 Bean을 나눠서 합니다.

+ spring security + jwt token : 스프링 시큐리티로 로그인을 하면, 사용자는 jwt 토큰을 발급받습니다. 이를 사용하여, 지속적인 인증을 시행합니다.

### 프로젝트 후기

CRUD 기능을 비롯한 여러 다양한 기능들이 들어간 프로젝트입니다. 가장 큰 특징은 jpa와 mybatis를 혼용하여 사용했다는 점이고, spring security와 jwt 토큰도 활용했습니다. 프로젝트의 데이터베이스도 정규화를 생각해 외래키를 만들어 데이터베이스들끼리 연결했습니다. sql은, join과 같은 연산도 사용하여 작성했습니다. 처음으로 진행했던 스프링 관련 프로젝트였는데, 성공적으로 마무리지어 기쁩니다. 잘 작동하는 모습과 기간에 맞추어 프로젝트를 마칠 수 있게 해준 모두에게 감사드립니다.

자세한 정보는, 몰입교육 프로젝트.pdf 파일에 작성되어 있습니다.

