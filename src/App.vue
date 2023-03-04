<script setup>
import {onMounted} from "vue";
import {init} from "./scene.js";
import Header from "@/components/Header.vue";

onMounted(init);
</script>

<template>
  <div class="container">
    <Header />

    <section class="scroll-section" id="scroll-section-0">
      <h1>AirUpbox Pro</h1>

      <div class="sticky-elem sticky-elem-canvas">
        <canvas id="video-canvas-0" width="1920" height="1080"></canvas>
      </div>
      <div class="sticky-elem main-message a">
        <p>업박스는<br/>정확하게 측정합니다.</p>
      </div>
      <div class="sticky-elem main-message b">
        <p>업박스는<br/>청결하게 관리합니다.</p>
      </div>
      <div class="sticky-elem main-message c">
        <p>업박스는<br/>실시간 데이터를 제공합니다.</p>
      </div>
      <div class="sticky-elem main-message d">
        <p>업박스는<br/>빠르게 응대합니다.</p>
      </div>
    </section>
    <section class="scroll-section" id="scroll-section-1">
      <p class="description">
        <strong>보통 스크롤 영역</strong>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est ipsa minima, eligendi error cum vel dolorum pariatur officia facilis ipsam voluptatibus ad quasi porro quod quisquam quidem tempora accusantium accusamus, quaerat aliquam velit exercitationem incidunt? Id vitae quisquam saepe quasi accusantium tempore enim! Aperiam dolorum a vero repellat dolor, inventore ab odit totam molestias expedita? Enim quia dolor maiores veniam ea! Quam illo, est incidunt ipsa reiciendis modi quisquam reprehenderit fuga velit dolorem odit sequi autem blanditiis, ullam commodi quibusdam. Accusamus repellat aperiam quis neque laudantium, dignissimos hic nisi magnam praesentium enim beatae sint architecto cum numquam inventore rerum animi sed nostrum quae delectus, voluptas molestiae placeat aliquid! Vel quaerat error officiis magnam dolorum iste aspernatur at est! Quo, consequuntur? Reiciendis, dolor. Quo at cupiditate in iure obcaecati voluptatum vel ea! Ab vel harum facere hic fuga ducimus sapiente dolore dolorem, nobis sint perferendis cumque esse! Omnis fugiat sint error laborum eveniet labore nam ducimus quisquam in repudiandae impedit excepturi dignissimos tenetur libero placeat rerum maxime tempore, aut nihil. Qui, quam? Voluptate fuga possimus itaque quas nesciunt iste, facilis mollitia illo qui placeat temporibus inventore obcaecati. Recusandae, sequi dignissimos in natus eum maiores dolorem, deleniti nobis accusantium, aspernatur beatae.
      </p>
    </section>
    <section class="scroll-section" id="scroll-section-2">
      <div class="sticky-elem sticky-elem-canvas">
        <canvas id="video-canvas-1" width="1920" height="1080"></canvas>
      </div>

      <div class="sticky-elem main-message a">
        <p>
          <small>폐기물 관리의</small>
          새로운 기준
        </p>
      </div>
      <div class="sticky-elem desc-message b">
        <p>
          폐기물 관리 원스톱솔루션, 업박스.. 폐기물이 배출되는 사업장에서부터 마지막 처리까지 전 과정을 관리합니다. 폐기물 산업과 고객의 니즈에 대한 이해를 바탕으로 각 사업장에 맞는 최적의 폐기물 관리 솔루션 제공합니다.
        </p>
        <div class="pin"></div>
      </div>
      <div class="sticky-elem desc-message c">
        <p>
          정확한 측량 눈금이 있는 전용 용기를 통해 배출량 확인합니다. 2차 검증을 위해 AI 부피 측정 기술을 개발 중입니다.
        </p>
        <div class="pin"></div>
      </div>
    </section>
    <section class="scroll-section" id="scroll-section-3">
      <p class="mid-message">
        <strong>폐기물 배출 환경 개선</strong>
        쾌적한 환경을 조성하고<br/>
        양질의 폐자원을 배출합니다.
      </p>
      <canvas class="image-blend-canvas" width="1920" height="1080"></canvas>
      <p class="canvas-caption">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est ipsa minima, eligendi error cum vel dolorum pariatur officia facilis ipsam voluptatibus ad quasi porro quod quisquam quidem tempora accusantium accusamus, quaerat aliquam velit exercitationem incidunt? Id vitae quisquam saepe quasi accusantium tempore enim! Aperiam dolorum a vero repellat dolor, inventore ab odit totam molestias expedita? Enim quia dolor maiores veniam ea! Quam illo, est incidunt ipsa reiciendis modi quisquam reprehenderit fuga velit dolorem odit sequi autem blanditiis, ullam commodi quibusdam. Accusamus repellat aperiam quis neque laudantium, dignissimos hic nisi magnam praesentium enim beatae sint architecto cum numquam inventore rerum animi sed nostrum quae delectus, voluptas molestiae placeat aliquid! Vel quaerat error officiis magnam dolorum iste aspernatur at est! Quo, consequuntur? Reiciendis, dolor. Quo at cupiditate in iure obcaecati voluptatum vel ea! Ab vel harum facere hic fuga ducimus sapiente dolore dolorem, nobis sint perferendis cumque esse! Omnis fugiat sint error laborum eveniet labore nam ducimus quisquam in repudiandae impedit excepturi dignissimos tenetur libero placeat rerum maxime tempore, aut nihil. Qui, quam? Voluptate fuga possimus itaque quas nesciunt iste, facilis mollitia illo qui placeat temporibus inventore obcaecati. Recusandae, sequi dignissimos in natus eum maiores dolorem, deleniti nobis accusantium, aspernatur beatae.
      </p>
    </section>

    <footer class="footer">
      2023, reco development
    </footer>
  </div>
