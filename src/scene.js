export function init() {
    let yOffset = 0; // window.pageYOffset 대신 사용할 변수
    let prevScrollHeight = 0; // 현재 스크롤위치보다 이전에 위치한 섹션들의 높이 합
    let currentScene = 0; // 현재 활성화된 씬(section)
    
    const sceneInfo = [
        {
            type: 'sticky',
            heightNum: 5, // 브라우저의 높이의 5배로 scrollHeight 세팅; device 상관없이 배수로
            scrollHeight: 0, // 각 구간의 스크롤 높이
            objs: {
                container: document.querySelector('#scroll-section-0')
            }
        },
        {
            type: 'normal',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-1')
            }
        },
        {
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-2')
            }
        },
        {
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-3')
            }
        }
    ];

    function setLayout() {
        for (let i = 0; i < sceneInfo.length; i++) {
            // 섹션의 스크롤 높이 지정
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            // 실제 element에 높이값 세팅
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }

        yOffset = window.scrollY;
        let totalScrollHeight = 0;
        for (let i = 0; i < sceneInfo.length; i++) {
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if (totalScrollHeight >= yOffset) {
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id', `show-scene-${currentScene}`);
    }

    function scrollLoop() {
        prevScrollHeight = 0;
        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }

        if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
            if (currentScene >= sceneInfo.length - 1) return;
            currentScene++;
            document.body.setAttribute('id', `show-scene-${currentScene}`);
        }
        if (yOffset < prevScrollHeight) {
            if (currentScene === 0) return; // yOffset 음수 방지
            currentScene--;
            document.body.setAttribute('id', `show-scene-${currentScene}`);
        }
    }

    window.addEventListener('scroll', () => {
        yOffset = window.scrollY;
        scrollLoop();
    });
    window.addEventListener('load', setLayout);
    window.addEventListener('resize', setLayout);
}