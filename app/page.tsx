// app/page.tsx
'use client';

import { useState } from 'react';
import { profileData, experienceData, educationData, securityProjectData } from '../data/portfolio';

export default function PortfolioHome() {
  const [selectedScenario, setSelectedScenario] = useState<string>('1');

  const cleanScenarios = securityProjectData.scenarios.filter(s => s.id !== '5');
  const currentScenario = cleanScenarios.find(s => s.id === selectedScenario);

  const modifiedPeriod = "2026-03-15 ~ 2026-04-15";

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 font-sans antialiased selection:bg-blue-500 selection:text-white transition-colors duration-300">
      
      {/* 1. HERO / 프로필 섹션 */}
      <header className="max-w-4xl mx-auto pt-24 pb-12 px-6">
        <div className="flex flex-wrap justify-between items-baseline mb-3">
          <h1 className="text-4xl font-black tracking-tight">{profileData.name}</h1>
          <span className="text-sm text-neutral-400 font-mono">Born in 1994 • {profileData.phone}</span>
        </div>
        <p className="text-xl text-blue-600 dark:text-blue-400 font-bold tracking-tight mb-6">
          Offensive Security Researcher / Penetration Tester
        </p>
        
        {/* 상단 자기소개 카드 */}
        <div className="bg-white dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-800/80 p-6 rounded-2xl shadow-xs mb-8">
          <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl whitespace-pre-line">
            {profileData.brief}
          </p>
        </div>

        {/* 🎓 전체 교육 및 학력 대시보드 */}
        <div className="mb-8 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800/20 rounded-2xl p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">🎓</span>
            <h3 className="text-base font-black text-neutral-900 dark:text-white uppercase tracking-wider">
              Education & Training Timeline
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {educationData.map((edu) => {
              const isShieldus = edu.institution.includes('SK쉴더스');
              const isUniversity = edu.institution.includes('대학');
              const displayStatus = isUniversity ? '2학년 재학중' : edu.status;

              return (
                <div 
                  key={edu.id} 
                  className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                    isShieldus 
                      ? 'bg-amber-50/40 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/60 shadow-2xs' 
                      : 'bg-neutral-50/50 dark:bg-neutral-900/40 border-neutral-200 dark:border-neutral-800'
                  }`}
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-neutral-400 dark:text-neutral-500 block mb-1">
                      {edu.period}
                    </span>
                    <h4 className="text-sm font-black text-neutral-900 dark:text-white leading-tight">
                      {edu.institution}
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-medium">
                      {edu.major} <span className="text-neutral-400 font-normal">({displayStatus})</span>
                    </p>
                  </div>

                  {edu.award && (
                    <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-black px-2 py-0.5 rounded-md bg-amber-500 text-white w-max font-sans">
                      🥇 {edu.award.replace('🥇 ', '')}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 메인 소셜 채널 및 연락처 링크 */}
        <div className="flex flex-wrap gap-5 text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-8">
          <a href={`mailto:${profileData.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-500">
            {profileData.email}
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-500">
            GitHub
          </a>
        </div>

        {/* 📝 SK쉴더스 기술 정리노트 대형 배너 섹션 */}
        <div className="relative group overflow-hidden rounded-2xl border-2 border-blue-500 dark:border-blue-500 bg-gradient-to-r from-blue-50 via-indigo-50/40 to-white dark:from-blue-950/40 dark:via-neutral-900 dark:to-neutral-900 p-6 shadow-md transition-all hover:shadow-lg">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-blue-500/20 transition-all"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
                  Continuous Archiving & Write-ups
                </span>
              </div>
              <h3 className="text-xl font-black text-neutral-900 dark:text-white leading-tight">
                SK쉴더스 화이트해커 과정 & 모의해킹 기술 정리노트
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 max-w-xl leading-relaxed">
                취약점 분석 및 모든 워게임/실전 문제 풀이 이력이 실시간으로 기록되는 메인 기술 블로그 아카이브 공간입니다. 지속적인 연구 로그를 확인하실 수 있습니다.
              </p>
            </div>
            
            <a 
              href="https://pretty-friday-d47.notion.site/SKshieldus_-_-_1-Log-2a6cef42681880a7ac70c545c385e119?source=copy_link" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-black text-sm text-white bg-blue-600 dark:bg-blue-600 rounded-xl hover:bg-blue-500 transition-all shadow-sm shrink-0 font-mono tracking-wide"
            >
              📝 NOTION LOG VIEW ➔
            </a>
          </div>
        </div>
      </header>

      <hr className="max-w-4xl mx-auto border-neutral-200 dark:border-neutral-800" />

      {/* 2. 보유 기술 스택 (SKILLS) */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-lg font-bold uppercase tracking-wider text-neutral-400 mb-6">Core Skills & Tools</h2>
        <div className="flex flex-wrap gap-2">
          {profileData.skills.map(skill => (
            <span 
              key={skill}
              className="text-xs px-3 py-1.5 font-mono rounded-lg bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <hr className="max-w-4xl mx-auto border-neutral-200 dark:border-neutral-800" />

      {/* 2.5. KH 정보보안 인프라 구축 프로젝트 섹션 */}
      <section className="max-w-4xl mx-auto pt-16 pb-4 px-6">
        <div className="flex flex-wrap justify-between items-baseline gap-2 mb-4">
          <h2 className="text-2xl font-black tracking-tight text-neutral-900 dark:text-white">
            🏥 SKH 의료재단 정보시스템 통합 구축 및 보안 인프라 설계
          </h2>
          <span className="text-xs font-mono text-neutral-400">2023. 06. ~ 2023. 07.</span>
        </div>
        
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-6">
          소속: <span className="text-neutral-700 dark:text-neutral-300">화기로운 보안생활 (팀장)</span> | 사용 기술: GNS3, Cisco IOS, SophosUTM, Snort, MariaDB Replication, Elastic Stack
        </p>

        <div className="bg-neutral-100 dark:bg-neutral-800/40 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 mb-6">
          <span className="font-bold block text-neutral-900 dark:text-white mb-1">Project Overview</span>
          실무 환경의 대규모 병원 전산 인프라를 타깃으로 삼아, 외부 위협을 격리하는 3-Tier 아키텍처 및 고가용성(HA) 라우팅 환경을 모사 구축했습니다. 핵심 자산인 의료 전자의무기록(EMR) 데이터의 기밀성과 생존성을 확보하기 위해 DB 복제 및 침입 탐지 관제 인프라를 종합 실습했습니다.
        </div>

        {/* 상세 구축 내역 핵심 요약 카드 */}
        <div className="bg-white dark:bg-neutral-800/20 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <span className="text-xs uppercase tracking-wider font-bold text-blue-500 block mb-4">Key Engineering Deliverables</span>
          <ul className="space-y-4">
            <li className="flex gap-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <span className="font-mono text-blue-500 dark:text-blue-400 font-bold bg-neutral-100 dark:bg-neutral-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0">1</span>
              <span><strong>가상화 기반 엔터프라이즈 네트워크 설계:</strong> GNS3 인프라를 통해 외부 에지 라우터, 내부 백본 L3 스위치, 서비스별 L2 액세스 대역 분리 구조 구현.</span>
            </li>
            <li className="flex gap-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <span className="font-mono text-blue-500 dark:text-blue-400 font-bold bg-neutral-100 dark:bg-neutral-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0">2</span>
              <span><strong>고가용성(HA) 및 Redundancy 환경 검증:</strong> Cisco HSRP 프로토콜을 이용한 게이트웨이 이중화 및 OSPF 동적 라우팅 설정을 통한 다운타임 제로 Failover 보장.</span>
            </li>
            <li className="flex gap-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <span className="font-mono text-blue-500 dark:text-blue-400 font-bold bg-neutral-100 dark:bg-neutral-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0">3</span>
              <span><strong>3-Tier 보안 경계 정책 및 IDS 관제:</strong> DMZ(Web)와 폐쇄망(WAS/DB) 구간 통제를 위해 SophosUTM 방화벽 룰셋 구축 및 Snort 기반의 실시간 위협 모니터링 수립.</span>
            </li>
            <li className="flex gap-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <span className="font-mono text-blue-500 dark:text-blue-400 font-bold bg-neutral-100 dark:bg-neutral-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0">4</span>
              <span><strong>EMR 데이터 동기화 및 보안 백업 파이프라인:</strong> MariaDB Master-Slave 가용성 복제(Replication)를 구현하고, 무결성 유지를 위한 차등 자동화 쉘 스크립트 백업 검증.</span>
            </li>
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 justify-end items-center">
          <a
            href="/downloads/kh_infrastructure_report.pdf"
            download="정지욱_파이널_프로젝트_결과보고서_화기로운_보안생활.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800 text-sm font-extrabold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-750 transition-colors shadow-2xs cursor-pointer"
          >
            📁 인프라 구축 결과보고서 다운로드
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-dashed border-neutral-300 dark:border-neutral-800 my-6"></div>
      </div>

      {/* 3. 시나리오 기반 모의해킹 프로젝트 쇼케이스 */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="flex flex-wrap justify-between items-baseline gap-2 mb-4">
          <h2 className="text-2xl font-black tracking-tight text-neutral-900 dark:text-white">
            {securityProjectData.title}
          </h2>
          <span className="text-xs font-mono text-neutral-400">{modifiedPeriod}</span>
        </div>
        
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-6">
          소속: <span className="text-neutral-700 dark:text-neutral-300">{securityProjectData.teamName}</span> | 수행 인원: {securityProjectData.memberCount}명
        </p>

        <div className="bg-neutral-100 dark:bg-neutral-800/40 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 mb-10">
          <span className="font-bold block text-neutral-900 dark:text-white mb-1">Project Overview</span>
          {securityProjectData.overview}
        </div>

        {/* 시나리오 네비게이션 탭 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {cleanScenarios.map(sc => (
            <button
              key={sc.id}
              onClick={() => setSelectedScenario(sc.id)}
              className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                selectedScenario === sc.id
                  ? 'border-blue-500 bg-blue-500 text-white shadow-sm'
                  : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-750 text-neutral-700 dark:text-neutral-300'
              }`}
            >
              Scenario 0{sc.id}
            </button>
          ))}
        </div>

        {/* 선택된 시나리오 디테일 패널 */}
        {currentScenario && (
          <div className="bg-white dark:bg-neutral-800/20 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm animate-fadeIn">
            <span className="text-xs font-mono px-2 py-1 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold mb-3 inline-block">
              {currentScenario.cves.join(' / ')}
            </span>
            <h3 className="text-xl font-extrabold text-neutral-900 dark:text-white mb-6">
              {currentScenario.name}
            </h3>

            {/* 공격 벡터 명시 */}
            <div className="mb-6 border-l-2 border-red-500 pl-4">
              <span className="text-xs uppercase tracking-wider font-bold text-red-500 block mb-1">Attack Vector & TTPs</span>
              <p className="text-sm font-mono text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {currentScenario.attackVector}
              </p>
            </div>

            {/* 파급력 */}
            <div className="mb-6 border-l-2 border-amber-500 pl-4">
              <span className="text-xs uppercase tracking-wider font-bold text-amber-500 block mb-1">Impact & Risk</span>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                {currentScenario.impact}
              </p>
            </div>

            {/* 기술적 대응 방안 */}
            <div className="mb-8 border-l-2 border-green-500 pl-4">
              <span className="text-xs uppercase tracking-wider font-bold text-green-500 block mb-1">Countermeasures & Mitigation</span>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                {currentScenario.mitigation}
              </p>
            </div>

            {/* 상세 공격 킬체인 프로세스 */}
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-neutral-400 block mb-4">Detailed Kill Chain Steps</span>
              <ol className="space-y-3.5">
                {currentScenario.steps.map((step, idx) => (
                  <li key={idx} className="flex gap-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    <span className="font-mono text-blue-500 dark:text-blue-400 font-bold bg-neutral-100 dark:bg-neutral-800 w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {/* 프로젝트 하단 아티팩트 다운로드 대시보드 */}
        {/* 코드 분석 주석: '결과보고서 다운로드' 및 '발표자료 다운로드' 버튼은 완전히 보존하고, 요구하신 블루 보더 형태의 '노션 아티팩트 전체보기(securityProjectData.attachments 루프 분기)' 버튼만 정확히 타겟팅하여 완전히 제거했습니다. */}
        <div className="mt-8 flex flex-wrap gap-3 justify-end items-center">
          <a
            href="/downloads/mock_hacking_report.docx"
            download="SK쉴더스_모의해킹_실습_결과보고서_정지욱.docx"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800 text-sm font-extrabold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-750 transition-colors shadow-2xs cursor-pointer"
          >
            📁 결과보고서 다운로드
          </a>

          <a
            href="/downloads/mock_hacking_presentation.pptx"
            download="SK쉴더스_모의해킹_실습_발표자료_정지욱.pptx"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800 text-sm font-extrabold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-750 transition-colors shadow-2xs cursor-pointer"
          >
            📊 발표자료 다운로드
          </a>
        </div>
      </section>

      <hr className="max-w-4xl mx-auto border-neutral-200 dark:border-neutral-800" />

      {/* 3.5. 개별 모바일 보안 연구 섹션 */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <div className="flex flex-wrap justify-between items-baseline gap-2 mb-4">
          <h2 className="text-2xl font-black tracking-tight text-neutral-900 dark:text-white">
            Mobile Application Native Library Hooking & Analysis
          </h2>
          <span className="text-xs font-mono text-neutral-400">개인 기술 검증</span>
        </div>
        
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-6">
          수행 주체: <span className="text-neutral-700 dark:text-neutral-300">정지욱 (단독 연구)</span> | 사용 툴킷: Frida 16 / Android Emulator Environments
        </p>

        <div className="bg-neutral-100 dark:bg-neutral-800/40 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <h3 className="text-lg font-extrabold text-neutral-900 dark:text-white mb-3">
            Frida 기반 Native Library 동적 분석 및 환경 구성 자동화 연구
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
            안드로이드 에뮬레이터 인프라 환경에서 발생하는 Frida-server 네트워크 아키텍처 불일치 및 포인터 바인딩 에러 이슈를 체계적으로 트러블슈팅하여 분석 파이프라인을 확립했습니다. 애플리케이션의 Native Library 단방향 익스포트 함수 추적, 메모리 변조 방지 로직 우회 및 후킹 코드를 작성하여 모바일 디바이스 공격 표면(Attack Surface)의 기술적 조치 방안을 연구하고 기록했습니다.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 font-bold">
              Frida Hooking
            </span>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 font-bold">
              Android Reverse Engineering
            </span>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400 font-bold">
              Native Library Export Tracking
            </span>
          </div>

          <div className="flex justify-end border-t border-neutral-200 dark:border-neutral-800/60 pt-4">
            <a
              href="https://pretty-friday-d47.notion.site/Android-App-Hacking-2c2cef42681880a989e1cc27e88e92d3?source=copy_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-blue-500 bg-blue-600 dark:bg-blue-600 text-sm font-black text-white hover:bg-blue-500 transition-all shadow-sm font-sans tracking-wide"
            >
              📝 Frida 모바일 분석 블로그 전체보기 ➔
            </a>
          </div>
        </div>
      </section>

      <hr className="max-w-4xl mx-auto border-neutral-200 dark:border-neutral-800" />

      {/* 4. 경력 사항 및 하단 학력 백업 대시보드 */}
      <section className="max-w-4xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        
        {/* 경력 섹션 */}
        <div>
          <h2 className="text-lg font-bold uppercase tracking-wider text-neutral-400 mb-6">Work Experience</h2>
          <div className="space-y-6">
            {experienceData.map(exp => (
              <div key={exp.id} className="relative pl-4 border-l border-neutral-200 dark:border-neutral-800">
                <span className="text-xs font-mono text-neutral-400 block mb-1">{exp.period}</span>
                <h4 className="text-base font-bold text-neutral-900 dark:text-white">{exp.company}</h4>
                <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {exp.team} • {exp.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 하단 학력 섹션 */}
        <div>
          <h2 className="text-lg font-bold uppercase tracking-wider text-neutral-400 mb-6">Education & Training (Summary)</h2>
          <div className="space-y-6">
            {educationData.map(edu => {
              const isUniversity = edu.institution.includes('대학');
              const displayStatus = isUniversity ? '2학년 재학중' : edu.status;

              return (
                <div key={edu.id} className="relative pl-4 border-l border-neutral-200 dark:border-neutral-800">
                  <span className="text-xs font-mono text-neutral-400 block mb-1">{edu.period}</span>
                  <h4 className="text-base font-bold text-neutral-900 dark:text-white">{edu.institution}</h4>
                  <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {edu.major} ({displayStatus})
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="max-w-4xl mx-auto py-12 px-6 border-t border-neutral-200 dark:border-neutral-800 text-center text-xs font-mono text-neutral-400">
        © {new Date().getFullYear()} Jeong Ji-wook. Powered by Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}