import React from 'react';

const CommunitySection: React.FC = () => {
  return (
    <section className="section">
      <div style={{
        background: 'linear-gradient(135deg, #F26922 0%, #FE693C 100%)',
        color: 'white',
        padding: '40px',
        borderRadius: '16px',
        textAlign: 'center',
        marginBottom: '30px',
        fontWeight: 700,
        fontSize: '1.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* 배경 장식 요소 */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '150px',
          height: '150px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%'
        }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* 주황색 박스 안 큰 글씨 */}
          <div style={{ fontSize: '2.1rem', fontWeight: 800, marginBottom: 24, color: 'white', letterSpacing: '-1px' }}>
            2025년 8월<br />
            AI 강사 어벤저스 공저 서적 출간 (예정)
          </div>
          {/* 흰색 카드 박스 */}
          <div style={{
            background: 'white',
            color: '#F26922',
            borderRadius: '16px',
            padding: '32px 24px',
            margin: '0 auto 10px auto',
            maxWidth: 700,
            boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
            textAlign: 'center',
            fontSize: '1.2rem',
            fontWeight: 600
          }}>
            <div style={{ fontSize: '1.1rem', color: '#333', fontWeight: 500, marginBottom: 10 }}>
              게으른일잘러, 노션다움, Miri, 박진영, 박진주, 박태윤, 정민재, 황용운 & Tonycico
            </div>
            <div style={{ fontSize: '1.1rem', color: '#FE693C', fontWeight: 700, marginBottom: 10 }}>
              COMING SOON
            </div>
            <div style={{ fontSize: '1.1rem', color: '#333', fontWeight: 500, marginTop: 10 }}>
              전문가들이 전하는 AI 시대 생존 가이드
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection; 