document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider 기능 구현
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.slide-indicator');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    let currentSlide = 0;
    let slideInterval;

    // 슬라이드 초기화 (첫 번째 슬라이드 활성화)
    setTimeout(() => {
        slides[0].classList.add('active');
        indicators[0].classList.add('opacity-100');
        indicators[0].classList.remove('opacity-50');
    }, 100);

    // 슬라이드 변경 함수
    function goToSlide(index) {
        // 현재 활성화된 슬라이드와 인디케이터 비활성화
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('opacity-100');
        indicators[currentSlide].classList.add('opacity-50');
        
        // 새 슬라이드와 인디케이터 활성화
        currentSlide = (index + slides.length) % slides.length;
        
        // 약간의 지연 후 새 슬라이드 활성화 (더 부드러운 전환을 위해)
        setTimeout(() => {
            slides[currentSlide].classList.add('active');
        }, 50);
        
        indicators[currentSlide].classList.add('opacity-100');
        indicators[currentSlide].classList.remove('opacity-50');
        
        // 자동 슬라이드 재설정
        resetInterval();
    }

    // 다음 슬라이드로 이동
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    // 이전 슬라이드로 이동
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // 자동 슬라이드 간격 재설정
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 6000); // 6초마다 슬라이드 변경
    }

    // 슬라이드 인디케이터 클릭 이벤트
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            // data-slide 속성이 있으면 그 값을 사용, 없으면 현재 인덱스 사용
            const slideIndex = indicator.hasAttribute('data-slide') 
                ? parseInt(indicator.getAttribute('data-slide')) 
                : index;
            goToSlide(slideIndex);
        });
    });

    // 이전, 다음 버튼 이벤트
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // 자동 슬라이드 설정
    resetInterval();

    // 모바일 앱 캐러셀 관련 코드
    const carouselDots = document.querySelectorAll('.carousel-dot');
    const mainAppScreenshot = document.getElementById('main-app-screenshot');

    if (carouselDots.length > 0 && mainAppScreenshot) {
        carouselDots.forEach(dot => {
            dot.addEventListener('click', function() {
                // 모든 닷에서 활성 상태 제거
                carouselDots.forEach(d => {
                    d.classList.remove('bg-blue-600');
                    d.classList.add('bg-gray-300');
                });
                
                // 클릭한 닷 활성화
                this.classList.remove('bg-gray-300');
                this.classList.add('bg-blue-600');
                
                // 이미지 소스 변경
                const imgSrc = this.getAttribute('data-src');
                if (imgSrc) {
                    // 이미지 파일인지 HTML 파일인지 확인
                    if (imgSrc.endsWith('.png') || imgSrc.endsWith('.jpg') || imgSrc.endsWith('.jpeg')) {
                        // 이미 img 태그가 있으면 src만 변경
                        if (mainAppScreenshot.tagName === 'IMG') {
                            mainAppScreenshot.src = imgSrc;
                        } else {
                            // iframe이 있으면 img로 교체
                            const parent = mainAppScreenshot.parentNode;
                            parent.innerHTML = `<img id="main-app-screenshot" src="${imgSrc}" alt="Mobile App Screen" class="w-full h-full object-cover">`;
                        }
                    } else if (imgSrc.endsWith('.html')) {
                        // HTML 파일이면 iframe으로 표시
                        const parent = mainAppScreenshot.parentNode;
                        parent.innerHTML = `<iframe id="main-app-screenshot" src="${imgSrc}" title="Mobile App Screen" class="w-full h-full border-0"></iframe>`;
                    }
                }
            });
        });
    }

    // 공감 버튼 카운터 기능
    const empathyBtn = document.getElementById('empathy-btn');
    const empathyCount = document.getElementById('empathy-count');
    
    if (empathyBtn && empathyCount) {
        empathyBtn.addEventListener('click', function() {
            let count = parseInt(empathyCount.textContent);
            count++;
            empathyCount.textContent = count;
            
            // 시각적 효과
            empathyBtn.classList.add('animate-pulse');
            setTimeout(() => {
                empathyBtn.classList.remove('animate-pulse');
            }, 1000);
        });
    }

    // 챗봇 데모 기능
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatContainer = document.getElementById('chat-container');
    const quickQuestions = document.querySelectorAll('.quick-question');

    // 채팅 메시지 보내기 함수
    function sendChatMessage(message) {
        if (!message.trim()) return;

        // 사용자 메시지 추가
        addUserMessage(message);
        
        // 입력창 비우기
        chatInput.value = '';
        
        // 봇 "입력중" 표시
        addTypingIndicator();
        
        // 봇 응답 (타이머로 지연 효과)
        setTimeout(() => {
            // 타이핑 표시 제거
            removeTypingIndicator();
            
            // 봇 응답 추가
            addBotResponse(message);
        }, 1500);
    }

    // 사용자 메시지 추가
    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'flex items-end justify-end mb-4';
        messageElement.innerHTML = `
            <div class="user-message chat-message rounded-lg p-3 max-w-md shadow-sm">
                <p class="text-white">${message}</p>
                <div class="text-xs text-white text-opacity-80 mt-1">지금</div>
            </div>
        `;
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // 봇 "입력중" 표시 추가
    function addTypingIndicator() {
        const typingElement = document.createElement('div');
        typingElement.className = 'flex items-start mb-4 typing-container';
        typingElement.innerHTML = `
            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <i class="fas fa-robot text-blue-600"></i>
            </div>
            <div class="bot-message chat-message rounded-lg p-3 shadow-sm">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        chatContainer.appendChild(typingElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // 봇 "입력중" 표시 제거
    function removeTypingIndicator() {
        const typingContainer = document.querySelector('.typing-container');
        if (typingContainer) {
            typingContainer.remove();
        }
    }

    // 봇 응답 추가 (간단한 규칙 기반 응답)
    function addBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        let response = '';
        
        // 간단한 규칙 기반 응답
        if (lowerMessage.includes('전입신고') || lowerMessage.includes('이사')) {
            response = '전입신고는 이사 후 14일 이내에 하셔야 합니다. 부천 스마트 원스톱 플랫폼에서는 온라인으로 간편하게 신청 가능하며, 구청 방문 시에는 신분증만 지참하시면 됩니다. 가장 가까운 구청은 위치 기반으로 안내해 드릴 수 있습니다.';
        } else if (lowerMessage.includes('사업자') || lowerMessage.includes('창업')) {
            response = '사업자등록은 사업 개시일로부터 20일 이내에 하셔야 합니다. 부천 스마트 원스톱 플랫폼에서는 원스톱으로 영업신고와 사업자등록을 한 번에 진행할 수 있습니다. 업종별 필요 서류와 절차를 안내해 드릴까요?';
        } else if (lowerMessage.includes('복지') || lowerMessage.includes('혜택')) {
            response = '부천시에서는 다양한 복지 혜택을 제공하고 있습니다. 연령, 소득, 가구 상황에 따라 맞춤형 혜택을 안내해 드립니다. 간단한 정보 입력 후 AI가 받을 수 있는 모든 혜택을 찾아드립니다.';
        } else if (lowerMessage.includes('위치') || lowerMessage.includes('구청') || lowerMessage.includes('어디')) {
            response = '현재 위치를 공유해 주시면 가장 가까운 구청과 예상 소요시간, 현재 대기 인원을 안내해 드립니다. 원미구청, 소사구청, 오정구청 중 가장 혼잡도가 낮은 곳으로 안내해 드릴까요?';
        } else if (lowerMessage.includes('민원') || lowerMessage.includes('처리') || lowerMessage.includes('현황')) {
            response = '민원 처리 현황은 접수번호나 휴대폰 인증을 통해 확인하실 수 있습니다. 처리 단계별로 알림 서비스도 제공합니다. 확인하실 접수번호를 알려주시겠어요?';
        } else if (lowerMessage.includes('온라인') || lowerMessage.includes('신청')) {
            response = '부천 스마트 원스톱 플랫폼에서는 90% 이상의 민원을 온라인으로 처리할 수 있습니다. 주민등록, 여권, 각종 증명서 발급, 사업자 관련 업무, 복지서비스 신청 등이 가능합니다. 구체적인 서비스를 찾으시나요?';
        } else {
            response = '부천 스마트 원스톱 플랫폼 AI 상담사입니다. 어떤 행정 서비스에 대해 알고 싶으신가요? 전입신고, 사업자등록, 복지혜택, 구청 위치 안내 등에 대해 질문해주세요.';
        }

        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        const messageElement = document.createElement('div');
        messageElement.className = 'flex items-start mb-6';
        messageElement.innerHTML = `
            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <i class="fas fa-robot text-blue-600"></i>
            </div>
            <div class="bot-message chat-message rounded-lg p-3 shadow-sm max-w-md">
                <p class="text-gray-800">${response}</p>
                <div class="text-xs text-gray-500 mt-2">${time}</div>
            </div>
        `;
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // 채팅 입력창 엔터 키 이벤트
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendChatMessage(this.value);
            }
        });
    }

    // 전송 버튼 클릭 이벤트
    if (sendBtn) {
        sendBtn.addEventListener('click', function() {
            sendChatMessage(chatInput.value);
        });
    }

    // 빠른 질문 버튼 클릭 이벤트
    if (quickQuestions) {
        quickQuestions.forEach(btn => {
            btn.addEventListener('click', function() {
                const question = this.getAttribute('data-question');
                if (question) {
                    sendChatMessage(question);
                }
            });
        });
    }

    // 언어 전환 기능
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const currentLang = this.textContent.trim();
            if (currentLang.includes('한국어')) {
                this.innerHTML = '<i class="fas fa-globe mr-2"></i>English';
            } else {
                this.innerHTML = '<i class="fas fa-globe mr-2"></i>한국어';
            }
        });
    }

    // 모바일 메뉴 토글 기능
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 스크롤 시 네비게이션 활성화 상태 변경
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    function setActiveNavLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-blue-600');
            link.classList.add('text-gray-700');
            
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.remove('text-gray-700');
                link.classList.add('text-blue-600');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNavLink);
    setActiveNavLink(); // 초기 로드 시 실행
});
