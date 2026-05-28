export default function DeveloperProfileMock() {
  const careers = [
    {
      company: '넥슨코리아',
      companyEn: 'Nexon Korea',
      role: 'Backend Engineer · 플랫폼API팀',
      period: '2022 — Present',
      desc: [
        'C#/.NET 기반 Nexon PC방 세션 시스템 개발 및 운영',
        '대규모 실시간 게임 세션 및 과금 세션 처리',
        '게임별 PC방 접속 이벤트 및 세션 연동용 REST API 개발',
        'Kafka 기반 Event-Driven Architecture 설계 및 개발',
        '월 5~7억 건 규모 세션 이력 데이터 처리 및 운영 안정화',
      ],
      tech: ['C#', '.NET', 'Java', 'Spring Boot', 'Kafka', 'MySQL'],
    },
    {
      company: '잡코리아',
      companyEn: 'JobKorea',
      role: 'Backend Developer',
      period: '2019 — 2022',
      desc: [
        '기업회원 서비스 개발 및 운영',
        '워크넷 및 외부 채용 플랫폼 공고 연동',
        'ASP.NET MVC5 / MSSQL 기반 웹 서비스 개발',
        'Razor View 기반 관리자 및 백오피스 페이지 개발',
        'JavaScript 기반 UI 기능 개발 및 유지보수',
      ],
      tech: ['C#', 'ASP.NET MVC5', 'MSSQL', 'Razor', 'JavaScript'],
    },
    {
      company: '더존비즈온',
      companyEn: 'Douzone Bizon',
      role: 'Software Engineer',
      period: '2017 — 2019',
      desc: [
        '그룹웨어 백오피스 기능 개발 및 유지보수',
        '구버전 그룹웨어 운영 및 유지보수 지원',
        '신규 그룹웨어 버전 전환을 위한 데이터 마이그레이션 수행',
        '상위 버전 전환용 이관 툴 개발 및 유지보수',
        'MSSQL 기반 데이터 처리 및 정합성 검증 지원',
      ],
      tech: ['.NET', 'C#', 'MSSQL'],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-zinc-700/10 blur-3xl rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto space-y-16">
        <section className="space-y-10 pt-8 md:pt-16">
          <div className="w-full space-y-6">
            <div className="inline-flex flex-col rounded-full border border-zinc-800 px-5 py-2 bg-zinc-900/50 w-fit">
              <span className="text-sm font-medium text-zinc-200">
                백엔드 엔지니어
              </span>
              <span className="text-xs text-zinc-600 mt-0.5 tracking-wide">
                Backend Engineer
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
                이상묵
              </h1>

              <div className="text-lg md:text-2xl text-zinc-600 tracking-wide">
                Sangmuk Lee
              </div>
            </div>

            <div className="space-y-3 pt-3">
              <p className="text-xl md:text-3xl font-semibold text-zinc-100 leading-tight">
                실시간 세션 플랫폼 · 이벤트 기반 아키텍처 · 대규모 트래픽 처리
              </p>

              <p className="text-sm md:text-base text-zinc-600 tracking-wide leading-relaxed">
                Real-time Session Platform · Event-Driven Architecture · Large Scale Traffic Processing
              </p>
            </div>

            <div className="pt-4 max-w-5xl">
              <p className="text-zinc-400 leading-relaxed text-base md:text-lg whitespace-nowrap overflow-hidden text-ellipsis">
                실시간 세션 처리와 대규모 트래픽 환경에서 플랫폼 아키텍처 중심의 문제 해결을 지향하는 백엔드 엔지니어.
              </p>
            </div>

            <div className="pt-6 w-full flex justify-end">
              <div className="inline-flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/50 px-4 py-2.5">
                <div className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Contact
                </div>

                <div className="h-4 w-px bg-zinc-800" />

                <div className="text-sm md:text-base text-zinc-300 tracking-wide">
                  anrdl06@naver.com
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-4">About</h2>
          </div>

          <div className="lg:col-span-2 text-zinc-300 leading-relaxed text-lg space-y-4">
            <p>
              대규모 실시간 트래픽 환경에서 세션 처리 및 운영 안정성에
              집중해온 백엔드 개발자입니다.
            </p>

            <p>
              게임 플랫폼, 채용 서비스, 그룹웨어 등 다양한 도메인의
              서비스를 개발 및 운영해왔으며 최근에는 Kafka 기반
              Event-Driven Architecture와 MSA 구조를 중심으로 차세대
              세션 플랫폼을 설계하고 있습니다.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Career</h2>
          </div>

          <div className="space-y-6">
            {careers.map((career) => (
              <div
                key={career.company}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="space-y-4 max-w-3xl">
                    <div className="space-y-2">
                      <div className="flex flex-col md:flex-row md:items-end gap-1 md:gap-3">
                        <h3 className="text-2xl font-bold">
                          {career.company}
                        </h3>

                        <div className="text-sm text-zinc-500 tracking-wide">
                          {career.companyEn}
                        </div>
                      </div>

                      <div className="space-y-1 mt-2">
                        <p className="text-zinc-300">{career.role}</p>

                        <p className="text-sm text-zinc-500 tracking-wide">
                          {career.period}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 text-zinc-300">
                      {career.desc.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-zinc-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 max-w-sm">
                    {career.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Core Technologies</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-zinc-800 p-8 bg-zinc-900/40">
              <div className="text-zinc-500 mb-4">Strong</div>
              <div className="flex flex-wrap gap-3">
                {['C#', '.NET', 'Java', 'Spring Boot', 'Kafka', 'MySQL'].map(
                  (tech) => (
                    <div
                      key={tech}
                      className="px-4 py-2 rounded-2xl bg-zinc-800"
                    >
                      {tech}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 p-8 bg-zinc-900/40">
              <div className="text-zinc-500 mb-4">Experienced</div>
              <div className="flex flex-wrap gap-3">
                {[
                  'TCP Socket',
                  'REST API',
                  'MSA',
                  'Event-Driven',
                  'MSSQL',
                  'Redis',
                ].map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 rounded-2xl bg-zinc-800"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Engineering Notes</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 space-y-5">
              <div className="space-y-1">
                <div className="text-2xl font-bold leading-snug text-zinc-100">
                  벌크 로그아웃 처리
                </div>

                <div className="text-sm text-zinc-500 tracking-wide">
                  Bulk Logout & Snowflake Drift
                </div>
              </div>

              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  대규모 벌크 로그아웃 상황에서 동일 timestamp 내
                  Snowflake sequence overflow 가능성을 고려하여,
                  sequence 4096 초과 시 logical drift를 적용하는 방식으로 설계.
                </p>

                <p>
                  최대 100만 세션 동시 처리 상황에서도
                  약 244ms 수준의 drift만 발생하도록 계산 및 적용.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 space-y-5">
              <div className="space-y-1">
                <div className="text-2xl font-bold leading-snug text-zinc-100">
                  시간 기반 파티셔닝
                </div>

                <div className="text-sm text-zinc-500 tracking-wide">
                  Time-based Partitioning with Snowflake ID
                </div>
              </div>

              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  세션 이력 데이터 저장 시 Snowflake ID를 Primary Key로
                  사용하여 시간 기반 정렬 및 조회 locality를 함께 고려한 구조 설계.
                </p>

                <p>
                  ID 자체에 timestamp 정보를 포함하도록 구성하여
                  특정 시간대 세션 로그를 key range scan 기반으로 조회 가능하도록 설계.
                </p>

                <p>
                  대량 세션 이력 데이터 환경에서 파티셔닝 및
                  시간 기반 조회 효율 개선 목적.
                </p>
              </div>
            </div>
                      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 space-y-5">
              <div className="space-y-1">
                <div className="text-2xl font-bold leading-snug text-zinc-100">
                  TCP 연결 안정화
                </div>

                <div className="text-sm text-zinc-500 tracking-wide">
                  TCP SYN Backoff & Request Control
                </div>
              </div>

              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  HTTP Proxy 서버 배포 과정에서 TCP 서버 연결 실패 및
                  요청 유실 현상 분석 수행.
                </p>

                <p>
                  원인 분석 결과 TCP SYN Backoff로 인해 순간적인 연결 요청이
                  누락되는 현상 확인.
                </p>

                <p>
                  서버 구조 변경이 어려운 환경에서 Proxy 서버 측에
                  jitter 및 semaphore 기반 요청 제어를 적용하여
                  연결 안정성 개선.
                </p>
              </div>
            </div>
                      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 space-y-5">
              <div className="space-y-1">
                <div className="text-2xl font-bold leading-snug text-zinc-100">
                  부하테스트 플랫폼 구축
                </div>

                <div className="text-sm text-zinc-500 tracking-wide">
                  K6 Operator & Grafana Load Testing Platform
                </div>
              </div>

              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  기존 ngrinder 기반 부하테스트 환경의 사용성 한계를 개선하기 위해
                  EKS 환경 위에 K6 Operator 기반 부하테스트 플랫폼 구축.
                </p>

                <p>
                  AI 기반 개발 생산성을 활용하여 팀 단위로 사용할 수 있는
                  시나리오 기반 부하테스트 도구 개발 및 운영.
                </p>

                <p>
                  Grafana 연동을 통해 테스트 이력 관리 및
                  성능 데이터 시각화 기능 제공.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
