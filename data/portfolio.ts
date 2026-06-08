// data/portfolio.ts

export interface Profile {
  name: string;
  birthYear: number;
  email: string;
  location: string;
  phone: string;
  brief: string;
  skills: string[];
}

export interface Experience {
  id: string;
  period: string;
  company: string;
  team: string;
  role: string;
}

export interface Education {
  id: string;
  period: string;
  institution: string;
  major: string;
  status: string;
  award?: string; // 수상 경력 필드 추가
}

export interface SecurityProject {
  id: string;
  title: string;
  teamName: string;
  period: string;
  memberCount: number;
  overview: string;
  scenarios: {
    id: string;
    name: string;
    attackVector: string;
    impact: string;
    mitigation: string;
    steps: string[];
    cves: string[];
  }[];
  attachments: {
    label: string;
    url: string;
  }[];
}

export const profileData: Profile = {
  name: '정지욱',
  birthYear: 1994,
  email: 'dladjs2249@gmail.com',
  location: '서울 광진구 능동',
  phone: '010-9221-2192',
  /* 우수상 수상 이력을 brief 서두에 자연스럽게 배치하여 첫인상부터 임팩트를 주도록 수정했습니다. */
  brief: 'SK쉴더스 주관 화이트해커 양성 과정에서 기술적 집요함과 분석 역량을 인정받아 [개인 우수상]을 수상하며 수료한 실전형 모의해킹 신입 지원자입니다. 웹과 모바일 환경에서 공격 표면을 분석하고 취약점의 발생 원인과 악용 가능성을 코드와 로직 수준에서 검증하는 작업에 강점이 있습니다. 오랜 기간 서비스직에서 다져온 인내심과 꼼꼼함을 바탕으로, 문제를 직면했을 때 끝까지 파고드는 집요한 분석력을 갖추고 있습니다. 단순히 취약점 발굴에 그치지 않고, 인프라를 직접 구축하고 침해 확장 리스크를 식별하여 논리적인 보고서로 자산화하는 작업에 특화되어 있습니다.',
  skills: ['모의해킹', '취약점진단', '웹 해킹', '모바일 해킹', 'Frida Hooking', 'Android Native Analysis', 'Python', 'SQL Injection', 'PHP', 'Linux Shell', 'Docker Infrastructure', 'VMware Orchestration']
};

export const experienceData: Experience[] = [
  {
    id: '1',
    period: '2024.03 - 재직중',
    company: '(주)엠씨에스텍',
    team: '인프라사업본부',
    role: '주임 기술지원'
  },
  {
    id: '2',
    period: '2023.11 - 2024.03',
    company: '(주)파인웰시스템',
    team: '기술지원',
    role: '엔지니어'
  },
  {
    id: '3',
    period: '2014.02 - 2023.05',
    company: '현대백화점 미아점',
    team: '서비스직 (프리랜서/임시직)',
    role: '매장관리, 판매, 고객응대 (9년 4개월 근무)'
  }
];

export const educationData: Education[] = [
  {
    id: '1',
    period: '2025.10 - 2026.04',
    institution: '인포섹 아카데미 (SK쉴더스 주관)',
    major: '재직자 화이트해커 전문인력 양성 과정',
    status: '이수 완료',
    award: '🥇 개인 우수상 수상 (종합 평가 우수)' // 수상 내역 명시
  },
  {
    id: '2',
    period: '2024.03 - 현재',
    institution: '한국방송통신대학교',
    major: '컴퓨터전공',
    status: '4학년 재학중'
  },
  {
    id: '3',
    period: '2022.12 - 2023.07',
    institution: 'KH정보교육원',
    major: '보안엔지니어링 기반 정보보안 전문가 양성과정',
    status: '수료 완료'
  }
];

