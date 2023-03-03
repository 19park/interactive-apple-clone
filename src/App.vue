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

      <div class="sticky-elem main-message">
        <p>온전히 빠져들게 하는<br/>최고급 박스</p>
      </div>
      <div class="sticky-elem main-message">
        <p>사업장 음식물 쓰레기<br/>수거 서비스</p>
      </div>
      <div class="sticky-elem main-message">
        <p>무심코 버리고 있는<br/>음식물 쓰레기</p>
      </div>
      <div class="sticky-elem main-message">
        <p>업박스는<br/>믿을 수 있습니다</p>
      </div>
    </section>
    <section class="scroll-section" id="scroll-section-1">
      <p class="description">
        <strong>보통 스크롤 영역</strong>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est ipsa minima, eligendi error cum vel dolorum pariatur officia facilis ipsam voluptatibus ad quasi porro quod quisquam quidem tempora accusantium accusamus, quaerat aliquam velit exercitationem incidunt? Id vitae quisquam saepe quasi accusantium tempore enim! Aperiam dolorum a vero repellat dolor, inventore ab odit totam molestias expedita? Enim quia dolor maiores veniam ea! Quam illo, est incidunt ipsa reiciendis modi quisquam reprehenderit fuga velit dolorem odit sequi autem blanditiis, ullam commodi quibusdam. Accusamus repellat aperiam quis neque laudantium, dignissimos hic nisi magnam praesentium enim beatae sint architecto cum numquam inventore rerum animi sed nostrum quae delectus, voluptas molestiae placeat aliquid! Vel quaerat error officiis magnam dolorum iste aspernatur at est! Quo, consequuntur? Reiciendis, dolor. Quo at cupiditate in iure obcaecati voluptatum vel ea! Ab vel harum facere hic fuga ducimus sapiente dolore dolorem, nobis sint perferendis cumque esse! Omnis fugiat sint error laborum eveniet labore nam ducimus quisquam in repudiandae impedit excepturi dignissimos tenetur libero placeat rerum maxime tempore, aut nihil. Qui, quam? Voluptate fuga possimus itaque quas nesciunt iste, facilis mollitia illo qui placeat temporibus inventore obcaecati. Recusandae, sequi dignissimos in natus eum maiores dolorem, deleniti nobis accusantium, aspernatur beatae.
      </p>
    </section>
    <section class="scroll-section" id="scroll-section-2">
      <div class="sticky-elem main-message">
        <p>
          <small>편안한 촉감</small>
          박스와 하나 되다
        </p>
      </div>
      <div class="sticky-elem desc-message">
        <p>
          폐기물 관리 원스톱솔루션, 업박스.. 폐기물이 배출되는 사업장에서부터 마지막 처리까지 전 과정을 관리합니다. 폐기물 산업과 고객의 니즈에 대한 이해를 바탕으로 각 사업장에 맞는 최적의 폐기물 관리 솔루션 제공합니다.
        </p>
        <div class="pin"></div>
      </div>
      <div class="sticky-elem desc-message">
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

  .main-message {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3em;
    font-size: 2.5rem;

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
    width: 50%;
    font-weight: bold;

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
      font-size: 4rem;
      text-align: center;
    }
  }
  &#scroll-section-2 {
    .main-message {
      font-size: 3.5rem;
    }
  }

  /**
    기본적으로 보이지않고, body의 id에 따라서 스크롤이 어떤섹션에 위치했을때 보일지 정한다.
   */
  .sticky-elem {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  #show-scene-0 #scroll-section-0 .sticky-elem,
  #show-scene-1 #scroll-section-1 .sticky-elem,
  #show-scene-2 #scroll-section-2 .sticky-elem,
  #show-scene-3 #scroll-section-3 .sticky-elem {
    display: block;
  }
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
    &#scroll-section-0 {
      h1 {
        font-size: 9vw;
      }
    }
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
      font-size: 2rem;
    }

    &#scroll-section-2 {
      .main-message {
        font-size: 6vw;
      }
    }
  }
}
</style>
