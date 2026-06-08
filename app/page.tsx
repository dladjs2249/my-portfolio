// app/page.tsx
'use client';

import { useState } from 'react';
import { profileData, experienceData, educationData, securityProjectData } from '../data/portfolio';

export default function PortfolioHome() {
  const [selectedScenario, setSelectedScenario] = useState<string>('1');

  const currentScenario = securityProjectData.scenarios.find(s => s.id === selectedScenario);

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

        {/* 🔥 [지욱님 요청 반영] 개인소개 바로 아래 / 링크 바로 위에 배치한 전체 교육 및 수상 히스토리 */}
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
                      {edu.major} <span className="text-neutral-400 font-normal">({edu.status})</span>
                    </p>
                  </div>

                  {/* 수상 내역이 있을 경우 골드 라벨로 렌더링 */}
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

        {/* 📝 핵심 노션 정리노트 대형 배너 섹션 (문제 풀이 아카이빙 강조) */}
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
              href="https://app.notion.com/p/SKshieldus_-_-_1-Log-2a6cef42681880a7ac70c545c385e119?source=copy_link" 
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

      {/* 3. 시나리오 기반 모의해킹 프로젝트 쇼케이스 */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <div className="flex flex-wrap justify-between items-baseline gap-2 mb-4">
          <h2 className="text-2xl font-black tracking-tight text-neutral-900 dark:text-white">
            {securityProjectData.title}
          </h2>
          <span className="text-xs font-mono text-neutral-400">{securityProjectData.period}</span>
        </div>
        
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-6">
          소속: <span className="text-neutral-700 dark:text-neutral-300">{securityProjectData.teamName}</span> | 수행 인원: {securityProjectData.memberCount}명
        </p>

        <div className="bg-neutral-100 dark:bg-neutral-800/40 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 mb-10">
          <span className="font-bold block text-neutral-900 dark:text-white mb-1">Project Overview</span>
          {securityProjectData.overview}
        </div>

        {/* 시나리오 네비게이션 탭 */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
          {securityProjectData.scenarios.map(sc => (
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

            {/* 기술적 대응 방안 (Mitigation) */}
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

        {/* 프로젝트 하단 대형 노션 연동 영역 */}
        <div className="mt-8 flex flex-wrap gap-3 justify-end">
          {securityProjectData.attachments.map((attach, idx) => (
            <a
              key={idx}
              href={attach.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-blue-500 bg-white dark:bg-neutral-800 text-sm font-extrabold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors shadow-xs"
            >
              📚 {attach.label} 아티팩트 전체보기
            </a>
          ))}
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

        {/* 하단 학력 섹션 (상단 배치와 싱크를 맞춰 완결성 유지) */}
        <div>
          <h2 className="text-lg font-bold uppercase tracking-wider text-neutral-400 mb-6">Education & Training (Summary)</h2>
          <div className="space-y-6">
            {educationData.map(edu => (
              <div key={edu.id} className="relative pl-4 border-l border-neutral-200 dark:border-neutral-800">
                <span className="text-xs font-mono text-neutral-400 block mb-1">{edu.period}</span>
                <h4 className="text-base font-bold text-neutral-900 dark:text-white">{edu.institution}</h4>
                <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {edu.major} ({edu.status})
                </p>
              </div>
            ))}
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