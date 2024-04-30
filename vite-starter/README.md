# React + Vite + Vitest

`yarn create vite vite-starter --template react`

- [Vite](https://ko.vitejs.dev/guide/)
- [Vitest](https://vitest.dev/guide/)
- [udemy-TESTING-GITHUB](https://github.com/bonnie/udemy-TESTING-LIBRARY/tree/main)

```
yarn add -D vitest @vitest/ui eslint-plugin-vitest
yarn add -D jsdom @testing-library/jest-dom @testing-library/react eslint-plugin-jest-dom eslint-plugin-testing-library
```

### 참고
최신버전의 vitest는 호환이 되지 않아 버전 다운그레이드함.

> TypeError: Converting circular structure to JSON when extend the recommended  
> https://github.com/veritem/eslint-plugin-vitest/issues/432
> 
> The latest version doesn't support the old eslint configuration setup; it only works with flat config. If you want to use old configuration, use v0.4.1 .
- https://github.com/bonnie/udemy-TESTING-LIBRARY/blob/main/finished-projects/color-button/package.json

---

- [Free Workshop Series! Table of Contents for an MDX Blog](https://newsletter.howd.dev/challenges/009/)
