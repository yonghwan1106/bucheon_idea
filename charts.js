// 차트 생성
document.addEventListener('DOMContentLoaded', function() {
    // 기술 인프라 레이더 차트
    const techCtx = document.getElementById('techRadarChart');
    if (techCtx) {
        new Chart(techCtx.getContext('2d'), {
            type: 'radar',
            data: {
                labels: ['데이터 통합', '인증 시스템', 'AI 활용', '모바일 중심성', '시스템 개방성'],
                datasets: [
                    {
                        label: '에스토니아',
                        data: [90, 85, 75, 70, 95],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        pointBackgroundColor: 'rgba(54, 162, 235, 1)'
                    },
                    {
                        label: '덴마크',
                        data: [85, 90, 80, 85, 80],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        pointBackgroundColor: 'rgba(255, 99, 132, 1)'
                    },
                    {
                        label: '서울시',
                        data: [80, 75, 85, 80, 85],
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        pointBackgroundColor: 'rgba(75, 192, 192, 1)'
                    },
                    {
                        label: '부천시 원스톱',
                        data: [85, 85, 95, 90, 85],
                        backgroundColor: 'rgba(153, 102, 255, 0.3)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        pointBackgroundColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 50,
                        suggestedMax: 100
                    }
                }
            }
        });
    }
    
    // UX 레이더 차트
    const uxCtx = document.getElementById('uxRadarChart');
    if (uxCtx) {
        new Chart(uxCtx.getContext('2d'), {
            type: 'radar',
            data: {
                labels: ['서비스 통합도', '직관성', '접근성', '개인화', '다국어 지원'],
                datasets: [
                    {
                        label: '에스토니아',
                        data: [95, 85, 70, 75, 60],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        pointBackgroundColor: 'rgba(54, 162, 235, 1)'
                    },
                    {
                        label: '덴마크',
                        data: [90, 95, 90, 85, 75],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        pointBackgroundColor: 'rgba(255, 99, 132, 1)'
                    },
                    {
                        label: '서울시',
                        data: [75, 70, 70, 65, 65],
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        pointBackgroundColor: 'rgba(75, 192, 192, 1)'
                    },
                    {
                        label: '부천시 원스톱',
                        data: [85, 90, 95, 90, 90],
                        backgroundColor: 'rgba(153, 102, 255, 0.3)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        pointBackgroundColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 50,
                        suggestedMax: 100
                    }
                }
            }
        });
    }
    
    // 거버넌스 레이더 차트
    const governanceCtx = document.getElementById('governanceRadarChart');
    if (governanceCtx) {
        new Chart(governanceCtx.getContext('2d'), {
            type: 'radar',
            data: {
                labels: ['의사결정 구조', '시민 참여', '데이터 주권', '부서 간 협업', '정책 결정 투명성'],
                datasets: [
                    {
                        label: '에스토니아',
                        data: [95, 75, 95, 85, 85],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        pointBackgroundColor: 'rgba(54, 162, 235, 1)'
                    },
                    {
                        label: '덴마크',
                        data: [85, 90, 90, 85, 95],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        pointBackgroundColor: 'rgba(255, 99, 132, 1)'
                    },
                    {
                        label: '서울시',
                        data: [80, 95, 75, 70, 75],
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        pointBackgroundColor: 'rgba(75, 192, 192, 1)'
                    },
                    {
                        label: '부천시 원스톱',
                        data: [90, 85, 85, 95, 85],
                        backgroundColor: 'rgba(153, 102, 255, 0.3)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        pointBackgroundColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 50,
                        suggestedMax: 100
                    }
                }
            }
        });
    }
    
    // 포용성 레이더 차트
    const inclusionCtx = document.getElementById('inclusionRadarChart');
    if (inclusionCtx) {
        new Chart(inclusionCtx.getContext('2d'), {
            type: 'radar',
            data: {
                labels: ['고령자 접근성', '장애인 접근성', '다국어 지원', '디지털 리터러시', '지원 프로그램'],
                datasets: [
                    {
                        label: '에스토니아',
                        data: [70, 80, 65, 90, 75],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        pointBackgroundColor: 'rgba(54, 162, 235, 1)'
                    },
                    {
                        label: '덴마크',
                        data: [85, 95, 85, 95, 90],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        pointBackgroundColor: 'rgba(255, 99, 132, 1)'
                    },
                    {
                        label: '서울시',
                        data: [70, 75, 75, 65, 60],
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        pointBackgroundColor: 'rgba(75, 192, 192, 1)'
                    },
                    {
                        label: '부천시 원스톱',
                        data: [95, 95, 90, 85, 95],
                        backgroundColor: 'rgba(153, 102, 255, 0.3)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        pointBackgroundColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 50,
                        suggestedMax: 100
                    }
                }
            }
        });
    }
    
    // 포지셔닝 차트
    const positioningCtx = document.getElementById('positioningChart');
    if (positioningCtx) {
        new Chart(positioningCtx.getContext('2d'), {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: '에스토니아',
                        data: [{x: 95, y: 65}],
                        backgroundColor: 'rgba(54, 162, 235, 1)',
                        pointRadius: 10,
                        pointHoverRadius: 12
                    },
                    {
                        label: '덴마크',
                        data: [{x: 80, y: 90}],
                        backgroundColor: 'rgba(255, 99, 132, 1)',
                        pointRadius: 10,
                        pointHoverRadius: 12
                    },
                    {
                        label: '서울시',
                        data: [{x: 85, y: 70}],
                        backgroundColor: 'rgba(75, 192, 192, 1)',
                        pointRadius: 10,
                        pointHoverRadius: 12
                    },
                    {
                        label: '부천시 원스톱',
                        data: [{x: 90, y: 85}],
                        backgroundColor: 'rgba(153, 102, 255, 1)',
                        pointRadius: 15,
                        pointHoverRadius: 17
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: '기술 혁신성',
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        },
                        min: 50,
                        max: 100
                    },
                    y: {
                        title: {
                            display: true,
                            text: '사용자 경험',
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        },
                        min: 50,
                        max: 100
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label;
                            }
                        }
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
});
