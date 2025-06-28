import React, { useRef } from 'react';

const PodcastSection: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  // 실제 PDF 파일명으로 수정 (큰따옴표 사용)
  const pdfFileName = "【 CEO's Digest 】  Weekly Report _ 2025.06.16 (n.410).pdf";
  // 실제 MP3 파일명으로 수정
  const mp3FileName = 'cd411.mp3';

  const handlePdfDownload = () => {
    const link = document.createElement('a');
    link.href = `/pdf/${encodeURIComponent(pdfFileName)}`;
    link.download = pdfFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section">
      <div style={{
        textAlign: 'center',
        marginBottom: '20px',
        fontWeight: 600,
        fontSize: '1.2rem',
        color: '#F26922'
      }}>
        MARKET PULSE<br />
        <span style={{ color: '#333', fontWeight: 400, fontSize: '1rem' }}>
          한 주간의 시장·업계·정책 트렌드 분석
        </span>
      </div>
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '30px',
        borderRadius: '12px',
        marginBottom: '20px'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '15px',
          color: '#333'
        }}>
          CEO's Digest (No. 411)
        </h3>
        <p style={{
          fontSize: '1rem',
          color: '#666',
          marginBottom: '25px',
          lineHeight: '1.6'
        }}>
          주간 부동산 시장, 업계, 정책동향
        </p>
        <div style={{
          marginBottom: '20px'
        }}>
          <audio
            ref={audioRef}
            controls
            style={{
              width: '100%',
              height: '50px'
            }}
            src={`/pod/${encodeURIComponent(mp3FileName)}`}
          >
            브라우저가 오디오 재생을 지원하지 않습니다.
          </audio>
        </div>
        <div style={{
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={handlePdfDownload}
            className="kg-btn-accent"
            style={{
              backgroundColor: '#dc3545'
            }}
          >
            📄 PDF 다운로드
          </button>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection; 