export const securityProjectData: SecurityProject = {
  id: 'escape-from-container',
  title: 'Escape From Container™ 및 인프라 풀체인 시나리오 모의해킹',
  teamName: '3조 팀 병아리 (정지욱, 김한준, 방도훈, 이용우)',
  period: '2023.06.13 - 2023.07.13',
  memberCount: 4,
  overview: '외부 노출 서비스의 취약점을 시작점으로 내부 시스템, CI/CD 파이프라인, 형상관리 자산, 데이터베이스를 거쳐 최종 가상화 호스트 환경(Docker Host)까지의 침해 확장 가능성을 공격자 관점에서 검증하고 기술적·관리적 대응 방안을 도출한 종합 시나리오 모의해킹 연계 실습 프로젝트입니다.',
  attachments: [
    { 
      label: '모의해킹 결과보고서 및 상세 정리 노션', 
      url: 'https://app.notion.com/p/SKshieldus_-_-_1-Log-2a6cef42681880a7ac70c545c385e119?source=copy_link' 
    }
  ],
  scenarios: [
    {
      id: '1',
      name: '시나리오 1: RCE 취약점을 이용한 외부 고객 웹 서버 침투 및 고객 데이터 탈취',
      attackVector: 'Apache Tomcat 및 Whitelabel 에러 페이지 분석 ➔ Spring4Shell 익스플로잇 코드로 웹쉘 업로드 ➔ 리버스쉘 확보 ➔ application.properties 내 평문 DBMS 계정 탈취',
      impact: '외부 고객 웹 서버 권한 영구 장악 및 고객 개인정보 데이터베이스(MySQL) 내부 전체 데이터 유출 확인',
      mitigation: 'Spring 프레임워크 및 JDK 버전을 최신 패치 버전으로 업데이트하고, 시스템 환경설정 파일(properties) 내 주요 자격증명을 암호화(Jasypt 등)하거나 Vault 시스템을 도입하여 평문 노출을 방지해야 합니다.',
      cves: ['CVE-2022-22965'],
      steps: [
        '에러 유발을 통해 구동 중인 Java/Tomcat 버전 정보 수집 및 Spring Boot 프레임워크 식별',
        'Spring4Shell 익스플로잇 스크립트를 빌드하여 경로 내 jsp 웹쉘 업로드 성공',
        '내부 인프라 조사 중 평문으로 저장된 application.properties 파일 아티팩트 확보',
        '서버 내 mysql-connector를 활용하여 백엔드 쿼리를 직접 수행 후 회원 마이그레이션 데이터 유출'
      ]
    },
    {
      id: '2',
      name: '시나리오 2: 인증우회 취약점을 이용한 내부 CI/CD 서버를 통한 NAS 데이터 탈취',
      attackVector: 'Ligolo-ng를 활용한 내부망 피벗팅 ➔ TeamCity 서비스 식별 ➔ 인증 우회 취약점 공략 ➔ Administrator 계정 강제 생성 ➔ API 호출로 연계 자산 식별',
      impact: '형상관리(Gitea) 프로젝트 저장소 권한 획득 및 내부에 적힌 대외비 웹 서비스 데이터 저장소(NAS) 접속 정보 조회를 통한 기밀 도면/문서 탈취',
      mitigation: 'TeamCity 빌드 서버를 즉시 최신 보안 패치 버전으로 업데이트하고, 내부망 자산 간 통신 시에도 무조건적인 신뢰를 배제하는 제로 트러스트(Zero Trust) 격리 정책 및 인프라 모니터링을 강화해야 합니다.',
      cves: ['CVE-2024-27198'],
      steps: [
        '장악한 외부 웹 서버에 Ligolo Agent를 심어 공격자 PC와 내부망 간 터널링 인프라 가설',
        'TeamCity 내부 포트 점검 및 인증 우회 가능한 레거시 버전 빌드 취약점 식별',
        '익스플로잇을 통해 관리자 세션 확보 후 VCS Root 컴포넌트 정보 API 파싱 수행',
        '연결된 Gitea 레포지토리의 README.md 정적 분석 중 평문 하드코딩된 NAS 원격 SMB 인증 자격증명(ID/PW) 탈취 성공'
      ]
    },
    {
      id: '3',
      name: '시나리오 3: 파일 업로드 취약점을 이용한 내부 직원 웹 서버 장악 및 직원 데이터 탈취',
      attackVector: 'Gitea 소스코드 오디팅 (Struts 2.5 버전 식별) ➔ TeamCity 플러그인 업로드 기능을 통해 내부 거점 확보 ➔ Struts 파일 업로드 취약점 악용 웹쉘 인젝션',
      impact: '내부 임직원 전용 웹 서버 침투 성공 및 연동된 Employee Database 내 임직원 인사 정보 전량 탈취',
      mitigation: 'Struts 파일 업로드 컴포넌트 검증 로직을 강화(허용된 확장자 화이트리스트 검증)하고, 업로드 디렉터리의 실행 권한(Execution Permission)을 원천 박탈하여 웹쉘이 실행되지 않도록 설정해야 합니다.',
      cves: ['CVE-2024-53677'],
      steps: [
        '형상관리 저장소 소스코드 분석 중 내부 직원용 웹 시스템이 Apache Struts 2.5 환경임을 식별',
        'TeamCity의 악성 플러그인 업로드 기능을 우회하여 타깃 내부망을 겨냥한 curl 탐색 쉘 구성',
        '직원 등록 컴포넌트의 가변적 업로드 취약점을 바인딩하여 ROOT 경로 내 webshell.jsp 이식',
        '획득한 루트 쉘 환경에서 소스코드 내 삽입된 MySQL 크리덴셜을 호출하여 인사 데이터 덤프 성공'
      ]
    },
    {
      id: '4',
      name: '시나리오 4: Gitea 저장소 오염을 통한 호스트(Docker Host) 환경 장악 및 자산 탈취 (Container Escape)',
      attackVector: 'TeamCity 빌드 프로퍼티 xml 복호화 (3DES 기본 키 구조 취약점) ➔ Gitea 계정 장악 ➔ pom.xml 백도어 스크립트 인젝션 및 Git Push ➔ 개발자 PC 리버스쉘 확보 ➔ Privileged 컨테이너 마운트 우회 ➔ Core Dump 변조를 통한 호스트 이스케이프',
      impact: '가상화 인프라 최상위 권한 획득(Host Root Shell), 인프라 내 전체 컨테이너 통제권 장악, SSH PEM Private Key 및 가상 머신 디스크 원천 데이터(Docker.raw) 내부 루트 패스워드 전량 무력화',
      mitigation: '컨테이너 실행 시 `--privileged` 옵션 사용을 금지하고 비특권 사용자(Non-root) 권한으로 구동해야 합니다. 또한 솔루션 내부 자산 암호화 시 기본 제공 키(Default Key) 사용을 금지하고 순환 주기를 설정해야 합니다.',
      cves: ['3DES 복호화', 'Privileged Container Escape'],
      steps: [
        'TeamCity 내부 자산 xml에 들어있는 암호화 코드를 3DES 기본 제공 키 구조로 역분석하여 복호화 완료(PW: testtest)',
        'Gitea 메인 브랜치 소스코드를 강제 오염(pom.xml 내 리버스쉘 유도 매크로 삽입)시킨 뒤 push',
        '개발자 PC에서 빌드 에러 트러블슈팅을 위해 pull 후 mvn build를 트리거하는 순간 개발 환경 쉘 권한 획득',
        '개발용 컨테이너에 --privileged 옵션이 활성화된 인프라 취약성을 식별, 호스트 디바이스(/dev/vda1)를 내부 폴더로 직접 마운트',
        '커널 영역 에러 핸들러인 Core Dump 설정을 의도적으로 변조하여 세그멘테이션 폴트를 발생시키는 방식으로 가상화 장벽을 무력화하고 호스트 서버 완전 제어 성공'
      ]
    },
    {
      id: '5',
      name: '추가 분석: Frida를 이용한 안드로이드 모바일 애플리케이션 분석 및 모의해킹',
      attackVector: 'Nox Player 환경 ➔ Frida-server 아키텍처 매칭 및 바이패스 스크립트 작성 ➔ Native Library(.so) 후킹을 통한 비즈니스 로직 우회 및 난독화 분석',
      impact: '모바일 클라이언트 단에 구현된 루트 검사(Rooting Detection), SSL Pinning, 중요 데이터 암복호화 로직 무력화 및 세션 오염 가능성 검증',
      mitigation: 'Frida 탐지 로직(포트 검사, 런타임 메모리 맵 분석, 디버깅 상태 체크)을 다중 레이어로 구현하고, 핵심 암복호화 로직은 자바 계층이 아닌 Native 영역에서 무결성 검증과 상호 인증을 거치도록 설계해야 합니다.',
      cves: ['Frida Hooking', 'Mobile Security'],
      steps: [
        'Frida 16 버전을 에뮬레이터 환경에 맞춤 빌드하여 백그라운드 데몬 구동 및 포트 바인딩',
        '특정 보안 모듈이 탑재된 APK의 메모리 맵을 후킹하여 무조건 가짜 인증값(True)을 반환하도록 자바 메소드 변조',
        'Native `.so` 파일의 내보내기(Export) 함수 주소를 오프셋 기반으로 역추적하여 중요 변수 흐름 모니터링',
        '런타임 상에서 암호화 키풀(Key Pool)을 직접 탈취하여 로컬 저장소(Shared Preferences) 내부 변조 데이터 주입 성공'
      ]
    }
  ]
};