</template>

<style scoped lang="scss">
.scroll-section {
  padding-top: 50vh;

  /**
    기본적으로 보이지않고, body의 id에 따라서 스크롤이 어떤섹션에 위치했을때 보일지 정한다.
   */
  .sticky-elem {
    display: none;
    position: fixed;
    left: 0;
    width: 100%;

    &.sticky-elem-canvas {
      top: 0;
      height: 100%;

      canvas {
        position: absolute;
        top: 50%;
        left: 50%;
      }
    }
  }

  .main-message {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 35vh;
    margin: 5px 0;
    height: 3em;
    font-size: 2.5rem;
    opacity: 0;

    p {
      font-weight: bold;
      text-align: center;
      line-height: 1.2;
    }

    small {
      display: block;
      font-size: 1.2rem;
      margin-bottom: .5em;
    }
  }

  .description {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1rem;
    font-size: 1.2rem;
    color: #888;

    strong {
      float: left;
      margin-right: .2em;
      font-size: 3rem;
      color: rgb(29,29,31);
    }
  }

  .desc-message {
    width: 45%;
    font-weight: bold;
    opacity: 0;

    .pin {
      width: 1px;
      height: 100px;
      background-color: rgb(29,29,31);
    }
  }

  .mid-message {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1rem;
    font-size: 2rem;
    color: #888;

    strong {
      display: block;
      color: rgb(29,29,31);
    }
  }

  .canvas-caption {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1rem;
    font-size: 1.2rem;
    color: #888;
  }


  &#scroll-section-0 {
    h1 {
      position: relative;
      top: -10vh;
      z-index: 5;
      font-size: 4rem;
      text-align: center;
    }
  }
  &#scroll-section-2 {
    .main-message {
      font-size: 3.5rem;
    }
    .b {
      top: 10%;
      left: 40%;
    }
    .c {
      top: 15%;
      left: 45%;
    }
  }
  &#scroll-section-3 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

#show-scene-0 #scroll-section-0 .sticky-elem,
#show-scene-1 #scroll-section-1 .sticky-elem,
#show-scene-2 #scroll-section-2 .sticky-elem,
#show-scene-3 #scroll-section-3 .sticky-elem {
  display: block;
  will-change: transform, opacity;
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7rem;
  background-color: #191F28;
  color: #fff;
}


/**
  1024이상이면 적용되는 스타일
 */
@media (min-width: 1024px) {
  .scroll-section {
    .main-message {
      font-size: 4vw;

      small {
        font-size: 1.5vw;
      }
    }
    .description {
      font-size: 2rem;

      strong {
        font-size: 6rem;
      }
    }
    .desc-message {
      width: 20%;
    }
    .mid-message {
      font-size: 4vw;
    }
    .canvas-caption {
      margin-top: -8rem;
      padding: 0;
      font-size: 2rem;
    }


    &#scroll-section-0 {
      h1 {
        font-size: 9vw;
      }
    }
    &#scroll-section-2 {
      .main-message {
        font-size: 6vw;
      }
      .b {
        top: 20%;
        left: 53%;
      }
      .c {
        left: 55%;
      }
    }
  }
}
</style>
