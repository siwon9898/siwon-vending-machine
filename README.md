# SIWON-VENDING-MACHINE

```text
Protopie Assignment Stage - 자판기 구현 과제
```

## 주요 버전정보

```text
  "react": "^19.1.0",
  "react-router-dom": "^7.6.1",
  "@mui/material": "^7.1.0",
  "@emotion/react": "^11.14.0",
  "zustand": "^5.0.5"
```

## 서버실행

```bash
npm install
npm run dev
```

## 네이밍 규칙

- 디렉토리 이름은 camel case 사용 ( ex : clientRouter, dialogStore)
- 파일 이름은 pascal case 사용 (ex : ClientQuery, SampleDialog)
- interface, enum 이름은 pascal case 사용
  ex :

```ts
export interface SampleModel {
  id: number;
  name: string;
}

export enum SampleEnum {
  APPLE = "Apple",
  BANANA = "Banana",
}
```

## 폴더 구조

- 이 프로젝트는 react, vite로 구성 되어 있습니다.

```
src
  ├─assets           # 폰트, 이미지 등 static files
  ├─components       # 화면 구성 component
  │   └─groupName    # 컴포넌트별 그룹명 ( ex: checkbox, editor, table)
  │
  ├─models              # interfaces
  ├─stores             # zustand store
  ├─theme               # mui 공통 theme
  ├─utils               # 공통 util 함수
  └─views               # pages
    ├─modals           # modal
    ├─layout           # 화면 layout
    ├─pages
  │   ├─diagram         #diagram
  │   └─vendingMachine  #자판기 demo

```
