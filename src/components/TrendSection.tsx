import React from 'react';

const TrendSection: React.FC = () => {
  return (
    <section className="section">
      <div style={{
        backgroundColor: '#FE693C',
        color: 'white',
        padding: '30px',
        borderRadius: '12px',
        textAlign: 'center',
        marginBottom: '30px'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 600,
          marginBottom: '15px'
        }}>
          위클리 AI 트렌드
        </h2>
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '25px',
          opacity: 0.9,
          lineHeight: '1.6'
        }}>
          협회 AI 어벤저스 강사 '챗대리'님이 분석한  최신 AI 트렌드와 기술 동향 콘텐츠를 만나보세요.
        </p>
        <a
          href="https://blog.chatdaeri.com/ai-asmr-shorts/"
          target="_blank"
          rel="noopener noreferrer"
          className="kg-btn-accent"
          style={{
            fontSize: '1.1rem',
            padding: '15px 30px',
            backgroundColor: 'white',
            color: '#F26922',
            border: '2px solid white',
            fontWeight: 700
          }}
        >
          🚀 최신 AI 트렌드 전문 보러가기
        </a>
      </div>
    </section>
  );
};

export default TrendSection; 