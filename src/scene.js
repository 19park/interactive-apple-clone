export function init() {
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
    }

    window.addEventListener('resize', setLayout);

    setLayout();
}