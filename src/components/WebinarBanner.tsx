import React from 'react';

const WebinarBanner: React.FC = () => {
  // 웨비나 카드 내용 컴포넌트로 분리
  const WebinarCard = () => (
    <div style={{
      background: 'linear-gradient(135deg, #F26922 0%, #FE693C 100%)',
      color: 'white',
      padding: '40px',
      borderRadius: '16px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: '40px'
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
        <div style={{
          display: 'inline-block',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '0.9rem',
          marginBottom: '20px'
        }}>
          🎯 회원사 7월 AI 웨비나
        </div>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 600,
          marginBottom: '15px'
        }}>
          클로드 MCP (Claude MCP)
        </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '5px' }}>📅 일시</div>
            <div style={{ fontSize: '1.1rem', opacity: 0.9 }}>7월 10일 (목) 20:00</div>
          </div>
          <div style={{ width: '1px', height: '50px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}></div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '5px' }}>👨‍🏫 강사</div>
            <div style={{ fontSize: '1.1rem', opacity: 0.9 }}>게으른일잘러</div>
          </div>
        </div>
        {/* 흰색 카드 박스에 상세 소개 */}
        <div style={{
          background: 'white',
          color: '#F26922',
          borderRadius: '16px',
          padding: '32px 24px',
          margin: '0 auto 30px auto',
          maxWidth: 700,
          boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
          textAlign: 'left',
          fontSize: '1.1rem',
          fontWeight: 500
        }}>
          <div style={{ color: '#F26922', fontWeight: 700, fontSize: '1.2rem', marginBottom: 10 }}>
            클로드 MCP로 업무 생산성 10배 높이는 실전 노하우 대공개<br />
            <span style={{ color: '#333', fontWeight: 400, fontSize: '1rem' }}>
              "AI가 내 업무를 대신해준다면?" 이제 상상이 아닙니다!
            </span>
          </div>
          <div style={{ margin: '18px 0 10px 0', color: '#333', fontWeight: 600 }}>
            ✨ 이런 분들께 강력 추천
          </div>
          <ul style={{ color: '#333', marginLeft: 20, marginBottom: 10, fontWeight: 400 }}>
            <li>반복 업무에서 해방되고 싶은 실무진</li>
            <li>AI 도입을 고민 중인 경영진</li>
            <li>경쟁자보다 한 발 앞서고 싶은 마케팅기획지</li>
          </ul>
          <div style={{ margin: '18px 0 10px 0', color: '#333', fontWeight: 600 }}>
            배우는 것들
          </div>
          <ul style={{ color: '#333', marginLeft: 20, fontWeight: 400 }}>
            <li>클로드 MCP 기초부터 고급까지</li>
            <li>부동산 실무 맞춤형 Claude + MCP 활용법</li>
          </ul>
        </div>
        <a
          href="https://tally.so/r/mBYBlR"
          target="_blank"
          rel="noopener noreferrer"
          className="kg-btn-accent"
          style={{
            fontSize: '1.2rem',
            padding: '18px 40px',
            backgroundColor: 'white',
            color: '#F26922',
            border: '2px solid white',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            fontWeight: 700
          }}
        >
          🎉 지금 바로 웨비나 신청하기
        </a>
        <div style={{
          marginTop: '20px',
          fontSize: '0.9rem',
          opacity: 0.8
        }}>
          * 선착순 마감되므로 서둘러 신청해주세요!
        </div>
      </div>
    </div>
  );

  return (
    <section className="section">
      <WebinarCard />
    </section>
  );
};

export default WebinarBanner; 